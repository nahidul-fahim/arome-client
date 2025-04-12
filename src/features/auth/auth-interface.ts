export interface LoginResponse {
    AccessToken: string;
    RefreshToken: string;
    IdToken: string;
    ExpiresIn: number;
    TokenType: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface RefreshTokenPayload {
    username: string;
    refreshToken: string;
}

export interface RefreshTokenResponse {
    AuthenticationResult: {
        AccessToken: string;
        RefreshToken: string;
    };
}