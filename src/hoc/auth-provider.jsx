import { useEffect } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/middlewares/auth-middlewares";
import { types } from "../redux/types/types";

export const AuthProvider = ({ children }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const fetchDataUser = async () => {
    const token = localStorage.getItem("auth");
    console.log(token);
    // await api.get("/auth/token").then((result) => {
    //   dispatch({ type: types.USER_LOGIN });
    // });
  };

  useEffect(() => {
    fetchDataUser();
  }, []);

  return children;
};
