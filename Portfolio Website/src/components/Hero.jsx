import React from "react";
import { useEffect } from "react";
import hero from "../assets/hero.png";
import design from "../assets/design.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
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
    <div className="w-full h-full px-8 pb-5 lg:px-[200px] lg:pb-[80px] lg:pt-[150px] pt-[120px]  flex-col  lg:flex-row  flex-between   gap-[100px]">
      <div className="w-full lg:w-3/5 flex-col flex-start  gap-8">
        <h1 data-aos="zoom-in" className="">
          Hi I'm John Andrew
        </h1>
        <h2 data-aos="zoom-in" data-aos-delay="200">
          Front End and Mobile App Developer
        </h2>
        <p data-aos="zoom-in" data-aos-delay="400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis id
          commodi esse voluptatibus, nisi saepe voluptas laboriosam iste quae
          perspiciatis.
        </p>
        <button data-aos="zoom-in" data-aos-delay="600" className="btn-primary">
          Contact Me
        </button>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="600"
        className="lg:w-2/5 w-full relative"
      >
        <div className="bg-[#2f2f2f] lg:w-[400px] img-component-size absolute top-[30px] -left-[30px]"></div>
        <img
          src={hero}
          alt="image of a man"
          className="lg:w-[520px] img-component-size relative z-20"
        />
        <img
          src={design}
          alt=""
          className="absolute -top-7 -right-7 rounded-lg z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
