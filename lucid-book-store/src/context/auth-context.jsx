import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useData } from "./data-context";
import { useNavigate } from "react-router-dom";
import { reducerAction } from "../utility/constants";
import { getUserAddress } from "../server-requests/server-requests";
import { toast } from "react-toastify";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [pageLoading, setPageLoading] = useState(false);

  const signupHandler = async (credentials) => {
    const { email, password, firstName, lastName } = credentials;
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        email,
        password,
        firstName,
        lastName,
      });
      navigate("/login");
      toast.success("Account created");
      toast.info("Login new account");
    } catch (error) {
      toast.error("Sign up failed");
    }
  };

  const loginHandler = async (credentials, from) => {
    try {
      const { data } = await axios.post(`/api/auth/login`, credentials);
      localStorage.setItem("token", data.encodedToken);
      setToken(data.encodedToken);
      dispatch({
        type: reducerAction.LOGIN_USER_DATA,
        value: {
          cart: data.foundUser.cart,
          wishlist: data.foundUser.wishlist,
          address: data.foundUser.address,
        },
      });
      toast.success("Login successfull");
      navigate(from);
    } catch (error) {
      toast.error("Login failed");
    }
  };

  const logoutHandler = async () => {
    localStorage.clear();
    setToken(null);
    dispatch({ type: "CLEAR_CART_WISHLIST" });
    navigate("/");
    toast.info("You have been Logged out");
  };

  useEffect(() => {
    if (token) {
      getUserAddress(token, dispatch);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signupHandler,
        loginHandler,
        logoutHandler,
        token,
        pageLoading,
        setPageLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
