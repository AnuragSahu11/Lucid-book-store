import { useData } from "../../context";
import { SelectAddressList } from "../list/select-address-list";
import "./modal.css";

const SelectAddressModal = ({ showModal, toggleModal }) => {
  const {
    dataState: { address },
  } = useData();

  return (
    <div
      style={{ display: showModal ? "block" : "none" }}
      className="modal-wrapper"
    >
      <div className="select-address-modal m-up-6">
        <div className="modal center-x elevated center-y shadow">
          <button
            onClick={toggleModal}
            className="card-cross btn-close is-medium"
          >
            <i className="fas fa-times" />
          </button>
          <div className="is-3 semibold m-dw-2">Select Delivery Address</div>
          {address.map((address) => (
            <SelectAddressList address={address} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { SelectAddressModal };
