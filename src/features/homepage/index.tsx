import BannerSection from "./bannerSection";
import BestSellingProducts from "./best-selling-products";
import CategoryShowcase from "./category-showcase";
import NewProducts from "./new-product";

const Homepage = () => {
  return (
    <>
      <BannerSection />
      <CategoryShowcase />
      <BestSellingProducts />
      <NewProducts />
    </>
  );
};

export default Homepage;
