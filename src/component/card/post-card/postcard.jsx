import {ThumbsUp, ThumbsDown, ChatCenteredText, DotsThreeOutlineVertical} from "@phosphor-icons/react"
export const PostCard = () => {
  return (
    <>
      <div className="col-auto border-2 border-gray-200 rounded-lg mt-10">
        <div className="flex gap-2 p-2">
          <div>
            <img
              src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
              alt="profileimage"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </div>
          <div className=" flex items-center ">
              <div className="font-semibold text-sm">
                <span >
                  Andre Riyanto
                </span>
              </div>  
             
              <div className="absolute mt-10 text-xs">
                2 day ago
               </div>
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
            style={{ width: "700px", height: "400px" }}
          />
        </div>
        <div className="flex  justify-between p-6">
          <div className="flex gap-10">
            <ThumbsUp size={32} />
            <ThumbsDown size={32} />
          </div>
     
          <ChatCenteredText size={32} />
          <DotsThreeOutlineVertical size={32} />
        </div>
      </div>
    </>
  );
};
