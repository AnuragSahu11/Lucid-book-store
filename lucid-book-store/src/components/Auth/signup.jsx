import "./login.css";

const Signup = () => {
  return (
    <section className="signup-section p-x-1">
      <div className="signup br-3 elevated center-x m-y-6 shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Sign Up</div>
        </div>
        <div className="form-div m-up-1">
          <p className="form-label">Name</p>
          <input
            type="text"
            className="form-input input-focused"
            placeholder="enter your name"
            required=""
          />
          <p className="form-label m-up-2">Last name</p>
          <input
            type="text"
            className="form-input input-focused"
            placeholder="enter your last name"
            required=""
          />
          <p className="form-label m-up-2">Email</p>
          <input
            type="email"
            className="form-input input-focused"
            placeholder="enter your email"
            required=""
          />
          <p className="form-label m-up-2">Password</p>
          <input
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
          <button className="btn-primary m-dw-1 btn-small">
            Create new Account
          </button>
          <a href="" className="is-2 link">
            Already have an account
          </a>
        </div>
      </div>
    </section>
  );
};

export { Signup };
