import BrandCard from "@/components/custom-cards/brand-card";
import { Button } from "@/components/ui/button";
import { mockFeaturedBrands } from "./homepage-mock-data";
import Link from "next/link";

const FeaturedBrands = () => {
  return (
    <section className="my-20 mx-auto py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Featured Brands
          </h2>
          <p className="text-muted-foreground">
            Discover premium products from the world&apos;s leading beauty
            brands
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mockFeaturedBrands.map((brand) => (
            <BrandCard key={brand?.id} data={brand} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/brands">View All Brands</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
