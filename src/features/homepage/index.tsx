import BannerSection from "./banner-section";
import BestSellingProducts from "./best-selling-products";
import CategoryShowcase from "./category-showcase";
import FeaturedBrands from "./featured-brands";
import NewProducts from "./new-product";

const Homepage = () => {
  return (
    <>
      <BannerSection />
      <CategoryShowcase />
      <BestSellingProducts />
      <NewProducts />
      <FeaturedBrands />
    </>
  );
};

export default Homepage;
