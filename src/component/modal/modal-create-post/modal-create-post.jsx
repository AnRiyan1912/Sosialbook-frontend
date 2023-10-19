import { useSelector } from "react-redux";
import { FaUserFriends, FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDownArrow, BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineSmile, AiOutlineGif } from "react-icons/ai";
import { IoImages } from "react-icons/io5";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { Input } from "@chakra-ui/react";

export const ModalPostCreate = () => {
  const userSelector = useSelector((state) => state.auth);
  return (
    <div className="col-auto w-3/4 h-3/4">
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
            <button className="flex justify-between">
              <FaUserFriends size={12} />
              <span>Teman</span>
              <BiSolidDownArrow size={12} />
            </button>
          </div>
        </div>
        <div>
          <Input className="max-h-10 max-w-xs" type="text" />
        </div>
        <div className="flex justify-between">
          <div className="w-20 h-20">Aa</div>
          <AiOutlineSmile size={12} />
        </div>
        <div className="w-full h-20 flex justify-between">
          <div>
            <span>Tambahkan ke Postingan Anda</span>
          </div>
          <div className="flex justify-between">
            <IoImages size={12} />
            <FaUserTag size={12} />
            <BsFillEmojiLaughingFill size={12} />
            <FaLocationDot size={12} />
            <div className="flex justify-center items-center w-10 h-10">
              <AiOutlineGif size={12} />
            </div>
            <BiDotsHorizontalRounded size={12} />
          </div>
        </div>
        <button className="w-full h-8 flex justify-center items-center">
          <span>Kirim</span>
        </button>
      </div>
    </div>
  );
};
