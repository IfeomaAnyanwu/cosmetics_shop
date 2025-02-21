import { productDetails } from "../data.jsx";
import ProductItem from "../components/ProductItem.jsx";
import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import CatNav from "../components/CatNav.jsx";

export default function ProductList() {
  const skinProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "skin";
  });

  console.log(skinProducts);

  return (
    <>
      <Nav />
      <CatNav />

      <div className="cat">
        <h3 className=" cat-heading hair-cat-heading"> Skin Products</h3>
        <ul id="items">
          {skinProducts.map((product) => (
            <Link to={`/SkinCat/${product.id}`}>
              <ProductItem key={product.id} {...product} />
            </Link>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
