import { api } from "../../api/axios";
import { types } from "../types/types";

export const userLogin = (values) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/auth/login", { ...values });

      const user = response.data.user;
      localStorage.setItem("auth", response.data.token);
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
