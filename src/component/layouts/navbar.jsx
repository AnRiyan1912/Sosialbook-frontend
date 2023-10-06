import AvatarDefaultProfile from "../../assets/default-avatar-profile.jpg";
import { Storefront, Video, UsersThree } from "@phosphor-icons/react";

export const NavBar = () => {
  return (
    <div className="top-0 fixed w-full h-12">
      <nav className="flex justify-between">
        <div>SosialBook</div>
        <div>
          <UsersThree size={44} />
        </div>
        <div>
          <Video size={24} />
        </div>
        <div>
          <Storefront size={24} />
        </div>
        <div>
          <img
            src={AvatarDefaultProfile}
            w="100"
            h="100"
            alt=""
            className="object-fill"
          />
        </div>
        <div>
          <button className="bg-white">Logout</button>
        </div>
      </nav>
    </div>
  );
};
