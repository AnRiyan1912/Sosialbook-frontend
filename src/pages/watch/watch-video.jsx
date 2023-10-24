import { CardWatch } from "../../component/card/watch/cardwatch";
import { NavTemplate } from "../../component/template/navtemplate";

export const WatchVideo = () => {
  return (
    <>
      <NavTemplate>
        <div className="col-auto">
          {Array.from({ length: 20 }).map(() => {
            return <CardWatch />;
          })}
        </div>
      </NavTemplate>
    </>
  );
};
