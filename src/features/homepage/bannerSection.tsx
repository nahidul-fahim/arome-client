import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function BannerSection() {
  const banners = [
    {
      image: "/homepage/skin_care_banner.png",
      alt: "Luxury skincare collection",
      title: "Luxury Skincare",
      description:
        "Discover our collection of premium skincare products for radiant skin",
      link: "/category/skincare",
      buttonText: "Shop Now",
    },
    {
      image: "/images/banner/banner-2.jpg",
      alt: "Designer fragrance collection",
      title: "Designer Fragrances",
      description:
        "Explore our curated collection of luxury perfumes from top designers",
      link: "/category/perfumes",
      buttonText: "Explore",
    },
  ];

  return (
    <section>
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="md:basis-1/1">
              <div className="relative overflow-hidden">
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  width={600}
                  height={300}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white">
                  <h3 className="text-2xl font-bold md:text-3xl">
                    {banner.title}
                  </h3>
                  <p className="mt-2 max-w-xs">{banner.description}</p>
                  <Button asChild className="mt-4" variant="secondary">
                    <Link href={banner.link}>{banner.buttonText}</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  );
}
