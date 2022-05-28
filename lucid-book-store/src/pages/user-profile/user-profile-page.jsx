import { Link } from "react-router-dom";

const UserProfilePage = () => {
  return (
    <main>
      <div className="profile grid-30-70 m-up-4 width-80 center-x">
        <div className="profile-links m-r-4">
          <div className="textbox br-2 p-y-2 p-l-2 dk-shadow elevated align-center flex-r-w">
            <div className="avatar-m">
              <img src="https://picsum.photos/200" alt="profile picture" />
            </div>
            <div className="m-l-1">
              <div className="subtitle is-3">Hello</div>
              <div className="m-y-0 is-3 title">Anurag Sahu</div>
            </div>
          </div>
          <div className="textbox br-3 m-y-2 p-y-2 flex-col width-100 elevated li-shadow">
            <div className="title semibold m-l-5 m-y-0">Manage Account</div>
            <Link
              to="/address"
              className="link m-l-5 semibold is-light m-up-1 is-3"
            >
              <i className="m-r-1 fa-solid fa-address-book" />
              Manage Address
            </Link>
            <Link
              to="/wishlist"
              className="link m-l-5 semibold is-3 is-light m-up-1"
            >
              <i className="m-r-1 fa-solid fa-heart" />
              Wishlist
            </Link>
            <Link to="" className="link m-l-5 semibold is-3 is-light m-up-1">
              <i className="m-r-1 fa-solid fa-bag-shopping" />
              Orders
            </Link>
            <a
              href="logout.html"
              className="link m-l-5 semibold is-3 is-red m-up-1"
            >
              <i className="m-r-1 fa-solid fa-right-from-bracket" />
              Log out
            </a>
          </div>
        </div>
        <div className="profile-info p-l-3 p-dw-4 elevated li-shadow br-3">
          <div className="form">
            <div className="subtitle semibold is-dark is-4">
              Your account information
            </div>
            <div className="form-div form-readonly">
              <p className="form-label">Name</p>
              <input
                type="text"
                className="form-input input-focused"
                placeholder="Anurag"
                readOnly=""
              />
              <input
                type="text"
                className="form-input input-focused m-up-1"
                placeholder="Sahu"
                readOnly=""
              />
            </div>
            <div className="form-div">
              <p className="form-label">Email address</p>
              <input
                type="email"
                className="form-input input-focused"
                placeholder="example@123.com"
                readOnly=""
              />
            </div>
            <div className="form-radio">
              <p className="form-label">Gender</p>
              <div className="form-radio-div">
                <label className="form-radio-label m-r-3">
                  <input type="radio" name="opinion" defaultChecked="" />
                  <i />
                  <span className="form-radio-button-text">Male</span>
                </label>
                <label className="form-radio-label m-r-3">
                  <input type="radio" name="opinion" />
                  <i />
                  <span className="form-radio-button-text">Female</span>
                </label>
                <label className="form-radio-label m-r-3">
                  <input type="radio" name="opinion" />
                  <i />
                  <span className="form-radio-button-text">Non binary</span>
                </label>
              </div>
            </div>
            <div className="form-div">
              <p className="form-label">Mobile Number</p>
              <input
                type="number"
                className="form-input input-focused"
                placeholder={123456789}
                readOnly=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { UserProfilePage };
