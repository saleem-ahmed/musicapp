import React from "react";
import { NavLink } from "react-router-dom";
import ProfileImg from "../assets/profile.png";
import HomeIcon from "../assets/icon/home-icon.png";
import HomeIconActive from "../assets/icon/Ahome-icon.png";
import NotificationIcon from "../assets/icon/notification.png";
import NotificationIconActive from "../assets/icon/Anotification.png";
import MessageIcon from "../assets/icon/message.png";
import BookmarkIcon from "../assets/icon/bookmark.png";
import Buy_sellIcon from "../assets/icon/buy_sell.png";
import GroupsIcon from "../assets/icon/groups.png";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <button
        onClick={toggleSidebar}
        type="button"
        className="absoulute inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Close sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          ></path>
        </svg>
      </button>
      <ul className="space-y-2 font-medium w-[80%] mx-auto">
        <img className="w-[40px] w-[40px]" src={ProfileImg} alt="" />
        <li>
          <NavLink
            to="/dashboard/main"
            className={({ isActive }) =>
              `flex items-center p-2 ${
                isActive ? "text-[#111111]" : "text-[#6A5F5F]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  className="w-[18px] h-[18px]"
                  src={isActive ? HomeIconActive : HomeIcon}
                  alt="Home"
                />
                <span className="ms-3">Home</span>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/notification"
            className={({ isActive }) =>
              `flex items-center p-2 ${
                isActive ? "text-[#111111]" : "text-[#6A5F5F]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  className="w-[18px] h-[18px]"
                  src={isActive ? NotificationIconActive : NotificationIcon}
                  alt="Home"
                />
                <span className="ms-3">Notifications</span>
              </>
            )}
          </NavLink>
        </li>
       
        <li>
          <NavLink
            to="/dashboard/message"
            className={({ isActive }) =>
              `flex items-center p-2  ${
                isActive ? "text-[#111111]" : "text-[#6A5F5F]"
              }`
            }
          >
            <img className="w-[18px] h-[18px]" src={MessageIcon} alt="Home" />
            <span className="ms-3">Messages</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/bookmark"
            className={({ isActive }) =>
              `flex items-center p-2  ${
                isActive ? "text-[#111111]" : "text-[#6A5F5F]"
              }`
            }
          >
            <img className="w-[18px] h-[18px]" src={BookmarkIcon} alt="Home" />
            <span className="ms-3">Bookmarks</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/buy_sell"
            className={({ isActive }) =>
              `flex items-center p-2  ${
                isActive ? "text-[#111111]" : "text-[#6A5F5F]"
              }`
            }
          >
            <img className="w-[18px] h-[18px]" src={Buy_sellIcon} alt="Home" />
            <span className="ms-3">Buy/Sell</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/groups"
            className={({ isActive }) =>
              `flex items-center p-2  ${
                isActive ? "text-[#111111]" : "text-[#6A5F5F]"
              }`
            }
          >
            <img className="w-[18px] h-[18px]" src={GroupsIcon} alt="Home" />
            <span className="ms-3">Groups</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/friends"
            className={({ isActive }) =>
              `flex items-center p-2  ${
                isActive ? "text-[#111111]" : "text-[#6A5F5F]"
              }`
            }
          >
            <img className="w-[18px] h-[18px]" src={GroupsIcon} alt="Home" />
            <span className="ms-3">Friends</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
