import React from "react";
import Transition from "../Transition";

const Aboutme = () => {
  const skills = [
    "HTML-CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "WordPress",
    "Python",
    "Tailwind CSS",
    "Git",
    "Web Design",
    "Responsive Design",
    "Frontend Development",
  ];
  return (
    <div className="flex-col justify-center items-center">
      <h1 className="text-4xl text-center py-8">About Me</h1>
      <div className="flex flex-col md:flex-row my-6 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base">
          <div className="text-xl md:text-3xl font-semibold text-gray-300">Profile</div>
          <div className="col-span-2 text-gray-400">
            <ul className="px-4 md:px-10 font-medium text-sm md:text-xl md:ml-7 text-zinc-500 list-disc">
              <li className="mt-3">
                I am a frontend developer with knowledge of HTML , CSS,
                JavaScript, React, Bootstrap, WordPress and little bit of Python
                . I enjoy building websites that look good and work well. I am
                looking for an internship or Job where I can use my skills,
                learn new things, and gain real experience.
              </li>
            </ul>
          </div>

          <div className="text-xl md:text-3xl font-semibold text-gray-300">Education:-</div>
          <div className="col-span-2 text-gray-400">
            <ul className="px-10 font-medium text-xl ml-7 text-zinc-500 list-disc">
              <li className="mt-3">
                <h1 className="text-xl font-semibold">B.C.A</h1>
                <h3 className="text-xl font-medium">Saurasthra University,</h3>
                <h4 className="text-sm">06/2022 - 03/2025</h4>
              </li>
              <li className="mt-3">
                <h1 className="text-xl font-semibold">H.S.C</h1>
                <h3 className="text-xl font-medium">
                  Shisumandir secondary High School,
                </h3>
                <h4 className="text-sm">03/2022</h4>
              </li>
            </ul>
          </div>

          <div className="text-xl md:text-3xl font-semibold text-gray-300">Skills:-</div>
          <div className="col-span-2 text-gray-400">
            <ul className="px-10 font-medium text-sm md:text-xl ml-7 text-zinc-500">
              <li className="mt-3">
                {skills.map((skill, index) => (
                  <h1
                    key={index}
                    className="mt-3 border rounded text-center px-1.5"
                  >
                    {skill}
                  </h1>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(Aboutme);
