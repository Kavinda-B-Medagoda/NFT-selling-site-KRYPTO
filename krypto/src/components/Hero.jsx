import React from "react";
import img1 from "../assets/o1.png";

const Hero = () => {
  return (
    <div className="pt-10 max-w-[1440px] mx-auto lg:flex h-[89vh] md:pt-20 md:flex md:items-center md:justify-between w-full">
      <div className="left px-5 md:flex-1 md:px-14 md:flex md:flex-col">
        <h2 className=" text-4xl font-bold text-white text-left mb-5 md:text-8xl">
          Discover And Collect Rare NFTs
        </h2>
        <p className=" text-white text-left md:text-2xl font-semibold">
          The most secure marketplace for buying and selling unique crypto
          assets.
        </p>
        <div className=" flex text-white gap-5 mt-10 mb-7 items-center justify-center md:justify-start">
          <button className=" px-5 py-1 bg-[#8080D7] rounded-[25px] md:px-8 md:py-3 md:hover:text-black md:hover:bg-white font-semibold duration-300">
            BUY NFTS
          </button>
          <button className="px-5 py-1 border border-[#88D0D1] rounded-[25px] md:px-8 md:py-3 md:hover:text-black md:hover:bg-white font-semibold duration-300">
            SELL NFTS
          </button>
        </div>
      </div>
      <div className="right pt-10 mx-auto w-3/4 z-10 md:w-2 md:flex md:items-center md:justify-center md:flex-1 md:px-16">
        <img
          src={img1}
          className=" w-4/5 mx-auto hover:-rotate-6 hover:scale-105 duration-300"
          alt=""
        />
      </div>
      <div className=" shine2"></div>
    </div>
  );
};

export default Hero;
