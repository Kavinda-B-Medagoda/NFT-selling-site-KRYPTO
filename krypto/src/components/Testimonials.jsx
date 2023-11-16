import React from "react";
import img1 from "../assets/p1.png";
import img2 from "../assets/p2.png";
import img3 from "../assets/p3.png";

const Testimonials = () => {
  return (
    <>
      <div className="pt-10 pb-5 max-w-[1440px] mx-auto h-auto  w-full">
        <div>
          <h2 className="text-[#88D0D1] text-center  text-xl font-semibold my-3 ">
            TESTIMONIALS
          </h2>
          <h1 className="text-4xl font-bold text-white text-center mb-16 md:text-6xl">
            Read What Others Have To Say
          </h1>
        </div>

        <div className=" md:flex md:justify-evenly md:items-center">
          <div className=" text-whit relative w-80 mx-auto my-20">
            <div className=" flex items-center justify-center absolute top-[-50px] left-[50%] translate-x-[-50%]">
              <img className=" filter grayscale w-24 " src={img1} alt="" />
            </div>
            <div className="bg-[#16143F] hover:bg-opacity-100 duration-300 bg-opacity-50 p-10 rounded-lg">
              <h2 className=" text-[#88D0D1] text-lg font-semibold text-center mt-4">
                OLIVIA COLE
              </h2>
              <p className=" text-center text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ullamcorper scelerisque mi, in malesuada felis malesuada vel.
              </p>
            </div>
          </div>
          <div className=" text-whit relative w-80 mx-auto my-20">
            <div className=" flex items-center justify-center absolute top-[-50px] left-[50%] translate-x-[-50%]">
              <img className=" filter grayscale w-24" src={img2} alt="" />
            </div>
            <div className="bg-[#16143F] hover:bg-opacity-100 duration-300  bg-opacity-50 p-10 rounded-lg">
              <h2 className=" text-[#88D0D1] text-lg font-semibold text-center mt-4">
                EVAN WHITE
              </h2>
              <p className=" text-center text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ullamcorper, in malesuada felis malesu.
              </p>
            </div>
          </div>
          <div className=" text-whit relative w-80 mx-auto my-20">
            <div className=" flex items-center justify-center absolute top-[-50px] left-[50%] translate-x-[-50%]">
              <img className=" filter grayscale w-24" src={img3} alt="" />
            </div>
            <div className="bg-[#16143F] hover:bg-opacity-100 duration-300  bg-opacity-50 p-10 rounded-lg">
              <h2 className=" text-[#88D0D1] text-lg font-semibold text-center mt-4">
                Jessica Page
              </h2>
              <p className=" text-center text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ullamcorper scelerisque mi, ins malesuada vel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
