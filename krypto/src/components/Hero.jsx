import React from "react";
import img1 from "../assets/o1.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      initial={{ y: 50 }}
      className="pt-10 max-w-[1440px] mx-auto lg:flex md:h-[89vh] h-[65vh] md:pt-20 md:flex md:items-center md:justify-between w-full"
    >
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
      <div className="right pt-10 mx-auto w-3/4 z-10 md:w-2 md:flex md:items-center md:justify-center md:flex-1 md:px-16 ">
        <img
          // data-aos="zoom-in-left"
          src={img1}
          className=" w-4/5 mx-auto hover:-rotate-6 hover:scale-105 duration-300"
          alt=""
        />
      </div>
      <div className=" shine2"></div>
    </motion.div>
  );
};

export default Hero;
