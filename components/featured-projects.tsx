"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    id: "project1",
    title: "AI Landing Page",
    description:
      "Modern landing page for an AI SaaS product with user authentication, feature showcase, and pricing plans. Built with Next.js 13 App Router and latest web technologies.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image:
      "/images/screencapture-ai-landing-page-next-js-vercel-app-2025-08-16-02_49_53.png",
    demoUrl: "https://ai-landing-page-jubaid.vercel.app",
    codeUrl: "https://github.com/jubaidul-ctg-bd/ai-landing-page-new",
    featured: true,
    stats: {
      stars: 128,
      forks: 34,
      techStack: ["Next.js 13", "TypeScript", "TailwindCSS", "Framer Motion"],
      category: "Web Application",
    },
  },
  {
    id: "project2",
    title: "Dragon News Portal",
    description:
      "Full-featured news portal with Firebase authentication, real-time updates, and responsive design. Features categorized news sections and user bookmarks.",
    tags: ["React.js", "Firebase", "Bootstrap", "Node.js"],
    image:
      "/images/screencapture-dragon-news-react-js-66oj-vercel-app-2025-08-16-02_50_48.png",
    demoUrl: "https://dragon-news-jubaid.vercel.app",
    codeUrl: "https://github.com/jubaidul-ctg-bd/dragon-news-client",
    featured: true,
    stats: {
      stars: 95,
      forks: 28,
      techStack: ["React.js", "Firebase", "Node.js"],
      category: "Full Stack Application",
    },
  },
  {
    id: "project3",
    title: "Modern Blog Platform",
    description:
      "Feature-rich blogging platform with rich text editing, real-time comments, and user profiles. Includes authentication, image uploads, and responsive design.",
    tags: ["React.js", "MongoDB", "Express.js", "Node.js"],
    image:
      "/images/screencapture-react-blog-eight-liard-vercel-app-blog-2025-08-16-02_51_34.png",
    demoUrl: "https://react-blog-jubaid.vercel.app",
    codeUrl: "https://github.com/jubaidul-ctg-bd/mern-blog-platform",
    featured: true,
    stats: {
      stars: 156,
      forks: 42,
      techStack: ["MERN Stack", "OAuth", "AWS S3"],
      category: "Full Stack Application",
    },
  },
  {
    id: "project4",
    title: "Next.js E-Commerce",
    description:
      "Modern e-commerce platform built with Next.js and integrated with Stripe payments. Features product management, cart functionality, and order tracking.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    image: "/images/flower-shop.png",
    demoUrl: "https://nextjs-ecommerce-jubaid.vercel.app",
    codeUrl: "https://github.com/jubaidul-ctg-bd/nextjs-ecommerce",
    featured: true,
    stats: {
      stars: 112,
      forks: 38,
      techStack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "TailwindCSS"],
      category: "E-Commerce Platform",
    },
  },
  {
    id: "project5",
    title: "Portfolio Website",
    description:
      "Modern portfolio website featuring dynamic animations, dark mode, and internationalization. Built with Next.js and showcases professional projects.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: "/images/screencapture-localhost-3000-2025-08-16-03_12_42.png",
    demoUrl: "https://jubaid.vercel.app",
    codeUrl: "https://github.com/jubaidul-ctg-bd/portfolio-2024",
    featured: true,
    stats: {
      stars: 89,
      forks: 25,
      techStack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      category: "Personal Website",
    },
  },
];

export const FeaturedProjects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.3,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tight mb-4 relative inline-block"
            variants={cardVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary animate-gradient">
              Featured Work
            </span>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 opacity-30 blur-lg -z-10"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            variants={cardVariants}
          >
            A collection of my most impactful projects and technical
            achievements
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2 space-x-4">
                        <span className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          {project.stats.stars}
                        </span>
                        <span>{project.stats.category}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stats.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary hover:scale-105 transition-transform"
                      variant="ghost"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                    <Button
                      className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary hover:scale-105 transition-transform"
                      variant="ghost"
                      onClick={() => window.open(project.codeUrl, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
