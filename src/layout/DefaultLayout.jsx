import { useEffect } from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import { Nav } from "../component/Nav";
import { getProducts } from "../store/products/thunk";
import { setCartItems } from "../store/products/reducer";
import { useDispatch } from "react-redux";

export const DefaultLayout = ({ children }) => {

  const dispatch = useDispatch();
  const oldCartItems = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    dispatch(getProducts());
    dispatch(setCartItems(oldCartItems));
  }, []);

  return (
    <>
      <div className="main-page">
        <Header />
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
};
