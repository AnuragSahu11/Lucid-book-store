import { useAuth, useData } from "../../../context";
import { deleteAddress } from "../../../server-requests/server-requests";

const AddressBlock = ({ addressData, setEditAddressID }) => {
  const { token } = useAuth();
  const { dispatch } = useData();

  const { name, street, city, state, zipCode, _id, country, mobile } =
    addressData;

  const clickDelete = () => {
    deleteAddress(_id, token, dispatch);
  };
  const clickEdit = () => {
    setEditAddressID(addressData._id);
  };
  const clickDefault = () => {};

  return (
    <div className="address-blocks elevated br-2 li-shadow">
      <div className="textbox p-up-4 p-x-4">
        {name}
        <br />
        <hr />
        {`${street}, ${city}, ${state}, ${country}, ${zipCode}`}
        <br />
        {`Phone Number - ${mobile}`}
      </div>
      <div className="flex-r-w">
        <i onClick={clickEdit} className="fas fa-edit m-l-4 is-4 m-dw-3"></i>
        <i
          onClick={clickDelete}
          className="m-l-4 is-4 m-dw-3 fa-solid fa-trash-can"
        />
      </div>
    </div>
  );
};

export { AddressBlock };
