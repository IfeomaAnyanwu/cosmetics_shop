import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { productDetails } from "../data";
// import { useEffect, useState } from "react";
// import { fetchProducts } from "../apis/products";

export default function Home() {
  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   fetchProducts().then((response) => {
  //     console.log(response);
  //     setProductList(response.data);
  //   });
  // }, []);

  // HairCat filter
  const hairProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "hair";
  });
  // HairCat slice
  const fewHairProducts = hairProducts.slice(0, 5);

  // SkinCat filter
  const skinProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "skin";
  });
  // SkinCat slice
  const fewSkinProducts = skinProducts.slice(0, 5);

  // HealthCat filter
  const healthProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "health";
  });
  // HealthCat slice
  const fewHealthProducts = healthProducts.slice(0, 5);

  // Bath  filter
  const bathProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "bath";
  });
  // Bath  slice
  const fewBathProducts = bathProducts.slice(0, 5);

  // NailCat filter
  const nailProducts = productDetails.filter((productDetail) => {
    return productDetail.cat === "nail";
  });
  // NailCat slice
  const fewNailProducts = nailProducts.slice(0, 3);

  return (
    <>
      {/* Import Nav and Header */}
      <Nav />
      <Header />

      {/* HairCat mapping */}
      <div className="cat">
        <h3 className=" cat-heading hair-cat-heading"> Hair Products</h3>
        <ul id="items">
          {/* productList was mapped here for backend fetch */}
          {fewHairProducts.map((product) => (
            <Link to={`/HairCat/${product.id}`}>
              <ProductItem key={product.id} {...product} />
            </Link>
          ))}
          <Link to="/HairCat" className="sign-up-a show-more-products">
            More hair products...
          </Link>
        </ul>
      </div>

      {/* SkinCat container */}

      <div className="cat">
        <h3 className=" cat-heading hair-cat-heading"> Skin Products</h3>
        <ul id="items">
          {fewSkinProducts.map((product) => (
            <Link to={`/SkinCat/${product.id}`}>
              <ProductItem key={product.id} {...product} />
            </Link>
          ))}
          <Link to="/SkinCat" className="sign-up-a show-more-products">
            More skin products...
          </Link>
        </ul>
      </div>

      {/* HealthCat container */}
      <div className="cat">
        <h3 className=" cat-heading hair-cat-heading"> Health Products</h3>
        <ul id="items">
          {fewHealthProducts.map((product) => (
            <Link to={`/HealthCat/${product.id}`}>
              <ProductItem key={product.id} {...product} />
            </Link>
          ))}
          <Link to="/HealthCat" className="sign-up-a show-more-products">
            More health products...
          </Link>
        </ul>
      </div>

      {/* BathCat mapping */}

      <div className="cat">
        <h3 className=" cat-heading hair-cat-heading"> Bath Products</h3>
        <ul id="items">
          {fewBathProducts.map((product) => (
            <Link to={`/BathCat/${product.id}`}>
              <ProductItem key={product.id} {...product} />
            </Link>
          ))}
          <Link to="/BathCat" className="sign-up-a show-more-products">
            More bath products...
          </Link>
        </ul>
      </div>

      {/* NailCat Mapping */}

      <div className="cat">
        <h3 className=" cat-heading hair-cat-heading"> Nail Products</h3>
        <ul id="items">
          {fewNailProducts.map((product) => (
            <Link to={`/NailCat/${product.id}`}>
              <ProductItem key={product.id} {...product} />
            </Link>
          ))}
          <Link to="/NailCat" className="sign-up-a show-more-products">
            More products...
          </Link>
        </ul>
      </div>
      {/* Import footer to home page */}
      <Footer />
    </>
  );
}
