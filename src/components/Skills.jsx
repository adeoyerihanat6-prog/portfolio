import { useContext } from "react";
import { ThemeContext } from "../MyContext";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub,} from "react-icons/fa";

import { SiJavascript, SiTailwindcss, SiReactrouter, SiExpress, SiMongodb, SiMongoose, SiNpm, SiPostman, SiVite,} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const { themeChoice } = useContext(ThemeContext);

  return (
    <section id="skills" className={`min-h-screen px-6 py-24 ${ themeChoice ? "bg-gray-50" : "bg-[#0F172A]"}`}>
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl font-bold text-[#A855F7]">
          Skills
        </h1>

        <div className="w-15 h-1 bg-gradient-to-r from-[#A855F7] to-violet-400 rounded-full mt-3"></div>

        <p className={`mt-6 max-w-2xl leading-8 ${ themeChoice ? "text-gray-600" : "text-gray-400"}`}>
          Here are the technologies and tools I use to build modern,
          responsive full-stack web applications.
        </p>

       
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#A855F7] mb-8">
            Frontend
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${ themeChoice ? "bg-white shadow-md" : "bg-[#111827]" }`}>
              <FaHtml5 className="text-5xl text-orange-500 mx-auto" />
              <h3 className="mt-4 font-semibold">HTML5</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${ themeChoice ? "bg-white shadow-md" : "bg-[#111827]" }`}>
              <FaCss3Alt className="text-5xl text-blue-500 mx-auto" />
              <h3 className="mt-4 font-semibold">CSS3</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${ themeChoice ? "bg-white shadow-md" : "bg-[#111827]" }`}>
              <SiJavascript className="text-5xl text-yellow-400 mx-auto" />
              <h3 className="mt-4 font-semibold">JavaScript</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${ themeChoice ? "bg-white shadow-md" : "bg-[#111827]"}`}>
              <FaReact className="text-5xl text-cyan-400 mx-auto" />
              <h3 className="mt-4 font-semibold">React</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${ themeChoice ? "bg-white shadow-md" : "bg-[#111827]"}`}>
              <SiTailwindcss className="text-5xl text-cyan-500 mx-auto" />
              <h3 className="mt-4 font-semibold">Tailwind CSS</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${ themeChoice ? "bg-white shadow-md" : "bg-[#111827]"}`}>
              <SiReactrouter className="text-5xl text-red-500 mx-auto" />
              <h3 className="mt-4 font-semibold">React Router</h3>
            </div>

          </div>
        </div>

        {/* BACKEND */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#A855F7] mb-8">
            Backend
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${ themeChoice ? "bg-white shadow-md" : "bg-[#111827]"}`}>
              <FaNodeJs className="text-5xl text-green-500 mx-auto" />
              <h3 className="mt-4 font-semibold">Node.js</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${ themeChoice ? "bg-white shadow-md" : "bg-[#111827]"}`}>
              <SiExpress className="text-5xl mx-auto" />
              <h3 className="mt-4 font-semibold">Express.js</h3>
            </div>

          </div>
        </div>

        {/* DATABASE */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#A855F7] mb-8">
            Database
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${
              themeChoice ? "bg-white shadow-md" : "bg-[#111827]"
            }`}>
              <SiMongodb className="text-5xl text-green-600 mx-auto" />
              <h3 className="mt-4 font-semibold">MongoDB</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${
              themeChoice ? "bg-white shadow-md" : "bg-[#111827]"
            }`}>
              <SiMongoose className="text-5xl text-red-500 mx-auto" />
              <h3 className="mt-4 font-semibold">Mongoose</h3>
            </div>

          </div>
        </div>

        {/* TOOLS */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#A855F7] mb-8">
            Tools
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${
              themeChoice ? "bg-white shadow-md" : "bg-[#111827]"
            }`}>
              <FaGitAlt className="text-5xl text-orange-500 mx-auto" />
              <h3 className="mt-4 font-semibold">Git</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${
              themeChoice ? "bg-white shadow-md" : "bg-[#111827]"
            }`}>
              <FaGithub className="text-5xl mx-auto" />
              <h3 className="mt-4 font-semibold">GitHub</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${
              themeChoice ? "bg-white shadow-md" : "bg-[#111827]"
            }`}>
              <VscVscode className="text-5xl text-blue-500 mx-auto" />
              <h3 className="mt-4 font-semibold">VS Code</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${
              themeChoice ? "bg-white shadow-md" : "bg-[#111827]"
            }`}>
              <SiVite className="text-5xl text-purple-500 mx-auto" />
              <h3 className="mt-4 font-semibold">Vite</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${
              themeChoice ? "bg-white shadow-md" : "bg-[#111827]"
            }`}>
              <SiNpm className="text-5xl text-red-500 mx-auto" />
              <h3 className="mt-4 font-semibold">npm</h3>
            </div>

            <div className={`rounded-2xl p-6 text-center transition hover:-translate-y-2 ${
              themeChoice ? "bg-white shadow-md" : "bg-[#111827]"
            }`}>
              <SiPostman className="text-5xl text-orange-500 mx-auto" />
              <h3 className="mt-4 font-semibold">Postman</h3>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;