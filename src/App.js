import "./styles.css";

import HairCat from "./pages/HairCat";
import SkinCat from "./pages/SkinCat";
import BathCat from "./pages/BathCat";
import HealthCat from "./pages/HealthCat";
import NailCat from "./pages/NailCat";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import EachProductDetails from "./pages/EachProductDetails";
import { CartContextProvider } from "./store/CartContext.jsx";
import CreateProduct from "./components/CreateProduct";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SkinCat" element={<SkinCat />} />
            <Route path="/HairCat" element={<HairCat />} />
            <Route path="/BathCat" element={<BathCat />} />
            <Route path="/HealthCat" element={<HealthCat />} />
            <Route path="/NailCat" element={<NailCat />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Home/:id" element={<EachProductDetails />} />
            <Route path="/SkinCat/:id" element={<EachProductDetails />} />
            <Route path="/HairCat/:id" element={<EachProductDetails />} />
            <Route path="/BathCat/:id" element={<EachProductDetails />} />
            <Route path="/HealthCat/:id" element={<EachProductDetails />} />
            <Route path="/NailCat/:id" element={<EachProductDetails />} />
            <Route path="/CreateProduct" element={<CreateProduct />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </UserProgressContextProvider>

    // <>
    //   {/* <Layout />
    //   <Nav />
    //   <Header />
    //   <HairCat />
    //   <BathCat />
    //   <SkinCat />
    //   <HealthCat />
    //   <Nail />
    //   <Products />
    //   <Footer /> */}
    // </>
  );
}

export default App;
