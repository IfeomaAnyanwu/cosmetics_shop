import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.PNG";

export default function CreateProduct() {
  //prodcut img preview
  const [file, setFile] = useState();

  //preview product image function as uploaded
  function handleImgPreview(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  //form values usestate and fucntion
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents refresh
    console.log(formValues);
    const checkUser = JSON.parse(localStorage.getItem("user-data"));
    if (checkUser && checkUser.user === "admin") {
      navigate("/");
    } else if (checkUser && checkUser.user === "student") {
      navigate("/Adventure");
    }
    setFormValues({
      productName: "",
      category: "",
      productPrice: "",
      productDescription: "",
      productImg: "",
    });

    //Ques
    //2. how to use one localstorage on more than 1 key vaue.
  };

  return (
    <div className="create-product-div">
      <h2>Create a new Product</h2>
      <form onSubmit={handleSubmit} id="create-product-form">
        {/* ====new Product image===  */}

        <div id="new-product-img-div">
          <input
            type="file"
            id="new-product-img"
            name="new-product-img"
            onChange={handleImgPreview}
          />
          <img
            src={file}
            alt={file}
            // style={{ width: "10rem", height: "10rem" }}
          />
        </div>

        <br />
        <br />
        {/* ====new Product name===  */}
        <input
          name="productName"
          type="text"
          id="productName"
          placeholder="Enter Product Name"
          value={formValues.productName}
          onChange={handleChange}
          required
        />

        <br />
        <br />
        {/*======description==========*/}
        {/* ====new Product description===  */}
        <textarea
          rows="5"
          cols="60"
          name="productDescription"
          id="product Description"
          placeholder="Description the product ..."
          value={formValues.productDescription}
          onChange={handleChange}
        />

        <br />
        <br />

        {/*======Product category==========*/}
        <select
          name="category"
          type="text"
          id="category"
          value={formValues.category}
          onChange={handleChange}
          required
        >
          <option value="Selected"> Select prodcut category</option>
          <option value="skinProduct">Skin </option>
          <option value="NailProduct">Nail</option>
          <option value="BathProduct">Bath</option>
          <option value="HealthProduct">Health</option>
          <option value="HairProduct">Hair</option>
        </select>
        <br />
        <br />

        {/*======Product price==========*/}
        <input
          name="productPrice"
          type="number"
          id="productPrice"
          placeholder="Enter Prodcut Price"
          value={formValues.productPrice}
          onChange={handleChange}
          // onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <br />

        <input type="submit" id="product-submit" />
        <br />
        <br />

        <Link to="/" className="sign-up-a">
          Back to Home
        </Link>
      </form>
    </div>
  );
}
