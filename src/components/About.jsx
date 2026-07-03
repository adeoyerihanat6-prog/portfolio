import { useContext } from "react";
import { FaCode, FaFolderOpen, FaPenNib } from "react-icons/fa";
import { ThemeContext } from "../MyContext";

function About() {
  const { themeChoice } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`min-h-screen grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6 py-24 ${
        themeChoice ? "bg-gray-50" : "bg-[#0F172A]"}`}>
      
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#A855F7]">
          About Me
        </h1>

        <div className="w-28 h-1 bg-gradient-to-r from-[#A855F7] to-violet-400 rounded-full mt-3"></div>

        <p className={`mt-8 leading-8 ${themeChoice ? "text-gray-700" : "text-gray-400"}`}>

          I'm an aspiring <span className="font-semibold">Full Stack Developer</span> and
          <span className="font-semibold"> Tech Writer</span> passionate about
          building responsive, user-friendly web applications.
          <br />
          <br />
          I enjoy turning ideas into interactive experiences while documenting
          my learning journey. I'm currently focused on mastering React,
          building real-world projects, and growing my presence in the tech
          community.
        </p>
      </div>

      
      <div className={`w-full rounded-2xl shadow-xl p-10 ${ themeChoice ? "bg-white" : "bg-[#111827]"}`}>
        <div className="grid grid-cols-3 gap-8 text-center">
          
          <div className="transition duration-300 hover:-translate-y-2 cursor-pointer">
            <FaCode className="text-4xl text-[#A855F7] mx-auto mb-4" />

            <h2 className="text-3xl font-bold text-[#A855F7]">12+</h2>

            <p className={`mt-2 ${ themeChoice ? "text-gray-600" : "text-gray-400"}`}>
              Skills
            </p>
          </div>

         
          <div className="transition duration-300 hover:-translate-y-2 cursor-pointer">
            <FaFolderOpen className="text-4xl text-[#A855F7] mx-auto mb-4" />

            <h2 className="text-3xl font-bold text-[#A855F7]">20+</h2>

            <p
              className={`mt-2 ${ themeChoice ? "text-gray-600" : "text-gray-400"}`}>
              Projects
            </p>
          </div>

          
          <div className="transition duration-300 hover:-translate-y-2 cursor-pointer">
            <FaPenNib className="text-4xl text-[#A855F7] mx-auto mb-4" />

            <h2 className="text-3xl font-bold text-[#A855F7]">10+</h2>

            <p
              className={`mt-2 ${ themeChoice ? "text-gray-600" : "text-gray-400"}`}>
              Articles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;