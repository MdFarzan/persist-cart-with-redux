export default function CartReducer(state = { cart: [] }, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // state.cart.push({
      //   id: action.payload.id,
      //   name: action.payload.name,
      //   img: action.payload.img,
      //   qty: 1,
      // });

      console.log(state);
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.payload.id,
            name: action.payload.name,
            img: action.payload.img,
            price: action.payload.price,
            qty: 1,
          },
        ],
      };
      break;
    case "REMOVE_FROM_CART":
      var cartItems = state.cart;
      var restItems = cartItems.filter((item) => item.id != action.payload.id);
      return { ...state, cart: [...restItems] };
      break;
    case "INC_QTY":
      return { ...state };
      break;
    case "DEC_QTY":
      return { ...state };
      break;

    default:
      return { ...state };
  }
}
