import React, { useState } from "react";
import SeaechIcon from "../../assets/search-dark.svg";
import SideImg1 from "../../assets/sideimg1.png";
import SideImg2 from "../../assets/sideimg2.png";
import SideImg3 from "../../assets/sideimg3.png";
import Consert from "../../assets/consert.png";
import Post from "../../Component/post";


const tabs = [
  { id: 1, name: 'All Bookmarks', content: <Post /> },
  { id: 2, name: 'Photos', content: 'No content' },
  { id: 3, name: 'Videos', content: 'No content' },
  { id: 4, name: 'Audio', content: 'No content' },
  { id: 5, name: 'Posts', content: 'No content' },
];

const BookMark = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="flex-1">
          <div>
            <h2 className="texxt-[#000000CC] font-[700] text-[24px] mb-[20px]">
              Bookmark
            </h2>
          </div>

          <div className="flex">
            <div className="w-1/4 border-r border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`w-full px-4 py-2 text-left ${selectedTab.id === tab.id
                    ? 'bg-[#EADD9E] text-gray-800'
                    : 'bg-white text-gray-800'
                    } hover:bg-[#EADD9E]`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="w-3/4 p-4">
              <h2 className="text-xl font-bold">{selectedTab.name}</h2>
              <p>{selectedTab.content}</p>
            </div>
          </div>


          {/* content must hete */}
        </div>
        <div className="w-full md:w-[250px] flex flex-col border-l border-[#D2D2D1] pl-5">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-full text-[#D2D2D1]t border border-[#D2D2D1] py-2 pl-10 focus:outline-none placeholder:text-[#D2D2D1]"
            />
            <img
              className="absolute top-1/2 left-3 transform -translate-y-1/2"
              src={SeaechIcon}
              alt="Search Icon"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between mt-[20px]">
              <p className="text-[#686868] text-[10px]">Suggestions</p>
              <p className="text-[#686868] text-[10px]">All</p>
            </div>
            <img className="w-full" src={SideImg1} alt="" />
            <img className="w-full" src={SideImg2} alt="" />
            <img className="w-full" src={SideImg3} alt="" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between mt-[20px]">
              <p className="text-[#686868] text-[14px] font-[700]">
                Music Contest
              </p>
            </div>
            <img className="w-full" src={Consert} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default BookMark;
