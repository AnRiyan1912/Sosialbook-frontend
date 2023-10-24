export const ModalMessage = ({ openMessage }) => {
  return openMessage ? (
    <div className="col-auto absolute w-96 -ml-80 bg-white p-2">
      <div className="flex mt-4  hover:bg-purple-900 hover:text-white text-black p-2 rounded-xl">
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="col-auto p-3">
          <div className="font-semibold flex items-center">
            <span>Udin</span>
          </div>
          <div className="text-sm flex  items-center">
            <span>Hallo andre riyanto</span>
          </div>
        </div>
      </div>

      <div className="flex mt-4  hover:bg-purple-900 hover:text-white text-black p-2 rounded-xl">
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="col-auto p-3">
          <div className="font-semibold flex items-center">
            <span>Udin</span>
          </div>
          <div className="text-sm flex  items-center">
            <span>Hallo andre riyanto</span>
          </div>
        </div>
      </div>

      <div className="flex mt-4  hover:bg-purple-900 hover:text-white text-black p-2 rounded-xl">
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="col-auto p-3">
          <div className="font-semibold flex items-center">
            <span>Udin</span>
          </div>
          <div className="text-sm flex  items-center">
            <span>Hallo andre riyanto</span>
          </div>
        </div>
      </div>

      <div className="flex mt-4  hover:bg-purple-900 hover:text-white text-black p-2 rounded-xl">
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="col-auto p-3">
          <div className="font-semibold flex items-center">
            <span>Udin</span>
          </div>
          <div className="text-sm flex  items-center">
            <span>Hallo andre riyanto</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
