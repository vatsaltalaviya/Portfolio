import React from "react";
import logo from "../assets/editorial-logo.png";
import FlipAnimation from "./FlipAnimation";

const Footer = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="bg-[#EFEDE7] border-t border-[#DAD7D0] py-16 text-[#202020]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#DAD7D0] items-start">
          {/* Brand & Editorial Colophon */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Vatsal Talaviya Editorial Monogram"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#77746E] font-light max-w-sm leading-relaxed">
              React.js | MERN Stack Developer with hands-on experience building
              responsive web applications, component libraries, and data-driven dashboards.
            </p>
            <div className="text-xs uppercase tracking-widest text-[#873D42] font-mono">
              Gondal &bull; Rajkot, Gujarat, India
            </div>
          </div>

          {/* Quick Section Navigation */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-[#77746E] font-semibold">
              Table of Contents
            </div>
            <ul className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider font-medium text-[#77746E]">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className="hover:text-[#873D42] transition-colors"
                >
                  <FlipAnimation>Home</FlipAnimation>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="hover:text-[#873D42] transition-colors"
                >
                  <FlipAnimation>About-Me</FlipAnimation>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => handleNavClick(e, "experience")}
                  className="hover:text-[#873D42] transition-colors"
                >
                  <FlipAnimation>Experience</FlipAnimation>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleNavClick(e, "skills")}
                  className="hover:text-[#873D42] transition-colors"
                >
                  <FlipAnimation>Skills</FlipAnimation>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "projects")}
                  className="hover:text-[#873D42] transition-colors"
                >
                  <FlipAnimation>Projects</FlipAnimation>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="hover:text-[#873D42] transition-colors"
                >
                  <FlipAnimation>Contact</FlipAnimation>
                </a>
              </li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#DAD7D0] bg-[#F7F6F2] text-[#202020] hover:bg-[#202020] hover:text-[#F7F6F2] hover:border-[#202020] text-xs uppercase tracking-widest font-medium transition-all duration-300 group"
            >
              <span>Back to Top</span>
              <i className="ri-arrow-up-line transition-transform group-hover:-translate-y-1"></i>
            </button>
          </div>
        </div>

        {/* Bottom Imprint */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#77746E] gap-4">
          <div>
            &copy; {new Date().getFullYear()} Vatsal Talaviya. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/vatsal-talaviya-028954299"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#873D42] transition-colors uppercase tracking-wider text-[11px]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vatsaltalaviya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#873D42] transition-colors uppercase tracking-wider text-[11px]"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/vatsaltalaviyaaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#873D42] transition-colors uppercase tracking-wider text-[11px]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
