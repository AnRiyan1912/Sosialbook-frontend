import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RedirectLogin = () => {
  const nav = useNavigate();
  useEffect(() => {
    nav("/login");
  }, []);
};
