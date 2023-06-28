import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import user from "./slices/user";


const reducers = combineReducers({
  user,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat(
  //     createLogger(),
  //     userApi.middleware,
  //     blogApi.middleware,
  //     dashboardApi.middleware,
  //     eventApi.middleware,
  //     notificationApi.middleware,
  //     projectApi.middleware,
  //     infoApi.middleware,
  //   ),
});
