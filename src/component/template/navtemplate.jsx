import { NavBar } from "../layouts/navbar";
import { SideBar } from "../layouts/sidebar";

export const NavTemplate = ({ children }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="flex justify-center ">
        <div>{children}</div>
      </div>
    </>
  );
};
