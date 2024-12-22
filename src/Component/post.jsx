import React from "react"
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
const Post = () => {
    return (
        <div className="mt-[40px]">
            <img className="w-full" src={Img1} alt="" />
            <img className="w-full mt-[30px]" src={Img2} alt="" />
        </div>
    );
};

export default Post;