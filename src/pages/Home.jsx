import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/products/thunk";
import { setCartItems } from "../store/products/reducer";
import { Link } from "react-router-dom";
import { useEcommerce } from "../hooks/useEcommerce";

export const Home = () => {
  let oldCartItems = JSON.parse(localStorage.getItem("cart"));
  const { loading, products } = useSelector((state) => state.productsReducer);
  const { addToCart } = useEcommerce();

  // let oldCartItems = JSON.parse(localStorage.getItem("cart"));
  // const addToCart = (id) => {
  //   const isItemsIn = oldCartItems?.some((pid) => pid === id);
  //   if (!isItemsIn) {
  //     oldCartItems.push(id);
  //     localStorage.setItem("cart", JSON.stringify(oldCartItems));
  //     dispatch(setCartItems(oldCartItems));
  //   }
  // };

  let productView;
  if (!loading) {
    if (products?.length > 0) {
      productView = products?.map((product) => {
        return (
          <div className="card" key={product.id}>
            <Link to={`/product/${product.id}`} className="img" target="_blank">
              <img className="img" src={product.image} alt="product_img" />
            </Link>
            <h4 className="title">{product.title}</h4>
            <p className="price">&#36;{product.price}</p>
            <p className="category">{product.category}</p>
            {/* <p className="description">{product.description}</p> */}
            <button
              className="cart_button"
              onClick={() => addToCart(product.id)}
            >
              ADD TO CART
            </button>
          </div>
        );
      });
    } else {
      productView = <h4>No Products Found!</h4>;
    }
  } else {
    productView = <h4>...Loading</h4>;
  }

  useEffect(() => {
    !oldCartItems && localStorage.setItem("cart", JSON.stringify([]));
  }, []);
  return (
    // <>
    <main className="main">
      <section className="card_container" id="card_container">
        {productView}
      </section>
    </main>
    // </>
  );
};
