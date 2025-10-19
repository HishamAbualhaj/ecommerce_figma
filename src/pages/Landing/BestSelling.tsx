import Heading from "../../components/ui/Heading";
import product_1 from "../../assets/product_1.png";
import product_2 from "../../assets/product_2.png";
import product_3 from "../../assets/product_3.png";
import ProductCard from "../../components/ui/ProductCard";
import Button from "../../components/ui/Button";

const BestSelling = () => {
  const products = [
    {
      title: "AK-900 Wired Keyboard",
      price: 1160,
      discount: 35,
      stars: 4,
      reviews: 75,
      image: product_2,
      isFavorite: false,
      badget: "Discount",
    },
    {
      title: "IPS LCD Gaming Monitor",
      price: 400,
      discount: 30,
      stars: 5,
      reviews: 99,
      image: product_3,
      isFavorite: false,
      badget: "Discount",
    },
    {
      title: "HAVIT HV-G92 Gamepad",
      price: 160,
      discount: 40,
      stars: 5,
      reviews: 88,
      image: product_1,
      isFavorite: false,
      badget: "Discount",
    },
    {
      title: "IPS LCD Gaming Monitor",
      price: 400,
      discount: 30,
      stars: 5,
      reviews: 99,
      image: product_3,
      isFavorite: false,
      badget: "Discount",
    },
  ];

  return (
    <div className="max-container pb-16">
      <div className="flex max-md:flex-col md:items-center max-md:gap-5 justify-between">
        <div className="flex items-end gap-16">
          <Heading label="This Month" title="Best Selling Products" />
        </div>
        <Button className="w-fit" text="View All" />
      </div>
      <div className="mt-10 gap-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            {...product}
            badget={product.badget as "New" | "Hot" | "Discount" | undefined}
          >
            <ProductCard.ProductImage />
            <div className="flex flex-col gap-2 mt-5">
              <ProductCard.ProductTitle />
              <div className="flex gap-2">
                <ProductCard.ProductDiscount />
                <ProductCard.ProductPrice />
              </div>
              <ProductCard.ProductRating />
            </div>
            <ProductCard.ProductAction />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
