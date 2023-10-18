export const ModalNotification = () => {
  return (
    <div className="col-auto w-96 bg-white absolute -ml-80">
      <div className="p-3 col-auto">
        <span className=" text-xl font-bold ">Notification</span>
        <div className="flex gap-3 ">
          <div className="p-2 rounded-lg text-purple-900 bg-slate-200">
            <span className="">Semua</span>
          </div>
          <div className="p-2 rounded-lg">Belum Dibaca</div>
        </div>
      </div>

      <div className="flex justify-between p-3">
        <div>Baru</div>
        <div>Lihat Semua</div>
      </div>

      <div>
        <ul>
          <li className="flex justify-between p-3">
            <div>
              <img
                src="https://share.america.gov/wp-content/uploads/2016/05/NWCCI7_ExchangesAre.jpg"
                alt=""
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div className="flex justify-center items-center">
              <span>Mungkin ada pesan dari Jamal</span>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-purple-900"></div>
            </div>
          </li>
          <li className="flex justify-between p-3">
            <div>
              <img
                src="https://share.america.gov/wp-content/uploads/2016/05/NWCCI7_ExchangesAre.jpg"
                alt=""
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div className="flex justify-center items-center">
              <span>Mungkin ada pesan dari Jamal</span>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-purple-900"></div>
            </div>
          </li>
          <li className="flex justify-between p-3">
            <div>
              <img
                src="https://share.america.gov/wp-content/uploads/2016/05/NWCCI7_ExchangesAre.jpg"
                alt=""
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div className="flex justify-center items-center">
              <span>Mungkin ada pesan dari Jamal</span>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-purple-900"></div>
            </div>
          </li>
          <li className="flex justify-between p-3">
            <div>
              <img
                src="https://share.america.gov/wp-content/uploads/2016/05/NWCCI7_ExchangesAre.jpg"
                alt=""
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div className="flex justify-center items-center">
              <span>Mungkin ada pesan dari Jamal</span>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-purple-900"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
