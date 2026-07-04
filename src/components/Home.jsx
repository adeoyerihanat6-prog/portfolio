import { ThemeContext } from "../MyContext";


import { useContext } from "react";
import { FaCss3Alt, FaEnvelope,  FaGithub,  FaLinkedin, FaNodeJs, FaReact, FaWhatsapp } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import rihan from "../assets/rihan.jpeg";


function Home() {
  const { themeChoice } = useContext(ThemeContext);

  return (
    <div >
        <section id="home" className={`min-h-screen items-center grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto px-6 py-20 ${
  themeChoice ? "bg-white" : "bg-[#020617]"}`}>
       <div>
        <h1 className="text-5xl font-bold">
          Hi, I'm 
          </h1>
        <h1 className="text-5xl font-bold text-[#A855F7]">
          Rihanat
          </h1>
        <h1 className="text-3xl font-bold">
          Aspiring Web Developer & Tech Writer
          </h1>
        <p className="mt-4 text-md">
          I build web applications and write about my learning journey in tech. I'm passionate about creating solutions that make a difference and helping others along the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="mt-6">
          <a
    href="#projects"
    className="w-full sm:w-auto px-6 py-3 bg-[#A855F7] text-white rounded-lg hover:bg-[#9333EA] transition text-center">
    View My Projects
  </a>

        </div>
        <div className="mt-6">
          <a href="#contact" className="px-6 py-3 border-2 border-[#A855F7] text-[#7209d4] rounded-lg hover:bg-[#8852be] transition">
            Contact Me
          </a> 
        </div>
        {/* <div className="mt-3">
           <a
    href="#contact"
    className="w-full sm:w-auto px-6 py-3 border-2 border-[#A855F7] text-[#A855F7] rounded-lg hover:bg-[#8852be] hover:text-white transition text-center">
    Contact Me
  </a>
        </div> */}

        
          </div>
          <div className="flex gap-4 mt-4">
        <a href="https://github.com/adeoyerihanat6-prog" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl text-[#A855F7] mt-6 hover:text-[#9333EA] transition"/>
        </a>
        <a href="https://www.linkedin.com/in/rihanat-adeoye-2a5059395" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-4xl text-[#A855F7] mt-6 hover:text-[#9333EA] transition"/>
        </a>
        <a href="https://x.com/riha66076" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="text-4xl text-[#A855F7] mt-6 hover:text-[#9333EA] transition"/>
        </a>

        <a href="mailto:adeoyerihant6@gmail.com">
          <FaEnvelope className="text-4xl text-[#A855F7] mt-6 hover:text-[#9333EA] transition"/>
        </a>

        <a href="http://wa.me/2349015162388" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-4xl text-[#A855F7] mt-6 hover:text-[#9333EA] transition"/>  
        </a>
       </div>
       </div>

        <div className="flex justify-center items-center">
          <div className="rounded-full h-80 w-80 border-2  border-[#A855F7] relative shadow-2xl shadow-purple-400/80 scale-105 transition hover:shadow-purple-300/90  duration-300 ">
            <img src={rihan} className="rounded-full h-80 w-80 object-cover"/>
            <div className="absolute top-12 left-0 h-12 w-12 rounded-full bg-[#A855F7] animate-pulse flex items-center justify-center">
              <FaReact className="text-cyan-400 text-4xl"/>
            </div>
            <div className="absolute top-12 right-0 h-12 w-12 rounded-full bg-[#A855F7] animate-pulse flex items-center justify-center">
              <SiJavascript className="text-yellow-400 text-4xl"/>
            </div>
            <div className="absolute bottom-12 left-0 h-12 w-12 rounded-full bg-[#A855F7] animate-pulse flex items-center justify-center">
              <FaNodeJs className="text-green-500 text-4xl"/>
            </div>
            <div className="absolute bottom-12 right-0 h-12 w-12 rounded-full bg-[#A855F7] animate-pulse flex items-center justify-center">
              <FaCss3Alt className="text-blue-500 text-4xl"/>
            </div>
          </div>
        </div>
      </section>
           


      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent"></div>

      {/* ABOUT */}
     
    </div>
  )
}

export default Home