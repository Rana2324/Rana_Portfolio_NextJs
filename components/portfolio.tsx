"use client";

import { useState, useEffect } from "react";
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
    title: "rEACT.js bLOG",
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
    image: "/images/screencapture-localhost-3000-2025-08-16-03_12_42.png",
    demoUrl: "https://dash-board-next-js-beta.vercel.app/",
    codeUrl: "https://github.com/Rana2324/DashBoard_NextJs",
    category: "Website",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideos, setPlayingVideos] = useState<{
    [key: string]: boolean;
  }>({});
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  // Initialize videos in paused state
  useEffect(() => {
    const initializeVideos = () => {
      projects.forEach((project) => {
        if (!project.video) return;

        const videoElement = document.getElementById(
          `video-${project.id}`
        ) as HTMLVideoElement;

        if (videoElement) {
          // Reset video state
          videoElement.pause();
          videoElement.currentTime = 0;

          // Set initial playing state
          setPlayingVideos((prev) => ({ ...prev, [project.id]: false }));

          // Add event listeners
          const handleError = (e: Event) => {
            console.error(`Error with video ${project.id}:`, e);
            setPlayingVideos((prev) => ({ ...prev, [project.id]: false }));
          };

          const handleLoadedMetadata = () => {
            videoElement.currentTime = 0;
          };

          videoElement.addEventListener("error", handleError);
          videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);

          // Store cleanup function
          return () => {
            videoElement.removeEventListener("error", handleError);
            videoElement.removeEventListener(
              "loadedmetadata",
              handleLoadedMetadata
            );
            videoElement.pause();
            videoElement.currentTime = 0;
          };
        }
      });
    };

    // Initialize videos
    initializeVideos();
  }, []);

  // Pause video when out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          const projectId = video.getAttribute("data-project-id");
          if (!entry.isIntersecting && projectId) {
            video.pause();
            setPlayingVideos((prev) => ({ ...prev, [projectId]: false }));
          }
        });
      },
      { threshold: 0.5 }
    );

    const videos = document.querySelectorAll("video[data-project-id]");
    videos.forEach((video) => observer.observe(video));

    return () => {
      videos.forEach((video) => observer.unobserve(video));
    };
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F]"
      id="projects"
    >
      {/* Glow background */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent projects that showcase my skills.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                  : "border-white/10 hover:border-indigo-500/50 hover:text-indigo-400"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-indigo-500/50 backdrop-blur-sm transition-all duration-500 rounded-xl shadow-xl hover:scale-[1.02]">
                <CardContent className="p-0">
                  {/* Media */}
                  <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10 relative">
                    {project.video ? (
                      <div
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setHoveredVideo(project.id)}
                        onMouseLeave={() => setHoveredVideo(null)}
                      >
                        <div
                          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 z-10 ${
                            hoveredVideo === project.id
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                        <video
                          id={`video-${project.id}`}
                          data-project-id={project.id}
                          preload="metadata"
                          loop
                          muted
                          playsInline
                          controls={false}
                          src={project.video}
                          poster={project.image || ""}
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                          style={{ minHeight: "200px" }}
                          onError={(e) => {
                            console.error(
                              `Error loading video for ${project.id}:`,
                              e
                            );
                          }}
                          onLoadedData={(e) => {
                            const video = e.currentTarget;
                            video.currentTime = 0;
                          }}
                        ></video>

                        {/* Overlay controls */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 ${
                            hoveredVideo === project.id
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();

                              const videoElement = document.getElementById(
                                `video-${project.id}`
                              ) as HTMLVideoElement;

                              if (!videoElement) return;

                              // Toggle video playback
                              if (videoElement.paused) {
                                const playPromise = videoElement.play();
                                if (playPromise !== undefined) {
                                  playPromise
                                    .then(() => {
                                      setPlayingVideos((prev) => ({
                                        ...prev,
                                        [project.id]: true,
                                      }));
                                    })
                                    .catch((error) => {
                                      console.error(
                                        "Error playing video:",
                                        error
                                      );
                                      // Try to play again with user interaction
                                      const playWithClick = () => {
                                        videoElement.play();
                                        setPlayingVideos((prev) => ({
                                          ...prev,
                                          [project.id]: true,
                                        }));
                                        document.removeEventListener(
                                          "click",
                                          playWithClick
                                        );
                                      };
                                      document.addEventListener(
                                        "click",
                                        playWithClick
                                      );
                                    });
                                }
                              } else {
                                videoElement.pause();
                                setPlayingVideos((prev) => ({
                                  ...prev,
                                  [project.id]: false,
                                }));
                              }
                            }}
                            className="bg-black/50 rounded-full p-4 hover:scale-110 transition"
                          >
                            {playingVideos[project.id] ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                              >
                                <rect x="6" y="4" width="4" height="16" />
                                <rect x="14" y="4" width="4" height="16" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            )}
                          </button>
                        </div>

                        {/* Tooltip */}
                        <div
                          className={`absolute bottom-4 left-4 text-white text-sm px-3 py-1 rounded-lg bg-black/50 backdrop-blur-sm transition ${
                            hoveredVideo === project.id
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          {playingVideos[project.id]
                            ? "Click to pause"
                            : "Click to play"}
                        </div>
                      </div>
                    ) : project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs mb-3">
                      {project.category || "Website"}
                    </Badge>
                    <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex gap-4">
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-white/10"
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
                          className="bg-white/5 text-xs px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
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
