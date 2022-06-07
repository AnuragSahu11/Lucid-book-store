import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { demoCredentials } from "../../utility/constants";
import { toast } from "react-toastify";
import "./login.css";

const LoginPage = () => {
  const [formField, setFormField] = useState({ email: "", password: "" });
  const { loginHandler, setPageLoading } = useAuth();

  const { email, password } = formField;

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const demoCredentialsLoginHandler = async () => {
    setPageLoading(true);
    setFormField(demoCredentials);
    await loginHandler(demoCredentials, from);
    setPageLoading(false);
  };

  const validateForm = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email) && password;
  };

  const loginClickHandler = async () => {
    if (validateForm()) {
      setPageLoading(true);
      await loginHandler(formField, from);
      setPageLoading(false);
    } else {
      toast.warn("Enter correct credentials");
    }
  };
  return (
    <>
      <section className="login-section p-x-1">
        <div className="login br-3 center-x m-up-6 elevated shadow p-y-2 p-x-4">
          <div className="textbox">
            <div className="title">Login</div>
          </div>
          <div className="form-div form-custom m-up-1">
            <p className="form-label">Email</p>
            <i className="fas fa-user is-lighter"></i>
            <input
              onChange={(e) =>
                setFormField({ ...formField, email: e.target.value })
              }
              type="email"
              value={formField.email || ""}
              className="form-input input-focused"
              placeholder="Enter your email"
              required=""
            />

            <p className="form-label m-up-2">Password</p>
            <i className="fa-solid fa-key is-lighter"></i>
            <input
              onChange={(e) =>
                setFormField({ ...formField, password: e.target.value })
              }
              type="password"
              value={formField.password || ""}
              className="form-input input-focused"
              placeholder="Enter your password"
              required=""
            />
          </div>
          <label className="m-up-2 form-checkbox">
            <input type="checkbox" className="" />
            Remember me
          </label>
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
            <Link to="/signup" className="is-2 link">
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export { LoginPage };
