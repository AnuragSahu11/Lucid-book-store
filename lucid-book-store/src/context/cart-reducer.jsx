const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...cartState, cart: [...cartState.cart, action.value] };
    case "REMOVE_FROM_CART":
      return removeFromCart(cartState, action.value.id);
  }
};

const removeFromCart = (cartState, id) => {
  console.log(cartState.cart[0]._id, id);
  const modifiedCart = cartState.cart.filter((item) => !(item._id === id));
  return { ...cartState, cart: modifiedCart };
};

export { cartReducer };
