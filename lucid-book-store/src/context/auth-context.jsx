import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useData } from "./data-context";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const signupHandler = async (credentials) => {
    console.log(credentials);
    try {
      const { data } = await axios.post(`/api/auth/signup`, credentials);
      localStorage.setItem("token", data.encodedToken);
      setToken(data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (credentials) => {
    try {
      const { data } = await axios.post(`/api/auth/login`, credentials);
      localStorage.setItem("token", data.encodedToken);
      setToken(data.encodedToken);
      dispatch({
        type: "LOGIN_API_DATA",
        value: { cart: data.foundUser.cart, wishlist: data.foundUser.wishlist },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = async () => {
    localStorage.clear();
    setToken(null);
    dispatch({ type: "CLEAR_CART_WISHLIST" });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ signupHandler, loginHandler, logoutHandler, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
