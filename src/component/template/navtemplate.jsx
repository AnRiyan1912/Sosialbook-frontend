import { useEffect, useState } from "react";
import { NavBar } from "../layouts/navbar";
import { SideBar } from "../layouts/sidebar";
import { useSelector } from "react-redux";
import { api } from "../../api/axios";

export const NavTemplate = ({ children }) => {
  // const [imageUser, setImageUser] = useState(null);
  // const userSelector = useSelector((state) => state.auth);
  // const fetchImageUser = async () => {
  //   try {
  //     const result = await api.get(`auth/renderimage/${userSelector.id}`, {
  //       responseType: "blob", //untuk mengambil data sebagai blob
  //     });
  //     const blob = new Blob([result.data], { type: "image/png" }); //ganti type sesuai format gambar yang sesuai
  //     const objectURL = URL.createObjectURL(blob);
  //     setImageUser(objectURL);
  //     console.log(result.data);
  //   } catch (err) {
  //     console.error("Error fetching image user", err);
  //   }
  // };
  // console.log(imageUser);

  // useEffect(() => {
  //   fetchImageUser();
  // }, [userSelector]);
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
