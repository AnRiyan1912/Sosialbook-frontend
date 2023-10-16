import { userLogout } from "../redux/middlewares/auth-middlewares";

export const handleLogout = async (nav, dispatch) => {
  await dispatch(userLogout());
  nav("/login");
};
