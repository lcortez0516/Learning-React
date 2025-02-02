import React from "react";

const Header = () => {
  return (
    <header className="items-center xl:items-left ">
      <h4 className="my-5 font-semibold">Logo</h4>
      <h1 className="text-slate-900 tracking-wide text-5xl xl:text-7xl font-bold">
        Tisoy Cortez
      </h1>
      <p className="text-slate-700 mt-2 tracking-wide">
        UI/UX Designer, Web Developer
      </p>
      <img
        className="max-w-full mt-5 xl:mt-20 rounded-lg"
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Photo of a male using a computer"
      />
    </header>
  );
};

export default Header;
