import { useContext, useState } from "react";
import { ThemeContext } from "../MyContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { toggleTheme, themeChoice } = useContext(ThemeContext);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b ${
          themeChoice
            ? "bg-white/90 border-gray-200 text-gray-700"
            : "bg-[#020617]/95 border-[#A855F7]/10 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-[#A855F7]">
            Rihanat
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#home" className="hover:text-[#A855F7] transition">
              Home
            </a>

            <a href="#about" className="hover:text-[#A855F7] transition">
              About
            </a>

            <a href="#projects" className="hover:text-[#A855F7] transition">
              Projects
            </a>

            <a href="#skills" className="hover:text-[#A855F7] transition">
              Skills
            </a>

            <a href="#contact" className="hover:text-[#A855F7] transition">
              Contact
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-xl hover:scale-110 transition"
            >
              {themeChoice ? "🌙" : "☀️"}
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(true)} className="md:hidden text-3xl">
              ☰
            </button>
          </div>
        </div>
      </nav>

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