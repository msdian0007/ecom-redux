import { useDispatch, useSelector } from "react-redux";
import { setCartItems, setFilteredItems } from "../store/products/reducer";

export const Nav = () => {
  const dispatch = useDispatch();
  const { products, cartItems, allProducts } = useSelector(
    (state) => state.productsReducer
  );

  const oldCartItems = JSON.parse(localStorage.getItem("cart"));

  const removeCartItem = (id) => {
    const newCartItems = oldCartItems?.filter((pid) => pid !== id);
    if (newCartItems?.length > 0) {
      localStorage.setItem("cart", JSON.stringify(newCartItems));
      dispatch(setCartItems(newCartItems));
    }
  };

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
  }

  const handleOnChange = (e) => {
    let { value } = e.target;
    const SearchedProduct = allProducts.filter((prod) => {
      return Object.values(prod)
        .join(" ")
        .toLowerCase()
        .includes(value.toLowerCase());
    });
    if (SearchedProduct.length > 0) {
      dispatch(setFilteredItems(SearchedProduct));
    } else {
      dispatch(setFilteredItems([]));
    }
  };

  return (
    <>
      <nav className="nav_main center_div">
        <div className="nav_container">
          <div className="nav_actions">
            <i className="fa-solid fa-cart-shopping cart_icon"></i>
            <span className="cart_badge">{cartItems?.length}</span>
            <div className="cart_items">{cartItemsView}</div>
          </div>
          <div className="nav_search center_div">
            <input
              type="text"
              id="search_input"
              className="search_input"
              placeholder="search products"
              onChange={handleOnChange}
            />
            <button className="button">Search</button>
          </div>
        </div>
      </nav>
    </>
  );
};
