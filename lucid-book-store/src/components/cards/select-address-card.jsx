import { useEffect, useState } from "react";
import { useData } from "../../context";
import { SelectAddressModal } from "../modal/select-address-modal";
import styles from "./card.css";

const SelectAddressCard = () => {
  const { dataState, dispatch } = useData();
  const [showModal, setShowModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({});

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };
  const clickSelectAddress = () => {
    toggleModal();
  };

  useEffect(() => {
    setSelectedAddress(
      dataState.address.filter(
        (address) => address._id === dataState.defaultAddress
      )[0]
    );
  }, [dataState]);

  return (
    <div className="select-address-card m-x-2">
      <SelectAddressModal showModal={showModal} toggleModal={toggleModal} />
      <div className="is-4 m-y-3 margin-left semibold">Delivery Address</div>
      <div
        onClick={clickSelectAddress}
        className="select-address-content p-y-1 p-x-1 br-1 margin-left"
      >
        <div className="select-address-name semibold is-3">
          {selectedAddress?.name}
        </div>
        <div className="is-3 select-address-para p-dw-1 p-1-r">
          {selectedAddress?.street}, {selectedAddress?.city},{" "}
          {selectedAddress?.state}, {selectedAddress?.country}
        </div>
        <i className="far m-up-1 is-3 fa-edit"></i>
      </div>
    </div>
  );
};

export { SelectAddressCard };
