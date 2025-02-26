import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between  container">
      <h4 className="font-semibold">lcortez0516</h4>
      <div>
        <ul className="flex-center  gap-10">
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact Us</li>
          <li>
            <button className="btn-secondary mx-5">Menu</button>
            <button className="btn-primary">Join</button>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">Hamburger Menu</div>
    </nav>
  );
};

export default Navbar;
