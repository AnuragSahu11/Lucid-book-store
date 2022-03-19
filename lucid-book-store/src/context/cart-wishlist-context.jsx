import React, { useContext, useReducer, createContext } from "react";
import { cartReducer } from "./cart-reducer";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initailCartValue);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const initailCartValue = { cart: [], wishlist: [] };

export { CartProvider, useCart };
