import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../MyContext";
import { Typewriter } from "react-simple-typewriter";
import { PiHandWavingFill } from "react-icons/pi";
import {
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";

import rihan from "../assets/rihan.jpeg";


function Home() {
  const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


  const { themeChoice } = useContext(ThemeContext);

  return (
    <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
        <section id="home" className={`scroll-mt-20 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-20 ${
    themeChoice ? "bg-white" : "bg-[#020617]"}`}>
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

  <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse"></div>
</div>
       <div>
      <motion.h1
  variants={itemVariants}
  className="text-3xl font-bold"
>
 <motion.div
  animate={{
    rotate: [0, 20, -10, 20, -5, 0],
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    repeatDelay: 2,
  }}
  className="inline-block text-[#A855F7]"
>
  <PiHandWavingFill size={40} />
</motion.div>
  Hi, I'm
</motion.h1>

<motion.h1
  variants={itemVariants}
  className="text-3xl md:text-6xl font-extrabold text-[#A855F7]"
>
  Rihanat 
</motion.h1>

<motion.h2
  variants={itemVariants}
  className="text-2xl md:text-3xl font-semibold mt-4"
>
  <span className="text-white">
    I'm a{" "}
  </span>

  <span className="text-[#A855F7]">
    <Typewriter
      words={[
        "Full Stack Developer",
        "Frontend Developer",
        "Tech Writer",
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1800}
    />
  </span>
</motion.h2>

<motion.p
  variants={itemVariants}
  className="mt-6 text-lg leading-8 text-gray-400 max-w-xl"
>
  I build modern, responsive, and user-friendly web applications using
  React, Node.js, Express, and MongoDB. I'm passionate about creating
  seamless digital experiences and continuously learning new technologies.
</motion.p>
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
<div
  className="
    relative
    h-80
    w-80
    rounded-full
    border-2
    border-[#A855F7]
    shadow-2xl
    shadow-purple-500/40
    transition-all
    duration-500
    hover:shadow-purple-400/80
  "
>           <motion.img
  src={rihan}
  className="rounded-full h-80 w-80 object-cover"
  whileHover={{
    scale: 1.05,
    rotate: 1,
  }}
  transition={{
    duration: 0.3,
  }}
/>
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
        <motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="absolute bottom-6 left-1/2 -translate-x-1/2"
>
  <div className="w-6 h-10 border-2 border-[#A855F7] rounded-full flex justify-center">
    <div className="w-1 h-3 bg-[#A855F7] rounded-full mt-2"></div>
  </div>
</motion.div>
      </section>
           


      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent"></div>

     
     
    </motion.div>
  )
}

export default Home