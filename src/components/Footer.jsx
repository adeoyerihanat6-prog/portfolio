
import { FaArrowUp, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F172A] text-gray-400 border-t border-gray-800/50 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Main Content Split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-gray-800/60 items-start">
          
          {/* Brand/Bio Block */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide">
              Rihanat<span className="text-[#A855F7]">.dev</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-sm">
              Full Stack Developer & Tech Writer dedicated to crafting seamless digital experiences and pristine UI structures.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <a href="#home" className="hover:text-[#A855F7] transition duration-200">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#A855F7] transition duration-200">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#A855F7] transition duration-200">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#A855F7] transition duration-200">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A855F7] transition duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links Connect Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/adeoyerihanat6-prog" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/40 border border-gray-700/40 rounded-lg text-gray-300 hover:text-[#A855F7] hover:border-[#A855F7]/40 transition duration-200" aria-label="GitHub">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/in/rihanat-adeoye-2a5059395" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/40 border border-gray-700/40 rounded-lg text-gray-300 hover:text-[#A855F7] hover:border-[#A855F7]/40 transition duration-200" aria-label="LinkedIn">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="https://x.com/riha66076" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/40 border border-gray-700/40 rounded-lg text-gray-300 hover:text-[#A855F7] hover:border-[#A855F7]/40 transition duration-200" aria-label="X">
                <FaXTwitter className="text-lg" />
              </a>
              <a href="http://wa.me/2349015162388" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/40 border border-gray-700/40 rounded-lg text-gray-300 hover:text-[#A855F7] hover:border-[#A855F7]/40 transition duration-200" aria-label="WhatsApp">
                <FaWhatsapp className="text-lg" />
              </a>
              <a href="mailto:adeoyerihant6@gmail.com" className="p-2 bg-gray-800/40 border border-gray-700/40 rounded-lg text-gray-300 hover:text-[#A855F7] hover:border-[#A855F7]/40 transition duration-200" aria-label="Email">
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright Info & Scroll Back Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {currentYear} All rights reserved. Designed & Built by{" "}
            <span className="text-gray-300 font-medium hover:text-[#A855F7] transition-colors duration-200">
              Rihanat Adeoye 💜
            </span>
          </p>

          {/* Clean Scroll Back to Top Action */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-[#A855F7] transition duration-200 group bg-gray-800/30 hover:bg-gray-800/70 border border-gray-800 hover:border-[#A855F7]/30 px-4 py-2 rounded-xl"
            aria-label="Scroll back to top"
          >
            Back to top
            <FaArrowUp className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;