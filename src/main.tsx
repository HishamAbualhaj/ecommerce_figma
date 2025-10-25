import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing/Landing.tsx";
import Login from "./pages/Login/Login.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Checkout from "./pages/Checkout/Checkout.tsx";
import ProductDetails from "./pages/Products/ProductDetails/ProductDetails.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "products", element: <></> },
      { path: "products/:id", element: <ProductDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
