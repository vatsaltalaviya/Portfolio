import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "React.js", category: "Frontend Core", level: "Proficient" },
  { name: "Redux", category: "State Management", level: "Proficient" },
  { name: "TypeScript", category: "Languages", level: "Proficient" },
  { name: "JavaScript (ES6+)", category: "Languages", level: "Advanced" },
  { name: "Tailwind CSS", category: "Styling", level: "Proficient" },
  { name: "Node.js & Express.js", category: "Backend / MERN", level: "Working Knowledge" },
  { name: "MongoDB", category: "Database / MERN", level: "Working Knowledge" },
  { name: "REST APIs & Axios", category: "Integration", level: "Experienced" },
  { name: "HTML5 & CSS3", category: "Markup & Styling", level: "Core" },
  { name: "Git & Version Control", category: "Workflow", level: "Proficient" },
  { name: "WordPress", category: "CMS", level: "Familiar" },
  { name: "Responsive Web Design", category: "Architecture", level: "Expertise" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 border-b border-[#DAD7D0] bg-[#EFEDE7]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#DAD7D0] gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#873D42] font-semibold mb-2">
               03 — REPERTOIRE
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#202020] tracking-tight">
              Skills
            </h2>
          </div>
          <div className="text-xs uppercase tracking-widest text-[#77746E] max-w-xs md:text-right">
            Verified Technical Repertoire &bull; MERN &bull; Frontend Toolchains
          </div>
        </div>

        {/* Typographic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DAD7D0] border border-[#DAD7D0] mt-12 overflow-hidden shadow-sm">
          {SKILLS.map((skill, index) => {
            const formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group relative p-8 md:p-10 bg-[#F7F6F2] hover:bg-[#EFEDE7] transition-all duration-300 flex flex-col justify-between min-h-[160px]"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#77746E] group-hover:text-[#873D42] transition-colors">
                  <span> {formattedIndex}</span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#EFEDE7] group-hover:bg-[#F7F6F2] border border-[#DAD7D0]">
                    {skill.category}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#202020] group-hover:text-[#873D42] transition-colors tracking-tight font-normal">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] font-mono text-[#77746E] uppercase tracking-wider mt-1">
                    {skill.level}
                  </p>
                </div>

                <div className="mt-4 w-6 h-[1.5px] bg-[#DAD7D0] group-hover:w-full group-hover:bg-[#873D42] transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-8 flex flex-wrap items-center justify-between text-[11px] uppercase tracking-widest text-[#77746E] gap-4">
          <span>Hands-on React.js &bull; Redux &bull; TypeScript &bull; MERN Stack</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
