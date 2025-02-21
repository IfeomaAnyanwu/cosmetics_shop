import { useContext } from "react";

import Modal from "../ui/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/Formatting";
import Input from "../ui/Input";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const UserProgressCtx = useContext(UserProgressContext);

  //get total cart content
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    UserProgressCtx.hideCheckout();
  }

  return (
    <Modal open={UserProgressCtx.progress === "checkout"}>
      <form className="checkout-form">
        <h2>Checkout</h2>
        <p>Total Amount:{currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          {/* type=button was given to the button below to prevent it from submitting since it is inside the form */}
          <button type="button" textOnly onClick={handleClose}>
            Close
          </button>
          <button>Submit Order</button>
        </p>
      </form>
    </Modal>
  );
}
