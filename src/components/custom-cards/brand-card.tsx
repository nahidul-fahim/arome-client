import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { IBrand } from "@/features/brand/brand-interface";

const BrandCard = ({ data }: { data: IBrand }) => {
  const { id, name, description, image, rating, reviewCount, productCount } =
    data;

  return (
    <Card key={id} className="overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        objectFit="cover"
        width={300}
        height={300}
        className="object-cover w-full h-full rounded-t-xl"
      />
      <CardHeader className="px-4 flex flex-col justify-start items-start gap-2 mt-4">
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 pt-0 mt-5">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">
            ({reviewCount} reviews)
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {productCount} products
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-3 pb-7">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/brand/${id}`}>View Brand</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BrandCard;
