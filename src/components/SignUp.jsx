export default function SignUp() {
  const [password, setPassword] = useState("false");

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    user: "",
  });

  const handlePassword = () => {
    setPassword(!password);
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    localStorage.setItem("user-data", JSON.stringify(formValues));
    setFormValues({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      phone: "",
      password: "",
      user: "",
    });
    alert("Signup Successful Click Ok to Login", navigate("/signIn"));

    //Ques1 How do I clear input after submition
    //2. how to use one localstorage on more than 1 key value.
  };

  return (
    <div className="back-image">
      <div className="cover-container">
        <img src={peopleImg} alt="people" className="sign-up-image" />{" "}
        <div className="sign-in-div">
          <h1 id="logo3">
            just<span>Flicks</span>
          </h1>
          <h4 className="sign-up-a">Sign Up Form</h4>
          <form onSubmit={handleSubmit} id="signin-form">
            {/*=========firstname==========*/}
            <input
              name="firstName"
              type="firstName"
              id="firstName"
              placeholder="First name"
              value={formValues.firstName}
              onChange={handleChange}
              // onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <br />
            {/*==========lastname==========*/}
            <input
              name="lastName"
              type="lastName"
              id="lastName"
              placeholder=" Last name"
              value={formValues.lastName}
              onChange={handleChange}
              // onChange={(e) => setLastName(e.target.value)}
              required
            />
            <br />
            {/*======gender==========*/}
            <select
              name="gender"
              type="text"
              id="gender"
              value={formValues.gender}
              onChange={handleChange}
              required
            >
              <option value="Nogender">No Gender </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <br />

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
            {/*============phone==========*/}
            <input
              name="phone"
              type="number"
              id="phone"
              placeholder="Mobile Phone Number"
              value={formValues.phone}
              onChange={handleChange}
              // onChange={(e) => setPhone(e.target.value)}
              required
            />
            <br />
            {/*==========password==========*/}
            <input
              name="password"
              type={password ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button onClick={handlePassword}>
              {password ? "hide" : "show"}
            </button>

            <br />
            {/*=========user type==========*/}

            <select
              name="user"
              type="user"
              id="user"
              value={formValues.user}
              onChange={handleChange}
              required
            >
              <option value="None">None </option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>

            {/*=========submit==========*/}
            <br />
            <input type="submit" id="sign-in-submit" />
            <br />
            {/*=========signIn==========*/}
            <div id="sign-up-div">
              <p id="sign-up">Have an account? </p>
              <Link to="/signIn" className="sign-up-a">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
