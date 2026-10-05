import { RouterProvider } from "react-router";
import { router } from "@/router/router";
import { CartProvider } from "@/context/cart";

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}