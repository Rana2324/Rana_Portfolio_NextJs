"use client";

import { motion, type Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Facebook,
  GitBranch,
  Twitter,
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  FileText,
  Download,
  ExternalLink,
  ArrowRight,
  ArrowDown,
  Zap,
  Star,
  BookOpen,
  Monitor,
  Sparkles,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // State for typing animation
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Full Stack Web Developer";

  // Typing effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [text]);

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,rgba(0,0,0,0)_100%)] text-white px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-600/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-600/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Floating skill icons */}
        <motion.div
          className="absolute top-1/3 right-1/4 text-indigo-400/30"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Code size={32} />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/3 text-purple-400/30"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          <Star size={24} />
        </motion.div>

        <motion.div
          className="absolute top-1/4 left-1/4 text-blue-400/30"
          animate={{
            x: [0, 15, 0],
            rotate: [0, 10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        >
          <Monitor size={28} />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/3 text-pink-400/30"
          animate={{
            x: [0, -15, 0],
            rotate: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3,
          }}
        >
          <Zap size={26} />
        </motion.div>
      </div>

      {/* Icon Navigation Bar */}
      <motion.div
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6 bg-[#1e1e3d]/80 p-4 rounded-2xl backdrop-blur-sm border border-[#2a2a50] shadow-lg shadow-indigo-500/20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity z-0"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <a
          href="#hero"
          className="nav-icon p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-md hover:shadow-indigo-500/50 transition-all relative group"
        >
          <Home size={20} />
          <span className="nav-icon-tooltip absolute left-full ml-4 px-3 py-2 bg-[#1e1e3d]/90 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#2a2a50] backdrop-blur-sm font-medium">
            Home
          </span>
        </a>
        <a
          href="#about"
          className="nav-icon p-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-600/30 text-white transition-all relative group border border-transparent hover:border-indigo-500/30"
        >
          <User size={20} />
          <span className="nav-icon-tooltip absolute left-full ml-4 px-3 py-2 bg-[#1e1e3d]/90 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#2a2a50] backdrop-blur-sm font-medium">
            About
          </span>
        </a>
        <a
          href="#skills"
          className="nav-icon p-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-600/30 text-white transition-all relative group border border-transparent hover:border-indigo-500/30"
        >
          <Code size={20} />
          <span className="nav-icon-tooltip absolute left-full ml-4 px-3 py-2 bg-[#1e1e3d]/90 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#2a2a50] backdrop-blur-sm font-medium">
            Skills
          </span>
        </a>
        <a
          href="#experience"
          className="nav-icon p-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-600/30 text-white transition-all relative group border border-transparent hover:border-indigo-500/30"
        >
          <Briefcase size={20} />
          <span className="nav-icon-tooltip absolute left-full ml-4 px-3 py-2 bg-[#1e1e3d]/90 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#2a2a50] backdrop-blur-sm font-medium">
            Experience
          </span>
        </a>
        <a
          href="#portfolio"
          className="nav-icon p-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-600/30 text-white transition-all relative group border border-transparent hover:border-indigo-500/30"
        >
          <FileText size={20} />
          <span className="nav-icon-tooltip absolute left-full ml-4 px-3 py-2 bg-[#1e1e3d]/90 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#2a2a50] backdrop-blur-sm font-medium">
            Portfolio
          </span>
        </a>
        <a
          href="#contact"
          className="nav-icon p-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-600/30 text-white transition-all relative group border border-transparent hover:border-indigo-500/30"
        >
          <Mail size={20} />
          <span className="nav-icon-tooltip absolute left-full ml-4 px-3 py-2 bg-[#1e1e3d]/90 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#2a2a50] backdrop-blur-sm font-medium">
            Contact
          </span>
        </a>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden flex items-center gap-3 bg-[#1e1e3d]/90 px-4 py-3 rounded-2xl backdrop-blur-sm border border-[#2a2a50] shadow-lg shadow-indigo-500/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-2xl blur-md"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <a
          href="#hero"
          className="mobile-nav-icon p-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white relative group"
        >
          <Home size={18} />
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#1e1e3d]/90 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#2a2a50] font-medium">
            Home
          </span>
        </a>
        <a
          href="#about"
          className="mobile-nav-icon p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-600/30 text-white relative group border border-transparent hover:border-indigo-500/30"
        >
          <User size={18} />
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#1e1e3d]/90 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#2a2a50] font-medium">
            About
          </span>
        </a>
        <a
          href="#skills"
          className="mobile-nav-icon p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-600/30 text-white relative group border border-transparent hover:border-indigo-500/30"
        >
          <Code size={18} />
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#1e1e3d]/90 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#2a2a50] font-medium">
            Skills
          </span>
        </a>
        <a
          href="#portfolio"
          className="mobile-nav-icon p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-600/30 text-white relative group border border-transparent hover:border-indigo-500/30"
        >
          <FileText size={18} />
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#1e1e3d]/90 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#2a2a50] font-medium">
            Portfolio
          </span>
        </a>
        <a
          href="#contact"
          className="mobile-nav-icon p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-600/30 text-white relative group border border-transparent hover:border-indigo-500/30"
        >
          <Mail size={18} />
          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-[#1e1e3d]/90 rounded-md text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#2a2a50] font-medium">
            Contact
          </span>
        </a>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="py-8 sm:py-12 lg:py-0">
            <motion.div className="mb-4 inline-block relative" {...fadeIn}>
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-400/20 via-purple-500/20 to-pink-500/20 blur-lg opacity-70"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 relative tracking-wide"
                {...fadeIn}
              >
                Hello,
              </motion.h2>
            </motion.div>

            <motion.h1
              className="hero-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight"
              {...fadeIn}
              transition={{ delay: 0.1 }}
            >
              I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 inline-block whitespace-nowrap">
                RANA MOHAMMAD SHOHEL
              </span>
              <br />
              <span className="hero-subtitle bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-flex mt-2">
                <span>{text}</span>
                <span
                  className={`${
                    isTypingComplete ? "opacity-0" : "opacity-100"
                  } ml-1 animate-pulse`}
                >
                  |
                </span>
              </span>
              <br />
              <span className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-3 text-indigo-200/90">
                <Sparkles className="text-yellow-400 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />{" "}
                Turning ideas into digital reality
              </span>
            </motion.h1>

            {/* Social links */}
            <motion.div
              className="flex gap-4 sm:gap-6 mt-6 sm:mt-10"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href="https://github.com/Rana2324"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/50 group-hover:to-purple-500/50 blur-md opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="w-10 h-10 bg-[#1E1E3F]/80 border border-indigo-500/30 rounded-full flex items-center justify-center group-hover:bg-[#2D2D4D] transition-colors">
                  <Github
                    size={20}
                    className="group-hover:text-indigo-300 transition-colors"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#1E1E3F]/80 px-2 py-1 rounded border border-indigo-500/20">
                  GitHub
                </span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shohel-rana-tonmoy-39665b318/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/50 group-hover:to-indigo-500/50 blur-md opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="w-10 h-10 bg-[#1E1E3F]/80 border border-blue-500/30 rounded-full flex items-center justify-center group-hover:bg-[#2D2D4D] transition-colors">
                  <Linkedin
                    size={20}
                    className="group-hover:text-blue-300 transition-colors"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#1E1E3F]/80 px-2 py-1 rounded border border-blue-500/20">
                  LinkedIn
                </span>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/shohelranatonmoy1996"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/50 group-hover:to-pink-500/50 blur-md opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="w-10 h-10 bg-[#1E1E3F]/80 border border-purple-500/30 rounded-full flex items-center justify-center group-hover:bg-[#2D2D4D] transition-colors">
                  <Facebook
                    size={20}
                    className="group-hover:text-purple-300 transition-colors"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[#1E1E3F]/80 px-2 py-1 rounded border border-purple-500/20">
                  Facebook
                </span>
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-5 mt-10"
              {...fadeIn}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href="#contact"
                className="px-7 py-3 rounded-xl border-2 border-indigo-500 text-white font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-600/0 group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-300 -z-10"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <MessageSquare
                    size={16}
                    className="group-hover:animate-pulse"
                  />
                  <span className="relative">
                    CONTACT ME
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/40"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  <ChevronRight
                    className="transition-transform group-hover:translate-x-1"
                    size={16}
                  />
                </span>
              </motion.a>
              <motion.a
                href="/cv/RanaMohammadShohelResume.pdf"
                target="_blank"
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all border border-indigo-400/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2 relative">
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="bg-white/10 rounded-full p-1"
                  >
                    <Download size={14} />
                  </motion.div>
                  <span className="relative">
                    DOWNLOAD CV
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/40"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Code editor */}
          <motion.div
            className="bg-[#1e1e3d] rounded-xl overflow-hidden shadow-2xl border border-[#2a2a50] relative group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={{
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Code animation indicators */}
            <motion.div
              className="absolute -top-2 -right-2 text-indigo-400/70"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Code size={20} />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2 text-purple-400/70"
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Code size={20} />
            </motion.div>

            {/* Editor header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d4d] border-b border-[#2a2a50]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="ml-2 text-xs text-indigo-300/80 font-mono flex items-center gap-1.5">
                <span>developer.js</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  active
                </span>
              </div>
            </div>

            {/* Code content */}
            <div className="p-6 font-mono text-sm">
              <div className="mb-2">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-indigo-300">{`{`}</span>
              </div>
              <div className="pl-6">
                <span className="text-pink-300">name</span>
                <span className="text-white">:</span>{" "}
                <span className="text-green-300">
                  &apos;Rana Mohammad Shohel&apos;
                </span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-6">
                <span className="text-pink-300">title</span>
                <span className="text-white">:</span>{" "}
                <span className="text-green-300">
                  &apos;WEB Developer&apos;
                </span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-6">
                <span className="text-pink-300">skills</span>
                <span className="text-white">:</span>{" "}
                <span className="text-blue-300">[</span>
                <br />
                <div className="pl-6">
                  <span className="text-green-300">&apos;React&apos;</span>
                  <span className="text-white">,</span>
                  <br />
                  <span className="text-green-300">&apos;Next.js&apos;</span>
                  <span className="text-white">,</span>
                  <br />
                  <span className="text-green-300">&apos;Node.js&apos;</span>
                  <span className="text-white">,</span>
                  <br />
                  <span className="text-green-300">&apos;TypeScript&apos;</span>
                  <span className="text-white">,</span>
                  <br />
                  <motion.span
                    className="text-green-300 inline-block"
                    animate={{
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    &apos;AI Integration&apos;
                  </motion.span>
                </div>
                <span className="text-blue-300">]</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-6">
                <span className="text-pink-300">problemSolver</span>
                <span className="text-white">:</span>{" "}
                <span className="text-orange-300">true</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-6">
                <span className="text-pink-300">available</span>
                <span className="text-white">:</span>{" "}
                <motion.span
                  className="text-orange-300"
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  true
                </motion.span>
              </div>
              <div>
                <span className="text-indigo-300">{`};`}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
