import React from "react";
import AddStory from "../../assets/addStory.png";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import four from "../../assets/four.png";
import five from "../../assets/five.png";
import six from "../../assets/six.png";
import seven from "../../assets/seven.png";
import Pic1 from "../../assets/picture.png";
import Pic2 from "../../assets/video.png";
import Pic3 from "../../assets/microphone.png";
import Pic4 from "../../assets/Vector.png";
import Filter from "../../assets/filter.png";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import SeaechIcon from "../../assets/search-dark.svg";
import SideImg1 from "../../assets/sideimg1.png";
import SideImg2 from "../../assets/sideimg2.png";
import SideImg3 from "../../assets/sideimg3.png";
import Consert from "../../assets/consert.png";
const MainPage = () => {
  return (
    <>
      <div className="flex gap-[20px]">
        <div className=" flex-1">
          <div>
            <h2 className="texxt-[#000000CC] font-[700] text-[24px] mb-[20px]">
              Home
            </h2>

            <div className="flex gap-[10px] w-full max-w-[1000px] overflow-auto no-scrollbar">
              <img className="w-[76px] h-[91px]" src={AddStory} alt="" />
              <img className="w-[76px] h-[91px]" src={one} alt="" />
              <img className="w-[76px] h-[91px]" src={two} alt="" />
              <img className="w-[76px] h-[91px]" src={three} alt="" />
              <img className="w-[76px] h-[91px]" src={four} alt="" />
              <img className="w-[76px] h-[91px]" src={five} alt="" />
              <img className="w-[76px] h-[91px]" src={six} alt="" />
              <img className="w-[76px] h-[91px]" src={seven} alt="" />
              <img className="w-[76px] h-[91px]" src={one} alt="" />
              <img className="w-[76px] h-[91px]" src={two} alt="" />
              <img className="w-[76px] h-[91px]" src={three} alt="" />
              <img className="w-[76px] h-[91px]" src={four} alt="" />
              <img className="w-[76px] h-[91px]" src={five} alt="" />
              <img className="w-[76px] h-[91px]" src={six} alt="" />
              <img className="w-[76px] h-[91px]" src={seven} alt="" />
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
          <div className="flex justify-between items-center mb-5">
            <p>All</p>
            <img
              className="w-[20px] h-[20px] cursor-pointer"
              src={Filter}
              alt=""
            />
          </div>
          <div >
            <img className="w-full" src={Img1} alt="" />
            <img className="w-full mt-[30px]" src={Img2} alt="" />
          </div>
        </div>
        <div className="w-[250px] flex flex-col border-l border-[#D2D2D1] pl-5">
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
              <p className="text-[#686868] text-[14px] font-[700]">Music Contest</p>
            </div>
            <img className="w-full" src={Consert} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPage;
