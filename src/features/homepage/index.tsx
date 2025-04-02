import BannerSection from "./bannerSection";
import BestSellingProducts from "./best-selling-products";
import CategoryShowcase from "./category-showcase";

const Homepage = () => {
  return (
    <>
      <BannerSection />
      <CategoryShowcase />
      <BestSellingProducts />
    </>
  );
};

export default Homepage;
