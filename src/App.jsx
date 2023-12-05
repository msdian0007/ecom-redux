import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { PageNotFound_404 } from "./pages/PageNotFound_404";

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound_404 />} />
        </Routes>
      </DefaultLayout>
    </>
  );
};
export default App;
