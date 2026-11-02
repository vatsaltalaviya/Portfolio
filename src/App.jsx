import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SECTION_IDS = ["home", "about", "experience", "skills", "projects", "contact"];

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  // Handle URL hashes or route pathnames on mount
  useEffect(() => {
    const path = window.location.pathname.toLowerCase().replace(/^\//, "");
    const hash = window.location.hash.toLowerCase().replace(/^#/, "");
    const target = hash || path;

    if (target === "aboutme" || target === "about") {
      setTimeout(() => scrollToSection("about"), 200);
    } else if (target === "experience" || target === "work") {
      setTimeout(() => scrollToSection("experience"), 200);
    } else if (target === "skills") {
      setTimeout(() => scrollToSection("skills"), 200);
    } else if (target === "project" || target === "projects") {
      setTimeout(() => scrollToSection("projects"), 200);
    } else if (target === "contact") {
      setTimeout(() => scrollToSection("contact"), 200);
    }
  }, [scrollToSection]);

  // Active section detection via IntersectionObserver + Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      // Bottom of page detection for Contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection("contact");
        return;
      }

      // Top of page detection for Home
      if (window.scrollY < 150) {
        setActiveSection("home");
        return;
      }

      // Calculate which section is closest to top offset
      const headerOffset = 140;
      let current = "home";

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset && rect.bottom > headerOffset) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#202020] font-sans antialiased selection:bg-[#873D42] selection:text-[#F7F6F2]">
      {/* Sticky Editorial Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Single Continuous Scrolling Page */}
      <main className="w-full">
        <div id="home">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* Editorial Colophon / Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default App;
