import Footer from "./components/Footer";
import BestSelling from "./pages/BestSelling";
import Categories from "./pages/Categories";
import Features from "./pages/Features";
import FlashSales from "./pages/FlashSales";
import Hero from "./pages/Hero";
import Landing from "./pages/Landing";
import Offer from "./pages/Offer";
import OurProduct from "./pages/OurProduct";

function App() {
  return (
    <>
      <Landing />
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
      <Offer />
      <OurProduct />
      <Features />
      <Footer />
    </>
  );
}

export default App;
