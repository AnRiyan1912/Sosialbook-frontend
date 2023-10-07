import { PostCard } from "../../component/card/post-card/postcard";
import { StoryCard } from "../../component/card/story-card/storycard";

import { NavTemplate } from "../../component/template/navtemplate";

export const HomePage = () => {
  const storyMap = [
    {
      data: 1,
    },
    {
      data: 1,
    },
    {
      data: 1,
    },
    {
      data: 1,
    },
  ];
  return (
    <>
      <NavTemplate>
        <div
          className="mt-14 h-full  bg-white ml-80"
          style={{ width: "1000px" }}
        >
          <StoryCard />
          <PostCard />
        </div>
      </NavTemplate>
    </>
  );
};
