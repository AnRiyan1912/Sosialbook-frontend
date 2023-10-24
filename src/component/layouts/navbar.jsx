import { useDispatch, useSelector } from "react-redux";
import AvatarDefaultProfile from "../../assets/default-avatar-profile.jpg";
import {
  Storefront,
  Video,
  UsersThree,
  ChatCircleDots,
  House,
  Bell,
  CaretDown,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModalMessage } from "../modal/messages/modal-message";
import { ModalOptionProfile } from "../modal/profile/modal-option-profile";
import { ModalNotification } from "../modal/notification/modal-notification";
import { api } from "../../api/axios";

export const NavBar = ({ imageUser }) => {
  const [openMessage, setOpenMessage] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const userSelector = useSelector((state) => state.auth);

  return (
    <div className="top-0 fixed w-full h-14 text-black bg-white z-10 border-b-2 border-violet-700 px-4">
      <nav className="flex  justify-between">
        <div className="flex items-center ml-1 gap-2">
          <span
            className="text-xl font-bold border-b-2 border-violet-700 cursor-pointer"
            onClick={() => nav("/home")}
          >
            SosialBook
          </span>
          <input
            type="text"
            placeholder="Search"
            className="border-2 border border-violet-700 rounded-xl p-1.5"
          />
        </div>
        <div className="flex gap-20  justify-center">
          <div
            className="flex  items-center cursor-pointer hover:bg-purple-900 hover:text-white p-3.5"
            onClick={() => nav("/home")}
          >
            <House size={28} />
          </div>
          <div
            className="flex  items-center cursor-pointer hover:bg-purple-900 hover:text-white p-3.5"
            onClick={() => nav("/watchvideo")}
          >
            <Video size={28} />
          </div>
          <div
            className="flex  items-center cursor-pointer hover:bg-purple-900 hover:text-white p-3.5"
            onClick={() => nav("/marketplace")}
          >
            <Storefront size={28} />
          </div>
          <div className="flex  items-center cursor-pointer hover:bg-purple-900 hover:text-white p-3.5">
            <UsersThree size={28} />
          </div>
        </div>

        <div className="flex  items-center gap-8">
          <div
            className="cursor-pointer"
            onClick={
              openMessage
                ? () => setOpenMessage(false)
                : () => setOpenMessage(true)
            }
          >
            <ChatCircleDots size={28} />
            <ModalMessage openMessage={openMessage} />
          </div>
          <div
            className="cursor-pointer"
            onClick={
              openNotification
                ? () => setOpenNotification(false)
                : () => setOpenNotification(true)
            }
          >
            <Bell size={28} />
            {openNotification ? <ModalNotification /> : ""}
          </div>
          <div
            className="cursor-pointer object-cover w-12 h-12"
            onClick={
              openProfile
                ? () => setOpenProfile(false)
                : () => setOpenProfile(true)
            }
          >
            <img src={imageUser} alt="" className="rounded-full w-12 h-12" />
            <div className="absolute top-8 right-5 text-white font-bold rounded-full w-4 h-4 bg-gray-900">
              <CaretDown size={18} />
            </div>

            {openProfile ? <ModalOptionProfile imageUser={imageUser} /> : ""}
          </div>
        </div>
      </nav>
    </div>
  );
};
