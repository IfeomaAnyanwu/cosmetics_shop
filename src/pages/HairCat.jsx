import { productDetails } from "../data.jsx";
import ProductItem from "../components/ProductItem.jsx";
import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import CatNav from "../components/CatNav.jsx";

export default function ProductList() {
  const hairProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "hair";
  });

  console.log(hairProducts);

  return (
    <>
      <Nav />
      <CatNav />

      {/* Category container */}
      <div className="cat">
        <h3 className=" cat-heading hair-cat-heading"> Hair Products</h3>
        <ul id="items">
          {hairProducts.map((product) => (
            <Link to={`/HairCat/${product.id}`}>
              <ProductItem key={product.id} {...product} />
            </Link>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
