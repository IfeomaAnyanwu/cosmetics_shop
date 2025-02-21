import logo from "../images/logo.PNG";
import { Link } from "react-router-dom";

//Adding React fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";

export default function Nav() {
  //declaring react fontawesome
  const shoppingCartIcon = <FontAwesomeIcon icon={faCartShopping} />;
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  const helpIcon = <FontAwesomeIcon icon={faQuestion} />;
  <i class="fa-regular fa-cart-shopping"></i>;

  //Declaring the Shopping Cart increament from 0
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <nav id="nav-bar">
      <div id="nav-bar-wrapper">
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        {/*----------End of logo and toggle bar----------*/}

        <ul className="nav-links" id="nav-links">
          <input
            type="text"
            id="nav-search-input"
            class="search-text"
            placeholder="Search Products, Brands and Categories"
          />
          <button className="btn" id="nav-search-btn">
            Search
          </button>
          <Link to={"/CreateProduct"} id="nav-register-icon">
            Create Product
          </Link>

          <Link to={"/SignUp"} id="nav-register-icon">
            Register
          </Link>
          <Link to={"/SignIn"} id="nav-signin-icon">
            {userIcon}Sign In
          </Link>
          {/* Account drop down */}
          {/* <li>
            <a href="/" class="nav-link scroll-link">
              Account
            </a>
            <ul>
              <li>
                <a href="/">drama</a>
              </li>
              <li>
                <a href="/">comedy</a>
              </li>
            </ul>
          </li> */}

          <Link to={"/ContactUs"} id="nav-help-icon">
            {helpIcon}Help
          </Link>
          {/* <Link to={"/SignIn"} id="shoppingCartIcon">
            {" "}
            {shoppingCartIcon}Cart
          </Link> */}
          <Link to={"/Cart"} id="nav-help-icon">
            <button className="shopping-cart-button" onClick={handleShowCart}>
              {shoppingCartIcon}
              <sup>{totalCartItems}</sup>
              Cart
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
