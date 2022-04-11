import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import "./login.css";

const Login = () => {
  const [formField, setFormField] = useState({ email: "", password: "" });
  const { loginHandler } = useAuth();
  const demoCredentialsLoginHandler = () => {
    loginHandler({
      email: "anurag@gmail.com",
      password: "anurag",
    });
  };
  const loginClickHandler = () => {
    loginHandler(formField);
  };
  return (
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
  );
};

export { Login };
