import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "React developer",
    company: "Orwetry systech",
    period: "08/2025 – Present",
    location: "Rajkot, Gujrat",
    isCurrent: true,
    type: "Commercial Role // Web Applications & Dashboards",
    highlights: [
      "Developed responsive and user-friendly web applications using React.js.",
      "Built and maintained dashboard interfaces with data visualization and analytics features.",
      "Integrated REST APIs and handled API requests using Axios/Fetch.",
      "Managed application state using React Hooks and modern React practices.",
      "Implemented reusable UI components to improve development efficiency.",
      "Optimized application performance and improved user experience.",
    ],
    technologies: ["React.js", "REST APIs", "Axios/Fetch", "React Hooks", "UI Components", "Performance"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Fuerte Developer, Rajkot, Gujarat",
    period: "05/2025 – 08/2025",
    location: "Rajkot, Gujrat",
    isCurrent: false,
    type: "Internship // Live Client Projects & Core Fundamentals",
    highlights: [
      "Contributed to a live client project as a React-based frontend developer, assisting in building and enhancing user-facing features using HTML, CSS, JavaScript, and React.",
      "Gained hands-on experience with React.js fundamentals, including functional components, props, state management, and API integration.",
      "Applied concepts of responsive design and practiced building components optimized for different screen sizes and devices.",
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "State Management", "Responsive Design"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-b border-[#DAD7D0] bg-[#EFEDE7]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#DAD7D0] gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#873D42] font-semibold mb-2">
               02 — CAREER HISTORY
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#202020] tracking-tight">
              Work Experience
            </h2>
          </div>
          <div className="text-xs uppercase tracking-widest text-[#77746E] max-w-xs md:text-right">
            Professional Roles, Commercial Projects &amp; Frontend Engineering
          </div>
        </div>

        {/* Experience Ledger Timeline */}
        <div className="divide-y divide-[#DAD7D0] pt-12 border-b border-[#DAD7D0]">
          {EXPERIENCES.map((exp, index) => {
            const expNum = `0${index + 1}`;
            return (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
              >
                {/* Left Meta Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-[#873D42]">
                      {expNum}
                    </span>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#873D42] text-[#F7F6F2] text-[10px] uppercase tracking-widest font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Current Role
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl md:text-3xl text-[#202020] tracking-tight">
                      {exp.company}
                    </h4>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#77746E] mt-1">
                      {exp.location}
                    </p>
                  </div>

                  <div className="p-3 bg-[#EFEDE7] border border-[#DAD7D0] inline-block">
                    <span className="text-xs font-mono font-medium text-[#202020]">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-[11px] uppercase tracking-wider text-[#77746E]">
                    {exp.type}
                  </div>
                </div>

                {/* Right Details Column */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#202020] tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-3.5 pt-2">
                    {exp.highlights.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-3 text-base text-[#202020] font-light leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#873D42] shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div className="pt-4 border-t border-[#DAD7D0] flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 bg-[#F7F6F2] border border-[#DAD7D0] text-[#77746E]"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;

