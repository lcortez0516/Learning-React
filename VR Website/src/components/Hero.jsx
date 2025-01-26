import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Virtual build tools
          <span className="special-text"> for developers</span>
        </h1>
        {/* Sub-heading */}
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        {/* Buttons */}
        <div className="my-10 flex gap-3 justify-center items-center">
          <a href="#" className="btn-primary">
            Start for free
          </a>
          <a href="#" className="btn-secondary">
            Documentation
          </a>
        </div>
        {/* Videos */}
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border  border-orange-700 shadow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border  border-orange-700 shadow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
