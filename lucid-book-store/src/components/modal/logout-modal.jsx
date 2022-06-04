import { useAuth } from "../../context";
import "./modal.css";

const LogoutModal = ({ showLogout, toggleLogout }) => {
  const { logoutHandler } = useAuth();
  const logoutClickHandler = () => {
    logoutHandler();
    toggleLogout();
  };
  const closeLogoutModalClickHandler = () => {
    toggleLogout();
  };
  return (
    <div
      style={{ display: showLogout ? "block" : "none" }}
      className="modal-wrapper"
    >
      <div className="logout m-up-6">
        <div className="modal center-x elevated center-y shadow">
          <button
            onClick={closeLogoutModalClickHandler}
            className="card-cross btn-close is-medium"
          >
            <i className="fas fa-times" />
          </button>
          <i className="modal-icon is-blue fas fa-sign-out-alt" />
          <div className="textbox">
            <div className="title text-center">Log out</div>
            <div className="text text-center">
              Clicking below will log you out of the current device.
            </div>
          </div>
          <div className="btn-horizontal">
            <button
              onClick={logoutClickHandler}
              className="btn-grey has-red btn-small"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LogoutModal };
