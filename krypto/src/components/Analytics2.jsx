import React from "react";
import img1 from "../assets/o2.png";

const Analytics2 = () => {
  return (
    <div className="pt-1 max-w-[1440px] mx-auto lg:flex h-[100vh]  md:flex md:items-center md:justify-between w-full">
      <div className="right px-5 md:flex-1 md:px-14 md:flex md:flex-col">
        <h2 className=" text-[#88D0D1] text-center md:text-left text-xl font-semibold my-3">
          Mobile App
        </h2>
        <h2 className=" text-4xl font-bold text-white text-left mb-5 md:text-6xl">
          Awesome Mobile App For Analysis NFTs
        </h2>
        <p className=" text-white text-left md:text-2xl font-semibold">
          Discover and analyze the exciting world of NFTs with our cutting-edge
          mobile app. Unleash the power of data-driven insights as you explore
          the latest trends, track market values, and stay informed about the
          dynamic NFT landscape.
        </p>
        <div className=" flex text-white gap-5 mt-10 mb-7 items-center justify-center md:justify-start">
          <button className=" px-5 py-1 bg-[#8080D7] rounded-[5px] md:px-14 md:py-3 md:hover:text-black md:hover:bg-white font-semibold duration-300">
            VIEW OUR PRICING
          </button>
        </div>
      </div>
      <div className="left md:pt-10 mx-auto w-3/4 z-10 md:w-2 md:flex md:items-center md:justify-center md:flex-1 md:px-16">
        <img
          src={img1}
          className=" w-3/4 md:w-full mx-auto hover:scale-105 hover:rotate-6 duration-300"
          alt=""
        />
      </div>
    </div>
  );
};

export default Analytics2;
