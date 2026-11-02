import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-[#DAD7D0]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#DAD7D0] gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#873D42] font-semibold mb-2">
               01 — DOSSIER
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#202020] tracking-tight">
              About Me
            </h2>
          </div>
          <div className="text-xs uppercase tracking-widest text-[#77746E] max-w-xs md:text-right">
            Background, Profile &amp; Academic Foundation
          </div>
        </div>

        {/* Two-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          {/* Left Column: Profile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#873D42]">
                01.1
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#202020]">
                Profile
              </h3>
              <div className="h-[1px] flex-1 bg-[#DAD7D0]"></div>
            </div>

            <div className="p-8 md:p-10 bg-[#EFEDE7] border border-[#DAD7D0] relative">
              <span className="font-serif italic text-6xl text-[#DAD7D0] absolute top-2 right-4 select-none pointer-events-none">
                “
              </span>
              <p className="font-sans text-base md:text-lg text-[#202020] leading-relaxed font-light">
                React.js Developer with hands-on experience building responsive
                web applications and data-driven dashboards. Proficient in React,
                Redux, TypeScript, and Tailwind CSS, with working knowledge of
                Node.js, Express.js, and MongoDB. Experienced in REST API
                integration, reusable component design, and performance
                optimization. Seeking to contribute to a collaborative product
                team while growing as a full-stack developer.
              </p>
              <div className="mt-8 pt-4 border-t border-[#DAD7D0] flex flex-wrap items-center justify-between text-[11px] uppercase tracking-wider text-[#77746E] gap-2">
                <span>Specialization: React.js &amp; MERN Stack</span>
                <span>Location: Gondal &amp; Rajkot, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#873D42]">
                01.2
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#202020]">
                Education
              </h3>
              <div className="h-[1px] flex-1 bg-[#DAD7D0]"></div>
            </div>

            <div className="border border-[#DAD7D0] divide-y divide-[#DAD7D0] bg-[#F7F6F2]">
              {/* Entry 1 */}
              <div className="p-6 md:p-8 hover:bg-[#EFEDE7] transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="font-serif text-2xl md:text-3xl text-[#202020] font-normal">
                    B.C.A
                  </h4>
                  <span className="inline-block px-2.5 py-1 text-[11px] uppercase tracking-widest font-mono text-[#873D42] bg-[#EFEDE7] border border-[#DAD7D0]">
                    06/2022 – 04/2025
                  </span>
                </div>
                <p className="font-sans text-base text-[#202020] font-medium">
                  Saurashra university
                </p>
                <div className="mt-2 text-xs uppercase tracking-wider text-[#77746E]">
                  Rajkot, India &bull; Bachelor of Computer Applications
                </div>
              </div>

              {/* Entry 2 */}
              <div className="p-6 md:p-8 hover:bg-[#EFEDE7] transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="font-serif text-2xl md:text-3xl text-[#202020] font-normal">
                    H.S.C
                  </h4>
                  <span className="inline-block px-2.5 py-1 text-[11px] uppercase tracking-widest font-mono text-[#873D42] bg-[#EFEDE7] border border-[#DAD7D0]">
                    2022
                  </span>
                </div>
                <p className="font-sans text-base text-[#202020] font-medium">
                  Shisumandir high school
                </p>
                <div className="mt-2 text-xs uppercase tracking-wider text-[#77746E]">
                  Gondal, India &bull; Higher Secondary Certificate
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
