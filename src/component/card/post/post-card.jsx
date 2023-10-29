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
import { AiFillDislike, AiFillHeart, AiOutlineEllipsis } from "react-icons/ai";
import { FaFaceLaughSquint } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { BsFillEmojiSmileFill, BsFillEmojiAngryFill } from "react-icons/bs";
import { compareTimeCreated } from "../../../utils/compare-time-created";
import { api } from "../../../api/axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const PostCard = ({ post, key }) => {
  const userSelector = useSelector((state) => state.auth);
  const renderImagePost = process.env.REACT_APP_API_IMAGE_POSTS_URL;
  const [imageUserPost, setImageUserPost] = useState(null);
  // console.log(imageUserPost);
  const fetchImageUserPost = () => {
    try {
      api
        .get(`/auth/renderimage/${post.users.id}`, {
          responseType: "blob",
        })
        .then((result) => setImageUserPost(result.data));
    } catch (err) {
      console.error("Error in fetch image post user", err);
    }
  };
  useEffect(() => {
    fetchImageUserPost();
  }, [post]);
  return (
    <>
      <div
        className="col-auto border-2 bg-slate-100 rounded-lg  mt-5"
        key={key}
      >
        <div className="flex justify-between gap-2">
          <div className="flex gap-2 p-2">
            <div>
              <img
                src={URL.createObjectURL(new Blob([imageUserPost]))}
                alt="profileimage"
                className="rounded-full w-10 h-10 object-fill"
              />
            </div>
            <div className=" flex items-center ">
              <div className="font-semibold text-sm">
                <span>{post?.users?.firstname}</span>
              </div>

              <div className="absolute mt-10 text-xs">
                {compareTimeCreated(post?.createdAt)}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div></div>
            <div>
              <AiOutlineEllipsis className="w-7 h-7" />
            </div>
            <div>
              <MdOutlineClose className="w-7 h-7" />
            </div>
            <div></div>
          </div>
        </div>
        <div className="col-auto p-2">
          <div className="text-xs">
            <span>{post?.caption}</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {post?.imageposts.map((images) => {
            return (
              <img
                className="object-cover"
                src={renderImagePost + images.image}
                alt="postimage"
                style={{ minWidth: "600px", height: "500px" }}
              />
            );
          })}
        </div>
        <div className="head justify-center gap-32 p-6  flex">
          <div className="flex gap-2 hover:select-container cursor-pointer hoverbg-slate-300 group">
            <ThumbsUp size={24} />
            <span>Suka</span>
            <div className="group-hover:opacity-100 transition-opacitypx-1 absolute -translate-x-1/2 translate-y-full opacity-0 text-white -mt-20 ml-20 flex gap-3">
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
    </>
  );
};
