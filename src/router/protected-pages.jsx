import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedPage = ({ children, needLogin = false }) => {
  const userSelector = useSelector((state) => state.auth);
  const nav = useNavigate();

  const auth = localStorage.getItem("auth");
  const dispatch = useDispatch();
};
