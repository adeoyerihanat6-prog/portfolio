import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../MyContext";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import techcon1 from "../assets/techcon1.jpeg";
import rhivelle1 from "../assets/rhivelle1.jpeg";
import editor from "../assets/editor.png"
import quiz from "../assets/quizappscreenshot.png"
import quote from "../assets/quote.png"
const PROJECTS_DATA = [
  {
    id: "techcon",
    title: "TechCon Ticket Website",
    category: "Frontend",
    image: techcon1,
    description: "A responsive conference ticket booking website built with React, Tailwind CSS, and React Router. Users can book tickets through an interactive and modern interface.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "React Router"],
    demoUrl: "https://adeoyerihanat6-prog.github.io/ticket/",
    githubUrl: "https://github.com/adeoyerihanat6-prog/ticket",
  },
  {
    id: "rhivelle",
    title: "Rhivelle Finance Website",
    category: "Full Stack",
    image: rhivelle1,
    description: "A simple loan management system featuring an authenticated user dashboard, loan statuses, and state tracking management. Built with robust REST API pipelines.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB Atlas", "JWT Auth"],
    demoUrl: "https://loan-frontend-olive.vercel.app",
    githubUrl: "https://github.com/adeoyerihanat6-prog/loan-frontend",
  },

  {
    id: "portfolio",
    title: "AI Video Editor Portfolio",
    category: "Frontend",
    image: editor ,
    description: "A modern portfolio website designed and developed for an AI Video edito, to showcase his work, service and digital presence through a sleek and responsive interface.",
    technologies: ["React", "Tailwind CSS", "Framer motion", "EmailJS"],
    demoUrl: "https://enny-s-portfolio.vercel.app",
    githubUrl: "https://github.com/adeoyerihanat6-prog/Enny-s_Portfolio",
  },
  {
    id: "Quiz App",
    title: "Flashcard Quiz App",
    category: "Frontend",
    image: quiz ,
    description: "A responsive flashcard study application built with React that allows users to create, edit, delete, and review custom flascards. Features intuitive navigation, answer toggling, and local storage for persistent data.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://flashcard-app-mauve-tau.vercel.app",
    githubUrl: "https://adeoyerihanat6-prog/flashcard-quiz-app",
  },
  {
    id: "Quote",
    title: "Quote Haven",
    category: "Frontend",
    image: quote ,
    description: "A clean and responsive quote generator built with React that fetches and displays inspiring quotes from an external API. Users can generate new quotes instantly with a single click, showcasing AI integration and dynamic content rendering.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://quote-generator-dusky-phi.vercel.app",
    githubUrl: "https://adeoyerihanat6-prog/CodeAlpha_RandomQuoteGenerator",
  },
  {
    id: "Quote",
    title: "Quote Haven",
    category: "Frontend",
    image: quote ,
    description: "A clean and responsive quote generator built with React that fetches and displays inspiring quotes from an external API. Users can generate new quotes instantly with a single click, showcasing AI integration and dynamic content rendering.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://quote-generator-dusky-phi.vercel.app",
    githubUrl: "https://adeoyerihanat6-prog/CodeAlpha_RandomQuoteGenerator",
  },
];

const categories = ["All", "Full Stack", "Frontend"];

function Project() {
  const { themeChoice } = useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS_DATA.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section
      id="projects"
      className={`relative min-h-screen py-24 px-6 overflow-hidden transition-colors duration-500 ${
        themeChoice ? "bg-gray-50" : "bg-[#020617]"
      }`}
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-[#A855F7] tracking-tight sm:text-5xl"
        >
          Featured Work
        </motion.h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#A855F7] to-violet-400 rounded-full mx-auto mt-4"></div>
        <p className={`mt-6 text-lg leading-relaxed transition-colors duration-500 ${
          themeChoice ? "text-gray-600" : "text-gray-400"
        }`}>
          A collection of digital solutions built with modern technology stacks. Each project handles precise user logic, clean interface design, and architectural best practices.
        </p>
      </div>

      {/* Category Filter Menu */}
      <div className="flex justify-center items-center gap-3 mb-16 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              activeFilter === cat
                ? "text-white"
                : themeChoice ? "text-gray-600 hover:bg-gray-200" : "text-gray-400 hover:bg-gray-800"
            }`}
          >
            {activeFilter === cat && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-[#A855F7] rounded-full z-0"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid Container */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between hover:shadow-2xl ${
                themeChoice 
                  ? "bg-white border-gray-100 shadow-gray-200/50 hover:shadow-purple-500/10" 
                  : "bg-[#0F172A] border-gray-800/80 shadow-none hover:border-[#A855F7]/30 hover:shadow-purple-500/5"
              }`}
            >
              <div>
                {/* Visual Header Block with Hover Zoom Overlay */}
                <div className="overflow-hidden h-60 w-full bg-gray-900 relative">
                  <img 
                    src={project.image} 
                    alt={`${project.title} Interface Mockup`} 
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  
                  {/* Glassmorphic Action Overlay revealed on Desktop Hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm hidden md:flex">
                    <a 
                      href={project.demoUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 rounded-full hover:bg-[#A855F7] hover:text-white transform hover:scale-110 transition duration-200 shadow-lg"
                      title="Live Preview"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 rounded-full hover:bg-[#A855F7] hover:text-white transform hover:scale-110 transition duration-200 shadow-lg"
                      title="Source Code"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>

                  {/* Absolute Category Badge */}
                  <span className="absolute top-4 left-4 text-[11px] uppercase tracking-widest font-bold px-3 py-1 bg-black/60 text-white backdrop-blur-md rounded-md border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Info Text Area */}
                <div className="p-6">
                  <h2 className={`text-2xl font-bold transition-colors duration-500 ${
                    themeChoice ? "text-gray-800" : "text-white"
                  }`}>
                    {project.title}
                  </h2>

                  <p className={`mt-3 leading-relaxed text-sm md:text-base transition-colors duration-500 ${
                    themeChoice ? "text-gray-600" : "text-gray-400"
                  }`}>
                    {project.description}
                  </p>

                  {/* Interactive Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((tech, index) => (
                      <motion.span 
                        key={index}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="px-3 py-1 bg-[#A855F7]/10 dark:bg-[#A855F7]/20 text-[#A855F7] font-semibold rounded-md text-xs tracking-wide cursor-default transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile-Friendly Bottom Action Row (visible on mobile / fallback for non-hover users) */}
              <div className="px-6 pb-6 pt-2 flex gap-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href={project.demoUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#A855F7] text-white font-medium rounded-lg hover:bg-violet-700 transition flex-1 text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-500/10"
                >
                  Live Demo <FaExternalLinkAlt className="text-xs" />
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 border border-[#A855F7] text-[#A855F7] font-medium rounded-lg hover:bg-[#A855F7] hover:text-white transition flex-1 text-center text-sm flex items-center justify-center gap-2"
                >
                  Code Base <FaGithub className="text-sm" />
                </a>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Project;