import config from "@/config";
import { RefreshTokenResponse } from "@/features/auth/auth-interface";
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { getCookie, setCookie } from "cookies-next";
// create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
    baseUrl: config.api_base_url,
    prepareHeaders: async (headers) => {
        const refreshToken = await getCookie("refreshToken");
        const accessToken = await getCookie("accessToken");

        if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);
        if (refreshToken) headers.set("X-Refresh-Token", refreshToken);

        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshToken = await getCookie("refreshToken");
                if (!refreshToken) {
                    console.warn("No refresh token found. Logging out.");
                    // TODO: Logout --------------
                    return result;
                }

                // Attempt to refresh tokens
                const refreshResult = await baseQuery(
                    {
                        url: "/auth/token",
                        method: "PUT",
                        body: { username: config.user.email, refreshToken },
                    },
                    api,
                    extraOptions,
                );

                if (refreshResult.data) {
                    const {
                        AuthenticationResult: {
                            AccessToken: accessToken,
                            RefreshToken: newRefreshToken,
                        },
                    } = refreshResult.data as RefreshTokenResponse;

                    console.info("Successfully refreshed tokens.");

                    // Save the new tokens
                    await setCookie("accessToken", accessToken);
                    await setCookie("refreshToken", newRefreshToken);

                    // Retry the original query with the new access token
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    console.error("Failed to refresh tokens. Logging out.");
                    // TODO: Logout --------------
                    return result;
                }
            } finally {
                // Release the mutex
                release();
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

export default baseQueryWithReauth;