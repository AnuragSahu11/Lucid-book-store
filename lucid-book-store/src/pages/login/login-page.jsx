import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { Alerts } from "../../utility";
import "./login.css";

const LoginPage = () => {
  const [formField, setFormField] = useState({ email: "", password: "" });
  const { loginHandler, setIsLoading } = useAuth();

  const [alertData, setAlertData] = useState({
    showAlert: false,
    alertMsg: "",
    alertType: "",
  });
  const demoCredentialsLoginHandler = async () => {
    setIsLoading(true);
    setFormField({
      email: "anurag@gmail.com",
      password: "anurag",
    });

    await loginHandler({
      email: "anurag@gmail.com",
      password: "anurag",
    });
    setIsLoading(false);
    setAlertData({
      showAlert: true,
      alertMsg: "Login successful",
      alertType: "success",
    });
  };
  const loginClickHandler = async () => {
    setIsLoading(true);
    loginHandler(formField);
    setIsLoading(false);
    setAlertData({
      showAlert: true,
      alertMsg: "Login successful",
      alertType: "success",
    });
  };
  return (
    <>
      <Alerts alertData={alertData} setAlertData={setAlertData} />
      <section className="login-section p-x-1">
        <div className="login br-3 center-x m-up-6 elevated shadow p-y-2 p-x-4">
          <div className="textbox">
            <div className="title">Login</div>
          </div>
          <div className="form-div form-custom m-up-1">
            <p className="form-label">Email</p>
            <input
              onChange={(e) =>
                setFormField({ ...formField, email: e.target.value })
              }
              type="email"
              value={formField.email}
              className="form-input input-focused"
              placeholder="enter your email id"
              required=""
            />
            <p className="form-label m-up-2">Password</p>
            <input
              onChange={(e) =>
                setFormField({ ...formField, password: e.target.value })
              }
              type="password"
              value={formField.password}
              className="form-input input-focused"
              placeholder="enter your password"
              required=""
            />
          </div>
          <label className="m-up-2 form-checkbox">
            <input type="checkbox" className="" />
            Remember me
          </label>
          <a className="link-secondary m-l-6">Forgot password</a>
          <div className="btn-vertical m-up-3 center-text">
            <button
              onClick={loginClickHandler}
              className="btn-primary m-dw-1 btn-small"
            >
              Login
            </button>
            <button
              onClick={demoCredentialsLoginHandler}
              className="btn-primary m-dw-1 btn-small"
            >
              Login with demo credentials
            </button>
            <a className="is- link">Create Account</a>
          </div>
        </div>
      </section>
    </>
  );
};

export { LoginPage };
