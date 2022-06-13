import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context";
import { SelectAddressModal } from "../modal/select-address-modal";
import "./card.css";

const SelectAddressCard = () => {
  const navigate = useNavigate();
  const {
    dataState,
    dataState: { address },
  } = useData();

  const [showModal, setShowModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({});

  const { name, street, city, state, country } = selectedAddress || {};

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };
  const clickSelectAddress = () => {
    toggleModal();
  };
  useEffect(() => {
    setSelectedAddress(
      address.filter((address) => address._id === dataState.defaultAddress)[0]
    );
  }, [dataState]);

  return (
    <div className="select-address-card m-x-2">
      <SelectAddressModal showModal={showModal} toggleModal={toggleModal} />
      <div className="is-4 m-y-3 margin-left semibold">Delivery Address</div>
      {name ? (
        <div
          onClick={clickSelectAddress}
          className="select-address-content p-y-1 p-x-1 br-1 margin-left"
        >
          <div className="select-address-name semibold is-3">{name}</div>
          <div className="is-3 select-address-para p-dw-1 p-1-r">
            {street}, {city}, {state}, {country}
          </div>
          <i className="far m-up-1 is-3 fa-edit"></i>
        </div>
      ) : (
        <div
          onClick={() => navigate("/address")}
          className="select-address-content p-y-1 p-x-1 br-1 margin-left"
        >
          <div className="select-address-name semibold is-lighter is-3">
            <i className="fas fa-plus m-r-1"></i>Add Address
          </div>
        </div>
      )}
    </div>
  );
};

export { SelectAddressCard };
