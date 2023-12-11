import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { PageNotFound_404 } from "./pages/PageNotFound_404";
import { lazy } from "react";
import { Suspense } from "react";
import ProductDetails from "./pages/ProductDetails";

const HomePage = lazy(() => (import('./pages/Home')))

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="*" element={<PageNotFound_404 />} />
          </Routes>
        </Suspense>
      </DefaultLayout>
    </>
  );
};
export default App;
