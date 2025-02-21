import { productDetails } from "../data.jsx";
import ProductItem from "./ProductItem.jsx";

export default function ProductList() {
  const hairProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "hair";
  });

  console.log(hairProducts);

  return (
    <div className="cat">
      <h3 className=" cat-heading hair-cat-heading"> Hair Products</h3>
      <ul id="items">
        {hairProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
}
