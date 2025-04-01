import Link from "next/link";
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
      image: "/banner/skincare_banner.jpg",
      alt: "Luxury skincare collection",
      title: "Luxury Skincare",
      description:
        "Discover our collection of premium skincare products for radiant skin.",
      link: "/category/skincare",
      buttonText: "Shop Now",
    },
    {
      image: "/banner/fragrance_banner.jpg",
      alt: "Designer fragrance collection",
      title: "Designer Fragrances",
      description:
        "Explore our curated collection of luxury perfumes from top designers.",
      link: "/category/perfumes",
      buttonText: "Explore",
    },
    {
      image: "/banner/makeup_banner.jpg",
      alt: "Premium Makeup",
      title: "Premium Makeup",
      description:
        "Elevate your beauty routine with our collection of high-performance makeup.",
      link: "/category/makeup",
      buttonText: "Shop Now",
    },
  ];

  return (
    <section className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="md:basis-1/1">
              <div
                className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.image})` }}
                role="img"
                aria-label={banner.alt}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-primary/40 to-white/30" />
                <div className="container mx-auto min-h-full relative px-4 sm:px-6">
                  <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 sm:gap-3 md:gap-4 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
                      {banner.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg max-w-full sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[45%] mb-2 sm:mb-4 text-foreground">
                      {banner.description}
                    </p>
                    <Button asChild variant="secondary" size="default">
                      <Link href={banner.link}>{banner.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-transparent border-none text-black hidden sm:flex" />
        <CarouselNext className="right-2 bg-transparent border-none text-black hidden sm:flex" />
      </Carousel>
    </section>
  );
}
