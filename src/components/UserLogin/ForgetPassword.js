import React, { useState } from "react";
import "../../css/Signin.css";

/**
 * Forget screen  including conditional OTP screen
 * @returns 
 */
const App = () => {
  const [pan, setPan] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOTP] = useState("");
  const [otpView, setOtpView] = useState(false);

  const submitHandler = (e) => {
    setOtpView(true);
    e.preventDefault();
  };

  return (
    <div className="signin_outer_container">
      <div className="signin">
        <div className="col-8"></div>
        <div className="col-4 signin_container-outer-2">
          {!otpView ? (
            <div className="signin__container">
              <div className="title-forget-password">Forget Password</div>
              <form>
                <div className="form-group">
                  <input
                    type="pan"
                    name="pan"
                    className="form-control"
                    placeholder="PAN Number*"
                    value={pan}
                    onChange={(e) => setPan(e.target.value)}
                  />
                  {/* <small>{erros.panError}</small> */}
                </div>
                <div className="form-group">
                  <input
                    type="mobile"
                    name="mobile"
                    placeholder="Mobile Number*"
                    value={mobile}
                    className="form-control"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  {/* <small>{erros.mobileError}</small> */}
                </div>
                <div>
                  <button className="signin__button" onClick={submitHandler}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="signin__container">
              <div className="title-forget-password">OTP Verification</div>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="otp"
                    className="form-control"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                  />
                  {/* <small>{erros.panError}</small> */}
                </div>
                <div>
                  <button className="signin__button" onClick={submitHandler}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
