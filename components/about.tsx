"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Award,
  Home,
  Code,
  Trophy,
  Zap,
  Target,
  User,
  FileText,
  Globe,
  Database,
  Briefcase,
  Compass,
  Monitor,
  Download,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useInView,
} from "@/lib/framer";
import React, { useRef } from "react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const springRotate1 = useSpring(rotate1, { stiffness: 100, damping: 30 });
  const springRotate2 = useSpring(rotate2, { stiffness: 100, damping: 30 });

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Skills data with improved categorization
  const skills = [
    {
      name: "Frontend Development",
      icon: <Monitor size={20} className="text-white" />,
      color: "from-indigo-500 to-purple-600",
      details: "React, Next.js, Vue, Angular",
    },
    {
      name: "Backend Development",
      icon: <Database size={20} className="text-white" />,
      color: "from-purple-500 to-pink-600",
      details: "Node.js, Express, MongoDB, SQL",
    },
    {
      name: "Mobile Development",
      icon: <Zap size={20} className="text-white" />,
      color: "from-pink-500 to-red-600",
      details: "React Native, Flutter, Android",
    },
    {
      name: "UI/UX Design",
      icon: <Compass size={20} className="text-white" />,
      color: "from-indigo-500 to-blue-600",
      details: "Figma, Adobe XD, Tailwind",
    },
  ];

  // Professional achievements
  // const achievements = [
  //   "Successfully delivered 64+ projects to clients worldwide",
  //   "Specialized in responsive web applications and mobile apps",
  //   "Expertise in modern frontend frameworks and technologies",
  //   "Proficient in SEO optimization and performance tuning",
  // ];

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,rgba(0,0,0,0)_100%)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[120px]"
        style={{ y: springY1, rotate: springRotate1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-full blur-[120px]"
        style={{ y: springY2, rotate: springRotate2 }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -60, 0],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header with animated text reveal */}
          <motion.div
            className="text-center mb-16 sm:mb-24"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="inline-block relative mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <h2 className="relative text-4xl sm:text-6xl md:text-7xl font-bold py-2 px-4">
                About{" "}
                <span className="text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                  Me
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                <span className="text-gradient bg-gradient-to-r from-indigo-400 to-purple-400 font-medium">
                  Full Stack Developer
                </span>
              </div>
              <div className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 font-medium">
                  UI/UX Designer
                </span>
              </div>
              <div className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-indigo-500/20 border border-pink-500/30">
                <span className="text-gradient bg-gradient-to-r from-pink-400 to-indigo-400 font-medium">
                  Mobile App Developer
                </span>
              </div>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Crafting exceptional digital experiences through clean code and
              innovative solutions
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 sm:gap-20 items-start">
            {/* Left side - Profile (4 columns) */}
            <motion.div
              className="lg:col-span-4 order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-full max-w-md mx-auto relative">
                {/* Animated glow effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-indigo-400/20 via-blue-500/10 to-emerald-500/20 rounded-3xl blur-2xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Profile card with glass effect */}
                <motion.div
                  className="relative glass-effect rounded-3xl p-8 sm:p-10 border border-indigo-500/30 bg-[#1e1e3d]/60 backdrop-blur-md"
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(99, 102, 241, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    className="text-center mb-8 sm:mb-10"
                    variants={itemVariants}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* Profile image with orbital animation */}
                    <div className="relative mx-auto w-32 sm:w-40 h-32 sm:h-40 mb-6 sm:mb-8">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/50 to-purple-500/50 blur-xl"
                        animate={{
                          scale: [0.85, 1.15, 0.85],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />

                      {/* Orbital elements */}
                      <motion.div
                        className="absolute w-full h-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <motion.div className="absolute -right-1 top-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse-glow" />
                      </motion.div>

                      <motion.div
                        className="absolute w-full h-full"
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <motion.div className="absolute left-0 top-0 w-4 h-4 bg-indigo-400 rounded-full animate-pulse-glow" />
                      </motion.div>

                      {/* Profile image */}
                      <div className="relative w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/25">
                        <motion.div
                          className="w-full h-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                          }}
                        >
                          <img
                            src="/images/profile-img.jpg"
                            alt="Rana Mohammad Shohel"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>
                    </div>

                    <motion.h3
                      className="text-2xl sm:text-3xl font-bold text-foreground mb-1"
                      variants={itemVariants}
                    >
                      Rana Mohammad Shohel
                    </motion.h3>
                    <motion.div
                      className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 mb-2"
                      variants={itemVariants}
                    >
                      <p className="text-gradient bg-gradient-to-r from-indigo-400 to-purple-500 font-semibold text-sm sm:text-base">
                        Web Developer
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Stats with improved design */}
                  <motion.div
                    className="grid grid-cols-2 gap-4 sm:gap-6"
                    variants={containerVariants}
                    transition={{
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    }}
                  >
                    <motion.div
                      className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#1e1e3d]/70 to-[#2a2a50]/70 backdrop-blur-sm rounded-2xl border border-indigo-500/30"
                      variants={statsVariants}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow:
                          "0 10px 25px rgba(0, 0, 0, 0.2), 0 0 10px rgba(124, 58, 237, 0.3)",
                      }}
                    >
                      <motion.div
                        className="text-3xl sm:text-4xl font-bold text-gradient bg-gradient-to-r from-indigo-400 to-purple-500 mb-1"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                          delay: 0.3,
                        }}
                      >
                        64+
                      </motion.div>
                      <motion.div
                        className="text-sm sm:text-base text-indigo-100/70"
                        variants={itemVariants}
                      >
                        Completed Projects
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#1e1e3d]/70 to-[#2a2a50]/70 backdrop-blur-sm rounded-2xl border border-indigo-500/30"
                      variants={statsVariants}
                      whileHover={{
                        y: -5,
                        boxShadow:
                          "0 10px 25px rgba(0, 0, 0, 0.2), 0 0 10px rgba(124, 58, 237, 0.3)",
                      }}
                    >
                      <motion.div
                        className="text-3xl sm:text-4xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-pink-500 mb-1"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                          delay: 0.5,
                        }}
                      >
                        5+
                      </motion.div>
                      <motion.div
                        className="text-sm sm:text-base text-indigo-100/70"
                        variants={itemVariants}
                      >
                        Years Experience
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Resume download button */}
                  <motion.div className="mt-8" variants={itemVariants}>
                    <motion.a
                      href="#"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download size={18} />
                      <span>Download Resume</span>
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-8 sm:w-10 h-8 sm:h-10 bg-indigo-400/30 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-6 sm:w-8 h-6 sm:h-8 border-2 border-blue-400/40 rounded-full"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>

              {/* Contact info cards with improved design */}
              <motion.div
                className="grid grid-cols-2 gap-4 mt-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="glass-effect rounded-xl p-4 flex items-center space-x-3 bg-[#1e1e3d]/60 border border-indigo-500/30"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 25px rgba(0, 0, 0, 0.2), 0 0 10px rgba(124, 58, 237, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-indigo-400" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-indigo-200/70 mb-1">Email</p>
                    <p className="text-white font-medium text-sm truncate">
                      shohelranatonmoy98@gmail.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="glass-effect rounded-xl p-4 flex items-center space-x-3 bg-[#1e1e3d]/60 border border-indigo-500/30"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 25px rgba(0, 0, 0, 0.2), 0 0 10px rgba(124, 58, 237, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-purple-400" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-indigo-200/70 mb-1">Phone</p>
                    <p className="text-white font-medium text-sm">
                      07038246790
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="glass-effect rounded-xl p-4 flex items-center space-x-3 bg-[#1e1e3d]/60 border border-indigo-500/30"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 25px rgba(0, 0, 0, 0.2), 0 0 10px rgba(124, 58, 237, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="text-pink-400" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-indigo-200/70 mb-1">Location</p>
                    <p className="text-white font-medium text-sm">
                      Tokyo, Japan
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="glass-effect rounded-xl p-4 flex items-center space-x-3 bg-[#1e1e3d]/60 border border-indigo-500/30"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 25px rgba(0, 0, 0, 0.2), 0 0 10px rgba(124, 58, 237, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-indigo-400" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-indigo-200/70 mb-1">Status</p>
                    <p className="text-white font-medium text-sm">
                      Available for Work
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - Content (8 columns) */}
            <motion.div
              className="lg:col-span-8 space-y-8 sm:space-y-10 order-1 lg:order-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={itemVariants}>
                <motion.h3
                  className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center lg:text-left"
                  variants={itemVariants}
                >
                  <span className="relative inline-block">
                    <span className="text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                      Professional Software Developer
                    </span>
                    <motion.span
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </span>
                </motion.h3>

                <motion.div
                  className="space-y-5 sm:space-y-6 text-indigo-100/70 text-base sm:text-lg leading-relaxed backdrop-blur-sm p-6 rounded-2xl bg-[#1e1e3d]/60 border border-indigo-500/30"
                  variants={itemVariants}
                  whileHover={{
                    boxShadow:
                      "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(124, 58, 237, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p variants={itemVariants}>
                    I am Rana Mohammad Shohel, a passionate full-stack web
                    engineer with 5 years of experience crafting exceptional
                    digital experiences through clean code and innovative
                    solutions. I specialize in full-stack development, creating
                    responsive and intuitive applications that solve real-world
                    problems.
                  </motion.p>

                  <motion.p variants={itemVariants}>
                    My approach combines technical expertise with a deep
                    understanding of user experience design. I have successfully
                    delivered over 64 projects for clients worldwide, ranging
                    from interactive web applications to high-performance mobile
                    apps and e-commerce solutions. I&apos;m committed to writing
                    clean, maintainable code and staying at the forefront of
                    technology trends.
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Professional achievements */}
              {/* <motion.div variants={containerVariants} className="px-4 sm:px-0">
                <motion.h4
                  className="text-xl sm:text-2xl font-semibold mb-4 text-center lg:text-left flex items-center gap-2"
                  variants={itemVariants}
                >
                  <Trophy className="text-purple-400" size={24} />
                  <span>Professional Achievements</span>
                </motion.h4>

                <motion.div
                  className="space-y-3 mt-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-[#1e1e3d]/40 backdrop-blur-sm rounded-xl border border-indigo-500/30"
                      variants={itemVariants}
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(124, 58, 237, 0.1)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-6 h-6 mt-0.5 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="text-indigo-400" size={14} />
                      </div>
                      <p className="text-indigo-100/70">{achievement}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div> */}

              {/* Skills grid with improved layout */}
              <motion.div variants={containerVariants} className="px-4 sm:px-0">
                <motion.h4
                  className="text-xl sm:text-2xl font-semibold mb-6 text-center lg:text-left flex items-center gap-2"
                  variants={itemVariants}
                >
                  <Code className="text-purple-400" size={24} />
                  <span>Core Expertise</span>
                </motion.h4>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-[#1e1e3d]/40 backdrop-blur-sm border border-indigo-500/30 p-5 rounded-xl"
                      variants={itemVariants}
                      whileHover={{
                        y: -5,
                        boxShadow:
                          "0 10px 25px rgba(0, 0, 0, 0.2), 0 0 10px rgba(124, 58, 237, 0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                        >
                          {skill.icon}
                        </div>
                        <div>
                          <h5 className="font-medium text-white text-lg mb-1">
                            {skill.name}
                          </h5>
                          <p className="text-indigo-100/70 text-sm">
                            {skill.details}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                className="mt-10 text-center lg:text-left"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20"
                  whileHover={{ scale: 1.03, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Let&apos;s Work Together</span>
                  <ArrowRight size={18} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
