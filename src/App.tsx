import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./common/Loader";
import Layout from "./layout/Layout";
// ------------------------------------------------------------------
const ProductsPage = lazy(() => import("./pages/products/Products"));
const BasketPage = lazy(() => import("./pages/basket/Basket"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<BasketPage />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
