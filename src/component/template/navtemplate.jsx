import { NavBar } from "../layouts/navbar";
import { SideBar } from "../layouts/sidebar";

export const NavTemplate = ({ chiledren }) => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div>{chiledren}</div>
      </div>
      <SideBar />
    </>
  );
};
