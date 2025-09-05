"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Project interface and data
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
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
    video: "/images/project1.mp4",
    demoUrl: "https://ai-landing-page-next-js.vercel.app/",
    codeUrl: "https://github.com/Rana2324/Ai_Landing_Page_NextJs",
    category: "Website",
  },
  {
    id: "project2",
    title: "Dragon News",
    description:
      "News portal application with categorized articles, user authentication, and a responsive design.",
    tags: ["React.js", "Firebase", "Bootstrap", "Node.js"],
    video: "/images/project 2.mp4",
    demoUrl: "https://dragon-news-react-js-66oj.vercel.app/",
    codeUrl: "https://github.com/Rana2324/Dragon_News_ReactJs",
    category: "Website",
  },
  {
    id: "project3",
    title: "React Gamming World",
    description:
      "Full-featured blog platform with rich text editing, comments, and user profiles.",
    tags: ["React.js", "MongoDB", "Express.js", "Node.js"],
    video: "/images/project 3.mp4",
    demoUrl: "https://rana2324.github.io/gamming_world_project/",
    codeUrl: "https://github.com/Rana2324/gamming_world_project",
    category: "Website",
  },
  {
    id: "project4",
    title: "React.js blog",
    description:
      "Blog platform with user authentication, rich text editing, and responsive design.",
    tags: ["React.js", "Prisma", "PostgreSQL", "Stripe"],
    video: "/images/project 4.mp4",
    demoUrl: "https://react-blog-eight-liard.vercel.app/",
    codeUrl: "https://github.com/Rana2324/React_Blog",
    category: "Website",
  },
  {
    id: "project5",
    title: "Dashboard Website",
    description:
      "Dashboard website with dynamic animations, dark mode, and internationalization.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    video: "/images/project  5.mp4",
    demoUrl: "https://dash-board-next-js-beta.vercel.app/",
    codeUrl: "https://github.com/Rana2324/DashBoard_NextJs",
    category: "Website",
  },
  {
    id: "project6",
    title: "Flower Shop Website",
    description:
      "Flower shop website with dynamic animations, dark mode, and internationalization.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    video: "/images/project  6.mp4",
    demoUrl: "https://flower-shop-plum-chi.vercel.app/",
    codeUrl: "https://github.com/Rana2324/flower-shop",
    category: "Website",
  },
];

// Custom animation variants
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const PortfolioCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Filter projects by category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  // Extract unique categories
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category || "Website"))),
  ];

  // Check if the device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Navigation button references
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  // Video refs
  const videoRefs = React.useRef<{ [key: string]: HTMLVideoElement | null }>(
    {}
  );

  // Handle video play/pause based on hover
  useEffect(() => {
    if (hoveredItem) {
      // Play the video of the hovered item
      const video = videoRefs.current[hoveredItem];
      if (video) {
        video.play().catch((e) => console.log("Video play error:", e));
      }

      // Pause all other videos
      Object.entries(videoRefs.current).forEach(([id, videoEl]) => {
        if (id !== hoveredItem && videoEl) {
          videoEl.pause();
        }
      });
    } else {
      // Pause all videos when nothing is hovered
      Object.values(videoRefs.current).forEach((video) => {
        if (video) video.pause();
      });
    }
  }, [hoveredItem]);

  return (
    <section
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F]"
      id="portfolio"
    >
      {/* Glow background */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.05, 0.08, 0.05],
          x: ["-20%", "0%", "-20%"],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -60, 0],
          opacity: [0.05, 0.08, 0.05],
          x: ["20%", "0%", "20%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      {/* Background particles */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/2 w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent projects that showcase my skills.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                  : "border-white/20 text-gray-300 hover:text-white hover:border-indigo-500/50"
              } transition-all duration-300`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="relative">
          {/* Custom navigation buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 z-10 transform -translate-y-1/2 pointer-events-none px-2 md:px-6">
            <button
              ref={navigationPrevRef}
              className="bg-gradient-to-r from-indigo-500/80 to-purple-500/80 backdrop-blur-sm border border-white/20 rounded-full pl-3 pr-5 py-3 md:pl-3 md:pr-5 md:py-3 shadow-xl text-white hover:scale-105 hover:brightness-110 transition-all duration-300 pointer-events-auto flex items-center gap-1.5"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="stroke-[2.5px]" />
              <span className="text-sm font-medium tracking-wide">Back</span>
            </button>
            <button
              ref={navigationNextRef}
              className="bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm border border-white/20 rounded-full pl-5 pr-3 py-3 md:pl-5 md:pr-3 md:py-3 shadow-xl text-white hover:scale-105 hover:brightness-110 transition-all duration-300 pointer-events-auto flex items-center gap-1.5"
              aria-label="Next slide"
            >
              <span className="text-sm font-medium tracking-wide">Next</span>
              <ChevronRight size={20} className="stroke-[2.5px]" />
            </button>
          </div>

          {filteredProjects.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={isMobile ? 1 : 2}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={800}
              pagination={{ clickable: true }}
              onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="swiper-container !pb-14"
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="h-full"
                    onMouseEnter={() => setHoveredItem(project.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Card className="group relative overflow-hidden border-0 bg-white/5 hover:bg-gradient-to-b hover:from-indigo-900/20 hover:to-purple-900/20 border-white/10 hover:border-indigo-500/50 backdrop-blur-sm transition-all duration-500 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] hover:scale-[1.02]">
                      <CardContent className="p-0">
                        {/* Media */}
                        <div
                          className={`aspect-video w-full overflow-hidden bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10 relative ${
                            hoveredItem === project.id && project.video
                              ? "ring-2 ring-indigo-500/50 ring-offset-1 ring-offset-indigo-500/20"
                              : ""
                          }`}
                        >
                          {project.video ? (
                            <video
                              ref={(el) => {
                                videoRefs.current[project.id] = el;
                              }}
                              preload="metadata"
                              loop
                              muted
                              playsInline
                              controls={false}
                              src={project.video}
                              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                              style={{ minHeight: "200px" }}
                            />
                          ) : project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : null}

                          {/* Overlay on hover */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${
                              hoveredItem === project.id
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          >
                            {project.video && (
                              <div
                                className={`absolute top-4 right-4 transition-opacity duration-300 ${
                                  hoveredItem === project.id
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                              >
                                <span className="px-2 py-1 bg-black/40 backdrop-blur-sm rounded-md text-xs text-white flex items-center">
                                  <svg
                                    className="w-3 h-3 mr-1 text-indigo-400"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                  </svg>
                                  Playing
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                            {project.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="text-xs mb-3 bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                          >
                            {project.category || "Website"}
                          </Badge>
                          <p className="text-gray-400 mb-4 text-sm line-clamp-3 group-hover:text-gray-300 transition-colors">
                            {project.description}
                          </p>

                          {/* Links */}
                          <div className="flex gap-4">
                            <Button
                              asChild
                              size="sm"
                              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md hover:shadow-indigo-500/30 transition-all duration-300"
                            >
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" /> Live
                                Demo
                              </a>
                            </Button>
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="border-white/20 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                            >
                              <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-4 h-4 mr-2" /> Code
                              </a>
                            </Button>
                          </div>

                          {/* Tags */}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-white/5 hover:bg-indigo-500/20 text-xs px-2 py-0.5 border border-white/10 hover:border-indigo-500/30 transition-colors duration-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 mb-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-400 text-center max-w-md">
                There are no projects in the selected category. Try selecting a
                different category.
              </p>
              <Button
                variant="default"
                className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                onClick={() => setActiveCategory("All")}
              >
                View all projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
