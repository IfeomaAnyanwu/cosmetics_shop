import { currencyFormatter } from "../util/Formatting";

export default function CartItem({
  name,
  quantity,
  price,
  img,
  onDecrease,
  onIncrease,
}) {
  return (
    <li className="cart-item">
      <img src={img} alt={name} className="cart-image" />
      <p>
        {name}-{quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
