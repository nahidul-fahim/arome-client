import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Perfumes",
    description: "Designer & niche fragrances",
    image: "/category/perfume.jpg",
    href: "/category/perfumes",
    featured: true,
  },
  {
    id: 2,
    name: "Skincare",
    description: "Science-backed formulations",
    image: "/category/skincare.jpg",
    href: "/category/skincare",
    featured: true,
  },
  {
    id: 3,
    name: "Makeup",
    description: "Color cosmetics & tools",
    image: "/category/makeup.jpg",
    href: "/category/makeup",
    featured: true,
  },
  {
    id: 4,
    name: "Hair Care",
    description: "Shampoos, treatments & styling",
    image: "/category/haircare.jpg",
    href: "/category/hair-care",
    featured: false,
  },
  {
    id: 5,
    name: "Body Care",
    description: "Lotions, scrubs & more",
    image: "/category/bodyCare.jpg",
    href: "/category/body-care",
    featured: false,
  },
  {
    id: 6,
    name: "Men's Grooming",
    description: "Skincare, fragrances & more",
    image: "/category/menGrooming.jpg",
    href: "/category/mens-grooming",
    featured: false,
  },
];

export default function CategoryShowcase() {
  const featuredCategories = categories.filter((category) => category.featured);
  const regularCategories = categories.filter((category) => !category.featured);

  return (
    <section className="container mx-auto py-20">
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl font-bold md:text-4xl">Shop by Category</h2>
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
                <h3 className="text-2xl font-bold text-muted-foreground">
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
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-black/30" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-muted-foreground">
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
