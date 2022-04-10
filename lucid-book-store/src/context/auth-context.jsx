import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [token, setToken] = useState(null);

  const signupHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: "Adarsh",
        lastName: "Balika",
        email: "adarshbalika@gmail.camp",
        password: "adarshbalika",
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: "adarshbalika@gmail.camp",
        password: "adarshbalika",
      });
      console.log(response);
      setToken(response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, signupHandler, loginHandler, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
