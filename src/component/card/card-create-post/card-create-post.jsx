import { FaLaughBeam } from "react-icons/fa";
import { AiFillVideoCamera } from "react-icons/ai";
import { IoImages } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useState } from "react";

export const CardCreatePost = () => {
  const [createPost, setCreatePost] = useState(false);

  const userSelector = useSelector((state) => state.auth);
  return (
    <div className="col-auto bg-white px-4 pt-4 pb-2 mt-5 rounded-lg">
      <div className="flex gap-2 justify-between items-center">
        <img
          className="w-10 h-10 rounded-full"
          src={userSelector.image_profile}
          alt=""
        />
        <div className="border border-black cursor-pointer w-full rounded-3xl h-9 flex items-center hover:bg-slate-100">
          <span className="ml-4">
            Apa yang anda pikirkan, {userSelector.firstname}?
          </span>
        </div>
      </div>
      <div className="flex justify-between border-t border-black mt-2 p-3 items-center">
        <div className="flex gap-2">
          <AiFillVideoCamera size={24} />
          <span>Siaran Langsung</span>
        </div>
        <div className="flex gap-2">
          <IoImages size={24} />
          Foto/video
        </div>
        <div className="flex gap-2">
          <FaLaughBeam size={24} />
          Perasaan/aktivitas
        </div>
      </div>
      {createPost ? (
        <div className="absolute">
          <CardCreatePost />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
