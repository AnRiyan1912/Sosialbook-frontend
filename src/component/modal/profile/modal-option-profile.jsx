import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../../utils/handle-logout";

export const ModalOptionProfile = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div className="col-auto absolute bg-white -ml-72 w-80 p-3">
      <div className=" border-b-2 border-purple-900 p-3">
        <div className="flex justify-between rounded-full ">
          <div className="flex gap-2 justify-center items-center object-cover">
            <img
              className="w-10 h-10 rounded-full"
              src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
              alt="img-profile"
            />
            <span>Andre Riyanto</span>
          </div>
          <div className="border border-2 border-black group rounded-full ">
            <img
              className="w-10 h-10 rounded-full"
              src="https://cdn-image.hipwee.com/wp-content/uploads/2019/03/hipwee-45373964_437449983741237_3768448368298331632_n-750x422.jpg"
              alt=""
            />
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 absolute -translate-x-1/2 translate-y-full opacity-0 text-white -mt-6 left-56 ">
              Beralih akun
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <ul>
          <li className="hover:bg-purple-900 hover:text-white p-3">
            Stelan & Privasi
          </li>
          <li className="hover:bg-purple-900 hover:text-white p-3">
            Bantuan & Dukungan
          </li>
          <li className="hover:bg-purple-900 hover:text-white p-3">
            Tampilan & Aksebilitas
          </li>
          <li className="hover:bg-purple-900 hover:text-white p-3">
            Beri Masukan
          </li>
          <li
            className="hover:bg-purple-900 hover:text-white p-3"
            onClick={() => handleLogout(nav, dispatch)}
          >
            Keluar & Keluar
          </li>
        </ul>
      </div>
    </div>
  );
};
