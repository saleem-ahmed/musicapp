import React from "react";
import MsgIcon from "../../assets/messages.png";
import ProfileImg from "../../assets/profile.png";
import BookmarkIcon from "../../assets/icon/bookmark.png";
import Pic1 from "../../assets/picture.png";
import Pic2 from "../../assets/video.png";
import Pic3 from "../../assets/microphone.png";
import Pic4 from "../../assets/Vector.png";
const Message = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="w-full md:w-[370px] flex flex-col border-r border-[#D2D2D1] pr-5">
          <h2 className="texxt-[#000000CC] font-[700] text-[24px] mb-[30px]">
            Messages
          </h2>
          <button className="flex items-center justify-center text-white bg-[#CDAB00] py-[8px] rounded-[4px] w-[156px]">
            <img className="w-[20px] h-[20px]" src={MsgIcon} alt="" />
            New Message
          </button>
          <div className="mb-[20px] flex flex-wrap gap-[20px] mt-5">
            <span className="bg-[#CDAB005E] rounded-full px-3 py-1 cursor-pointer">
              All
            </span>
            <span className="bg-[#F1F1F1] rounded-full px-3 py-1 cursor-pointer">
              Followers
            </span>
            <span className="bg-[#F1F1F1] rounded-full px-3 py-1 cursor-pointer">
              fans
            </span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[10px]">
              <img className="w-[44px] h-[44px]" src={ProfileImg} alt="" />
              <div className="flex-1 flex flex-col gap-[5px]">
                <div className="flex justify-between">
                  <h2 className="text-[#111111] text-[14px] font-[700]">
                    Miracle Rosser
                  </h2>
                  <p>March 24</p>
                </div>
                <div className="flex items-center">
                  <p className="text-[#3F3F3F] text-[14px]">
                    I just subscribed your profile. Do you wanna do a collab?
                  </p>
                  <img
                    className="w-[20px] h-[20px]"
                    src={BookmarkIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <img className="w-[44px] h-[44px]" src={ProfileImg} alt="" />
              <div className="flex-1 flex flex-col gap-[5px]">
                <div className="flex justify-between">
                  <h2 className="text-[#111111] text-[14px] font-[700]">
                    Miracle Rosser
                  </h2>
                  <p>March 24</p>
                </div>
                <div className="flex items-center">
                  <p className="text-[#3F3F3F] text-[14px]">
                    I just subscribed your profile. Do you wanna do a collab?
                  </p>
                  <img
                    className="w-[20px] h-[20px]"
                    src={BookmarkIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <img className="w-[44px] h-[44px]" src={ProfileImg} alt="" />
              <div className="flex-1 flex flex-col gap-[5px]">
                <div className="flex justify-between">
                  <h2 className="text-[#111111] text-[14px] font-[700]">
                    Miracle Rosser
                  </h2>
                  <p>March 24</p>
                </div>
                <div className="flex items-center">
                  <p className="text-[#3F3F3F] text-[14px]">
                    I just subscribed your profile. Do you wanna do a collab?
                  </p>
                  <img
                    className="w-[20px] h-[20px]"
                    src={BookmarkIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <img className="w-[44px] h-[44px]" src={ProfileImg} alt="" />
              <div className="flex-1 flex flex-col gap-[5px]">
                <div className="flex justify-between">
                  <h2 className="text-[#111111] text-[14px] font-[700]">
                    Miracle Rosser
                  </h2>
                  <p>March 24</p>
                </div>
                <div className="flex items-center">
                  <p className="text-[#3F3F3F] text-[14px]">
                    I just subscribed your profile. Do you wanna do a collab?
                  </p>
                  <img
                    className="w-[20px] h-[20px]"
                    src={BookmarkIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <img className="w-[44px] h-[44px]" src={ProfileImg} alt="" />
              <div className="flex-1 flex flex-col gap-[5px]">
                <div className="flex justify-between">
                  <h2 className="text-[#111111] text-[14px] font-[700]">
                    Miracle Rosser
                  </h2>
                  <p>March 24</p>
                </div>
                <div className="flex items-center">
                  <p className="text-[#3F3F3F] text-[14px]">
                    I just subscribed your profile. Do you wanna do a collab?
                  </p>
                  <img
                    className="w-[20px] h-[20px]"
                    src={BookmarkIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <img className="w-[44px] h-[44px]" src={ProfileImg} alt="" />
              <div className="flex-1 flex flex-col gap-[5px]">
                <div className="flex justify-between">
                  <h2 className="text-[#111111] text-[14px] font-[700]">
                    Miracle Rosser
                  </h2>
                  <p>March 24</p>
                </div>
                <div className="flex items-center">
                  <p className="text-[#3F3F3F] text-[14px]">
                    I just subscribed your profile. Do you wanna do a collab?
                  </p>
                  <img
                    className="w-[20px] h-[20px]"
                    src={BookmarkIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex gap-[10px] w-[300px]">
            <img className="w-[44px] h-[44px]" src={ProfileImg} alt="" />
            <div className="flex-1 flex flex-col gap-[5px]">
              <div className="flex justify-between">
                <h2 className="text-[#111111] text-[14px] font-[700]">
                  Miracle Rosser
                </h2>
                <p>March 24</p>
              </div>
              <div className="flex items-center">
                <p className="text-[#3F3F3F] text-[14px]">
                  I just subscribed your profile. Do you wanna do a collab?
                </p>
              </div>
            </div>
          </div>
          <div className="h-[40vh] bg-[#5858FA] mt-[20px]">

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
      </div>
    </>
  );
};
export default Message;
