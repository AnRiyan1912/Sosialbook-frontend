import { Storefront, Video, UsersThree, Users } from "@phosphor-icons/react";
import ImgProfile from "../../assets/default-avatar-profile.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const SideBar = ({ imageUser }) => {
  const nav = useNavigate();
  const userSelector = useSelector((state) => state.auth);
  return (
    <div className="left-0 fixed h-full w-80 bg-white ">
      <nav>
        <div className="col-auto items-center">
          <div className="h-20  "></div>
          <div className="flex gap-2 ml-2">
            <div className="w-10 h-10">
              <img
                src={URL.createObjectURL(
                  new Blob([userSelector.imageUser], { type: "image/png" })
                )}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="flex items-center justify-center">
              <span>
                {userSelector.firstname + " " + userSelector.lastname}
              </span>
            </div>
          </div>
          <div className="flex gap-2 mt-6 hover:bg-purple-900 hover:text-white rounded-xl">
            <div className="p-2">
              <Users size={36} />
            </div>
            <span className="flex justify-center items-center">Friends</span>
          </div>
          <div
            className="flex gap-2 mt-6 cursor-pointer hover:bg-purple-900 hover:text-white rounded-xl"
            onClick={() => nav("/marketplace")}
          >
            <div className="p-2">
              <Storefront size={36} />
            </div>
            <span className="flex justify-center items-center">
              Marketplace
            </span>
          </div>
          <div className="flex gap-2 mt-6  hover:bg-purple-900 hover:text-white rounded-xl">
            <div className="p-2">
              <Users size={36} />
            </div>
            <span className="flex justify-center items-center">Friends</span>
          </div>
          <div className="flex gap-2 mt-6  hover:bg-purple-900 hover:text-white rounded-xl">
            <div className="p-2">
              <Users size={36} />
            </div>
            <span className="flex justify-center items-center">Friends</span>
          </div>
        </div>
      </nav>
    </div>
  );
};
