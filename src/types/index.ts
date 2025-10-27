export type ProductCart = {
  productId: string;
  productName: string;
  product: React.ReactNode;
  price: React.ReactNode;
  quantity: React.ReactNode;
  total: React.ReactNode;
};

export type ProductType = {
  id: string;
  title: string;
  price: number;
  discount: number;
  stars: number;
  reviews: number;
  image: string;
  isFavorite: boolean;
  colors?: string[];
  badget?: "New" | "Hot" | "Discount";
  quantity?: number;
};
