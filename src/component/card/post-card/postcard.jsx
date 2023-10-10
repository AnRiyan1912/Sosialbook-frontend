import {
  ThumbsUp,
  ThumbsDown,
  ChatCenteredText,
  DotsThreeOutlineVertical,
} from "@phosphor-icons/react";
export const PostCard = ({ post }) => {
  return (
    <>
      {post.map((itemPost, index) => {
        return (
          <div
            className="col-auto border-2 border-gray-200 rounded-lg mt-10 "
            key={index}
          >
            <div className="flex gap-2 p-2">
              <div>
                <img
                  src="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=600&q=90"
                  alt="profileimage"
                  className="rounded-full w-10 h-10 object-fill"
                />
              </div>
              <div className=" flex items-center ">
                <div className="font-semibold text-sm">
                  <span>Andre Riyanto</span>
                </div>

                <div className="absolute mt-10 text-xs">2 day ago</div>
              </div>
            </div>
            <div className="col-auto p-2">
              <div className="text-xs">
                <span>Kepulauan Riau,</span>
              </div>
              <div className="text-xs">
                <span>Batam</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2526398/pexels-photo-2526398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="postimage"
                style={{ width: "1000px", height: "400px" }}
              />
            </div>
            <div className="flex  justify-between p-6">
              <div className="flex gap-10">
                <ThumbsUp size={24} />
                <ThumbsDown size={24} />
              </div>

              <ChatCenteredText size={24} />
              <DotsThreeOutlineVertical size={24} />
            </div>
          </div>
        );
      })}
    </>
  );
};
