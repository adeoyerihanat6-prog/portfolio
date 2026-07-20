import { useContext, useEffect, useState, useRef } from "react";
import { FaCode, FaFolderOpen, FaPenNib } from "react-icons/fa";
import { motion } from "framer-motion";
import { ThemeContext } from "../MyContext";

// Reusable Counter Component
function AnimatedCounter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start animation only when component is visible and hasn't animated yet
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = target;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease-out quad function for smooth deceleration
            const easeOutProgress = progress * (2 - progress); 
            
            setCount(Math.floor(easeOutProgress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end); // Ensure it lands exactly on the target number
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={elementRef}>{count}</span>;
}

function About() {
  const { themeChoice } = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    },
  };

  return (
    <section
      id="about"
      className={`min-h-screen grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6 py-24 transition-colors duration-500 ${
        themeChoice ? "bg-gray-50" : "bg-[#020617]"
      }`}
    >
      {/* Left Column */}
      <motion.div 
        className="max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#A855F7] tracking-tight">
          About Me
        </h1>
        <div className="w-28 h-1 bg-gradient-to-r from-[#A855F7] to-violet-400 rounded-full mt-4"></div>
        <p className={`mt-8 text-lg leading-relaxed transition-colors duration-500 ${
          themeChoice ? "text-gray-700" : "text-gray-400"
        }`}>
          I'm an aspiring <span className="font-semibold text-[#A855F7]">Full Stack Developer</span> and{" "}
          <span className="font-semibold text-[#A855F7]">Tech Writer</span> passionate about
          building responsive, user-friendly web applications.
          <br />
          <br />
          I enjoy turning ideas into interactive experiences while documenting
          my learning journey. I'm currently focused on mastering React,
          building real-world projects, and growing my presence in the tech
          community.
        </p>
      </motion.div>

      {/* Right Column */}
      <motion.div 
        className={`w-full rounded-2xl shadow-xl p-10 border transition-all duration-500 ${ 
          themeChoice ? "bg-white border-gray-100" : "bg-[#111827] border-gray-800"
        }`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-3 gap-6 sm:gap-8 text-center">
          
          {/* Skills */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} className="cursor-pointer group">
            <FaCode className="text-4xl text-[#A855F7] mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h2 className="text-3xl font-bold text-[#A855F7]">
              <AnimatedCounter target={12} />+
            </h2>
            <p className={`mt-2 font-medium transition-colors duration-500 ${ themeChoice ? "text-gray-600" : "text-gray-400"}`}>
              Skills
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} className="cursor-pointer group">
            <FaFolderOpen className="text-4xl text-[#A855F7] mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h2 className="text-3xl font-bold text-[#A855F7]">
              <AnimatedCounter target={20} />+
            </h2>
            <p className={`mt-2 font-medium transition-colors duration-500 ${ themeChoice ? "text-gray-600" : "text-gray-400"}`}>
              Projects
            </p>
          </motion.div>

          {/* Articles */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} className="cursor-pointer group">
            <FaPenNib className="text-4xl text-[#A855F7] mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h2 className="text-3xl font-bold text-[#A855F7]">
              <AnimatedCounter target={10} />+
            </h2>
            <p className={`mt-2 font-medium transition-colors duration-500 ${ themeChoice ? "text-gray-600" : "text-gray-400"}`}>
              Articles
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;