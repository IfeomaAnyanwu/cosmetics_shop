import { useParams } from "react-router-dom";
import { productDetails } from "../data.jsx";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import CatNav from "../components/CatNav.jsx";

import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";

export default function EachProdtDetails() {
  // destructure useParams into id. Useparams enables us to render the dynamic id into EachProductDetail Page
  const { id } = useParams();
  //console.log(id);

  const clickedProductDetails = productDetails.find((productDetail) => {
    return productDetail.id === id;
  });

  // Declaration for Add to cart button click

  const cartCtx = useContext(CartContext);

  function handleAddProductToCart() {
    cartCtx.addItem(clickedProductDetails);
  }

  //console.log(clickedProductDetails);

  return (
    <>
      <Nav />
      <CatNav />

      <div className="product-detail-div">
        <img
          src={clickedProductDetails.image}
          alt={id}
          className="product-detail-img"
        />
        <div className="product-detail-paragraph">
          <h2>{clickedProductDetails.name}</h2>

          <p>
            Description:
            {clickedProductDetails.description}
          </p>
          <p>Category: {clickedProductDetails.cat}</p>
          <p>Price: N{clickedProductDetails.price}</p>
          <p>
            Qty:
            {clickedProductDetails.quantity}
          </p>
          <br />
          <button
            className=" btn product-detail-add-to-cart-button"
            onClick={handleAddProductToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
