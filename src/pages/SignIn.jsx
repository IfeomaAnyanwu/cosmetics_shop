import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.PNG";

export default function SignUp() {
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
      email: "",
      password: "",
    });

    //Ques
    //2. how to use one localstorage on more than 1 key vaue.
  };

  return (
    <div className="sign-in-div">
      <h1 id="logo3">
        <img src={logo} alt="" />
      </h1>
      <h3>Welcome to Lords & Queens Beauty Online</h3>
      <form onSubmit={handleSubmit} id="sign-in-form">
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
          // onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
          // onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <br />

        <input type="submit" id="sign-in-submit" />
        <br />
        <br />

        <div id="sign-up-div">
          <p id="sign-up">Don't Have an account? </p>
          <Link to="/SignUp" className="sign-up-a">
            Sign Up
          </Link>
        </div>

        <Link to="/" className="sign-up-a">
          Back to Home
        </Link>
      </form>
    </div>
  );
}
