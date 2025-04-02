import { Badge } from "@/components/ui/badge";
import { mockProducts } from "../product/product-mock-data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";

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
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border bg-background"
            >
              <div className="relative aspect-square overflow-hidden">
                {/* Product badges */}
                <div className="absolute left-2 top-2 z-10 flex flex-col gap-1">
                  {product.isNew && (
                    <Badge className="bg-blue-600 hover:bg-blue-600">New</Badge>
                  )}
                  {product.isSale && <Badge variant="destructive">Sale</Badge>}
                </div>

                {/* Product image */}
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                {/* Quick actions */}
                <div className="absolute right-2 top-2 z-10">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product info */}
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center justify-between">
                  <Link href={`/category/${product.category.toLowerCase()}`}>
                    <span className="text-xs text-muted-foreground hover:text-primary">
                      {product.category}
                    </span>
                  </Link>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <span className="text-xs font-medium">
                      {product.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviewCount})
                    </span>
                  </div>
                </div>

                <Link href={`/product/${product.id}`} className="flex-1">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                    {product.description}
                  </p>
                </Link>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-medium">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <Button size="sm" className="h-8 w-8 rounded-full p-0">
                    <ShoppingCart className="h-4 w-4" />
                    <span className="sr-only">Add to cart</span>
                  </Button>
                </div>

                <div className="mt-2">
                  <Link
                    href={`/brand/${product.brand
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <span className="text-xs text-muted-foreground hover:text-foreground">
                      by {product.brand}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
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
