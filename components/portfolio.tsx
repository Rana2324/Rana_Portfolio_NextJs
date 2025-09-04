"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const categories = ["All"];

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
  category?: string;
}

const projects: Project[] = [
  {
    id: "project1",
    title: "AI Landing Page",
    description:
      "Modern landing page for an AI SaaS product with user authentication, feature showcase, and pricing plans.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image:
      "/images/screencapture-ai-landing-page-next-js-vercel-app-2025-08-16-02_49_53.png",
    demoUrl: "https://ai-landing-page-jubaid.vercel.app",
    codeUrl: "https://github.com/jubaidul-ctg-bd/ai-landing-page-new",
    category: "Website",
  },
  {
    id: "project2",
    title: "Dragon News",
    description:
      "News portal application with categorized articles, user authentication, and a responsive design.",
    tags: ["React.js", "Firebase", "Bootstrap", "Node.js"],
    image:
      "/images/screencapture-dragon-news-react-js-66oj-vercel-app-2025-08-16-02_50_48.png",
    demoUrl: "https://dragon-news-jubaid.vercel.app",
    codeUrl: "https://github.com/jubaidul-ctg-bd/dragon-news-client",
    category: "Website",
  },
  {
    id: "project3",
    title: "React Blog",
    description:
      "Full-featured blog platform with rich text editing, comments, and user profiles.",
    tags: ["React.js", "MongoDB", "Express.js", "Node.js"],
    image:
      "/images/screencapture-react-blog-eight-liard-vercel-app-blog-2025-08-16-02_51_34.png",
    demoUrl: "https://react-blog-jubaid.vercel.app",
    codeUrl: "https://github.com/jubaidul-ctg-bd/mern-blog-platform",
    category: "Website",
  },
  {
    id: "project4",
    title: "Next.js E-Commerce",
    description:
      "E-commerce platform with product management, cart functionality, and order tracking.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    image: "/images/flower-shop.png",
    demoUrl: "https://nextjs-ecommerce-jubaid.vercel.app",
    codeUrl: "https://github.com/jubaidul-ctg-bd/nextjs-ecommerce",
    category: "Website",
  },
  {
    id: "project5",
    title: "Portfolio Website",
    description:
      "Modern portfolio website featuring dynamic animations, dark mode, and internationalization.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: "/images/screencapture-localhost-3000-2025-08-16-03_12_42.png",
    demoUrl: "https://jubaid.vercel.app",
    codeUrl: "https://github.com/jubaidul-ctg-bd/portfolio-2024",
    category: "Website",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,rgba(0,0,0,0)_100%)]"
      id="projects"
    >
      {/* Glowing background elements */}
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
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-full blur-[120px]"
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

      <div className="relative container mx-auto px-4 sm:px-6 z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Check out some of my recent projects that showcase my skills and
            expertise in creating innovative solutions.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-transparent hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 shadow-md shadow-indigo-500/20"
                      : "border-white/10 hover:border-indigo-500/50 hover:text-indigo-400"
                  }
                `}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card"
            >
              <Card className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-indigo-500/50 backdrop-blur-sm transition-all duration-500 rounded-xl shadow-xl shadow-black/5 hover:shadow-indigo-500/10 hover:scale-[1.02]">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10">
                      {project.image && (
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="project-card-content p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center mb-3 sm:mb-4 space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category || "Website"}
                      </Badge>
                    </div>
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project Links */}
                    <div className="project-card-buttons flex gap-2 sm:gap-4 mt-3 sm:mt-4">
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-white/10 hover:border-indigo-500/50 text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5"
                      >
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>

                    {/* Project Technologies */}
                    <div className="mt-4 sm:mt-6">
                      <div className="project-card-tech flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tags.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-white/5 hover:bg-white/10 text-xs px-2 py-0.5"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
