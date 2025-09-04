"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

export function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,rgba(0,0,0,0)_100%)] text-white px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-indigo-600/30 to-purple-500/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-pink-500/30 to-purple-600/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Desktop Sidebar Nav */}
      <motion.div
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6 bg-white/5 p-3 rounded-full backdrop-blur-sm border border-white/10 shadow-lg shadow-purple-500/10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {[
          { id: "hero", icon: <Home size={20} />, label: "Home" },
          { id: "about", icon: <User size={20} />, label: "About" },
          { id: "skills", icon: <Code size={20} />, label: "Skills" },
          {
            id: "experience",
            icon: <Briefcase size={20} />,
            label: "Experience",
          },
          { id: "portfolio", icon: <FileText size={20} />, label: "Portfolio" },
          { id: "contact", icon: <Mail size={20} />, label: "Contact" },
        ].map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group p-2 rounded-full hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-600/30 transition-all relative"
          >
            {item.icon}
            <span className="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-black/70 text-xs opacity-0 group-hover:opacity-100 transition">
              {item.label}
            </span>
          </a>
        ))}
      </motion.div>

      {/* Mobile Bottom Nav */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full backdrop-blur-sm border border-white/10 shadow-lg shadow-purple-500/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {[Home, User, Code, FileText, Mail].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="p-2 rounded-full hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-600/30 transition"
          >
            <Icon size={18} />
          </a>
        ))}
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div>
            <motion.h2
              className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mb-4"
              {...fadeIn}
            >
              Hello,
            </motion.h2>

            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              {...fadeIn}
              transition={{ delay: 0.1 }}
            >
              I&apos;m
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                {" "}
                Abu Said
              </span>
              , a <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Software Developer
              </span>
            </motion.h1>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 mt-10"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              {[Github, Linkedin, Facebook, GitBranch, Twitter].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="relative group text-white/70 hover:text-white"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div className="absolute -inset-3 rounded-full bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/40 group-hover:to-purple-500/40 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <Icon size={28} />
                  </motion.a>
                )
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-6 mt-12"
              {...fadeIn}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 rounded-full border border-indigo-500/40 bg-white/5 backdrop-blur-md text-white font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
                <span className="relative flex items-center gap-2">
                  Contact Me →
                </span>
              </motion.a>

              <motion.a
                href="#"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-purple-500/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="flex items-center gap-2">Get Resume ↓</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Code Editor */}
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Glow */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Editor Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/10 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="ml-2 text-xs text-indigo-300/80 font-mono">
                developer.js
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">developer</span>{" "}
              <span className="text-white">=</span> {"{"}
              <br />
              <div className="pl-6">
                <span className="text-pink-300">name</span>:{" "}
                <span className="text-green-300">'Abu Said'</span>,
              </div>
              <div className="pl-6">
                <span className="text-pink-300">title</span>:{" "}
                <span className="text-green-300">'Software Developer'</span>,
              </div>
              <div className="pl-6">
                <span className="text-pink-300">skills</span>: [
                <div className="pl-6">
                  <span className="text-green-300">'React'</span>,<br />
                  <span className="text-green-300">'Next.js'</span>,<br />
                  <span className="text-green-300">'Node.js'</span>,<br />
                  <span className="text-green-300">'TypeScript'</span>
                </div>
                ],
              </div>
              <div className="pl-6">
                <span className="text-pink-300">problemSolver</span>:{" "}
                <span className="text-orange-300">true</span>,
              </div>
              <div className="pl-6">
                <span className="text-pink-300">available</span>:{" "}
                <span className="text-orange-300">true</span>
              </div>
              {"}"};
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
