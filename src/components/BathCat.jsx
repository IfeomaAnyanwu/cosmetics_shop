import { productDetails } from "../data.jsx";
import ProductItem from "./ProductItem.jsx";

export default function ProductList() {
  const bathProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "bath";
  });

  console.log(bathProducts);

  return (
    <div className="cat">
      <h3 className=" cat-heading hair-cat-heading"> Bath Products</h3>
      <ul id="items">
        {bathProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
}
