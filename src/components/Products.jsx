import { Link, useNavigate } from "react-router-dom";
import { productDetails } from "../data.jsx";
import ProductItem from "./ProductItem.jsx";

export default function ProductList() {
  return (
    <ul id="items">
      {productDetails.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  );
}
