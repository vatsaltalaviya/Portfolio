import React from "react";
import main from "../assets/hero.jpg";
import { Link } from "react-router-dom";
import Transition from "../Transition";
import FlipAnimation from "../components/FlipAnimation";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-row md:py-20 overflow-y-hidden justify-center items-center w-full scroll">
        <div className="md:w-1/2 text-white py-3 md:p-5 flex flex-col justify-center items-center scroll">
          <h1 className="w-full text-2xl md:text-4xl pb-3 text-center">
            Welcome to my Portfolio!
          </h1>
          <div className="overflow-hidden rounded">
            <img className="w-full md:w-80 h-96 md:px-2" src={main} alt="" />
          </div>
        </div>
        <div className="md:w-1/2 text-white  px-1.5">
          <h1 className="text-3xl md:text-6xl font-semibold">Vatsal Talaviya</h1>
          <h3 className="text-xl md:text-2xl text-zinc-700">Frond-end Developer</h3>
          <p className="text-sm md:text-xl text-zinc-300 py-5">
           <span className="px-5"></span> I turn ideas into interactive, pixel-perfect websites that feel as
            good as they look. With a passion for clean code and smooth
            experiences, I build with both logic and love. Every project is a
            new canvas — where design meets functionality. I'm always exploring
            new tech, new challenges, and better ways to bring stories to life
            online.
          </p>
          <div className="pt-5 flex md:flex-col lg:flex-row flex-col justify-start gap-3 items-center">
            <a href="/Vatsal-TalaviyaCV.pdf" download className="bg-white text-black px-5 py-3 rounded cursor-pointer"><FlipAnimation>Download CV</FlipAnimation></a>
            <div className="rounded flex  flex-col md:flex-row justify-start ml-0 md:ml-5 border">
              <span className="bg-white text-black px-12 md:px-5 py-3 rounded">Contact</span>
              <ul className="px-3 py-3 md:py-0 md:px-5 flex flex-col md:flex-row items-center justify-start gap-5">
                <Link to='https://www.instagram.com/vatsaltalaviyaaa/'><FlipAnimation><li className="md:px-5 "><i className="ri-instagram-line"></i></li></FlipAnimation></Link>
                <Link to='https://github.com/vatsaltalaviya'><FlipAnimation><li className="md:px-5"><i className="ri-github-line"></i></li></FlipAnimation></Link>
                <Link to='https://www.linkedin.com/in/vatsal-talaviya-028954299/'><FlipAnimation><li className="md:px-5"><i className="ri-linkedin-box-line"></i></li></FlipAnimation></Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transition(Home);
