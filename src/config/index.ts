const config = {
    api_base_url: process.env.NEXT_PUBLIC_API_BASE_URL,
    advanced_view_routes: ["/channels/long-form", "/channels/short-form"],
    exclude_breadcrumbs_routes: ["/profile"],
    user: {
        email: "demo-email",
        password: "demo-password",
    },
};

export default config;