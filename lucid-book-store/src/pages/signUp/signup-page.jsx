import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import "../login/login.css";

const SignupPage = () => {
  const { signupHandler } = useAuth();
  const [formField, setFormField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const createAccClickHandler = () => {
    signupHandler(formField);
  };
  return (
    <section className="signup-section p-x-1">
      <div className="signup br-3 elevated center-x m-y-6 shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Sign Up</div>
        </div>
        <div className="form-div form-custom m-up-1">
          <p className="form-label">Name</p>
          <input
            onChange={(e) =>
              setFormField({ ...formField, firstName: e.target.value })
            }
            type="text"
            className="form-input input-focused"
            placeholder="enter your name"
            required=""
          />
          <p className="form-label m-up-2">Last name</p>
          <input
            onChange={(e) =>
              setFormField({ ...formField, lastName: e.target.value })
            }
            type="text"
            className="form-input input-focused"
            placeholder="enter your last name"
            required=""
          />
          <p className="form-label m-up-2">Email</p>
          <input
            onChange={(e) =>
              setFormField({ ...formField, email: e.target.value })
            }
            type="email"
            className="form-input input-focused"
            placeholder="enter your email"
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
          <p className="form-label m-up-2">Confirm Password</p>
          <i className="view-password fas fa-eye" />
          <input
            type="password"
            className="form-input input-focused"
            placeholder="confirm password"
            required=""
          />
        </div>
        <label className="m-up-3 form-checkbox">
          <input type="checkbox" className="" />
          Accept all terms and conditions
        </label>
        <div className="btn-vertical m-up-3 center-text">
          <button
            onClick={createAccClickHandler}
            className="btn-primary m-dw-1 btn-small"
          >
            Create new Account
          </button>
          <a className="is-2 link">Already have an account</a>
        </div>
      </div>
    </section>
  );
};

export { SignupPage };
