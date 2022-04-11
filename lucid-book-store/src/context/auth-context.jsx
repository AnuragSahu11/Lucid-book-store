import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useData } from "./data-context";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLogged] = useState(true);
  const { dispatch } = useData();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const signupHandler = async (credentials) => {
    try {
      const response = await axios.post(`/api/auth/signup`, credentials);
      localStorage.setItem("token", response.data.encodedToken);
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
      console.log(data.foundUser);
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
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, signupHandler, loginHandler, logoutHandler, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
