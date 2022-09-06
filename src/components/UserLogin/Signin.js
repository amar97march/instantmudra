import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Signin.css";
import boiImage from "../../assets/images/login/boi_1.png";

/**
 * Sign In component
 * @returns 
 */
const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [erros, setErros] = useState({ emailError: "", passwordError: "" });
  let navigate = useNavigate();

  // const checkValidation = () => {
  //   if (!email.length && !password.length) {
  //     setErros({
  //       ...erros,
  //       passwordError: "Please fill email and password fields",
  //     });
  //     return false;
  //   }
  //   if (!email.length) {
  //     setErros({
  //       passwordError: "",
  //       emailError: "Please enter email",
  //     });
  //     return false;
  //   }
  //   if (!password.length) {
  //     setErros({
  //       ...erros,
  //       passwordError: "Please enter password",
  //     });
  //     return false;
  //   }
  //   if (email.length && password.length) {
  //     setErros({});
  //     return true;
  //   }
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="signin_outer_container">
      <div className="signin">
        <div className="col-8">f</div>
        <div className="col-4 signin_container-outer-2">
          <div className="signin__container">
            <div className="logoBox">
              <img
                src="https://app.uat.instantmudra.co/apps/webportal/media/logos/logo.png"
                className="img-responsive"
                alt="Portal Login"
              />
            </div>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="User Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <small>{erros.emailError}</small> */}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <small>{erros.passwordError}</small> */}
              </div>
              <div className="forget-password">
                <a href="/forget-password">Forgot Password</a>
              </div>
              <div>
                <button className="signin__button" onClick={submitHandler}>
                  Login
                </button>
              </div>
            </form>
            <div className="secure-info">
              Do not share login{" "}
              <span style={{ color: "red" }}>OTP & Password</span> with anyone
              We will never ask you these details
            </div>
            <div className="bank-image">
              <img src={boiImage} alt="bank-img" />
              <div>Powered By</div>
            </div>
            <div className="signup-btn">
              Not registered? <a href="/register/">Sign Up Here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
