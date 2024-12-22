import React from "react";
import SeaechIcon from "../../assets/search-dark.svg";
import SideImg1 from "../../assets/sideimg1.png";
import SideImg2 from "../../assets/sideimg2.png";
import SideImg3 from "../../assets/sideimg3.png";
import Consert from "../../assets/consert.png";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/songpic.png";
import { useNavigate } from "react-router-dom";
const Buy_Sell = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="flex-1">
          <div>
            <h2 className="texxt-[#000000CC] font-[700] text-[24px] mb-[20px]">
              Buy_Sell
            </h2>
            <div className="flex gap-[20px] my-[20px]">
              <select
                name=""
                id=""
                className="border border-[#000000] rounded-[16px] p-[10px] w-[174px]"
              >
                <option value="Category">Category</option>
                <option value="Category1">Category 1</option>
                <option value="Category2">Category 2</option>
                <option value="Category2">Category 2</option>
              </select>
              <select
                name=""
                id=""
                className="border border-[#000000] rounded-[16px] p-[10px] w-[174px]"
              >
                <option value="Services">Services</option>
                <option value="Services1">Services 1</option>
                <option value="Services2">Services 2</option>
                <option value="Services2">Services 2</option>
              </select>
              <select
                name=""
                id=""
                className="border border-[#000000] rounded-[16px] p-[10px] w-[174px]"
              >
                <option value="City">City</option>
                <option value="City1">City 1</option>
                <option value="City1">City 1</option>
                <option value="City2">City 2</option>
                <option value="City2">City 2</option>
              </select>
              <select
                name=""
                id=""
                className="border border-[#000000] rounded-[16px] p-[10px] w-[174px]"
              >
                <option value="Budget">Budget</option>
                <option value="Budget1">Budget 1</option>
                <option value="Budget2">Budget 2</option>
                <option value="Budget2">Budget 2</option>
                <option value="Budget2">Budget 2</option>
                <option value="Budget2">Budget 2</option>
              </select>
              <button onClick={()=> navigate("/dashboard/")} className="flex items-center justify-center text-white bg-[#CDAB00] py-[4px] rounded-[4px] w-[156px]">
                Create
              </button>
            </div>
          </div>
          <div>
            <img className="mb-2" src={Img3} alt="" />
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
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
export default Buy_Sell;
