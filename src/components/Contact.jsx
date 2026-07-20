import { useContext, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../MyContext";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser"; // 1. Import EmailJS

// 1. Centralized Contact Handles Array
const CONTACT_HANDLES = [
  {
    id: "email",
    label: "Email",
    value: "adeoyerihanat6@gmail.com",
    href: "mailto:adeoyerihanat6@gmail.com",
    icon: FaEnvelope,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Chat with me",
    href: "https://wa.me/2349015162388",
    icon: FaWhatsapp,
  },
  {
    id: "github",
    label: "GitHub",
    value: "adeoyerihanat6-prog",
    href: "https://github.com/adeoyerihanat6-prog",
    icon: FaGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Rihanat Adeoye",
    href: "https://www.linkedin.com/in/rihanat-adeoye-2a5059395",
    icon: FaLinkedin,
  },
  {
    id: "twitter",
    label: "Twitter / X",
    value: "@riha66076",
    href: "https://x.com/riha66076",
    icon: FaXTwitter,
  },
];

// 2. Framer Motion Keyframes Configuration
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

function Contact() {
  const { themeChoice } = useContext(ThemeContext);
  const formRef = useRef(); // 2. Reference placeholder for the form

  // 3. Status Tracking Hooks
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // Tracks 'success' or 'error'

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus(null);

    // 4. Send layout to EmailJS serverless pipeline
    // Replace placeholders with your real string keys from the dashboard
    emailjs
      .sendForm(
        "service_k9z1h9y", 
        "template_s80jfmf", 
        formRef.current, 
        "a-tDo9efnHJl9uuNn"
      )
      .then(
        () => {
          setIsSending(false);
          setSubmitStatus("success");
          formRef.current.reset(); // Safely flushes values on success
        },
        (error) => {
          console.error("EmailJS Transfer Failure:", error);
          setIsSending(false);
          setSubmitStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className={`min-h-screen px-6 py-24 transition-colors duration-500 ${
        themeChoice ? "bg-gray-50" : "bg-[#020617]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div>
          <h1 className="text-4xl font-bold text-[#A855F7] tracking-tight">
            Let's connect
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-[#A855F7] to-violet-400 rounded-full mt-3"></div>
          <p className={`mt-6 max-w-2xl gamblers leading-8 transition-colors duration-500 ${
            themeChoice ? "text-gray-600" : "text-gray-400"
          }`}>
            I'm always open to discussing opportunities, collaborations, or simply connecting with fellow developers.
          </p>
        </div>

        {/* Global Two-Column Dynamic Split Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column: Interactive Contact Handles */}
          <motion.div variants={columnVariants} className="space-y-6">
            {CONTACT_HANDLES.map((handle) => {
              const IconComponent = handle.icon;
              return (
                <div
                  key={handle.id}
                  className={`group flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl ${
                    themeChoice
                      ? "bg-white border-gray-100 shadow-sm hover:shadow-purple-500/5"
                      : "bg-[#111827] border-gray-800/60 hover:border-[#A855F7]/30"
                  }`}
                >
                  <div className="h-14 w-14 rounded-full bg-[#A855F7]/10 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                    <IconComponent className="text-2xl text-[#A855F7]" />
                  </div>

                  <div>
                    <h3 className={`font-semibold text-lg transition-colors duration-500 ${
                      themeChoice ? "text-gray-800" : "text-white"
                    }`}>
                      {handle.label}
                    </h3>
                    <a
                      href={handle.href}
                      target={handle.id !== "email" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`block mt-0.5 break-all hover:text-[#A855F7] transition-colors duration-200 font-medium ${
                        themeChoice ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {handle.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Premium Input Messaging Engine */}
          <motion.div 
            variants={columnVariants}
            className={`rounded-2xl p-8 border h-fit transition-all duration-500 ${ 
              themeChoice 
                ? "bg-white border-gray-100 shadow-lg shadow-gray-200/50"
                : "bg-[#111827] border-gray-800/80 shadow-none"
            }`}
          >
            {/* 5. Connected reference pointer */}
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="from_name" // 6. Matches template identifier
                    required
                    placeholder="Your Name"
                    className={`w-full p-4 rounded-xl border transition duration-300 focus:ring-2 focus:ring-[#A855F7]/50 focus:border-[#A855F7] outline-none ${
                      themeChoice
                        ? "bg-gray-50 border-gray-200 text-black placeholder-gray-400"
                        : "bg-[#1E293B] border-gray-700/60 text-white placeholder-gray-500"
                    }`}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="reply_to" // 6. Matches template identifier
                    required
                    placeholder="Your Email"
                    className={`w-full p-4 rounded-xl border transition duration-300 focus:ring-2 focus:ring-[#A855F7]/50 focus:border-[#A855F7] outline-none ${
                      themeChoice 
                        ? "bg-gray-50 border-gray-200 text-black placeholder-gray-400"
                        : "bg-[#1E293B] border-gray-700/60 text-white placeholder-gray-500"
                    }`}
                  />
                </div>

                <div>
                  <textarea
                    rows="5"
                    name="message" // 6. Matches template identifier
                    required
                    placeholder="Your Message"
                    className={`w-full p-4 rounded-xl border outline-none resize-none transition duration-300 focus:ring-2 focus:ring-[#A855F7]/50 focus:border-[#A855F7] ${
                      themeChoice
                        ? "bg-gray-50 border-gray-200 text-black placeholder-gray-400"
                        : "bg-[#1E293B] border-gray-700/60 text-white placeholder-gray-500"
                    }`}
                  />
                </div>
              </div>

              {/* Status Indicator Notices */}
              {submitStatus === "success" && (
                <p className="mt-4 text-sm font-semibold text-green-500 text-center">
                  Message sent successfully! I'll get back to you soon. 💜
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-sm font-semibold text-red-500 text-center">
                  Something went wrong. Please check your network or message me directly.
                </p>
              )}

              {/* Disabled loading protection flag toggles style automatically */}
              <button 
                type="submit" 
                disabled={isSending}
                className={`w-full mt-6 text-white font-semibold py-4 rounded-xl active:scale-[0.99] transition duration-300 ${
                  isSending
                    ? "bg-gray-500 cursor-not-allowed opacity-60"
                    : "bg-[#A855F7] hover:bg-[#9333EA] hover:shadow-xl hover:shadow-[#A855F7]/20"
                }`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;