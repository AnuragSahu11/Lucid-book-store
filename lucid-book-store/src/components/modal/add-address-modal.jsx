import { useEffect, useState } from "react";
import { useAuth, useData } from "../../context";
import {
  addAddress,
  updateAddress,
} from "../../server-requests/server-requests";

const AddAddressModal = ({ hideAddressModal, addressModal, editAddressID }) => {
  const { token } = useAuth();
  const { dataState, dispatch } = useData();

  const initialInputFields = {
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
    name: "",
  };
  const [inputField, setInputField] = useState(initialInputFields);

  const clickAdd = () => {
    editAddressID
      ? updateAddress(editAddressID, inputField, token, dispatch)
      : addAddress(inputField, token, dispatch);
    setInputField(initialInputFields);
  };

  useEffect(() => {
    if (editAddressID) {
      const editAddress = dataState?.address?.filter(
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
              setInputField(initialInputFields);
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
              value={inputField.name}
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
              value={inputField.street}
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
              value={inputField.city}
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
              value={inputField.state}
            />
          </div>
          <div className="form-div align-left m-up-2">
            <p className="form-label">Pin Code</p>
            <i className="fas fa-angle-double-right"></i>
            <input
              onChange={(e) =>
                setInputField({ ...inputField, zipcode: e.target.value })
              }
              type="number"
              className="form-input"
              placeholder="zip code"
              value={inputField.zipcode}
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
