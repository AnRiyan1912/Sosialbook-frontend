import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RedirectLogin = () => {
  const nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      nav("/login");
    } else if (localStorage.getItem("auth")) {
      nav("/home");
    }
  }, []);
};
