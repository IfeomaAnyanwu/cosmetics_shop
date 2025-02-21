import { productDetails } from "../data.jsx";
import ProductItem from "../components/ProductItem.jsx";
import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import CatNav from "../components/CatNav.jsx";

export default function ProductList() {
  const healthProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "health";
  });

  console.log(healthProducts);

  return (
    <>
      <Nav />
      <CatNav />

      {/* Category container */}
      <div className="cat">
        <h3 className=" cat-heading hair-cat-heading"> Health Products</h3>
        <ul id="items">
          {healthProducts.map((product) => (
            <Link to={`/HealthCat/${product.id}`}>
              <ProductItem key={product.id} {...product} />
            </Link>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
