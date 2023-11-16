import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Analytics from "../components/Analytics";
import Analytics2 from "../components/Analytics2";
import Testimonials from "../components/Testimonials";
import AreyouReady from "../components/AreyouReady";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" shine"></div>
      <div className=" bg-[#010922]">
        <Hero />
      </div>
      <div className="bg-[#010922]">
        <Featured />
      </div>
      <div className="bg-[#010922]">
        <Analytics />
      </div>

      <div className="bg-[#010922] ">
        <Analytics2 />
      </div>
      <div className="bg-[#010922]">
        <Testimonials />
      </div>
      <div className=" shine5"></div>

      <div className="bg-[#010922]">
        <AreyouReady />
      </div>
      <div className="bg-[#010922]">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
