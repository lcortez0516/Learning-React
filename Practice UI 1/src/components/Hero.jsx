import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="img-container w-full h-[350px] mb-5">
        <img
          src="https://images.unsplash.com/vector-1739770244005-4c119b746781?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full w-full object-cover shrink-0"
        />
      </div>
      <div className="flex container gap-10">
        <h1 className="basis-2/3">
          Crafting Seamless Digital Experiences for You
        </h1>

        <div className=" basis-1/3">
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            laudantium itaque fugit quaerat harum fuga neque veniam! Aut vitae
            rem, cum facere incidunt repellat quasi,
          </p>
          <div>
            <button className="btn-primary mx-5">Learn More</button>
            <button className="btn-secondary">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
