import { PostCard } from "../../component/card/post-card/postcard";
import { StoryCard } from "../../component/card/story-card/storycard";

import { NavTemplate } from "../../component/template/navtemplate";

export const HomePage = () => {
  
  
  return (
    <>
      <NavTemplate>
        <div className="flex ">
        <div
          className="mt-14 h-full  bg-white ml-80 "
          style={{ width: "700px" }}
        >
          <div className="flex">{Array.from({length: 7}).map((item, index) => <StoryCard key={index}/>)}
       </div>
        {
          Array.from({length: 10}).map((item, index) => <PostCard />)
        }
           
         
        </div>
        <div  
          className="mt-14 h-full  bg-white ml-1"
          style={{ width: "320px" }}>
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
