import { useContext } from "react";
import { ThemeContext } from "../MyContext";
import techcon1 from "../assets/techcon1.jpeg";
import rhivelle1 from "../assets/rhivelle1.jpeg";
function Project() {
  const { themeChoice } = useContext(ThemeContext);

  return (
    <section
      id="projects"
      className={`min-h-screen py-24 px-6 ${
        themeChoice ? "bg-white" : "bg-[#020617]"
      }`}
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#A855F7]">
          Projects
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-[#A855F7] to-violet-400 rounded-full mx-auto mt-3"></div>

        <p
          className={`mt-6 leading-8 ${
            themeChoice ? "text-gray-600" : "text-gray-400"}`}>
          Here are some of the projects I've worked on while learning and
          growing as a frontend developer. Each project reflects my passion for
          creating responsive, user-friendly, and visually appealing web
          applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Project Card */}
        <div className={`rounded-2xl overflow-hidden shadow-xl transition duration-300 hover:-translate-y-2 ${
            themeChoice ? "bg-gray-100" : "bg-[#0F172A]"}`}>
          {/* Project Image */}
          <img src={techcon1} alt="TechCon Ticket Website" className="w-full h-56 object-cover"/>

          {/* Card Content */}
          <div className="p-6">
            <h2 className={`text-2xl font-bold ${ themeChoice ? "text-gray-800" : "text-white"}`}>
              TechCon Ticket Website
            </h2>

            <p
              className={`mt-3 leading-7 ${ themeChoice ? "text-gray-600" : "text-gray-400" }`}>
              A responsive conference ticket booking website built with React,
              Tailwind CSS, and React Router. Users can book tickets through an
              interactive and modern interface.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-3 py-1 bg-[#A855F7]/20 text-[#A855F7] rounded-full text-sm">
                React
              </span>

              <span className="px-3 py-1 bg-[#A855F7]/20 text-[#A855F7] rounded-full text-sm">
                Tailwind
              </span>

              <span className="px-3 py-1 bg-[#A855F7]/20 text-[#A855F7] rounded-full text-sm">
                JavaScript
              </span>

              <span className="px-3 py-1 bg-[#A855F7]/20 text-[#A855F7] rounded-full text-sm">
                React Router
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <a href="https://adeoyerihanat6-prog.github.io/ticket/"
                className="px-5 py-2 bg-[#A855F7] text-white rounded-lg hover:bg-violet-700 transition">
                Live Demo
              </a>

              <a href="https://github.com/adeoyerihanat6-prog/ticket"
                className="px-5 py-2 border border-[#A855F7] text-[#A855F7] rounded-lg hover:bg-[#A855F7] hover:text-white transition">
                GitHub
              </a>
            </div>
          </div>
        </div>

         <div className={`rounded-2xl overflow-hidden shadow-xl transition duration-300 hover:-translate-y-2 ${
            themeChoice ? "bg-gray-100" : "bg-[#0F172A]"}`}>
          {/* Project Image */}
          <img src={rhivelle1} alt="TechCon Ticket Website" className="w-full h-56 object-cover"/>

          {/* Card Content */}
          <div className="p-6">
            <h2 className={`text-2xl font-bold ${ themeChoice ? "text-gray-800" : "text-white"}`}>
              Rhivelle Finance Website
            </h2>

            <p
              className={`mt-3 leading-7 ${ themeChoice ? "text-gray-600" : "text-gray-400" }`}>
              A simple loan management system that allows users to apply for loans, view their loan status, and manage their accounts. Built with React and Tailwind CSS, it provides a clean and intuitive user experience.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-3 py-1 bg-[#A855F7]/20 text-[#A855F7] rounded-full text-sm">
                React
              </span>

              <span className="px-3 py-1 bg-[#A855F7]/20 text-[#A855F7] rounded-full text-sm">
                Tailwind
              </span>

              <span className="px-3 py-1 bg-[#A855F7]/20 text-[#A855F7] rounded-full text-sm">
                Node.js
              </span>

              <span className="px-3 py-1 bg-[#A855F7]/20 text-[#A855F7] rounded-full text-sm">
                Express.js
              </span>

              <span className="px-3 py-1 bg-[#A855F7]/20 text-[#A855F7] rounded-full text-sm">
                MongoDB Atlas
              </span>

              <span className="px-3 py-1 bg-[#A855F7]/20 text-[#A855F7] rounded-full text-sm">
                JWT (HTTP-Only Cookies)
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <a href="https://loan-frontend-olive.vercel.app"
                className="px-5 py-2 bg-[#A855F7] text-white rounded-lg hover:bg-violet-700 transition">
                Live Demo
              </a>

              <a href="https://github.com/adeoyerihanat6-prog/loan-frontend"
                className="px-5 py-2 border border-[#A855F7] text-[#A855F7] rounded-lg hover:bg-[#A855F7] hover:text-white transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;