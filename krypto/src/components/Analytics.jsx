import React from "react";
import img1 from "../assets/o3.png";
import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <motion.div className="pt-10 relative max-w-[1440px] mx-auto lg:flex md:h-[100vh] h-[70vh] md:flex md:items-center md:justify-between w-full ">
      <div className="right order-2 px-5 md:flex-1 md:px-14 md:flex md:flex-col">
        <h2 className=" text-[#88D0D1] text-center md:text-left text-xl font-semibold my-3">
          ANALYTICS
        </h2>
        <div className=" shine3"></div>

        <h2 className=" text-4xl font-bold text-white text-left mb-5 md:text-6xl">
          Built-In Analytics To Track Your NFTs
        </h2>
        <p className=" text-white text-left md:text-2xl font-semibold">
          Use our built-in analytics dashboard to pull valuable insights and
          monitor the value of your Krypto portfolio over time.
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
    </motion.div>
  );
};

export default Analytics;
