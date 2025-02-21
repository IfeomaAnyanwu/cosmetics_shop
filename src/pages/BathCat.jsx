import { productDetails } from "../data.jsx";
import ProductItem from "../components/ProductItem.jsx";
import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import CatNav from "../components/CatNav.jsx";

export default function ProductList() {
  const bathProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "bath";
  });

  console.log(bathProducts);

  return (
    <>
      <Nav />
      <CatNav />

      {/* Category container */}

      <div className="cat">
        <h3 className=" cat-heading hair-cat-heading"> Bath Products</h3>
        <ul id="items">
          {bathProducts.map((product) => (
            <Link to={`/BathCat/${product.id}`}>
              <ProductItem key={product.id} {...product} />
            </Link>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
