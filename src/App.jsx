import {  useContext } from "react";
import { ThemeContext } from "./MyContext";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";

function App() {
 

  const {  themeChoice } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen w-full ${
        themeChoice
          ? "bg-[#F8FAFC] text-gray-700"
          : "bg-[#020617] text-[#F8FAFC]"}`}>
      {/* Navbar */}
    
      <Navbar/>
      {/* Overlay */}
      

      {/* Mobile Sidebar */}
      

      {/* HOME */}
      <Home/>
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent"></div>
        <About/>
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent"></div>
      {/* PROJECTS */}
      <Project/>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent"></div>

      {/* SKILLS */}
      <Skills/>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent"></div>

      {/* CONTACT */}
     <Contact/>
    </div>
  );
}

export default App;