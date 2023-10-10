import { useEffect, useState } from "react";
import { PostCard } from "../../component/card/post-card/postcard";
import { StoryCard } from "../../component/card/story-card/storycard";

import { NavTemplate } from "../../component/template/navtemplate";
import { useDispatch, useSelector } from "react-redux";

import { api } from "../../api/axios";

export const HomePage = () => {
  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    await api
      .get("/post")
      .then((result) => setPost(result.data))
      .catch((err) => console.log(err?.message));
  };
  console.log(post);
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <NavTemplate>
        <div className="flex ">
          <div
            className="mt-14 h-full  bg-white 2xl:ml-96 "
            style={{ maxWidth: "700px" }}
          >
            <div className="flex gap-1">
              {Array.from({ length: 4 }).map((item, index) => (
                <StoryCard key={index} />
              ))}
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
