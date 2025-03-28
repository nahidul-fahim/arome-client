import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BannerSection() {
  return (
    <section className="container py-8">
      <div className="grid gap-6 md:grid-cols-2">
        {/* First banner */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Luxury skincare collection"
            width={600}
            height={300}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white">
            <h3 className="text-2xl font-bold md:text-3xl">Luxury Skincare</h3>
            <p className="mt-2 max-w-xs">
              Discover our collection of premium skincare products for radiant
              skin
            </p>
            <Button asChild className="mt-4" variant="secondary">
              <Link href="/category/skincare">Shop Now</Link>
            </Button>
          </div>
        </div>

        {/* Second banner */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Designer fragrance collection"
            width={600}
            height={300}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white">
            <h3 className="text-2xl font-bold md:text-3xl">
              Designer Fragrances
            </h3>
            <p className="mt-2 max-w-xs">
              Explore our curated collection of luxury perfumes from top
              designers
            </p>
            <Button asChild className="mt-4" variant="secondary">
              <Link href="/category/perfumes">Explore</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
