"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Download,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Globe,
  Heart,
  Code,
  Coffee,
  ArrowUp,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const containerVariants: Record<string, any> = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants: Record<string, any> = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Rana2324",
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      color: "from-blue-400 to-indigo-500",
    },

    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/shohelranatonmoy1996",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.footer
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.05)_0%,rgba(0,0,0,0)_100%)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(0,0,0,0) 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, rgba(0,0,0,0) 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          style={{ opacity: 0.07 }}
        />

        {/* Glass effect overlay */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-transparent via-[#12122A]/10 to-[#1E1E3F]/20" />
      </div>

      {/* Back to top button */}
      <motion.a
        href="#hero"
        className="absolute right-4 sm:right-10 bottom-4 sm:bottom-10 p-2 sm:p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all z-10"
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
      </motion.a>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Logo & Tagline Section */}
        <motion.div
          className="flex flex-col items-center mb-8 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.div
          className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Quick Links */}
          <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-5 flex items-center">
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name} className="group">
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    <svg
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-5 flex items-center">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Contact
              </span>
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3 group">
                <div className="p-1.5 sm:p-2 rounded-full bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  <p className="font-medium text-sm sm:text-base">Location</p>
                  <p className="text-xs sm:text-sm">Tokyo, Japan</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:shohelranatonmoy98@gmail.com"
                    className="text-sm hover:text-purple-400 transition-colors"
                  >
                    shohelranatonmoy98@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-full bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+8107038246790"
                    className="text-sm hover:text-pink-400 transition-colors"
                  >
                    +81 070-3824-6790
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-pink-400" />
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Connect With Me
              </span>
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                        social.color
                      } p-[2px] transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-${
                        social.color.split("-")[2]
                      }/20`}
                    >
                      <div className="w-full h-full rounded-lg bg-[#151528] flex items-center justify-center group-hover:bg-[#1E1E3F] transition-colors duration-300">
                        <Icon
                          className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200"
                          size={20}
                        />
                      </div>
                    </div>
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-10 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg p-4 border border-indigo-500/10">
              <p className="text-gray-400 text-sm leading-relaxed">
                Interested in collaborating? Let's build something amazing
                together!
                <a
                  href="#contact"
                  className="block mt-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  Get in touch →
                </a>
              </p>
            </div>
          </motion.div>
          <div className="mt-8 pt-6 border-t border-gray-800/30">
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Download className="h-5 w-5 mr-2 text-pink-400" />
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                Download CV
              </span>
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv/RanaMohammadShohelResume.pdf";
                  link.download = "RanaMohammadShohelResume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors duration-300 group"
              >
                <span className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                  🇺🇸
                </span>
                <span>English CV</span>
              </button>

              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv/履歴書.pdf";
                  link.download = "履歴書.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors duration-300 group"
              >
                <span className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                  🇯🇵
                </span>
                <span>履歴書</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800/30"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:justify-between items-center text-gray-400 gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-[#151528] flex items-center justify-center">
                  <Code className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
              </div>
              <p className="text-sm sm:text-base">
                © {new Date().getFullYear()}{" "}
                <span className="font-medium text-white">
                  Rana Mohammad Shohel
                </span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <motion.div
                className="flex items-center gap-1 text-gray-400 hover:text-indigo-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-pink-500" />
                <span>Built with passion</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-1 text-gray-400 hover:text-indigo-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Coffee className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500" />
                <span>& lots of coffee</span>
              </motion.div>
            </div>

            <div className="text-xs text-gray-500 mt-3 md:mt-0">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                Designed & developed with ❤️
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
