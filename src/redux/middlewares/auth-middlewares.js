import { api } from "../../api/axios";
import { types } from "../types/types";

export const userLogin = (values) => {
  return async (dispatch) => {
    console.log(values);
    try {
      const response = await api.post("/auth/login", { ...values });
      console.log(response);
      if (response?.data.status !== 200) {
        return response.data;
      }
      const user = response?.data?.user;
      localStorage.setItem("auth", response?.data?.token);
      dispatch({
        type: types.USER_LOGIN,
        payload: user,
      });
      return types.success;
    } catch (err) {
      console.log(err?.response.data);
    }
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    localStorage.removeItem("auth");
    dispatch({
      type: types.USER_LOGOUT,
    });
  };
};
