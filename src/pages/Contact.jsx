import React from "react";
import { Link } from "react-router-dom";
import Transition from "../Transition";
import FlipAnimation from "../components/FlipAnimation";

const Contact = () => {
  return (
    <>
      <div className="w-full md:w-2xl flex flex-col justify-center gap-5">
        <h1 className="text-4xl text-center py-8">Contact</h1>

        <div className="md:w-full rounded p-2 flex flex-col md:flex-row">
          <div className="w-full h-full p-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base">
              <div className="font-semibold text-gray-300">Phone no</div>
              <div className="col-span-2 text-gray-400">+91 9265969034</div>

              <div className="font-semibold text-gray-300">Email</div>
              <div className="col-span-2 text-gray-400">
                vatsaltalaviyaa@gmail.com
              </div>

              <div className="font-semibold text-gray-300">Location</div>
              <div className="col-span-2 text-gray-400">Gondal, India</div>

                <div className="rounded flex  flex-col md:flex-row justify-start">
                  <span className="bg-white text-black px-12 md:px-5 py-3 rounded">
                    Contact
                  </span>
                  <ul className="px-3 py-3 md:py-0 md:px-5 flex flex-col md:flex-row items-center border justify-start gap-5">
                    <Link to="https://www.instagram.com/vatsaltalaviyaaa/">
                    <FlipAnimation>
                      <li className="md:px-5 ">
                        <i className="ri-instagram-line"></i>
                      </li>
                      </FlipAnimation>
                    </Link>
                    <Link to="https://github.com/vatsaltalaviya">
                    <FlipAnimation>
                      <li className="md:px-5">
                        <i className="ri-github-line"></i>
                      </li>
                      </FlipAnimation>
                    </Link>
                    <Link to="https://www.linkedin.com/in/vatsal-talaviya-028954299/">
                    <FlipAnimation>
                      <li className="md:px-5">
                        <i className="ri-linkedin-box-line"></i>
                      </li>
                      </FlipAnimation>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Transition(Contact);
