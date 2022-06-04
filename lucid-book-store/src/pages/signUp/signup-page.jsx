import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "../login/login.css";
import { toast } from "react-toastify";

const SignupPage = () => {
  const { signupHandler } = useAuth();

  const [viewPassword, setViewPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [formField, setFormField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTC: false,
  });

  const { firstName, lastName, email, password, confirmPassword, acceptTC } =
    formField;

  const validateForm = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (
      firstName &&
      lastName &&
      regex.test(email) &&
      password === confirmPassword &&
      acceptTC
    );
  };

  const createAccClickHandler = () => {
    if (validateForm()) {
      signupHandler(formField);
    } else {
      toast.warn("Enter correct details");
    }
  };

  return (
    <section className="signup-section p-x-1">
      <div className="signup br-3 elevated center-x m-y-6 shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Sign Up</div>
        </div>
        <div className="form-div form-custom m-up-1">
          <p className="form-label">Name</p>
          <i className="fa-solid is-lighter fa-user"></i>
          <input
            onChange={(e) =>
              setFormField({ ...formField, firstName: e.target.value })
            }
            type="text"
            className="form-input input-focused"
            placeholder="Enter your name"
            required=""
          />
          <p className="form-label m-up-2">Last name</p>
          <i className="fa-solid is-lighter fa-user"></i>
          <input
            onChange={(e) =>
              setFormField({ ...formField, lastName: e.target.value })
            }
            type="text"
            className="form-input input-focused"
            placeholder="Enter your last name"
            required=""
          />
          <p className="form-label m-up-2">Email</p>
          <i className="fa-solid is-lighter fa-envelope"></i>
          <input
            onChange={(e) =>
              setFormField({ ...formField, email: e.target.value })
            }
            type="email"
            className="form-input input-focused"
            placeholder="Enter your email"
            required=""
          />
          <p className="form-label m-up-2">Password</p>
          <i
            onClick={() =>
              setViewPassword({
                ...viewPassword,
                password: !viewPassword.password,
              })
            }
            className="view-password is-lighter fas fa-eye"
          />
          <input
            onChange={(e) =>
              setFormField({ ...formField, password: e.target.value })
            }
            type={viewPassword.password ? "text" : "password"}
            className="form-input input-focused"
            placeholder="Enter your password"
            required=""
          />
          <p className="form-label m-up-2">Confirm Password</p>
          <i
            onClick={() =>
              setViewPassword({
                ...viewPassword,
                confirmPassword: !viewPassword.confirmPassword,
              })
            }
            className="view-password is-lighter fas fa-eye"
          />
          <input
            onChange={(e) =>
              setFormField({ ...formField, confirmPassword: e.target.value })
            }
            type={viewPassword.confirmPassword ? "text" : "password"}
            className="form-input input-focused"
            placeholder="Confirm password"
            required=""
          />
        </div>
        <label className="m-up-3 form-checkbox">
          <input
            onClick={() =>
              setFormField({ ...formField, acceptTC: !formField.acceptTC })
            }
            type="checkbox"
            className=""
          />
          Accept all terms and conditions
        </label>
        <div className="btn-vertical m-up-3 center-text">
          <button
            onClick={createAccClickHandler}
            className="btn-primary m-dw-1 btn-small"
          >
            Create new Account
          </button>
          <Link to="/login" className="is-2 link">
            Already have an account
          </Link>
        </div>
      </div>
    </section>
  );
};

export { SignupPage };
