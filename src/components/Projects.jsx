import React from "react";
import { motion } from "framer-motion";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";
import FlipAnimation from "./FlipAnimation";

const PROJECTS = [
  {
    name: "RupeeRoot",
    info: "Online Expense Tracking website",
    url: "https://rupeeroot.vercel.app/",
    img: pro4,
    desc: "Built a fully responsive online expense tracking platform, enabling users to monitor and manage their financial activities efficiently. Developed using React for the frontend and Node.js + Express.js for the backend, with MongoDB as the database. Implemented secure authentication, RESTful APIs, and a sleek UI with clean Git version control.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
  },
  {
    name: "Pin My Trip",
    info: "Tour booking Website Design",
    url: "https://pin-my-trip.vercel.app/",
    img: pro1,
    desc: "PinMyTrip is a modern and responsive frontend travel app built with React and Tailwind CSS. It allows users to explore travel destinations with smooth UI, image galleries, and clean layout.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
  },
  {
    name: "Prescripto",
    info: "Healthcare Frontend Design",
    url: "https://prescripto-one-psi.vercel.app/",
    img: pro2,
    desc: "Prescripto is a sleek healthcare frontend built with React and Tailwind CSS. It streamlines appointment booking and prescription viewing with a clean, user-friendly interface.",
    technologies: ["React", "Tailwind CSS", "UI/UX", "Component Architecture"],
  },
  {
    name: "Weather App",
    info: "Weather App",
    url: "https://weather-app-rosy-ten-69.vercel.app/",
    img: pro3,
    desc: "Weather-App is a responsive React-based app that shows real-time weather using the OpenWeatherMap API. Users can search any city to view current temperature, humidity, and dynamic weather icons.",
    technologies: ["React", "OpenWeatherMap API", "REST Integration", "CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[#DAD7D0]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#DAD7D0] gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#873D42] font-semibold mb-2">
               04 — SELECTED WORKS
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#202020] tracking-tight">
              Projects
            </h2>
          </div>
          <div className="text-xs uppercase tracking-widest text-[#77746E] max-w-xs md:text-right">
            Curated Showcase of Production Web Apps &amp; Frontend Systems
          </div>
        </div>

        {/* Asymmetrical Editorial Projects Spreads */}
        <div className="space-y-20 md:space-y-32 pt-16">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;
            const projectNumber = `0${index + 1}`;

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group border-b border-[#DAD7D0] pb-16 md:pb-24 last:border-b-0 last:pb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  {/* Image Plate */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative p-3 sm:p-4 bg-[#EFEDE7] border border-[#DAD7D0] overflow-hidden group/link focus:outline-none"
                    >
                      <div className="relative overflow-hidden aspect-[16/10] bg-[#202020]">
                        <img
                          src={project.img}
                          alt={project.name}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/link:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#202020]/20 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-5 py-2.5 bg-[#F7F6F2] text-[#202020] text-xs uppercase tracking-widest font-medium border border-[#202020] shadow-sm flex items-center gap-2">
                            <span>Open Project</span>
                            <i className="ri-arrow-right-up-line"></i>
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#77746E]">
                        <span>{projectNumber}</span>
                        <span>{project.info}</span>
                      </div>
                    </a>
                  </div>

                  {/* Text & Narrative Spread */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      {/* Numerals & Info */}
                      <div className="flex items-center justify-between border-b border-[#DAD7D0] pb-3 mb-4">
                        <span className="font-mono text-xs text-[#873D42] font-semibold tracking-wider">
                           {projectNumber}
                        </span>
                        <span className="text-[11px] uppercase tracking-wider text-[#77746E]">
                          {project.info}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202020] tracking-tight">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#873D42] transition-colors"
                        >
                          {project.name}
                        </a>
                      </h3>

                      {/* Category Pill / Subtitle */}
                      <p className="text-sm font-serif italic text-[#873D42] mt-1 mb-4">
                        {project.info}
                      </p>

                      {/* Description */}
                      <p className="font-sans text-base text-[#77746E] leading-relaxed font-light">
                        {project.desc}
                      </p>

                      {/* Tech badges */}
                      <div className="pt-4 flex flex-wrap gap-1.5">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono px-2.5 py-0.5 bg-[#EFEDE7] border border-[#DAD7D0] text-[#77746E]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action link */}
                    <div className="pt-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#202020] text-[#F7F6F2] hover:bg-[#873D42] text-xs uppercase tracking-widest font-medium transition-all duration-300"
                      >
                        <FlipAnimation>Explore Project</FlipAnimation>
                        <i className="ri-arrow-right-up-line text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
