import { useAuth, useData } from "../../context";
import { reducerAction } from "../../utility/constants";
import "./modal.css";

const SelectAddressModal = ({ showModal, toggleModal }) => {
  const { dataState } = useData();

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
          {dataState.address.map((address) => (
            <SelectAddressSmallCard address={address} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SelectAddressSmallCard = ({ address }) => {
  const { dispatch } = useData();
  const clickAddress = () =>
    dispatch({
      type: reducerAction.CHANGE_DEFAULT_ADDRESS,
      value: address._id,
    });
  return (
    <>
      <div
        onClick={() => clickAddress()}
        className="select-address-content p-y-1 p-x-1 br-1 m-l-"
      >
        <div className="select-address-name semibold is-3">{address.name}</div>
        <div className="is-3 select-address-modal-para p-dw-1 p-1-r">
          {address.street}, {address.city}, {address.state}, {address.country}
        </div>
      </div>
    </>
  );
};

export { SelectAddressModal };
