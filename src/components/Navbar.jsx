import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import FlipAnimation from "./FlipAnimation";

const Navbar = () => {
  const [isShow, setisShow] = useState(false);
  return (
    <header className="bg-[#020617] fixed top-0 w-full px-10">
      <nav className="flex  justify-between text-white text-3xl">
        <div className="px-0 md:px-4 py-2.5">
          <NavLink to="/">
            <img className="w-32 md:w-56" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4 p-4">
            <NavLink to="/">
              <li className={` text-sm font-thin pr-8 opacity-40`}>
                <FlipAnimation>HOME</FlipAnimation>
              </li>
            </NavLink>
            <NavLink to="/aboutme">
              <li className={` text-sm font-thin pr-8 opacity-40`}>
                <FlipAnimation>ABOUT-ME</FlipAnimation>
              </li>
            </NavLink>
            <NavLink to="/project">
              <li className={` text-sm font-thin pr-8 opacity-40`}>
                <FlipAnimation>PROJECTS</FlipAnimation>
              </li>
            </NavLink>
            <NavLink to="/Contact">
              <li className={` text-sm font-thin pr-8 opacity-40`}>
                <FlipAnimation>CONTACT</FlipAnimation>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setisShow(!isShow)}>
            <i className="ri-menu-line"></i>
          </button>
        </div>
        <div
          className={`md:hidden absolute w-full left-0 bg-[#020617]  transform transition-all duration-500 ${
            isShow ? "-translate-y-[0%] " : "-translate-y-[2000%]"
          }`}
        >
          <div className=" py-2.5 flex justify-between items-center px-10">
            <NavLink to="/">
              <img className="w-32" src={logo} alt="" />
            </NavLink>
            <button onClick={() => setisShow(!isShow)}>
            <i className="ri-close-large-fill"></i>
          </button>
          </div>
          {/* <ul className={` flex-col bg-zinc-950 pl-10 md:ml-0 item-center py-8 gap-4 p-4 transform ${isShow?'-tanslate-y-[0%]':'-tanslate-y-[200%]'} transition-all duration-200`}> */}
          <ul
            className={`flex-col gap-4 pl-10 z-20 space-x-4 items-center`}
          >
            <NavLink
              onClick={() => {
                setisShow(false);
                scrollTo(0, 0);
              }}
              to="/"
            >
              <li className={` text-2xl font-thin pt-3 opacity-40`}>HOME</li>
            </NavLink>
            <NavLink
              onClick={() => {
                setisShow(false);
                scrollTo(0, 0);
              }}
              to="/aboutme"
            >
              <li className={` text-2xl font-thin  opacity-40`}>ABOUT-ME</li>
            </NavLink>
            <NavLink
              onClick={() => {
                setisShow(false);
                scrollTo(0, 0);
              }}
              to="/project"
            >
              <li className={` text-2xl font-thin opacity-40`}>PROJECTS</li>
            </NavLink>
            <NavLink
              onClick={() => {
                setisShow(false);
                scrollTo(0, 0);
              }}
              to="/contact"
            >
              <li className={` text-2xl font-thin pb-3 opacity-40`}>CONTACT</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
