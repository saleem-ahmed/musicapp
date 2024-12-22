import React from "react";
import SeaechIcon from "../../assets/search-dark.svg";
import bgImg from "../../assets/concert-bg.png";
import CImg1 from "../../assets/concert-img1.png";
import CImg2 from "../../assets/concert-img2.png";
import CImg3 from "../../assets/concert-img3.png";
import SideImg1 from "../../assets/sideimg1.png";
import SideImg2 from "../../assets/sideimg2.png";
import SideImg3 from "../../assets/sideimg3.png";
import Consert from "../../assets/consert.png";

const Concert = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="flex-1">
          <div>
            <h2 className="texxt-[#000000CC] font-[700] text-[24px] mb-[20px]">
              consert
            </h2>
          </div>
          <img className="w-[100%]" src={bgImg} alt="" />
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetuLorem ipsum dolor sit amet consectetur Lorem ipsum dolor
            sit amet consectetur..Lorem ipsum dolor sit amet consectetur Lorem
            ipsum dolor sit amet consectetur..r..
          </p>
          <div className="flex my-2 flex-row gap-[20px] flex-wrap">
            <img className="max-w-[280px] w-[100%]" src={CImg1} alt="" />
            <img className="max-w-[280px] w-[100%]" src={CImg2} alt="" />
            <img className="max-w-[280px] w-[100%]" src={CImg3} alt="" />
          </div>
          <button className="bg-[#CDAB00] text-white px-[20px]">
            Register
          </button>
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
export default Concert;
