import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appReducer"
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


export const rootPersisitConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  // whitelist []
  //blacklist []
};

// export const rootReducer = combineReducers({
//   app: appSlice,
// });

const persistedReducer = persistReducer(rootPersisitConfig, appSlice);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});



console.log(store.getState());

const unsubscribe = store.subscribe(() =>
console.log('State after dispatch: ', store.getState()));