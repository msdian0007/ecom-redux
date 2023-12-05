import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/ProductDetails.css";
import { useGetProduct } from "../hooks/useGetProduct";
import { useEcommerce } from "../hooks/useEcommerce";

export const ProductDetails = () => {
  const { id } = useParams();
  const { loading, product, getProductById } = useGetProduct();
  const { addToCart } = useEcommerce();

  let productView;
  if (!loading) {
    if (product) {
      productView = (
        <>
          <div className="product_container">
            <div className="card" key={product.id}>
              <div className="img_container">
                <img className="img" src={product?.image} alt="product_img" />
                <div className="action_buttons">
                  <button
                    className="cart_button"
                    onClick={() => addToCart(product.id)}
                  >
                    ADD TO CART
                  </button>
                  <button
                    className="buy_button"
                    // onClick={() => addToCart(product.id)}
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
              <div className="details">
                <h4 className="title">{product.title}</h4>
                <div className="price_cat">
                  <p className="price">&#36;{product.price}</p>
                  <p className="category">{product.category}</p>
                </div>
                <p className="description">{product.description}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  } else {
    productView = <span>...Loading</span>;
  }
  useEffect(() => {
    getProductById(id);
  }, [id]);
  return (
    <>
      <section className="main">{productView}</section>
    </>
  );
};
