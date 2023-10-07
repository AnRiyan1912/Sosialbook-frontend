import { Storefront, Video, UsersThree, Users } from "@phosphor-icons/react";
import ImgProfile from "../../assets/default-avatar-profile.jpg";
export const SideBar = () => {
  return (
    <div className="left-0 fixed h-full w-80 bg-white ">
      <nav>
        <div className="col-auto items-center">
          <div className="h-20  "></div>
          <div className="flex gap-2 ml-2">
            <div style={{ borderRadius: "50%" }}>
              <img src={ImgProfile} alt="" className="w-9" />
            </div>
            <div className="flex items-center justify-center">
              <span>Andre Riyanto</span>
            </div>
          </div>
          <div className="flex gap-2 ml-2 mt-6">
            <div>
              <Users size={36} />
            </div>
            <span>Friends</span>
          </div>
          <div className="flex gap-2 ml-2 mt-6">
            <div>
              <Storefront size={36} />
            </div>
            <span>Marketplace</span>
          </div>
          <div className="flex gap-2 ml-2 mt-6">
            <div>
              <Users size={36} />
            </div>
            <span>Friends</span>
          </div>
          <div className="flex gap-2 ml-2 mt-6">
            <div>
              <Users size={36} />
            </div>
            <span>Friends</span>
          </div>
        </div>
      </nav>
    </div>
  );
};
