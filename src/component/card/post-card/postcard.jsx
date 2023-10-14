import {
  ThumbsUp,
  ThumbsDown,
  ChatCenteredText,
  DotsThreeOutlineVertical,
} from "@phosphor-icons/react";
import { compareTimeCreated } from "../../../utils/compare-time-created";

export const PostCard = ({ post }) => {
  return (
    <>
      {post.map((itemPost, index) => {
        return (
          <div
            className="col-auto border-2 bg-slate-100 rounded-lg mt-5 relative"
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
              <div className="flex items-center">
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
            <div className="flex  justify-center gap-32 p-6">
              <div className="flex gap-2 hover:select-container cursor-pointer hover:bg-slate-300 relative">
                <ThumbsUp size={24} />
                <span>Suka</span>
                <div className="select-container invisible absolute bg-white py-2 px-4 rounded-md space-y-2 top-10 -right-4">
                  <span>Dislike</span>
                  <span>Love</span>
                  <span>Senang</span>
                  <span>Marah</span>
                </div>
              </div>
              <div className="flex gap-2">
                <ChatCenteredText size={24} />
                <span>Komentar</span>
              </div>
              <div className="flex gap-2">
                <DotsThreeOutlineVertical size={24} />
                <span>Bagikan</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
