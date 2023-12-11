import { useDispatch, useSelector } from "react-redux";
import { setFilteredItems } from "../store/products/reducer";
import { useEcommerce } from "../hooks/useEcommerce";

export const Nav = () => {
  const dispatch = useDispatch();
  const { products, cartItems } = useSelector(
    (state) => state.productsReducer
  );
  const { removeCartItem, debounce, productSearch } = useEcommerce();

  let cartItemsView;
  if (cartItems?.length > 0) {
    const cartList = products.filter((product) => {
      return cartItems.some((id) => id === product.id);
    });
    cartItemsView = cartList?.map((item) => {
      return (
        <div className="cart_card" key={item.id}>
          <img className="cart_img" src={item.image} alt="" />
          <h5 className="cart_title">{item.title}</h5>
          <p className="cart_price">&#36;{item.price}</p>
          <i
            className="fa-solid fa-xmark cart_cancel_icon"
            onClick={() => removeCartItem(item.id)}
          ></i>
        </div>
      );
    });
  } else {
    cartItemsView = <span className="empty_cart_title">Cart is empty!</span>;
  }

  const handleOnChange = debounce(productSearch)

  return (
    <>
      <nav className="nav_main center_div">
        <div className="nav_container">
          <div className="nav_actions">
            <i className="fa-solid fa-cart-shopping cart_icon"></i>
            {cartItems?.length > 0 && (
              <span className="cart_badge">{cartItems?.length}</span>
            )}
            <div className="cart_items">{cartItemsView}</div>
          </div>
          <div className="nav_search center_div">
            <input
              type="text"
              id="search_input"
              className="search_input"
              placeholder="search products"
              onChange={(e) => handleOnChange(e.target.value)}
            />
            {/* <button className="button">Search</button> */}
          </div>
        </div>
      </nav>
    </>
  );
};
