import { NavBar } from "../layouts/navbar";
import { SideBar } from "../layouts/sidebar";

export const NavTemplate = ({ chiledren }) => {
  <>
    <NavBar />
    <div>{chiledren}</div>
    <SideBar />
  </>;
};
