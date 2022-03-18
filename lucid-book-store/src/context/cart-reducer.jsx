const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...cartState, cart: [...cartState.cart, action.value] };
    case "REMOVE_FROM_CART":
      return removeFromList(cartState, action.value.id, "cart");
    case "INCREASE_QUANTITY":
      return changeQuantity(cartState, action.value, 1);
    case "DECREASE_QUANTITY":
      return changeQuantity(cartState, action.value, -1);
    case "ADD_TO_WISHLIST":
      return {
        ...cartState,
        wishlist: [...cartState.wishlist, { ...action.value, quantity: 1 }],
      };
    case "REMOVE_FROM_WISHLIST":
      return removeFromList(cartState, action.value, "wishlist");
  }
};

const removeFromList = (cartState, id, list) => {
  const modifiedList = cartState[list].filter((item) => !(item._id === id));
  return { ...cartState, [list]: modifiedList };
};
const changeQuantity = (cartState, id, num) => {
  const modifiedCart = cartState.cart.map((item) => {
    if (item._id === id) {
      return { ...item, quantity: item.quantity + num };
    } else {
      return item;
    }
  });
  return { ...cartState, cart: modifiedCart };
};
export { cartReducer };
