import BestSelling from "./BestSelling";
import Categories from "./Categories";
import FlashSales from "./FlashSales";
import Hero from "./Hero";
import Offer from "./Offer";
import OurProduct from "./OurProduct";
import Footer from "../../components/Footer";
import Features from "./Features";
import Header from "../../components/Header";

const Landing = () => {
  return (
    <>
      <Header />
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
};

export default Landing;
