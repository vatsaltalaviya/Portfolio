import React, { useState, useEffect } from "react";
import logo from "../assets/editorial-logo.png";
import FlipAnimation from "./FlipAnimation";

const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT-ME" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

const Navbar = ({ activeSection = "home", onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#F7F6F2]/95 backdrop-blur-md shadow-[0_1px_0_0_#DAD7D0]"
        : "bg-[#F7F6F2] border-b border-[#DAD7D0]"
        }`}
    >
      {/* Editorial top micro-bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1 border-b border-[#DAD7D0]/60 text-[10px] uppercase tracking-widest text-[#77746E] font-sans">
        <span>Portfolio Edition</span>
        <span>Based in Gondal &amp; Rajkot, India — React.js &amp; MERN Stack</span>
        <span>Open for Product Roles</span>
      </div>

      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-3.5 flex items-center justify-between">
        {/* Brand / Logo using Monogram */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-3.5 group focus:outline-none"
          aria-label="Vatsal Talaviya - Home"
        >
          <img
            src={logo}
            alt="Vatsal Talaviya Editorial Monogram"
            className="h-8 sm:h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="hidden sm:flex border-l border-[#DAD7D0] pl-3 flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-[#873D42] leading-none">
               &bull; MERN Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`text-xs uppercase tracking-widest font-sans font-medium transition-colors duration-200 py-1 block ${isActive
                      ? "text-[#873D42]"
                      : "text-[#77746E] hover:text-[#202020]"
                      }`}
                  >
                    <FlipAnimation>{item.label}</FlipAnimation>
                  </a>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#873D42] transition-all duration-300" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Quick CTA */}
          <a
            href="https://drive.google.com/file/d/1HJw9QNiD_PZvu-7qgmAWI_oF6dF4oZfa/view"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 border border-[#202020] text-xs uppercase tracking-wider font-medium text-[#202020] hover:bg-[#873D42] hover:border-[#873D42] hover:text-[#F7F6F2] transition-all duration-200"
          >
            <span>Resume</span>
            <i className="ri-arrow-right-up-line text-sm"></i>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[#202020] hover:text-[#873D42] transition-colors focus:outline-none"
          >
            <i
              className={`text-2xl ${isOpen ? "ri-close-line" : "ri-menu-4-line"
                }`}
            ></i>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden bg-[#EFEDE7] border-b border-[#DAD7D0] transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          <div className="text-[10px] uppercase tracking-widest text-[#77746E] pb-2 border-b border-[#DAD7D0]">
            Navigation Index
          </div>
          <ul className="flex flex-col gap-3.5">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="flex items-center justify-between">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`font-serif text-2xl tracking-tight transition-colors flex items-center gap-3 ${isActive
                      ? "text-[#873D42] italic font-normal"
                      : "text-[#202020] hover:text-[#873D42]"
                      }`}
                  >
                    <span className="text-xs font-sans not-italic text-[#77746E]">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </a>
                  {isActive && (
                    <span className="text-xs text-[#873D42] uppercase tracking-wider font-sans">
                      Active
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="pt-4 border-t border-[#DAD7D0] flex items-center justify-between text-xs text-[#77746E]">
            <a
              href="https://drive.google.com/file/d/1HJw9QNiD_PZvu-7qgmAWI_oF6dF4oZfa/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#202020] font-medium hover:text-[#873D42] flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Download CV</span>
              <i className="ri-download-line"></i>
            </a>
            <div className="flex items-center gap-4 text-base text-[#202020]">
              <a
                href="https://linkedin.com/in/vatsal-talaviya-028954299"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#873D42]"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a
                href="https://github.com/vatsaltalaviya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#873D42]"
              >
                <i className="ri-github-line"></i>
              </a>
              <a
                href="https://www.instagram.com/vatsaltalaviyaaa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#873D42]"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
