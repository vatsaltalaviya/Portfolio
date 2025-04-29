import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Aboutme from "./pages/Aboutme";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

const COLORS = ["#13ffaa", "#1e67c6", "#ce84cf", "#dd335c"];
const App = () => {
  const location = useLocation();
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0, #020617 55%,${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <>
      <Navbar />
      <motion.div
        style={{
          backgroundImage,
        }}
        className="py-10 px-20 w-full min-h-screen bg-zinc-950 text-white flex justify-center items-center"
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index path="/" element={<Home />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default App;
