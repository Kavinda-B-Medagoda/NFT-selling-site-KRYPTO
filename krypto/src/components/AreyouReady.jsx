import React from "react";

const AreyouReady = () => {
  return (
    <div className="py-5 px-10 max-w-[1440px] mx-auto lg:flex h-auto md:flex md:items-center md:justify-between w-ful">
      <div className="relative flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-[#88D0D1] to-[#645ADF] w-full h-[50%]">
        <h2 className=" text-center text-black font-bold text-2xl my-4">
          ARE YOU READY?
        </h2>
        <div className=" shine3"></div>

        <h1 className=" text-white text-3xl md:text-6xl text-center font-bold my-4">
          Be A Part Of The Next Big Thing
        </h1>
        <div className=" flex items-center justify-center my-4">
          <button className="px-4 shadow-lg py-2 md:px-7 md:py-3 bg-black text-white rounded-lg md:hover:text-black md:hover:bg-white font-semibold duration-500">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreyouReady;
