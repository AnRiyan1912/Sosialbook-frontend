import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user";

export const rootReducers = combineReducers({
  auth: userReducer,
});
