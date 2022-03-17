const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...cartState, cart: [...cartState.cart, action.value] };
    case "REMOVE_FROM_CART":
      return removeFromCart(cartState, action.value.id);
    case "INCREASE_QUANTITY":
      return changeQuantity(cartState, action.value, 1);
    case "DECREASE_QUANTITY":
      return changeQuantity(cartState, action.value, -1);
  }
};

const removeFromCart = (cartState, id) => {
  console.log(cartState.cart[0]._id, id);
  const modifiedCart = cartState.cart.filter((item) => !(item._id === id));
  return { ...cartState, cart: modifiedCart };
};
const changeQuantity = (cartState, id, num) => {
  console.log(cartState.cart[0].quantity);
  const modifiedCart = cartState.cart.map((item) => {
    console.log(item._id, id);
    if (item._id === id) {
      return { ...item, quantity: item.quantity + num };
    } else {
      return item;
    }
  });
  return { ...cartState, cart: modifiedCart };
};
export { cartReducer };
