import { createBrowserRouter } from "react-router"
import { RootLayout } from "@/layouts/RootLayout"
import { OrderForm } from "@/pages/order-form";
import { ProductPage } from "@/pages/product-page";
import { Menu } from "@/components/Menu"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Global components live here now!
    children: [
      {
        index: true,
        element: <Menu />,
      },
      {
        path: "order",
        element: <OrderForm />
      },
      {
        path: "product-page/:id",
        element: <ProductPage />
      }
    ],
  },
]);