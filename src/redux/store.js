import { createStore } from "redux";
import CartReduer from "./CartReducer";

export const store = createStore(CartReduer, { cart: [] });
