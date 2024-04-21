import RootLayout from "@/layouts/RootLayout";
import { fetchAllProducts, fetchSingleProduct } from "@/lib/query";
import AddNewCoffe from "@/pages/AddNewCoffe";
import DetailsProduct from "@/pages/DetailsProduct";
import Home from "@/pages/Home";
import UpdateProduct from "@/pages/UpdateProduct";
import { createBrowserRouter } from "react-router-dom";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => await fetchAllProducts(),
      },
      {
        path: "/add-new-coffee",
        element: <AddNewCoffe />,
      },
      {
        path: "/product-details/:id",
        element: <DetailsProduct />,
        loader: async ({ params }) => await fetchSingleProduct(params.id),
      },
      {
        path: "/update-product/:id",
        element: <UpdateProduct />,
        loader: async ({ params }) => await fetchSingleProduct(params.id),
      },
    ],
  },
]);

export default routes;
