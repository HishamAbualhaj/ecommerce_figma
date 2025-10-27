import Heading from "../../components/ui/Heading";
import { products } from "../../data/data";
import ProductCard from "../../components/ui/ProductCard";
import Button from "../../components/ui/Button";

const BestSelling = () => {
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
