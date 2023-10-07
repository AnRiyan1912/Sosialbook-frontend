import { useDispatch } from "react-redux";
import AvatarDefaultProfile from "../../assets/default-avatar-profile.jpg";
import { Storefront, Video, UsersThree } from "@phosphor-icons/react";
import { userLogout } from "../../redux/middlewares/auth-middlewares";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleLogout = async () => {
    await dispatch(userLogout());
    nav("/login");
  };
  return (
    <div className="top-0 fixed w-full h-14 text-black bg-white z-10 border-b-2 border-violet-700 p-1.5">
      <nav className="flex  justify-between">
        <div className="flex items-center ml-1 gap-2">
          <span className="text-xl font-bold border-b-2 border-violet-700">
            SosialBook
          </span>
          <input
            type="text"
            placeholder="Search"
            className="border-2 border border-violet-700 rounded-xl p-1.5"
          />
        </div>
        <div className="flex gap-40">
          <div className="flex  items-center">
            <UsersThree size={28} />
          </div>
          <div className="flex  items-center">
            <Video size={28} />
          </div>
          <div className="flex  items-center">
            <Storefront size={28} />
          </div>
        </div>

        <div className="flex  items-center gap-2">
          <div style={{ borderRadius: "50%" }}>
            <img
              src={AvatarDefaultProfile}
              alt=""
              className="object-fill w-11"
            />
          </div>
          <div className="border-2  border-violet-700 p-1 rounded-lg">
            <button className="bg-white" onClick={() => handleLogout()}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
