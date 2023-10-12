import { NavTemplate } from "../../component/template/navtemplate";

export const WatchVideo = () => {
  return (
    <>
      <NavTemplate>
        <div className="flex text-white justify-center mt-20">
          <div className="col-auto">
            <div className="flex justify-between">
              <div>
                <img src="" alt="" className="rounded-full w-6 h-6" />
                <span>Andre Riyanto</span>
              </div>
              <div>...</div>
            </div>
            <span>Mobil terbang skuyy</span>
            <div className="w-full h-40">
              <img src="" alt="" />
            </div>
            <div className="flex">
              <div>like</div>
              <div>komentar</div>
              <div>bagikan</div>
              <div>148rb</div>
              <div>22rb komentar</div>
              <div>10 jt Tayangan</div>
            </div>
          </div>
        </div>
      </NavTemplate>
    </>
  );
};
