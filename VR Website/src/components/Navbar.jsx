import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index.jsx";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // mobile drawer
  const [mobileDrawer, setMobileDrawer] = useState(false);
  // toggle navbar
  const toggleNavBar = () => {
    setMobileDrawer((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center shrink-0">
            <img className="h-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="btn-secondary">
              Sign In
            </a>
            <a href="" className="btn-primary">
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawer ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawer && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="" className="btn-secondary">
                Sign in
              </a>
              <a href="" className="btn-primary">
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
