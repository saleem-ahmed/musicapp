import React, { useState } from "react";
import SeaechIcon from "../../assets/search-dark.svg";
import SideImg1 from "../../assets/sideimg1.png";
import SideImg2 from "../../assets/sideimg2.png";
import SideImg3 from "../../assets/sideimg3.png";
import Consert from "../../assets/consert.png";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/songpic.png";
const About = () => {
  const [activeTab, setActiveTab] = useState("followers");
  return (
    <>
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="flex-1">
          <div>
            <h2 className="texxt-[#000000CC] font-[700] text-[24px] mb-[20px]">
              Jasica Alba
            </h2>
          </div>
          <div className="h-[280px] bg-[url(assets/aboutimg.png)] bg-cover bg-no-repeat flex items-end rounded-[16px]"></div>

          <div className="my-[30px]">
            <h2 className="texxt-[#000000CC] font-[700] text-[24px] mb-[20px]">
              About
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.printer took a
              galley of type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="flex justify-start gap-[30px] mt-[20px]">
              <button className="bg-[#CDAB00] text-white p-[10px]">
                Send Request
              </button>
              <button className="bg-[#CDAB00] text-white p-[10px]">
                Follow
              </button>
              <button className="bg-[#CDAB00] text-white p-[10px]">
                Contact
              </button>
            </div>
          </div>

          <div>
            <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
              {[
                "followers",
                "Buy/Sell",
                "likes",
                "posts",
                "photos",
                "video",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-500 dark:border-blue-400 dark:text-blue-300"
                      : "text-gray-700 border-b-2 border-transparent dark:text-white cursor-base hover:border-gray-400"
                  } sm:text-base whitespace-nowrap focus:outline-none`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-4">
              {activeTab === "followers" && <div>Followers</div>}
              {activeTab === "Buy/Sell" && (
                <>
                  <div>
                    <img className="w-full" src={Img1} alt="" />
                    <img className="w-full mt-[30px]" src={Img2} alt="" />
                    <img className="w-full mt-[30px]" src={Img3} alt="" />
                  </div>
                </>
              )}
              {activeTab === "likes" && <div>Likes</div>}
              {activeTab === "posts" && <div>Posts</div>}
              {activeTab === "photos" && <div>Photos</div>}
              {activeTab === "video" && <div>Video</div>}
            </div>
          </div>
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
          <div className="flex flex-col gap-[20px] justify-center">
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
export default About;
