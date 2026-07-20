import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../MyContext";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { toggleTheme, themeChoice } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="
      relative
      font-medium
      transition-all
      duration-300
      hover:text-[#A855F7]
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-[#A855F7]
      after:transition-all
      after:duration-300
      hover:after:w-full
      "
    >
      {children}
    </a>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? themeChoice
              ? "bg-white/80 backdrop-blur-xl shadow-lg"
              : "bg-[#020617]/80 backdrop-blur-xl shadow-lg border-b border-[#A855F7]/20"
            : "bg-transparent"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* LOGO */}

          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 group"
          >
            <div className="h-11 w-11 rounded-xl p-7 bg-gradient-to-r from-[#A855F7] to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-500/30 transition-all duration-300 group-hover:rotate-6">
              <span className="font-bold text-white ">&lt;RC/&gt;</span>
            </div>

            
          </motion.a>

          {/* Desktop */}

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right */}

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{
                rotate: 180,
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={toggleTheme}
              className="text-xl p-2 rounded-full hover:bg-[#A855F7]/20 transition"
            >
              {themeChoice ? "🌙" : "☀️"}
            </motion.button>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-3xl"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Dark Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 z-50 shadow-2xl ${
          themeChoice
            ? "bg-white text-gray-700" : "bg-[#0F172A] text-white"
        } transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-5 border-b border-[#A855F7]/20">
          <h2 className="text-2xl font-bold text-[#A855F7]">
            Menu
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-3xl"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-8 px-6 mt-10 text-lg font-medium">
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>

          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;