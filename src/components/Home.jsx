import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../MyContext";
import { Typewriter } from "react-simple-typewriter";
import { FaCss3Alt, FaEnvelope, FaGithub, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import rihan from "../assets/rihan.jpeg";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// FIX 1: Framer motion requires the transition block to be nested directly inside the animate properties, or configured inline.
const floatingVariants = {
  animate: { 
    y: [0, 12, 0],
    transition: {
      repeat: Infinity,
      duration: 1.8,
      ease: "easeInOut"
    }
  },
};

// Subtle continuous floating for tech stack icons
const techBadgeVariants = (delay) => ({
  animate: {
    y: [0, -6, 0],
    transition: {
      repeat: Infinity,
      duration: 2.5,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

function Home() {
  const { themeChoice } = useContext(ThemeContext);
  
  const bgClass = themeChoice ? "bg-white" : "bg-[#020617]";
  const textTitleClass = themeChoice ? "text-gray-900" : "text-white";
  const textSubClass = themeChoice ? "text-gray-600" : "text-gray-400";

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className={`transition-colors duration-500 ${bgClass}`}>
      <section
        id="home"
        className="relative scroll-mt-20 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-20"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" />

        {/* Info Column */}
        <div>
          <motion.h1 variants={itemVariants} className={`text-3xl font-bold tracking-tight transition-colors duration-500 ${textTitleClass}`}>
            Hi, I'm
          </motion.h1>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-[#A855F7] tracking-tight mt-1">
            Rihanat
          </motion.h1>

          <motion.h2 variants={itemVariants} className={`text-2xl md:text-3xl font-semibold mt-4 transition-colors duration-500 ${textTitleClass}`}>
            <span>I'm a </span>
            <span className="text-[#A855F7]">
              <Typewriter
                words={["Full Stack Developer", "Frontend Developer", "Tech Writer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className={`mt-6 text-lg leading-8 max-w-xl transition-colors duration-500 ${textSubClass}`}>
            I build modern, responsive, and user-friendly web applications using React, Node.js, Express, and MongoDB.
            I'm passionate about creating seamless digital experiences and continuously learning new technologies.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#A855F7] text-white font-medium rounded-lg hover:bg-[#9333EA] transform hover:-translate-y-0.5 shadow-md shadow-purple-500/20 transition duration-200 text-center"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border-2 border-[#A855F7] text-[#A855F7] font-medium rounded-lg hover:bg-[#A855F7]/10 transform hover:-translate-y-0.5 transition duration-200 text-center"
            >
              Contact Me
            </a>

            <a
              href="/rihan_cv.pdf"
              download="Rihanat_Adeoye_CV.pdf"
              className="px-6 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:-translate-y-0.5 transition duration-200 text-center"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5 mt-8">
            <a href="https://github.com/adeoyerihanat6-prog" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200" aria-label="GitHub">
              <FaGithub className="text-3xl text-[#A855F7] hover:text-[#9333EA] transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/rihanat-adeoye-2a5059395" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200" aria-label="LinkedIn">
              <FaLinkedin className="text-3xl text-[#A855F7] hover:text-[#9333EA] transition-colors" />
            </a>
            <a href="https://x.com/riha66076" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200" aria-label="X">
              <FaXTwitter className="text-3xl text-[#A855F7] hover:text-[#9333EA] transition-colors" />
            </a>
            <a href="mailto:adeoyerihant6@gmail.com" className="hover:scale-110 transition-transform duration-200" aria-label="Email">
              <FaEnvelope className="text-3xl text-[#A855F7] hover:text-[#9333EA] transition-colors" />
            </a>
            <a href="http://wa.me/2349015162388" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200" aria-label="WhatsApp">
              <FaWhatsapp className="text-3xl text-[#A855F7] hover:text-[#9333EA] transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Profile Image & Tech Badges */}
        <motion.div variants={itemVariants} className="flex justify-center items-center">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-full border-2 border-[#A855F7] shadow-2xl shadow-purple-500/20">
            <motion.img
              src={rihan}
              alt="Rihanat"
              className="rounded-full h-full w-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />

            {/* Tech Badges with Floating Effects */}
            <motion.div variants={techBadgeVariants(0)} animate="animate" className="absolute -top-4 left-6 h-12 w-12 rounded-full bg-white dark:bg-[#1E293B] shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-800">
              <FaReact className="text-cyan-400 text-2xl" />
            </motion.div>
            <motion.div variants={techBadgeVariants(0.4)} animate="animate" className="absolute -top-4 right-6 h-12 w-12 rounded-full bg-white dark:bg-[#1E293B] shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-800">
              <SiJavascript className="text-yellow-400 text-2xl" />
            </motion.div>
            <motion.div variants={techBadgeVariants(0.8)} animate="animate" className="absolute -bottom-4 left-6 h-12 w-12 rounded-full bg-white dark:bg-[#1E293B] shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-800">
              <FaNodeJs className="text-green-500 text-2xl" />
            </motion.div>
            <motion.div variants={techBadgeVariants(1.2)} animate="animate" className="absolute -bottom-4 right-6 h-12 w-12 rounded-full bg-white dark:bg-[#1E293B] shadow-lg flex items-center justify-center border border-gray-100 dark:border-gray-800">
              <FaCss3Alt className="text-blue-500 text-2xl" />
            </motion.div>
          </div>
        </motion.div>

        {/* FIX 2 & 3: Animated Scroll Indicator */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <a href="#about" aria-label="Scroll to About">
            <div className="w-6 h-10 border-2 border-[#A855F7] rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-2 bg-[#A855F7] rounded-full" 
              />
            </div>
          </a>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#A855F7]/30 to-transparent" />
    </motion.div>
  );
}

export default Home;