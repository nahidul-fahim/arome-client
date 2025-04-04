/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ data }: { data: any }) => {
  const {
    id,
    isNew,
    isSale,
    image,
    name,
    category,
    rating,
    brand,
    reviewCount,
    description,
    price,
    originalPrice,
  } = data;

  return (
    <div
      key={id}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-background"
    >
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute left-2 top-2 z-10 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-blue-600 hover:bg-blue-600 text-white transition-all duration-300">
              New
            </Badge>
          )}
          {isSale && <Badge variant="destructive">Sale</Badge>}
        </div>

        <Link href={`/product/${id}`}>
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="absolute right-2 top-2 z-10">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Add to wishlist"
            title="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <Link href={`/category/${category?.toLowerCase()}`}>
            <span className="text-xs text-muted-foreground hover:text-primary">
              {category}
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="text-xs font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">
              ({reviewCount})
            </span>
          </div>
        </div>

        <Link href={`/product/${id}`} className="flex-1">
          <h3 className="font-medium">{name}</h3>
          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
            {description}
          </p>
        </Link>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-medium">${price?.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice?.toFixed(2)}
              </span>
            )}
          </div>
          <Button size="sm" className="h-8 w-8 rounded-full p-0">
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>

        <div className="mt-2">
          <Link href={`/brand/${brand.toLowerCase().replace(/\s+/g, "-")}`}>
            <span className="text-xs text-muted-foreground hover:text-foreground">
              by {brand}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
