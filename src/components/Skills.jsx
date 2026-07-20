import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../MyContext";

// Icon Imports
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiReactrouter, SiExpress, SiMongodb, SiMongoose, SiNpm, SiPostman, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// 1. Centralized Skills Data Structure
const SKILLS_DATA = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "React Router", icon: SiReactrouter, color: "text-red-500" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-800 dark:text-gray-100" }, // Dynamic for themes
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "Mongoose", icon: SiMongoose, color: "text-red-500" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-900 dark:text-gray-100" }, // Dynamic for themes
      { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
      { name: "Vite", icon: SiVite, color: "text-purple-500" },
      { name: "npm", icon: SiNpm, color: "text-red-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ],
  },
];

// 2. Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

function Skills() {
  const { themeChoice } = useContext(ThemeContext);

  return (
    <section 
      id="skills" 
      className={`min-h-screen px-6 py-24 transition-colors duration-500 ${ 
        themeChoice ? "bg-gray-50" : "bg-[#0F172A]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-[#A855F7] tracking-tight">
            Skills
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#A855F7] to-violet-400 rounded-full mt-3"></div>
          <p className={`mt-6 max-w-2xl leading-8 transition-colors duration-500 ${ 
            themeChoice ? "text-gray-600" : "text-gray-400"
          }`}>
            Here are the technologies and tools I use to build modern,
            responsive full-stack web applications.
          </p>
        </div>

        {/* Categories Loop */}
        {SKILLS_DATA.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mt-16">
            <h2 className="text-2xl font-bold text-[#A855F7] mb-8 tracking-wide">
              {section.category}
            </h2>

            {/* Staggered Grid Element */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {section.items.map((skill, skillIdx) => {
                const SkillIcon = skill.icon;
                
                return (
                  <motion.div
                    key={skillIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`group rounded-2xl p-6 text-center border transition-all duration-300 cursor-default ${ 
                      themeChoice 
                        ? "bg-white border-gray-100 shadow-sm hover:shadow-md hover:shadow-purple-500/5" 
                        : "bg-[#111827] border-gray-800/60 hover:border-purple-500/30" 
                    }`}
                  >
                    <SkillIcon className={`text-5xl mx-auto ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                    <h3 className={`mt-4 font-semibold text-sm tracking-wide transition-colors duration-500 ${
                      themeChoice ? "text-gray-700" : "text-gray-300"
                    }`}>
                      {skill.name}
                    </h3>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;