// Here we define all the application level states and define action to make the changes
// to the state

export const initialState = {
  cart: [],
};

//Selector
export const getItemSubTotal = (cart) => {
  return cart?.reduce((amount, item) => Number(item.pRate) + amount, 0);
  // return cart.reduce((amount, item) => ({ pRate: item.pRate + amount.pRate }));
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id == action.id
      );
      let newcart = [...state.cart];
      if (index >= 0) {
        newcart.splice(index, 1);
      } else {
        console.warn(`cant remove product (id: ${action.id})`);
      }
      return {
        ...state,
        cart: newcart,
      };
    default:
      return state;
  }
};

export default reducer;
