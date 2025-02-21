import { productDetails } from "../data.jsx";
import ProductItem from "./ProductItem.jsx";

export default function ProductList() {
  const healthProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "health";
  });

  console.log(healthProducts);

  return (
    <div className="cat">
      <h3 className=" cat-heading hair-cat-heading"> Health Products</h3>
      <ul id="items">
        {healthProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
}
