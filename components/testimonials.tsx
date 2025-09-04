"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    country: "United States",
    rating: 5,
    text: "Jubaid delivered an exceptional mobile app that exceeded our expectations. His attention to detail and technical expertise are outstanding. The project was completed on time and within budget.",
    project: "E-Commerce Mobile App",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    country: "Canada",
    rating: 5,
    text: "Working with Jubaid was a fantastic experience. He created a beautiful, responsive website with an AI chatbot that significantly improved our customer engagement. Highly recommended!",
    project: "AI Chatbot Website",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Restaurant Owner",
    country: "Spain",
    rating: 5,
    text: "The real-time temperature monitoring system Rana built for us has revolutionized our operations. The interface is intuitive and the features are exactly what we needed. Excellent work!",
    project: "Restaurant Management System",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Fitness Coach",
    country: "Australia",
    rating: 5,
    text: "Jubaid created an amazing fitness tracking app that my clients love. The user experience is smooth and the analytics features are incredibly helpful. Great communication throughout the project.",
    project: "Fitness Tracking App",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Real Estate Agent",
    country: "Singapore",
    rating: 5,
    text: "The real estate platform Jubaid developed has transformed how I showcase properties to clients. The virtual tour feature is impressive and has increased my sales significantly.",
    project: "Real Estate Platform",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="testimonials"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,rgba(0,0,0,0)_100%)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Glowing Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-[140px] -top-40 -left-40 opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-[140px] -bottom-40 -right-40 opacity-20"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-indigo-400 border-indigo-400/30 bg-indigo-400/10"
          >
            Client Reviews
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by 64+ clients worldwide for delivering exceptional digital
            solutions
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * idx,
                  ease: "easeOut",
                }}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 max-w-4xl mx-auto rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center shadow-md shadow-indigo-500/30">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1">
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-purple-400 text-purple-400 drop-shadow"
                            />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </p>

                        {/* Project Badge */}
                        <Badge
                          variant="outline"
                          className="mb-4 text-pink-400 border-pink-400/30 bg-pink-400/10"
                        >
                          {testimonial.project}
                        </Badge>

                        {/* Client Info */}
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-purple-400/30"
                          />
                          <div>
                            <h4 className="font-semibold text-white">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {testimonial.role}
                            </p>
                            <p className="text-indigo-400 text-sm">
                              {testimonial.country}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md shadow-purple-500/50"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { value: "64+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "15+", label: "Countries Served" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
