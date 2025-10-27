import { Eye, Heart, Star } from "lucide-react";
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import CartProvider from "../../context/CartProvider";
import { CartContext } from "../../context/CartProvider";
import type { ProductType } from "../../types";

type ProductCardComponent = FC<PropsWithChildren<ProductType>> & {
  ProductImage: FC;
  ProductBadget: FC;
  ProductAction: FC;
  ProductRating: FC;
  ProductTitle: FC;
  ProductPrice: FC;
  ProductDiscount: FC;
  ProductColorSwitch: FC;
};

interface ProductCardContextProps {
  product: ProductType | null;
  setProduct: Dispatch<SetStateAction<ProductType | null>>;
}

const ProductCardContext = createContext<ProductCardContextProps | null>(null);

const useProduct = () => {
  const context = useContext(ProductCardContext);
  if (!context) {
    throw new Error("Element must be used inside Product Card");
  }
  return context;
};
const ProductCard: ProductCardComponent = ({
  id,
  title,
  price,
  discount,
  stars,
  reviews,
  image,
  isFavorite,
  colors,
  badget,
  children,
}) => {
  const [product, setProduct] = useState<ProductType | null>({
    id,
    title,
    price,
    discount,
    stars,
    reviews,
    image,
    isFavorite,
    colors,
    badget,
  });
  return (
    <ProductCardContext.Provider value={{ product, setProduct }}>
      <div className="relative">{children}</div>
    </ProductCardContext.Provider>
  );
};

ProductCard.ProductImage = () => {
  const [addToCart, setAddToCart] = useState<boolean>(false);
  const { product } = useProduct();
  const image = product?.image;

  const cart = useContext(CartContext);

  const handleAddToCart = (product: ProductType) => {
    cart?.addToCart(product);
  };
  return (
    <div
      onMouseEnter={() => {
        setAddToCart(true);
      }}
      onMouseLeave={() => {
        setAddToCart(false);
      }}
      className="bg-[#F5F5F5] rounded-md overflow-hidden"
    >
      <div className="flex justify-center p-8">
        <img
          className="max-w-[170px] max-h-[170px] object-contain"
          src={image}
          alt="Product image"
        />
      </div>
      <div
        onClick={() => {
          handleAddToCart(
            product || {
              id: "default-id",
              title: "Unknown Product",
              price: 0,
              discount: 0,
              stars: 0,
              reviews: 0,
              image: "",
              isFavorite: false,
              colors: ["#000000", "#FFFFFF"],
              badget: undefined as "New" | "Hot" | "Discount" | undefined,
            }
          );
        }}
        className={`${
          addToCart ? "max-h-96" : "max-h-0"
        } cursor-pointer overflow-hidden transition-all duration-200`}
      >
        <div className="bg-dark text-white text-center py-2">Add To Cart</div>
      </div>
    </div>
  );
};
ProductCard.ProductBadget = () => {
  const { product } = useProduct();
  const discount = product?.discount;
  const badget = product?.badget;

  if (badget === "New") {
    return (
      <div className="absolute left-3 top-4">
        <div className="bg-green-500 text-white rounded-md text-xs px-2 py-1">
          NEW
        </div>
      </div>
    );
  }

  if (badget === "Discount") {
    return (
      <div className="absolute left-3 top-4">
        <div className="bg-primary text-white rounded-md text-xs px-2 py-1">
          -{discount}%
        </div>
      </div>
    );
  }

  if (badget === "Hot") {
    return (
      <div className="absolute left-3 top-4">
        <div className="bg-red-700 text-white rounded-md text-xs px-2 py-1">
          HOT
        </div>
      </div>
    );
  }

  return <></>;
};
ProductCard.ProductTitle = () => {
  const { product } = useProduct();
  const title = product?.title;
  return <div className="text-black">{title}</div>;
};
ProductCard.ProductAction = () => {
  return (
    <div className="absolute right-3 top-4">
      <div className="flex flex-col gap-2">
        <div
          onClick={() => {}}
          className="bg-white p-[5px] rounded-full cursor-pointer hover:bg-primary hover:text-white transition"
        >
          <Heart size={20} />
        </div>
        <div
          onClick={() => {}}
          className="bg-white p-[5px] rounded-full cursor-pointer hover:bg-primary hover:text-white transition"
        >
          <Eye size={20} />
        </div>
      </div>
    </div>
  );
};
ProductCard.ProductRating = () => {
  const { product } = useProduct();
  const reviews = product?.reviews;
  const stars = product?.stars ?? 0;
  return (
    <div className="flex gap-3">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          if (i + 1 <= stars) {
            return (
              <Star
                key={i}
                size={18}
                fill="#fdc700"
                className="stroke-yellow-400"
              />
            );
          } else {
            return (
              <Star
                key={i}
                size={18}
                fill="#d1d5dc"
                className="stroke-gray-300"
              />
            );
          }
        })}
      </div>
      <div className="text-gray-400 text-sm">({reviews})</div>
    </div>
  );
};
ProductCard.ProductPrice = () => {
  const { product } = useProduct();
  const price = product?.price ?? 0;
  return <div className="text-gray-500 line-through">${price}</div>;
};
ProductCard.ProductDiscount = () => {
  const { product } = useProduct();
  const discount = product?.discount ?? 0;
  const price = product?.price ?? 0;
  return (
    <div className="text-primary">${price - (discount / 100) * price}</div>
  );
};
ProductCard.ProductColorSwitch = () => {
  const { product } = useProduct();
  const colors = product?.colors;
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    colors?.[0]
  );
  return (
    <div className="flex gap-2">
      {colors?.map((color, i) => (
        <div
          onClick={() => {
            setSelectedColor(color);
          }}
          key={i}
          style={{
            backgroundColor: color,
          }}
          className={`h-4 w-4 ${
            selectedColor === color
              ? "border-2 border-white outline-2 outline-black"
              : ""
          } rounded-full cursor-pointer`}
        ></div>
      ))}
    </div>
  );
};
export default ProductCard;
