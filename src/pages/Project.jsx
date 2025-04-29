import React from "react";
import { Link } from "react-router-dom";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import Transition from "../Transition";

const Project = () => {

    const projects = [{
        name: "Pin My Trip",
        info:"Tour booking Website Design",
        url: "https://pin-my-trip.vercel.app/",
        img: pro1,
        desc:"PinMyTrip is a modern and responsive frontend travel app built with React and Tailwind CSS. It allows users to explore travel destinations with smooth UI, image galleries, and clean layout."
    },
    {
        name: "Prescripto",
        info:"Healthcare Frontend Design",
        url: "https://prescripto-one-psi.vercel.app/",
        img: pro2,
        desc:"Prescripto is a sleek healthcare frontend built with React and Tailwind CSS.It streamlines appointment booking and prescription viewing with a clean, user-friendly interface."
    },
    {
        name: "Pin My Trip",
        info:"Weather App",
        url: "https://weather-app-rosy-ten-69.vercel.app/",
        img: pro3,
        desc:"Weather-App is a responsive React-based app that shows real-time weather using the OpenWeatherMap API.Users can search any city to view current temperature, humidity, and dynamic weather icons."
    }

    ]
  return (
    <div className="py-20 px-20 w-full mt-10 bg-zinc-950 text-white flex flex-col justify-center items-center">
      <div className="w-full md:w-2xl flex flex-col justify-center gap-5">
        <h1 className="text-6xl text-center py-8">Projects</h1>
        {projects.map((project, index) => (
            <Link key={index} to={project.url}>
            <div className="md:w-full border rounded p-2 flex flex-col md:flex-row">
              <div className=" w-full md:w-1/2 h-full rounded p-1.5 border">
                <img className="w-full rounded" src={project.img} alt="" />
              </div>
              <div className="w-full md:w-1/2 h-full p-3.5">
                <h1 className="text-2xl font-medium">{project.name}</h1>
                <h2 className="text-xl font-medium">{project.info}</h2>
                <p className="text-sm font-light py-3">
                 {project.desc}
                </p>
              </div>
            </div>
            </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Transition(Project);
