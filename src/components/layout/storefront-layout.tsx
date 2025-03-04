import Header from "../header/main-header";

const storefront = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default storefront;