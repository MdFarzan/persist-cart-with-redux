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
            qty: 1,
          },
        ],
      };
      break;
    case "REMOVE_FROM_CART":
      return { ...state };
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
