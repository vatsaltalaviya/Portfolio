import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";
import FlipAnimation from "./FlipAnimation";

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 border-b border-[#DAD7D0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Editorial Index Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between pb-6 border-b border-[#DAD7D0] text-xs uppercase tracking-widest text-[#77746E]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#873D42]"></span>
            <span className="font-medium text-[#202020]">Welcome to my Portfolio!</span>
          </div>
          <div className="hidden sm:block text-[11px]">
            Portfolio Edition
          </div>
          <div className="text-[11px] font-medium text-[#873D42]">
            React.js | MERN Stack Developer
          </div>
        </motion.div>

        {/* Oversized Expressive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="py-10 md:py-16"
        >
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <span className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-[#77746E]">
              Portfolio of
            </span>
            <span className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-[#77746E]">
              Gondal &bull; Rajkot, India
            </span>
          </div>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#202020] tracking-tight leading-[0.92] mt-2 mb-4">
            Vatsal Talaviya
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#873D42]">
              React.js | MERN Stack Developer
            </h2>
            <div className="h-[1px] flex-1 max-w-xs bg-[#DAD7D0] hidden md:block"></div>
            <p className="text-xs uppercase tracking-widest text-[#77746E]">
              Responsive Web Apps &bull; Dashboards &bull; Clean Architecture
            </p>
          </div>
        </motion.div>

        {/* Asymmetrical Two-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-6">
          {/* Portrait Plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="p-3 bg-[#EFEDE7] border border-[#DAD7D0] shadow-sm">
              <div className="overflow-hidden aspect-[3/4] relative bg-[#202020]">
                <img
                  src={heroImg}
                  alt="Vatsal Talaviya - React.js | MERN Stack Developer"
                  className="w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="pt-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#77746E]">
                <span>PORTRAIT</span>
                <span>VATSAL TALAVIYA</span>
              </div>
            </div>
          </motion.div>

          {/* Narrative & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="lg:col-span-7 flex flex-col justify-between h-full space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-[#EFEDE7] border border-[#DAD7D0] text-[11px] uppercase tracking-wider text-[#77746E]">
                Professional Summary
              </div>
              <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#202020] leading-relaxed font-light">
                <span className="font-serif italic font-normal text-3xl md:text-4xl text-[#873D42] mr-2 float-left leading-none">
                  “I
                </span>
                am a React.js Developer with hands-on experience building responsive web
                applications and data-driven dashboards. Proficient in React, Redux,
                TypeScript, and Tailwind CSS, with working knowledge of Node.js, Express.js,
                and MongoDB. Experienced in REST API integration, reusable component design,
                and performance optimization.”
              </p>
            </div>

            {/* CTAs and Social Directory */}
            <div className="pt-6 border-t border-[#DAD7D0] space-y-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://drive.google.com/file/d/1HJw9QNiD_PZvu-7qgmAWI_oF6dF4oZfa/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Vatsal-TalaviyaCV.pdf"
                  className="group inline-flex items-center justify-center gap-3 bg-[#202020] text-[#F7F6F2] hover:bg-[#873D42] px-7 py-4 border border-[#202020] hover:border-[#873D42] text-xs uppercase tracking-widest font-medium transition-all duration-300"
                >
                  <FlipAnimation>Download CV</FlipAnimation>
                  <i className="ri-download-line text-sm transition-transform group-hover:translate-y-0.5"></i>
                </a>

                <a
                  href="#experience"
                  className="inline-flex items-center justify-center gap-3 bg-transparent text-[#202020] hover:text-[#873D42] hover:bg-[#EFEDE7] px-7 py-4 border border-[#DAD7D0] text-xs uppercase tracking-widest font-medium transition-all duration-300"
                >
                  <FlipAnimation>View Experience</FlipAnimation>
                  <i className="ri-briefcase-line text-sm"></i>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 bg-transparent text-[#202020] hover:text-[#873D42] hover:bg-[#EFEDE7] px-7 py-4 border border-[#DAD7D0] text-xs uppercase tracking-widest font-medium transition-all duration-300"
                >
                  <FlipAnimation>Contact</FlipAnimation>
                  <i className="ri-arrow-down-line text-sm"></i>
                </a>
              </div>

              {/* Social Channels Directory */}
              <div className="p-4 bg-[#EFEDE7] border border-[#DAD7D0]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span className="text-[11px] uppercase tracking-widest text-[#77746E] font-medium">
                    Verified Links &amp; Profiles:
                  </span>
                  <div className="flex items-center gap-6">
                    <a
                      href="https://linkedin.com/in/vatsal-talaviya-028954299"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#202020] hover:text-[#873D42] flex items-center gap-1.5 transition-colors uppercase tracking-wider text-[11px] font-medium"
                    >
                      <i className="ri-linkedin-box-line text-base"></i>
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/vatsaltalaviya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#202020] hover:text-[#873D42] flex items-center gap-1.5 transition-colors uppercase tracking-wider text-[11px] font-medium"
                    >
                      <i className="ri-github-line text-base"></i>
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.instagram.com/vatsaltalaviyaaa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#202020] hover:text-[#873D42] flex items-center gap-1.5 transition-colors uppercase tracking-wider text-[11px] font-medium"
                    >
                      <i className="ri-instagram-line text-base"></i>
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
