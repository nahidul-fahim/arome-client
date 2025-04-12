export const getSingleParam = (param: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
};

export const getAllParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(searchParams.entries());
};

// that was suggested by cursor
export const setUrlParam = (key: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);
    return searchParams.toString();
};

// that is from niche finder
// export const setUrlParam = (key: string, value: string) => {
//     const url = new URL(window.location.href);
//     url.searchParams.set(key, value);
//     window.history.pushState({}, "", url);
// };

export const setUrlParams = (params: Record<string, string>) => {
    const url = new URL(window.location.href);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
    window.history.pushState({}, "", url);
};

export const removeUrlParam = (key: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(key);
    window.history.pushState({}, "", url);
};

export const clearUrlParams = () => {
    const url = new URL(window.location.href);
    url.searchParams.forEach((value, key) => {
        url.searchParams.delete(key);
    });
    window.history.pushState({}, "", url);
};
