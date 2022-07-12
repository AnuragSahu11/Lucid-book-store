import { useEffect, useState } from "react";
import { useAuth, useData } from "../../context";
import {
  addAddress,
  updateAddress,
} from "../../server-requests/server-requests";
import {
  dummyAddress,
  initialInputFieldAddAddress,
} from "../../utility/constants";
import { toast } from "react-toastify";

const AddAddressModal = ({ hideAddressModal, addressModal, editAddressID }) => {
  const { token } = useAuth();
  const {
    dataState: { address },
    dispatch,
  } = useData();

  const [inputField, setInputField] = useState(initialInputFieldAddAddress);
  const { street, city, state, zipCode, name, mobile } = inputField;

  const validateForm = () => {
    const regex = /^\d+$/;
    return (
      street &&
      city &&
      state &&
      zipCode.length === 6 &&
      regex.test(zipCode) &&
      regex.test(mobile) &&
      name &&
      mobile.length === 10
    );
  };

  const clickAdd = () => {
    if (validateForm()) {
      editAddressID
        ? updateAddress(editAddressID, inputField, token, dispatch)
        : addAddress(inputField, token, dispatch);
      setInputField(initialInputFieldAddAddress);
      hideAddressModal();
    } else {
      toast.warn("Fill correct Address");
    }
  };

  const clickAddDummy = () => {
    setInputField(dummyAddress);
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
          <div className="textbox">
            <div className="title m-y-0">Add Address</div>
          </div>

          <div className="form-div align-left address-modal-form">
            <p className="form-label m-y-0">Full Name</p>
            <i className="fas fa-user is-lighter is-grey m-up-1"></i>
            <input
              onChange={(e) =>
                setInputField({ ...inputField, name: e.target.value })
              }
              type="text"
              className="form-input m-up-1"
              placeholder="Full Name"
              value={name}
            />
          </div>
          <div className="form-div align-left m-up-1">
            <p className="form-label m-y-0">Street</p>
            <i className="fas fa-road is-lighter m-up-1"></i>
            <input
              onChange={(e) =>
                setInputField({ ...inputField, street: e.target.value })
              }
              type="text"
              className="form-input m-up-1"
              placeholder="House, street"
              value={street}
            />
          </div>
          <div className="form-div align-left m-up-1">
            <p className="form-label m-y-0">City</p>
            <i className="fas fa-city is-lighter m-up-1"></i>
            <input
              onChange={(e) =>
                setInputField({ ...inputField, city: e.target.value })
              }
              type="text"
              className="form-input m-up-1"
              placeholder="City"
              value={city}
            />
          </div>
          <div className="form-div align-left m-up-1">
            <p className="form-label m-y-0">State</p>
            <i className="fas fa-map is-lighter m-up-1"></i>
            <input
              onChange={(e) =>
                setInputField({ ...inputField, state: e.target.value })
              }
              type="text"
              className="form-input m-up-1"
              placeholder="State"
              value={state}
            />
          </div>
          <div className="form-div align-left m-up-1">
            <p className="form-label m-y-0">Pin Code</p>
            <i className="fas fa-angle-double-right is-lighter m-up-1"></i>
            <input
              onChange={(e) =>
                setInputField({ ...inputField, zipCode: e.target.value })
              }
              type="number"
              className="form-input m-up-1"
              placeholder="zip code"
              value={zipCode}
            />
          </div>
          <div className="form-div align-left m-up-1">
            <p className="form-label m-y-0">Phone Number</p>
            <i className="fas fa-phone is-lighter m-up-1"></i>{" "}
            <input
              onChange={(e) =>
                setInputField({ ...inputField, mobile: e.target.value })
              }
              type="number"
              className="form-input m-up-1"
              placeholder="Phone number"
              value={mobile}
            />
          </div>

          <div className="btn-vertical">
            <button
              onClick={clickAdd}
              className="btn-primary width- m-up-3 btn-small btn-w-icon"
            >
              <i className="fas fa-plus"></i>
              {editAddressID ? "Update" : "Add"}
            </button>
            <button
              onClick={clickAddDummy}
              className="btn-secondary width-7 m-up-3 btn-small btn-w-icon"
            >
              <i className="fas fa-plus"></i>
              Add dummy address
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export { AddAddressModal };
