import Footer from "../footer/footer";
import Header from "../header/main-header";

const storefront = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default storefront;
