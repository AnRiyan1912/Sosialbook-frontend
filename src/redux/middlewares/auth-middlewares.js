import { api } from "../../api/axios";
import { types } from "../types/types";

export const userLogin = (values) => {
  return async (dispatch) => {
    // console.log(values);
    try {
      if (values?.data?.token) {
        localStorage.setItem("auth", values?.data?.token);
        const user = values?.data?.user;

        const imageUser = await api
          .get(`/auth/renderimage/${user.id}`, {
            responseType: "blob",
          })
          .then((result) => result.data);
        dispatch({
          type: types.USER_LOGIN,
          payload: { ...user, imageUser },
        });
      }
      const response = await api.post("/auth/login", { ...values });

      if (response?.data.status !== 200) {
        return response.data;
      }
      const user = response?.data?.user;
      //set token to localstorage
      localStorage.setItem("auth", response?.data?.token);
      //get image blob user
      console.log(user.id);
      const imageUser = await api
        .get(`/auth/renderimage/${user.id}`, {
          responseType: "blob",
        })
        .then((result) => result.data);
      // console.log(imageUser.data, "ini data image user");

      dispatch({
        type: types.USER_LOGIN,
        payload: { ...user, imageUser },
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
