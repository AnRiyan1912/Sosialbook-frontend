import { StoryCard } from "../../component/card/story-card/storycard";
import { NavBar } from "../../component/layouts/navbar";
import { NavTemplate } from "../../component/template/navtemplate";

export const HomePage = () => {
  return (
    <>
      <NavTemplate>
        <div className="flex justify-center items-center text-white mt-64">
          <img
            src="https://www.demico.co/wp-content/uploads/2019/05/kata-bijak-bahasa-inggris-do-more.jpg"
            alt="img-story"
          />
          <StoryCard />
        </div>
      </NavTemplate>
    </>
  );
};
