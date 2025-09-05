"use client";

import React, { useState } from "react";
import {
  Code,
  Zap,
  Database,
  Server,
  Cpu,
  BarChart,
  Brain,
  Sparkles,
  Layout,
  Palette,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  level: number;
  description?: string;
  tools?: string[];
  icon?: React.ElementType;
  iconClass?: string; // For Devicon classes
  category?: string;
};

type SkillCategory = {
  icon: React.ReactElement;
  description: string;
  skills: Skill[];
  color: string;
};

type SkillCategoryKey =
  | "All Skills"
  | "Frontend Development"
  | "Backend Development"
  | "Databases"
  | "DevOps & Tools"
  | "UI/UX & Accessibility"
  | "Core Skills & Best Practices";

// ---------------- Skill Categories ----------------
const skillCategories: Record<SkillCategoryKey, SkillCategory> = {
  "All Skills": {
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-indigo-500 via-purple-500 to-pink-500",
    description:
      "A comprehensive overview of all my technical skills and expertise",
    skills: [], // Will be filled dynamically
  },
  "Frontend Development": {
    icon: <Layout className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-500",
    description:
      "Building responsive and interactive user interfaces with modern web technologies",
    skills: [
      {
        name: "JavaScript",
        level: 90,
        description: "Modern JavaScript development with ES6+ features",
        tools: ["ES6+", "Async/Await", "DOM Manipulation"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/javascript.svg"
              alt="JavaScript"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "React",
        level: 90,
        description: "Advanced state management and component architecture",
        tools: ["Redux", "Context API", "React Query"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/react.svg"
              alt="React"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "Next.js",
        level: 85,
        description: "Server-side rendering and static site generation",
        tools: ["App Router", "Server Components", "API Routes"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/nextjs.svg"
              alt="Next.js"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "TypeScript",
        level: 85,
        description: "Type-safe development with advanced features",
        tools: ["Generics", "Utility Types", "Decorators"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/typescript.svg"
              alt="TypeScript"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "Angular",
        level: 85,
        description: "Enterprise-level applications with Angular framework",
        tools: ["RxJS", "NgRx", "Angular Material"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/angular.svg"
              alt="Angular"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "Vue.js",
        level: 80,
        description: "Building reactive interfaces with Vue.js",
        tools: ["Vue Router", "Vuex", "Composition API"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/vuejs.svg"
              alt="Vue.js"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
    ],
  },
  "Backend Development": {
    icon: <Server className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    description:
      "Creating scalable and secure server-side applications and APIs",
    skills: [
      {
        name: "Node.js",
        level: 85,
        description: "Server-side JavaScript runtime environment",
        tools: ["Express.js", "NestJS", "Socket.IO"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/node.svg"
              alt="Node.js"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "Express.js",
        level: 88,
        description: "Web application framework for Node.js",
        tools: ["Middleware", "REST APIs", "MVC Pattern"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/express.svg"
              alt="Express.js"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "TypeScript",
        level: 82,
        description: "Type-safe backend development",
        tools: ["Dependency Injection", "Decorators", "Type Safety"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/typescript.svg"
              alt="TypeScript"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
    ],
  },
  Databases: {
    icon: <Database className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500",
    description: "Managing and optimizing various database systems",
    skills: [
      {
        name: "MongoDB",
        level: 85,
        description: "NoSQL database management",
        tools: ["Mongoose", "Aggregation", "Atlas"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/mongodb.svg"
              alt="MongoDB"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "PostgreSQL",
        level: 80,
        description: "Relational database management",
        tools: ["Prisma", "Raw SQL", "Indexing"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/postgresql.svg"
              alt="PostgreSQL"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "Redis",
        level: 75,
        description: "In-memory data structure store",
        tools: ["Caching", "Pub/Sub", "Session Store"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/redis.svg"
              alt="Redis"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
    ],
  },
  "DevOps & Tools": {
    icon: <Cpu className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    description: "Deploying and maintaining applications in the cloud",
    skills: [
      {
        name: "Git & GitHub",
        level: 90,
        description: "Version control and collaboration",
        tools: ["Git Flow", "Actions", "PR Reviews"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/git.svg"
              alt="Git"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "Docker",
        level: 75,
        description: "Containerization and orchestration",
        tools: ["Compose", "Kubernetes", "CI/CD"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/docker.svg"
              alt="Docker"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "Design Systems",
        level: 85,
        description: "Component libraries and design systems",
        tools: ["Storybook", "Figma", "Material-UI"],
        iconClass: "devicon-figma-plain colored",
      },
    ],
  },
  "Core Skills & Best Practices": {
    icon: <Brain className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-600",
    description: "Fundamental skills and development best practices",
    skills: [
      {
        name: "Algorithms & Data Structures",
        level: 85,
        description: "Problem-solving and optimization",
        tools: ["Time Complexity", "Space Optimization", "Data Structures"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/algorithms.svg"
              alt="Algorithms"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "Testing & Quality",
        level: 88,
        description: "Comprehensive testing methodologies",
        tools: ["Jest", "Testing Library", "E2E Testing"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/testing.svg"
              alt="Testing"
              fill
              className="object-contain"
              style={{ filter: "invert(1) hue-rotate(10deg)" }}
            />
          </div>
        ),
      },
      {
        name: "Architecture & Design Patterns",
        level: 85,
        description: "Software architecture and design principles",
        tools: ["SOLID", "Design Patterns", "Clean Architecture"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/architecture.svg"
              alt="Architecture"
              fill
              className="object-contain"
              style={{ filter: "invert(1)" }}
            />
          </div>
        ),
      },
    ],
  },
  "UI/UX & Accessibility": {
    icon: <Palette className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    description:
      "Creating intuitive, accessible, and aesthetically pleasing user experiences",
    skills: [
      {
        name: "Accessibility (a11y)",
        level: 90,
        description: "Web accessibility and WCAG compliance",
        tools: ["ARIA", "Screen Readers", "Keyboard Navigation"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/accessibility.svg"
              alt="Accessibility"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "Animation & Motion",
        level: 85,
        description: "Creating smooth and engaging animations",
        tools: ["Framer Motion", "GSAP", "CSS Animations"],
        icon: () => (
          <div className="relative w-6 h-6">
            <Image
              src="/icons/skills/animation.svg"
              alt="Animation"
              fill
              className="object-contain"
            />
          </div>
        ),
      },
      {
        name: "Architecture",
        level: 80,
        description: "System design and architecture",
        tools: ["Microservices", "Clean Code", "Design Patterns"],
        iconClass: "devicon-yarn-plain colored",
      },
      {
        name: "Testing",
        level: 85,
        description: "Testing methodologies",
        tools: ["Jest", "React Testing Library", "Cypress"],
        iconClass: "devicon-jest-plain colored",
      },
    ],
  },
};

// ---------------- Skill Card ----------------
const SkillCard = ({
  skill,
  categoryColor,
}: {
  skill: Skill;
  categoryColor: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 relative group transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {skill.icon ? (
            React.createElement(skill.icon, {
              className: "w-5 h-5 text-primary/70",
            })
          ) : skill.iconClass ? (
            <i className={`${skill.iconClass} text-xl`} />
          ) : null}
          <span className="text-lg font-semibold bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
            {skill.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary text-sm font-medium">
            {skill.level}%
          </span>
          <Sparkles className="w-4 h-4 text-primary/70" />
        </div>
      </div>

      {/* Progress */}
      <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full rounded-full bg-gradient-to-r ${categoryColor}`}
        />
      </div>

      {/* Details */}
      <AnimatePresence>
        {isHovered && skill.description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-gray-300 space-y-2 overflow-hidden mt-3"
          >
            <p>{skill.description}</p>
            {skill.tools && (
              <div className="flex flex-wrap gap-2 pt-2">
                {skill.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ---------------- Main Section ----------------
export default function SkillsSection() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategoryKey>("All Skills");

  // Collect all skills dynamically
  const allSkills = React.useMemo(() => {
    return Object.entries(skillCategories)
      .filter(([key]) => key !== "All Skills")
      .flatMap(([category, data]) =>
        data.skills.map((skill) => ({
          ...skill,
          category,
          categoryColor: data.color,
        }))
      );
  }, []);

  // Set All Skills
  React.useEffect(() => {
    skillCategories["All Skills"].skills = allSkills;
  }, [allSkills]);

  const displayedSkills = React.useMemo(() => {
    return activeCategory === "All Skills"
      ? allSkills
      : skillCategories[activeCategory].skills;
  }, [activeCategory, allSkills]);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F]">
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Professional Skillset</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            A comprehensive overview of my technical expertise and professional
            capabilities, showcasing the technologies and tools I work with.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16">
          {Object.entries(skillCategories).map(
            ([category, { icon, color }], i) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveCategory(category as SkillCategoryKey)}
                className={cn(
                  "group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all relative overflow-hidden",
                  activeCategory === category
                    ? "text-white shadow-lg"
                    : "text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30"
                )}
              >
                <motion.div
                  animate={{
                    scale: activeCategory === category ? 1.1 : 1,
                    rotate: activeCategory === category ? 360 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={cn(
                    "p-0.5 sm:p-1 rounded-full",
                    activeCategory === category
                      ? `bg-gradient-to-r ${color}`
                      : "text-gray-400 group-hover:text-primary"
                  )}
                >
                  {icon}
                </motion.div>
                <span>{category}</span>
                {activeCategory === category && (
                  <motion.div
                    layoutId="categoryBackground"
                    className={`absolute inset-0 -z-10 bg-gradient-to-r ${color}`}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.button>
            )
          )}
        </div>

        {/* Category Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 text-gray-300 text-sm sm:text-base"
        >
          {skillCategories[activeCategory].description}
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20"
        >
          <AnimatePresence mode="wait">
            {displayedSkills.map((skill) => (
              <SkillCard
                key={`${skill.name}-${skill.category || ""}`}
                skill={skill}
                categoryColor={
                  skill.category
                    ? skillCategories[skill.category as SkillCategoryKey].color
                    : skillCategories[activeCategory].color
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Statistics (only for All Skills) */}
        {/* {activeCategory === "All Skills" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChevronRight className="w-6 h-6 text-blue-400" />,
                value: "30+",
                label: "Completed Projects",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: <Zap className="w-6 h-6 text-purple-400" />,
                value: "6+",
                label: "Years Experience",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <BarChart className="w-6 h-6 text-pink-400" />,
                value: "99%",
                label: "Client Satisfaction",
                color: "from-pink-500 to-rose-500",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
              >
                <div
                  className={`bg-gradient-to-r ${stat.color} p-3 rounded-full mb-4`}
                >
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        )} */}
      </div>
    </section>
  );
}
