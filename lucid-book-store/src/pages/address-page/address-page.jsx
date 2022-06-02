import { useEffect, useState } from "react";
import { AddAddressModal } from "../../components/modal/add-address-modal";
import { useAuth, useData } from "../../context";
import { getUserAddress } from "../../server-requests/server-requests";
import "./address-page.css";
import { AddressBlock } from "./components/address-block";

const AddressPage = () => {
  const {
    dataState,
    dataState: { address },
    dispatch,
  } = useData();
  const { token } = useAuth();

  const [addressList, setAddressList] = useState([]);
  const [addressModal, setAddressModal] = useState(false);
  const [editAddressID, setEditAddressID] = useState(null);

  const showAddressModal = () => {
    setAddressModal(true);
    setEditAddressID(null);
  };

  const hideAddressModal = () => {
    setAddressModal(false);
    setEditAddressID(null);
  };

  useEffect(() => {
    (async () => {
      await getUserAddress(token, dispatch);
      setAddressList(
        address.map((address) => <AddressBlock addressData={address} />)
      );
    })();
  }, []);

  useEffect(() => {
    setAddressList(
      address.map((address) => (
        <AddressBlock
          addressData={address}
          setEditAddressID={setEditAddressID}
        />
      ))
    );
  }, [dataState]);

  return (
    <main>
      <AddAddressModal
        hideAddressModal={hideAddressModal}
        addressModal={addressModal}
        editAddressID={editAddressID}
      />
      <div className="m-x-4">
        <div className="title p-y-3 is-5">Address</div>
        <div className="address flex-r-w">
          <div
            onClick={showAddressModal}
            className="is-light flex-c-w align-center justify-content-center add-address br-2"
          >
            <i className="fa-solid fa-plus is-6" />
            <div className="title m-up-1 semibold is-4">Add address</div>
          </div>
          {addressList}
        </div>
      </div>
    </main>
  );
};

export { AddressPage };
