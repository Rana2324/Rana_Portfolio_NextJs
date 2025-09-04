"use client";

import {
  Code,
  Smartphone,
  Brain,
  Search,
  LayoutGrid,
  Database,
  PenTool,
  LineChart,
  Globe,
  ShieldCheck,
  Zap,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Services() {
  // Categories for filtering
  const categories = [
    { id: "all", name: "All Services" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
    { id: "optimization", name: "Optimization" },
  ];

  // Active category state
  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Development",
      description:
        "Creating responsive, SEO-optimized websites that improve online visibility and rankings.",
      gradient: "from-indigo-500 to-purple-600",
      delay: 0.1,
      featured: true,
      category: "development",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Developing custom Java-based Android applications with modern UI/UX design.",
      gradient: "from-purple-500 to-pink-600",
      delay: 0.2,
      featured: false,
      category: "development",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description:
        "Building custom AI chatbots and automation tools for business efficiency.",
      gradient: "from-pink-500 to-rose-600",
      delay: 0.3,
      featured: true,
      category: "development",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description:
        "Implementing SEO strategies to enhance online visibility and search rankings.",
      gradient: "from-indigo-500 to-blue-600",
      delay: 0.4,
      featured: false,
      category: "optimization",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description:
        "Creating efficient database schemas and optimizing query performance for your applications.",
      gradient: "from-blue-500 to-cyan-600",
      delay: 0.15,
      featured: false,
      category: "development",
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive user interfaces and experiences that engage and convert visitors.",
      gradient: "from-purple-500 to-indigo-600",
      delay: 0.25,
      featured: false,
      category: "design",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Cybersecurity",
      description:
        "Implementing robust security measures to protect your applications and user data.",
      gradient: "from-emerald-500 to-teal-600",
      delay: 0.35,
      featured: false,
      category: "optimization",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Boosting application speed and efficiency through code and database optimization.",
      gradient: "from-amber-500 to-orange-600",
      delay: 0.45,
      featured: false,
      category: "optimization",
    },
  ];

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,rgba(0,0,0,0)_100%)]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-600/20 to-purple-500/20 rounded-full blur-3xl"
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
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              My{" "}
              <span className="text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                Services
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg text-indigo-100/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I offer comprehensive digital solutions to help businesses grow and
            succeed in the digital world.
          </motion.p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-[#1e1e3d]/60 text-indigo-100/70 hover:text-white hover:bg-[#1e1e3d]/90 border border-indigo-500/30"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={activeCategory} // Force re-render when category changes
        >
          {services
            .filter(
              (service) =>
                activeCategory === "all" || service.category === activeCategory
            )
            .map((service, index) => (
              <motion.div
                key={index}
                className="group"
                variants={itemVariants}
                transition={{
                  duration: 0.5,
                  delay: service.delay,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <motion.div
                  className="bg-[#1e1e3d]/60 border border-indigo-500/30 rounded-2xl p-8 relative overflow-hidden backdrop-blur-sm"
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(99, 102, 241, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {/* Featured tag */}
                  {service.featured && (
                    <motion.div
                      className="absolute top-0 right-0"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: service.delay + 0.3 }}
                    >
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        Featured
                      </div>
                    </motion.div>
                  )}

                  {/* Background gradient blob */}
                  <motion.div
                    className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Service content */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white relative z-10`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4 text-white relative z-10">
                    {service.title}
                  </h3>

                  <p className="text-indigo-100/70 leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  {/* Hover element */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500 group-hover:to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-3 h-3 border-2 border-t-transparent border-white rounded-full"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-8 sm:p-10 relative overflow-hidden backdrop-blur-sm"
            whileHover={{
              boxShadow:
                "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(99, 102, 241, 0.3)",
            }}
          >
            {/* Background elements */}
            <motion.div
              className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <div className="relative z-10 text-center sm:text-left sm:flex items-center justify-between">
              <div className="mb-6 sm:mb-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                  Need a Custom Solution?
                </h3>
                <p className="text-indigo-100/70 max-w-2xl">
                  I'm available for freelance projects and full-time employment.
                  Let's discuss your ideas and bring them to life.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all"
                >
                  Contact Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
