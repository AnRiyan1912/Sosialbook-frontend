import { useSelector } from "react-redux";
import { FaUserFriends, FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDownArrow, BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineSmile, AiOutlineGif } from "react-icons/ai";
import { IoImages } from "react-icons/io5";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { Input } from "@chakra-ui/react";

export const ModalPostCreate = ({ setCreatePost }) => {
  const userSelector = useSelector((state) => state.auth);
  return (
    <div className="fixed w-full z-50 h-full  left-0 top-0 justify-center items-center flex bg-black bg-opacity-40">
      {" "}
      <div className="col-auto w-1/3 h-2/3 bg-white p-4  z-40 2xl:ml-14">
        <div className="flex justify-end ">
          <div
            className="text-xl font-bold flex items-center justify-center bg-purple-950 text-white  absolute cursor-pointer"
            onClick={() => setCreatePost(false)}
          >
            <span className="p-1 px-3">x</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span>Buat postingan</span>
        </div>
        <div className="col-auto">
          <div className="flex gap-2">
            <div>
              <img
                src={userSelector.image_profile}
                alt="img-profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="col-auto">
              <span>{userSelector.firstname}</span>
              <button className="flex justify-between items-center gap-1">
                <FaUserFriends size={12} />
                <span>Teman</span>
                <BiSolidDownArrow size={12} />
              </button>
            </div>
          </div>
          <div className="mt-2 border border-slate-400">
            <textarea className="h-80 w-full resize-none" type="text" />
          </div>
          <div className="mt-2">
            <input type="file" />
          </div>
          <div className="flex justify-between mt-4">
            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-orange-200">
              Aa
            </div>
            <AiOutlineSmile size={28} />
          </div>

          <div className="w-full h-20 flex justify-between mt-4">
            <div>
              <span>Tambahkan ke Postingan Anda</span>
            </div>
            <div className="flex justify-between gap-5">
              <IoImages size={28} />
              <FaUserTag size={28} />
              <BsFillEmojiLaughingFill size={28} />
              <FaLocationDot size={28} />
              <div className="flex justify-center items-center w-10 h-10">
                <AiOutlineGif size={28} />
              </div>
              <BiDotsHorizontalRounded size={28} />
            </div>
          </div>
          <button className="w-full h-8 flex justify-center items-center bg-purple-950 text-white">
            <span>Kirim</span>
          </button>
        </div>
      </div>
    </div>
  );
};
