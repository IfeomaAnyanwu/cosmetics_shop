import { useContext } from "react";
import Modal from "../ui/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/Formatting.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import Home from "../pages/Home.jsx";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";

export default function Cart() {
  const navigate = useNavigate();

  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  //get total cart content
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
    navigate("/Home");
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
    navigate("/Checkout");
  }

  return (
    <>
      <Home />
      <Modal className="cart" open={userProgressCtx.progress === "cart"}>
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.items.map((item) => (
            // <li key={item.id}>
            //   <img src={item.image} alt={item.name} className="cart-image" />
            //   {item.name} - {item.quantity}
            // </li>

            <CartItem
              key={item.id}
              img={item.image}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => cartCtx.addItem(item)}
              onDecrease={() => cartCtx.removeItem(item.id)}
            />
          ))}
        </ul>

        {/* css styles can be found at - react-complete-guide-course-resources/code/07 Styling/01-starting-project/src
/index.css */}

        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>

        <p className="modal-actions">
          <button textOnly className="cart-close-btn" onClick={handleCloseCart}>
            Close
          </button>
          {cartCtx.items.length > 0 ? (
            <button className="btn cart-btn" onClick={handleGoToCheckout}>
              Checkout
            </button>
          ) : null}
          {/* you can also write like this:
          {cartCtx.items.length > 0 && (
            <button className="btn cart-btn" onClick={handleGoToCheckout}>
              Checkout
            </button>
          )} */}
        </p>
      </Modal>
    </>
  );
}
