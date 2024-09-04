import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Routers from "@/routers/routers";
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
