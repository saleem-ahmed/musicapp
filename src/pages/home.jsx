import React from "react";
import Navbar from "../Component/header";

const Home = () => {
  return (
    <>
      <div className="bg-[url(assets/mainbg.png)] h-[100vh] bg-cover bg-no-repeat">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <h2 className="text-center text-[60px] font-semibold text-white">Lorem ipsum dolor sit amet</h2>
          <h2 className="text-center text-[60px] font-semibold text-white">Lorem ipsum dolor</h2>
        </div>
      </div>
    </>
  );
};
export default Home;
