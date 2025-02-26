import React from "react";
import { useEffect } from "react";
import { FaSearchengin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 500,
        once: false,
      },
      []
    );
  });

  return (
    <div
      id="services"
      className="w-full lg:px-[200px] px-8 lg:py-[100px] py-[40px] h-full  lg:flex-row flex-col flex-between gap-[100px]"
    >
      <div className="lg:w-[40%] w-full flex-start gap-6"></div>
    </div>
  );
};

export default Services;
