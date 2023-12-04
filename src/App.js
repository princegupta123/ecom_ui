import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./app.css"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Order from "./pages/orders/Order";
import Auth from "./pages/loginorregister/Auth";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Auth />,
      },
      {
        path: "/register",
        element: <Auth />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
