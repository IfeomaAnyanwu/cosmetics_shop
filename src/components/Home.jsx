import Nav from "../components/Nav";
import Header from "../components/Header";
import HairCat from "../components/HairCat";
import SkinCat from "../components/SkinCat";
import HealthCat from "../components/HealthCat";
import NailCat from "../components/NailCat";
import BathCat from "../components/BathCat";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <HairCat />
      <BathCat />
      <SkinCat />
      <HealthCat />
      <NailCat />
      <Footer />
    </>
  );
}
