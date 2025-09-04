"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  Award,
  Users,
  Code,
  CheckCircle2,
  Cpu,
  Layers,
  Palette,
  Layout,
  Server,
  GitBranch,
  FileSpreadsheet,
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Parallax floating background blobs
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const springY1 = useSpring(y1, { stiffness: 50, damping: 20 });
  const springY2 = useSpring(y2, { stiffness: 50, damping: 20 });

  // Timeline progress
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const achievements = [
    {
      icon: Code,
      text: "Developed AIBC Temperature Sensor Monitoring System using Node.js and MongoDB",
      color: "from-indigo-400 to-purple-500",
    },
    {
      icon: Star,
      text: "Implemented real-time communication via WebSocket and modular MVC architecture",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: Users,
      text: "Designed and developed admin dashboard UI with real-time data visualization",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Award,
      text: "Improved UI/UX based on user feedback and contributed to clean architecture",
      color: "from-indigo-400 to-pink-500",
    },
  ];

  const techStack = [
    {
      name: "React",
      category: "frontend",
      color: "from-indigo-400 to-purple-500",
    },
    {
      name: "Next.js",
      category: "frontend",
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "JavaScript",
      category: "frontend",
      color: "from-yellow-400 to-amber-500",
    },
    {
      name: "TypeScript",
      category: "frontend",
      color: "from-blue-400 to-indigo-500",
    },
    {
      name: "Node.js",
      category: "backend",
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "Express",
      category: "backend",
      color: "from-teal-400 to-cyan-500",
    },
    {
      name: "MongoDB",
      category: "backend",
      color: "from-emerald-400 to-green-500",
    },
    {
      name: "PostgreSQL",
      category: "backend",
      color: "from-sky-400 to-blue-500",
    },
    { name: "SEO", category: "marketing", color: "from-pink-400 to-rose-500" },
    { name: "AI/ML", category: "data", color: "from-violet-400 to-purple-500" },
  ];

  const categoryIcons = {
    frontend: <Palette size={14} />,
    backend: <Cpu size={14} />,
    mobile: <Layers size={14} />,
    marketing: <CheckCircle2 size={14} />,
    data: <Cpu size={14} />,
  };

  return (
    <motion.section
      id="experience"
      ref={sectionRef}
      className="py-32 md:py-40 relative overflow-hidden bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,rgba(0,0,0,0)_100%)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[120px]"
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
        style={{ y: springY1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -60, 0],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ y: springY2 }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        style={{ opacity: 0.1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A journey of{" "}
            <span className="text-indigo-400 font-medium">
              continuous learning
            </span>
            and{" "}
            <span className="text-pink-400 font-medium">
              professional growth
            </span>
            , from building apps to delivering AI-powered digital solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-white/10 rounded-full hidden lg:block"></div>
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full hidden lg:block"
            style={{
              height: useTransform(timelineProgress, [0, 1], ["0%", "100%"]),
            }}
          />

          <div className="space-y-28 md:space-y-40">
            {/* Professional Experience */}
            <div className="relative lg:flex lg:items-center">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full border-4 border-[#0c0c1d] z-20 hidden lg:block"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              />

              <div className="lg:w-1/2 lg:pr-16">
                <Card className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:border-indigo-500/40 hover:shadow-indigo-500/30 transition-all duration-500">
                  <CardContent className="p-8 md:p-12 relative">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-3xl flex items-center justify-center border border-indigo-400/30 shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform duration-500">
                        <Briefcase className="text-indigo-400" size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                          Web Engineer
                        </h3>
                        <div className="flex items-center text-indigo-400 font-semibold">
                          <Star className="mr-2" size={18} />
                          <span>SEEDS Co., Ltd.</span>
                          <span className="mx-2">•</span>
                          <span>Dec 2024 - Jun 2025</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-10">
                      <h4 className="text-xl font-bold text-white mb-5 flex items-center">
                        <Award className="mr-3 text-pink-400" size={20} />
                        Key Achievements
                      </h4>
                      <div className="grid gap-3">
                        {achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start p-3 rounded-xl hover:bg-white/5 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div
                              className={`w-8 h-8 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mr-3`}
                            >
                              <achievement.icon
                                className="text-white"
                                size={16}
                              />
                            </div>
                            <span className="text-gray-300">
                              {achievement.text}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-5">
                        Tech Stack & Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, i) => (
                          <motion.span
                            key={i}
                            className={`px-3 py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default flex items-center gap-1.5`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            {
                              categoryIcons[
                                tech.category as keyof typeof categoryIcons
                              ]
                            }
                            {tech.name}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Internship */}
            <div className="relative lg:flex lg:items-center lg:flex-row-reverse">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-4 border-[#0c0c1d] z-20 hidden lg:block"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              />

              <div className="lg:w-1/2 lg:pl-16">
                <Card className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:border-purple-500/40 hover:shadow-purple-500/30 transition-all duration-500">
                  <CardContent className="p-8 md:p-12 relative">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-3xl flex items-center justify-center border border-purple-400/30 shadow-lg shadow-purple-500/10 group-hover:scale-110 transition-transform duration-500">
                        <Code className="text-purple-400" size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          Web Engineer Intern
                        </h3>
                        <div className="flex items-center text-purple-400 font-semibold">
                          <Star className="mr-2" size={18} />
                          <span>Softtoo Co., Ltd.</span>
                          <span className="mx-2">•</span>
                          <span>Jan 2024 - Jun 2024</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-xl font-bold text-white mb-5 flex items-center">
                        <Award className="mr-3 text-pink-400" size={20} />
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start p-3 rounded-xl hover:bg-white/5 transition-all">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                            <Code className="text-white" size={16} />
                          </div>
                          <span className="text-gray-300">
                            Built web applications using HTML, CSS, JavaScript,
                            PHP, Laravel, and React.js,Next.js, Vue.js
                          </span>
                        </div>
                        <div className="flex items-start p-3 rounded-xl hover:bg-white/5 transition-all">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                            <Layout className="text-white" size={16} />
                          </div>
                          <span className="text-gray-300">
                            Implemented responsive UI with Bootstrap and
                            React.js,Next.js,
                          </span>
                        </div>
                        <div className="flex items-start p-3 rounded-xl hover:bg-white/5 transition-all">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                            <Server className="text-white" size={16} />
                          </div>
                          <span className="text-gray-300">
                            Developed backend features and APIs with Node.js &
                            Express.js (MVC structure)
                          </span>
                        </div>
                        <div className="flex items-start p-3 rounded-xl hover:bg-white/5 transition-all">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                            <GitBranch className="text-white" size={16} />
                          </div>
                          <span className="text-gray-300">
                            Gained experience in team-based development, Git
                            version control, and UI/UX improvements
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education */}
            <div className="relative lg:flex lg:items-center">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-4 border-[#0c0c1d] z-20 hidden lg:block"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              />

              <div className="lg:w-1/2 lg:pr-16">
                <Card className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:border-pink-500/40 hover:shadow-pink-500/30 transition-all duration-500">
                  <CardContent className="p-8 md:p-12 relative">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-3xl flex items-center justify-center border border-pink-400/30 shadow-lg shadow-pink-500/10 group-hover:scale-110 transition-transform duration-500">
                        <GraduationCap className="text-pink-400" size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                          Education
                        </h3>
                        <div className="flex items-center text-pink-400 font-semibold">
                          <Award className="mr-2" size={18} />
                          <span>Academic Journey</span>
                        </div>
                      </div>
                    </div>

                    <motion.div className="text-gray-300 text-lg leading-relaxed space-y-4">
                      <div>
                        <span className="text-pink-400 font-medium">
                          Daiichi Institute of Technology
                        </span>
                        <span className="text-sm ml-2">
                          (2020.04 - 2024.09)
                        </span>
                        <br />
                        Faculty of Engineering, Dept. of Information &
                        Electronic Systems Engineering
                      </div>

                      <div>
                        <span className="text-indigo-400 font-medium">
                          International School of Business
                        </span>
                        <span className="text-sm ml-2">
                          (2018.04 - 2020.03)
                        </span>
                        <br />
                        International Business Department
                      </div>

                      <div>
                        <span className="text-purple-400 font-medium">
                          Toei Institute, Japan
                        </span>
                        <span className="text-sm ml-2">
                          (2016.07 - 2018.03)
                        </span>
                        <br />
                        Japanese Language Program
                      </div>

                      <div>
                        <span className="text-pink-400 font-medium">
                          GANGNI Degree College
                        </span>
                        <span className="text-sm ml-2">
                          (2011.08 - 2013.08)
                        </span>
                        <br />
                        High School
                      </div>
                    </motion.div>

                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-white mb-5 flex items-center">
                        <Award className="mr-3 text-pink-400" size={20} />
                        Certifications
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                            <Star className="text-white" size={16} />
                          </div>
                          <div>
                            <span className="text-purple-400 font-medium">
                              JLPT N2
                            </span>
                            <span className="text-gray-400 text-sm ml-2">
                              Aug 2022
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center">
                            <Award className="text-white" size={16} />
                          </div>
                          <div>
                            <span className="text-indigo-400 font-medium">
                              TOEIC 740
                            </span>
                            <span className="text-gray-400 text-sm ml-2">
                              Feb 2023
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                            <FileSpreadsheet className="text-white" size={16} />
                          </div>
                          <div>
                            <span className="text-green-400 font-medium">
                              Excel Spreadsheet Processing Skill Test (Level 3)
                            </span>
                            <span className="text-gray-400 text-sm ml-2">
                              Nov 2019
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-lg flex items-center justify-center">
                            <Briefcase className="text-white" size={16} />
                          </div>
                          <div>
                            <span className="text-pink-400 font-medium">
                              Complete Web Development Course
                            </span>
                            <span className="text-gray-400 text-sm ml-2">
                              May 2020
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
