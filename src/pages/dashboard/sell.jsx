import React from "react";
import Profileimg from "../../assets/profile.png";
import SeaechIcon from "../../assets/search-dark.svg";
import SideImg1 from "../../assets/sideimg1.png";
import SideImg2 from "../../assets/sideimg2.png";
import SideImg3 from "../../assets/sideimg3.png";
import Consert from "../../assets/consert.png";
import EditImg from "../../assets/edit.png";
import ShareImg from "../../assets/share.png";
import Pic1 from "../../assets/picture.png";
import Pic2 from "../../assets/video.png";
import Pic3 from "../../assets/microphone.png";
import Pic4 from "../../assets/Vector.png";

const Sell = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="flex-1">
          <div>
            <h2 className="texxt-[#000000CC] font-[700] text-[24px] mb-[20px]">
            Sell
            </h2>
          </div>
          <div className="h-[280px] bg-[url(assets/profile-bg.png)] bg-cover bg-no-repeat flex items-end rounded-[16px]">
            <div className="flex justify-between items-center w-full h-[60px] p-[16px]">
              <div className="flex gap-[15px]">
                <img className="w-[60px] h-[60px]" src={Profileimg} alt="" />
                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-[#CDAB00] text-[18px] font-bold">
                    Kalim Rana
                  </h3>
                  <p className="text-[#686868] text-[14px] font-semibold">
                    @kalimhjdja
                  </p>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <button className="bg-[#F1F1F1] text-[#CDAB00] border border-[1px] border-solid border-[#C1BEEC] flex items-center gap-[10px] rounded-[60px] px-[17px] py-[5px]">
                  <img className="w-[20px] h-[20px]" src={EditImg} alt="" />
                  Edit Profile
                </button>
                <button className="bg-[#F1F1F1] text-[#CDAB00] border border-[1px] border-solid border-[#C1BEEC] flex items-center gap-[10px] rounded-[60px] px-[17px] py-[5px]">
                  <img className="w-[20px] h-[20px]" src={ShareImg} alt="" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#F1F1F1] rounded-[4px] p-[16px] my-[30px]">
            <div className="bg-white h-[20vh] p-[16px]  rounded-[4px] flex flex-col justify-between">
              <p className="text-[#9A9A9A]">Compose new post</p>
              <div className="flex gap-[20px]">
                <img
                  className="w-[20px] h-[20px] cursor-pointer"
                  src={Pic1}
                  alt=""
                />
                <img
                  className="w-[20px] h-[20px] cursor-pointer"
                  src={Pic2}
                  alt=""
                />
                <img
                  className="w-[20px] h-[20px] cursor-pointer"
                  src={Pic3}
                  alt=""
                />
                <img
                  className="w-[20px] h-[20px] cursor-pointer"
                  src={Pic4}
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-end gap-[30px] mt-[10px]">
              <button className="text-[#CDAB00]">Post Later</button>
              <button className="bg-[#CDAB00] text-white px-[20px]">
                Post
              </button>
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
export default Sell;
