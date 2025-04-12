export const formatWithHttps = (url: string) => {
    if (!url) return null;
    if (
        !url.startsWith("https://") &&
        !url.startsWith("http://") &&
        !url.startsWith("/images")
    ) {
        return `https://${url}`;
    }
    return url;
};
