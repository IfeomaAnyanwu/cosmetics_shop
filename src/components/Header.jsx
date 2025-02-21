import header1 from "../images/header1.PNG";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header-wrapper">
      <div id="category-list">
        <Link to={"/HairCat"}>Hair Products</Link>
        <Link to={"/SkinCat"}>Skin Products</Link>
        <Link to={"/NailCat"}>Nails Products</Link>
        <Link to={"/HealthCat"}>Health Products</Link>
        <Link to={"/BathCat"}>Bath Products</Link>
      </div>
      <div id="header-images">
        <img src={header1} alt="" />
      </div>
      <div id="header-contact">
        <Link to={"/ContactUs"}>Call to Order</Link>
        <p>Sell on Lords&Queens Beauty</p>
      </div>
    </div>
  );
}
