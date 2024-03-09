import { createStore } from "redux";
import CartReduer from "./CartReducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, CartReduer);

export const store = createStore(persistedReducer, { cart: [] });
