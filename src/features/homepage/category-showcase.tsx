import { homepageCategories } from "@/data/homepage-data";
import Link from "next/link";

export default function CategoryShowcase() {
  const featuredCategories = homepageCategories.filter(
    (category) => category.featured
  );
  const regularCategories = homepageCategories.filter(
    (category) => !category.featured
  );

  return (
    <section className="container mx-auto my-20 px-5">
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl font-bold md:text-4xl tracking-tight">
          Shop by Category
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Explore our wide range of beauty and cosmetic products
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredCategories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group relative overflow-hidden rounded-lg"
          >
            <div
              className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-no-repeat bg-center transition-all duration-300 group-hover:transform group-hover:scale-105"
              style={{
                backgroundImage: `url(${category.image || "/placeholder.svg"})`,
                backgroundSize: "cover",
                imageRendering: "crisp-edges",
              }}
              role="img"
              aria-label={category.name}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-black/30" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground/80">
                  {category.description}
                </p>
              </div>
            </div>
          </Link>
        ))}

        {regularCategories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group relative overflow-hidden rounded-lg"
          >
            <div
              className="aspect-square w-full overflow-hidden rounded-lg bg-no-repeat bg-center transition-all duration-300 group-hover:transform group-hover:scale-105"
              style={{
                backgroundImage: `url(${category.image || "/placeholder.svg"})`,
                backgroundSize: "cover",
                imageRendering: "crisp-edges",
              }}
              role="img"
              aria-label={category.name}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-black/30" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-foreground">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground/80">
                  {category.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
