import { productDetails } from "../data.jsx";
import ProductItem from "../components/ProductItem.jsx";
import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import CatNav from "../components/CatNav.jsx";

export default function ProductList() {
  const nailProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "nail";
  });

  console.log(nailProducts);

  return (
    <>
      <Nav />
      <CatNav />

      {/* Category container */}

      <div className="cat">
        <h3 className=" cat-heading hair-cat-heading"> Nail Products</h3>
        <ul id="items">
          {nailProducts.map((product) => (
            <Link to={`/NailCat/${product.id}`}>
              <ProductItem key={product.id} {...product} />
            </Link>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
