import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { checkInList } from "../../utility";
import { Alerts } from "../../utility/alerts/alerts";
import {
  addToCartApiMethod,
  decreaseQtyApiMethod,
  increaseQtyApiMethod,
  removeFromCartApiMethod,
} from "../Auth/api-methods";

const AddToCartProductListing = ({ product, classes }) => {
  const navigate = useNavigate();
  const { token, setIsLoading } = useAuth();
  const { dataState, dispatch } = useData();
  const [alertData, setAlertData] = useState({
    showAlert: false,
    alertMsg: "",
    alertType: "",
  });
  const [buttonText, setButtonText] = useState(null);

  const addToCartclickHandler = async () => {
    if (!token) {
      navigate("/login");
    }
    if (token && !checkInList(dataState.cart, product.id)) {
      setIsLoading(true);
      await addToCartApiMethod(product, token, dispatch);
      setAlertData({
        showAlert: true,
        alertMsg: "Added to Cart",
        alertType: "success",
      });
      setIsLoading(false);
    } else {
      navigate("/cart");
    }
  };

  useEffect(() => {
    checkInList(dataState.cart, product.id)
      ? setButtonText("Go to Cart")
      : setButtonText("Add to Cart");
  }, [dataState.cart]);

  return (
    <>
      <Alerts alertData={alertData} setAlertData={setAlertData} />
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCartclickHandler();
        }}
        className={classes}
      >
        <i className="fas fa-shopping-cart" />
        {buttonText}
      </button>
    </>
  );
};

const IncreaseProductQuantity = ({ id }) => {
  const { token, setIsLoading } = useAuth();
  const { dispatch } = useData();
  const [alertData, setAlertData] = useState({
    showAlert: false,
    alertMsg: "",
    alertType: "",
  });
  const increaseQtyButton = async () => {
    setIsLoading(true);
    await increaseQtyApiMethod(id, token, dispatch);
    setAlertData({
      showAlert: true,
      alertMsg: "Increased quantity",
      alertType: "success",
    });
    setIsLoading(false);
  };
  return (
    <>
      <Alerts alertData={alertData} setAlertData={setAlertData} />
      <button
        onClick={(e) => {
          e.stopPropagation();
          increaseQtyButton();
        }}
        className="btn-counter is-3 semibold"
      >
        +
      </button>
    </>
  );
};

const DecreaseProductQuantity = ({ id, qty }) => {
  const { token, setIsLoading } = useAuth();
  const { dispatch } = useData();
  const [alertData, setAlertData] = useState({
    showAlert: false,
    alertMsg: "",
    alertType: "",
  });
  const decreaseQtyclickHandler = async () => {
    setIsLoading(true);
    await decreaseQtyApiMethod(id, token, dispatch);
    setAlertData({
      showAlert: true,
      alertMsg: "Decreased quantity",
      alertType: "primary",
    });
    setIsLoading(false);
  };
  return (
    <>
      <Alerts alertData={alertData} setAlertData={setAlertData} />
      <button
        disabled={qty === 1}
        onClick={(e) => {
          e.stopPropagation();
          decreaseQtyclickHandler();
        }}
        className="btn-counter is-3 bold"
      >
        -
      </button>
    </>
  );
};

const RemoveFromCart = ({ id }) => {
  const { dispatch } = useData();
  const { token, setIsLoading } = useAuth();
  const [alertData, setAlertData] = useState({
    showAlert: false,
    alertMsg: "",
    alertType: "",
  });
  const removeClickHandler = async () => {
    setIsLoading(true);
    await removeFromCartApiMethod(id, token, dispatch);
    setIsLoading(false);
  };
  return (
    <>
      <Alerts alertData={alertData} setAlertData={setAlertData} />
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeClickHandler();
          setAlertData({
            showAlert: true,
            alertMsg: "Removed from Cart",
            alertType: "primary",
          });
        }}
        className="btn-grey btn-small btn-w-icon"
      >
        Remove from cart
      </button>
    </>
  );
};

export {
  AddToCartProductListing,
  IncreaseProductQuantity,
  DecreaseProductQuantity,
  RemoveFromCart,
};
