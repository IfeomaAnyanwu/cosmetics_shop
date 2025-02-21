import { productDetails } from "../data.jsx";
import ProductItem from "./ProductItem.jsx";

export default function ProductList() {
  const skinProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "skin";
  });

  console.log(skinProducts);

  return (
    <div className="cat">
      <h3 className=" cat-heading hair-cat-heading"> Skin Products</h3>
      <ul id="items">
        {skinProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
}
