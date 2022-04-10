import { CartCard } from "./cart-card";
import { useCart } from "../../context/cart-wishlist-context";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import { useEffect, useState } from "react";
import { getHeader } from "../../utility";
import { useFilter } from "../../context/filter-context";

const CartProducts = () => {
  const { filterState } = useFilter();

  return filterState.cart.length > 0 ? (
    filterState.cart.map((item) => <CartCard key={item.id} product={item} />)
  ) : (
    <>loading</>
  );
};

export { CartProducts };
