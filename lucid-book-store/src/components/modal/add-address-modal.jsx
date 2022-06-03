import { useEffect, useState } from "react";
import { useAuth, useData } from "../../context";
import {
  addAddress,
  updateAddress,
} from "../../server-requests/server-requests";
import { initialInputFieldAddAddress } from "../../utility/constants";

const AddAddressModal = ({ hideAddressModal, addressModal, editAddressID }) => {
  const { token } = useAuth();
  const {
    dataState: { address },
    dispatch,
  } = useData();

  const [inputField, setInputField] = useState(initialInputFieldAddAddress);
  const { street, city, state, zipCode, name } = inputField;

  const clickAdd = () => {
    editAddressID
      ? updateAddress(editAddressID, inputField, token, dispatch)
      : addAddress(inputField, token, dispatch);
    setInputField(initialInputFieldAddAddress);
  };

  useEffect(() => {
    if (editAddressID) {
      const editAddress = address?.filter(
        (item) => item._id === editAddressID
      )[0];
      setInputField(editAddress);
    }
  }, [editAddressID]);

  return (
    <div
      style={{ display: addressModal || editAddressID ? "block" : "none" }}
      className="modal-wrapper"
    >
      <div className="address-modal">
        <div className="modal center-x elevated center-y shadow">
          <button
            onClick={() => {
              setInputField(initialInputFieldAddAddress);
              hideAddressModal();
            }}
            className="card-cross btn-close is-medium"
          >
            <i className="fas fa-times" />
          </button>
          <div className="textbox m-dw-1">
            <div className="title">Add Address</div>
          </div>

          <div className="form-div align-left address-modal-form">
            <p className="form-label">Full Name</p>
            <i className="fas fa-user is-grey"></i>
            <input
              onChange={(e) =>
                setInputField({ ...inputField, name: e.target.value })
              }
              type="text"
              className="form-input"
              placeholder="Full Name"
              value={name}
            />
          </div>
          <div className="form-div align-left m-up-2">
            <p className="form-label">Street</p>
            <i className="fas fa-road"></i>
            <input
              onChange={(e) =>
                setInputField({ ...inputField, street: e.target.value })
              }
              type="text"
              className="form-input"
              placeholder="House, street"
              value={street}
            />
          </div>
          <div className="form-div align-left m-up-2">
            <p className="form-label">City</p>
            <i className="fas fa-city"></i>
            <input
              onChange={(e) =>
                setInputField({ ...inputField, city: e.target.value })
              }
              type="text"
              className="form-input"
              placeholder="City"
              value={city}
            />
          </div>
          <div className="form-div align-left m-up-2">
            <p className="form-label">State</p>
            <i className="fas fa-map"></i>
            <input
              onChange={(e) =>
                setInputField({ ...inputField, state: e.target.value })
              }
              type="text"
              className="form-input"
              placeholder="State"
              value={state}
            />
          </div>
          <div className="form-div align-left m-up-2">
            <p className="form-label">Pin Code</p>
            <i className="fas fa-angle-double-right"></i>
            <input
              onChange={(e) =>
                setInputField({ ...inputField, zipCode: e.target.value })
              }
              type="number"
              className="form-input"
              placeholder="zip code"
              value={zipCode}
            />
          </div>
          <div className="form-div align-left m-up-2">
            <p className="form-label">Phone Number</p>
            <i className="fas fa-phone"></i>{" "}
            <input
              onChange={(e) =>
                setInputField({ ...inputField, mobile: e.target.value })
              }
              type="number"
              className="form-input"
              placeholder="Phone number"
            />
          </div>

          <div className="btn-horizontal">
            <button
              onClick={clickAdd}
              className="btn-primary width-70 m-up-4 btn-small btn-w-icon"
            >
              <i className="fas fa-plus"></i>
              {editAddressID ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AddAddressModal };
