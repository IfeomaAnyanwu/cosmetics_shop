import { Link } from "react-router-dom";
export default function CatNav() {
  return (
    <div className="link-to-other-pages-wrapper">
      {/* Link to other pages */}
      <Link to="/">Home</Link>
      <Link to="/HairCat">Hair Products</Link>
      <Link to="/SkinCat">Skin Products</Link>
      <Link to={"/NailCat"}>Nails Products</Link>
      <Link to={"/HealthCat"}>Health Products</Link>
      <Link to={"/BathCat"}>Bath Products</Link>
    </div>
  );
}
