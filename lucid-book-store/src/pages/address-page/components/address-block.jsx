import { useAuth, useData } from "../../../context";
import { deleteAddress } from "../../../server-requests/server-requests";

const AddressBlock = ({ addressData, setEditAddressID }) => {
  const { token } = useAuth();
  const { name, street, city, state, zipcode, _id } = addressData;
  const { dispatch } = useData();
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
        {`${street}, ${city}, ${state}, ${zipcode}`}
        <br />
        Phone number: 123456789
      </div>
      <div className="flex-r-w">
        <i onClick={clickEdit} className="fas fa-edit m-l-4 is-4 m-dw-3"></i>
        <i
          onClick={clickDelete}
          className="m-l-4 is-4 m-dw-3 fa-solid fa-trash-can"
        />
        <i
          onClick={clickDefault}
          className="m-l-4 is-4 m-dw-3 fas fa-check"
        ></i>
      </div>
    </div>
  );
};

export { AddressBlock };
