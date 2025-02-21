import { currencyFormatter } from "../util/Formatting";

export default function ProductItem({
  id,
  image,
  name,
  quantity,
  price,
  description,

  //addToCartFn,
}) {
  return (
    <>
      <li className="each-item">
        <img src={image} alt={name} />

        <div>
          <h4>{name}</h4>
          <div id="cart-and-price-container">
            <p className="each-item-price">{currencyFormatter.format(price)}</p>
            {/* product id, description, quantity and add to cart was passed into product item but not displayed. It was only displayes in cart */}
            <button className=" btn add-to-cart-button">Add to cart</button>
          </div>
        </div>
      </li>
    </>
  );
}
