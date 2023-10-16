import { Chat, ThumbsUp, ShareFat, DotsThree } from "@phosphor-icons/react";

export const CardWatch = () => {
  return (
    <div className="flex text-white justify-center mt-20 xl:ml-72 border-2 border-slate-100 p-4 2xl:ml-48">
      <div className="col-auto">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbU7Eo_At3s6Y2B2CxZ6Y7DZpz5_bQpKtzlA&usqp=CAU"
              alt="img-video"
              className="rounded-full w-10 h-10"
            />
            <span>Andre Riyanto</span>
          </div>
          <div>
            <DotsThree size={28} />
          </div>
        </div>
        <div className="mt-2">
          <span>Mobil terbang skuyy</span>
        </div>
        <div className="mt-2">
          <img
            src="https://u.jimcdn.com/www73/o/s88977766057599e6/userlayout/img/video.png "
            alt=""
            className="w-full h-96"
          />
        </div>
        <div className="flex justify-between gap-20 p-4 ">
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <ThumbsUp size={28} />
              <span>
                <span>like</span>
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <Chat size={28} />
              <span>komentar</span>
            </div>
            <div className="flex items-center gap-2">
              <ShareFat size={28} />
              <span>bagikan</span>
            </div>
          </div>

          <div className="flex gap-3">
            <div>148rb</div>
            <div>22rb komentar</div>
            <div>10 jt Tayangan</div>
          </div>
        </div>
      </div>
    </div>
  );
};
