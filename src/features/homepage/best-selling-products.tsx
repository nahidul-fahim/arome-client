import { mockProducts } from "../product/product-mock-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/custom-cards/product-card";

export default function BestSellingProducts() {
  const bestSellingProducts = mockProducts.filter((product) => product.isSale);

  return (
    <section className="my-20 mx-auto py-10 bg-muted/50">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Bestselling Products
          </h2>
          <p className="text-muted-foreground">
            Our most popular beauty products, loved by customers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {bestSellingProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
