import { useDispatch, useSelector } from "react-redux";
import AvatarDefaultProfile from "../../assets/default-avatar-profile.jpg";
import {
  Storefront,
  Video,
  UsersThree,
  ChatCircleDots,
  House,
  Bell,
} from "@phosphor-icons/react";
import { userLogout } from "../../redux/middlewares/auth-middlewares";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const userSelector = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await dispatch(userLogout());
    nav("/login");
  };
  return (
    <div className="top-0 fixed w-full h-14 text-black bg-white z-10 border-b-2 border-violet-700 p-1.5">
      <nav className="flex  justify-between">
        <div className="flex items-center ml-1 gap-2">
          <span
            className="text-xl font-bold border-b-2 border-violet-700 cursor-pointer"
            onClick={() => nav("/home")}
          >
            SosialBook
          </span>
          <input
            type="text"
            placeholder="Search"
            className="border-2 border border-violet-700 rounded-xl p-1.5"
          />
        </div>
        <div className="flex gap-32">
          <div className="flex  items-center cursor-pointer">
            <House size={28} onClick={() => nav("/home")} />
          </div>
          <div className="flex  items-center cursor-pointer">
            <Video size={28} />
          </div>
          <div
            className="flex  items-center cursor-pointer"
            onClick={() => nav("/marketplace")}
          >
            <Storefront size={28} />
          </div>
          <div className="flex  items-center cursor-pointer">
            <UsersThree size={28} />
          </div>
        </div>

        <div className="flex  items-center gap-8">
          <div className="cursor-pointer">
            <ChatCircleDots size={28} />
          </div>
          <div className="cursor-pointer">
            <Bell size={28} />
          </div>
          <div className="cursor-pointer object-cover w-10 h-10">
            <img
              src={userSelector.image_profile}
              alt=""
              className="rounded-full w-10 h-10"
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
