import { useEffect, useState } from "react";
import { PostCard } from "../../component/card/post-card/postcard";
import { StoryCard } from "../../component/card/story-card/storycard";
import { NavTemplate } from "../../component/template/navtemplate";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../../api/axios";
// require modules
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "../../css/style.css";
import { compareTimeCreated } from "../../utils/compare-time-created";
export const HomePage = () => {
  const [post, setPost] = useState([]);
  const [onOpen, setOnOpen] = useState(false);

  const fetchPost = async () => {
    await api
      .get("/post/withuser")
      .then((result) => setPost(result?.data.posts))
      .catch((err) => console.log(err?.message));
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <NavTemplate>
        <div className="flex ">
          <div
            className="mt-14 h-full  2xl:ml-96 max-2xl:ml-80  "
            style={{ maxWidth: "600px" }}
          >
            <div className="flex gap-1  overflow-x-auto   ">
              {/* <div className="absolute max-2xl:mr-72 mt-20 p-4 rounded-full">
                <CaretLeft size={44} />
              </div> */}
              {/* <div className="flex"> */}
              <Swiper
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={4}
                navigation={true}
              >
                {Array.from({ length: 50 }).map((item, index) => (
                  <SwiperSlide key={index} style={{ width: "145px" }}>
                    <StoryCard />
                  </SwiperSlide>
                ))}{" "}
              </Swiper>

              {/* </div> */}
              {/* <div className="absolute right-96 mt-20 p-4 rounded-full">
                <CaretRight size={44} />
              </div> */}
            </div>
            <PostCard post={post} />;
          </div>
          <div
            className="mt-14 h-full  bg-white ml-1"
            style={{ width: "320px" }}
          >
            <div>asdasdsa</div>
            <div>asdasdsa</div>
            <div>asdasdsa</div>
            <div>asdasdsa</div>
            <div>asdasdsa</div>
            <div>asdasdsa</div>
            <div>asdasdsa</div>
            <div>asdasdsa</div>
          </div>
        </div>
      </NavTemplate>
    </>
  );
};
