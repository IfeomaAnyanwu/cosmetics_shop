import { productDetails } from "../data.jsx";
import ProductItem from "./ProductItem.jsx";

export default function ProductList() {
  const nailProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "nail";
  });

  console.log(nailProducts);

  return (
    <div className="cat">
      <h3 className=" cat-heading hair-cat-heading"> Nail Products</h3>
      <ul id="items">
        {nailProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
}
