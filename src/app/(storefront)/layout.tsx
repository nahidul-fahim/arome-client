import Storefront from "@/components/layout/storefront-layout";

const StorefrontLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Storefront>
            {children}
        </Storefront>
    )
}

export default StorefrontLayout;