import {
  ThumbsUp,
  ThumbsDown,
  ChatCenteredText,
  DotsThreeOutlineVertical,
  Heart,
  Smiley,
  ArrowBendUpRight,
  SmileySad,
  SmileyAngry,
} from "@phosphor-icons/react";
import { compareTimeCreated } from "../../../utils/compare-time-created";
import { AiFillDislike, AiFillHeart } from "react-icons/ai";
import { FaFaceLaughSquint } from "react-icons/fa6";
import { BsFillEmojiSmileFill, BsFillEmojiAngryFill } from "react-icons/bs";

export const PostCard = ({ post }) => {
  return (
    <>
      {post.map((itemPost, index) => {
        return (
          <div
            className="col-auto border-2 bg-slate-100 rounded-lg mt-5 "
            key={index}
          >
            <div className="flex gap-2 p-2">
              <div>
                <img
                  src={itemPost?.users?.image_profile}
                  alt="profileimage"
                  className="rounded-full w-10 h-10 object-fill"
                />
              </div>
              <div className=" flex items-center ">
                <div className="font-semibold text-sm">
                  <span>{itemPost?.users?.firstname}</span>
                </div>

                <div className="absolute mt-10 text-xs">
                  {compareTimeCreated(itemPost?.createdAt)}
                </div>
              </div>
            </div>
            <div className="col-auto p-2">
              <div className="text-xs">
                <span>{itemPost?.caption}</span>
              </div>
            </div>
            <div>
              <img
                src={itemPost?.image_post}
                alt="postimage"
                style={{ width: "1000px", height: "400px" }}
              />
            </div>
            <div className="head justify-center gap-32 p-6 group flex">
              <div className="flex gap-2 hover:select-container cursor-pointer hoverbg-slate-300">
                <ThumbsUp size={24} />
                <span>Suka</span>
              </div>
              <div className="group-hover:opacity-100 transition-opacitypx-1 absolute -translate-x-1/2 translate-y-full opacity-0 text-white -mt-20 -ml-32 flex gap-3">
                <div className="cursor-pointer text-blue-600">
                  <span>
                    <AiFillDislike size={36} />
                  </span>
                </div>
                <div className="cursor-pointer text-red-500">
                  <span>
                    <AiFillHeart size={36} />
                  </span>
                </div>
                <div className="cursor-pointer text-yellow-300">
                  <span>
                    <FaFaceLaughSquint size={36} />
                  </span>
                </div>
                <div className="cursor-pointer  text-yellow-300">
                  <span>
                    <BsFillEmojiSmileFill size={36} />
                  </span>
                </div>
                <div className="cursor-pointer text-red-400">
                  <span>
                    <BsFillEmojiAngryFill size={36} />
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <ChatCenteredText size={24} />
                <span>Komentar</span>
              </div>
              <div className="flex gap-2">
                <ArrowBendUpRight size={24} />
                <span>Bagikan</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
