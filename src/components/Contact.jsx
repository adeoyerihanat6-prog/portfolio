import { useContext } from "react";
import { ThemeContext } from "../MyContext";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  const { themeChoice } = useContext(ThemeContext);

  return (
    <section
      id="contact"
      className={`min-h-screen px-6 py-24 ${
        themeChoice ? "bg-gray-50" : "bg-[#020617]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#A855F7]">
            Let's connect
        </h1>

        <div className="w-28 h-1 bg-gradient-to-r from-[#A855F7] to-violet-400 rounded-full mt-3"></div>

        <p
          className={`mt-6 max-w-2xl leading-8 ${
            themeChoice ? "text-gray-600" : "text-gray-400"
          }`}
        >
         I'm always open to discussing opportunities,
         collaborations or simply connecting with
         fellow developers.
        </p>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {/* Left Side */}
         <div className="space-y-6">

  {/* Email */}
  <div
    className={`flex items-center gap-5 p-5 rounded-2xl transition hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#A855F7]/20 ${
      themeChoice
        ? "bg-white shadow-md"
        : "bg-[#111827]"
    }`}>
    <div className="h-14 w-14 rounded-full bg-[#A855F7]/20 flex items-center justify-center transition duration-300 group-hover:rotate-12">
    <FaEnvelope className="text-2xl text-[#A855F7]" />
</div>

    <div>
      <h3 className="font-semibold text-lg">Email</h3>

      <a
        href="mailto:adeoyerihanat6@gmail.com"
        className={`hover:text-[#A855F7] ${
          themeChoice ? "text-gray-600" : "text-gray-400"
        }`}
      >
        adeoyerihanat6@gmail.com
      </a>
    </div>
  </div>

  {/* WhatsApp */}
  <div
    className={`group flex items-center gap-5 p-5 rounded-2xl transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#A855F7]/20 ${
themeChoice
? "bg-white shadow-md"
: "bg-[#111827]"
}`}
>
    <div className="h-14 w-14 rounded-full bg-[#A855F7]/20 flex items-center justify-center transition duration-300 group-hover:rotate-12">
      <FaWhatsapp className="text-2xl text-[#A855F7]" />
    </div>

    <div>
      <h3 className="font-semibold text-lg">WhatsApp</h3>

      <a
        href="https://wa.me/2349015162388"
        className={`hover:text-[#A855F7] ${
          themeChoice ? "text-gray-600" : "text-gray-400"
        }`}
      >
        Chat with me
      </a>
    </div>
  </div>

  {/* GitHub */}
  <div
    className={`group flex items-center gap-5 p-5 rounded-2xl transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#A855F7]/20 ${
      themeChoice
        ? "bg-white shadow-md"
        : "bg-[#111827]"
    }`}
  >
    <div className="h-14 w-14 rounded-full bg-[#A855F7]/20 flex items-center justify-center transition duration-300 group-hover:rotate-12">
    <FaGithub className="text-2xl text-[#A855F7]" />
</div>

    <div>
      <h3 className="font-semibold text-lg">GitHub</h3>

      <a
        href="https://github.com/adeoyerihanat6-prog"
        className={`hover:text-[#A855F7] ${
          themeChoice ? "text-gray-600" : "text-gray-400"
        }`}
      >
        adeoyerihanat6-prog
      </a>
    </div>
  </div>

  {/* LinkedIn */}
  <div
    className={`group flex items-center gap-5 p-5 rounded-2xl transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#A855F7]/20 ${
      themeChoice
        ? "bg-white shadow-md"
        : "bg-[#111827]"
    }`}
  >
    <div className="h-14 w-14 rounded-full bg-[#A855F7]/20 flex items-center justify-center transition duration-300 group-hover:rotate-12">
      <FaLinkedin className="text-2xl text-[#A855F7]" />
    </div>

    <div>
      <h3 className="font-semibold text-lg">LinkedIn</h3>

      <a
        href="https://www.linkedin.com/in/rihanat-adeoye-2a5059395"
        className={`hover:text-[#A855F7] ${
          themeChoice ? "text-gray-600" : "text-gray-400"
        }`}
      >
        Rihanat Adeoye
      </a>
    </div>
  </div>

  {/* Twitter/X */}
  <div
    className={`group flex items-center gap-5 p-5 rounded-2xl transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#A855F7]/20 ${
      themeChoice
        ? "bg-white shadow-md"
        : "bg-[#111827]"
    }`}
  >
    <div className="h-14 w-14 rounded-full bg-[#A855F7]/20 flex items-center justify-center transition duration-300 group-hover:rotate-12">
      <FaXTwitter className="text-2xl text-[#A855F7]" />
    </div>

    <div>
      <h3 className="font-semibold text-lg">Twitter / X</h3>

      <a
        href="https://x.com/riha66076"
        className={`hover:text-[#A855F7] ${
          themeChoice ? "text-gray-600" : "text-gray-400"
        }`}
      >
        @riha66076
      </a>
    </div>
  </div>

</div>

          {/* Right Side */}
          <div className={`rounded-2xl p-8 ${ themeChoice ? "bg-white shadow-lg"
                : "bg-[#111827] shadow-lg"}`}>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full p-4 rounded-xl border transition duration-300 focus:ring-2 focus:ring-[#A855F7] focus:border-[#A855F7] outline-none ${
                themeChoice
                ? "bg-white border-gray-300 text-black"
                : "bg-[#1E293B] border-gray-700 text-white"
                }`}/>

              <input type="email" placeholder="Your Email"
                className={`w-full p-4 rounded-xl border mt-6 transition duration-300 focus:ring-2 focus:ring-[#A855F7] focus:border-[#A855F7] outline-none ${
                themeChoice ? "bg-white border-gray-300 text-black": "bg-[#1E293B] border-gray-700 text-white"}`}/>

              <textarea rows="6" placeholder="Your Message" className={`w-full mt-6 p-4 rounded-lg mb-6 border outline-none resize-none ${
                  themeChoice
                    ? "bg-white border-gray-300 text-black"
                    : "bg-[#1E293B] border-gray-700 text-white"
                }`}></textarea>

              <button type="submit" className="w-full bg-[#A855F7] text-white py-4 rounded-lg hover:bg-[#9333EA] hover:scale-105 hover:shadow-xl hover:shadow-[#A855F7]/40 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;