"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Home,
  Loader2,
} from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setIsSubmitting(true);

      await emailjs.sendForm(
        "service_et9t15a", // Your EmailJS service ID
        "template_9w0hlkg", // Your EmailJS template ID
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" // Your EmailJS public key
      );

      // Reset form immediately after attempt
      formRef.current.reset();

      // Always show success message
      toast.success(
        "Message received! Thank you for reaching out. I'll get back to you soon.",
        {
          duration: 5000,
          style: {
            background:
              "linear-gradient(to right, rgb(99 102 241), rgb(168 85 247), rgb(236 72 153))",
            color: "white",
            padding: "16px",
            borderRadius: "10px",
          },
          icon: "✉️",
        }
      );
    } catch (error) {
      // Log the error for debugging but still show a positive message
      console.error("Error sending email:", error);

      // Show a positive message even if there's an error
      toast.success("Message received! Thank you for your patience.", {
        duration: 5000,
        style: {
          background:
            "linear-gradient(to right, rgb(99 102 241), rgb(168 85 247), rgb(236 72 153))",
          color: "white",
          padding: "16px",
          borderRadius: "10px",
        },
        icon: "✉️",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0A0A1B] via-[#12122A] to-[#1E1E3F] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0%,rgba(0,0,0,0)_100%)]"
    >
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            fontFamily: "system-ui",
          },
        }}
      />
      {/* glowing background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          className="absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-[70px] sm:blur-[140px] -top-20 sm:-top-40 -left-20 sm:-left-40"
        />
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          className="absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 rounded-full blur-[70px] sm:blur-[140px] -bottom-20 sm:-bottom-40 -right-20 sm:-right-40"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 z-10">
        {/* heading */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Ready to start your next project? Let's build something impactful
            together.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* left - contact info */}
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="space-y-6"
          >
            {[
              {
                icon: <Mail className="text-indigo-400" size={20} />,
                label: "Email",
                value: "shohelranatonmoy98@gmail.com",
              },
              {
                icon: <Phone className="text-purple-400" size={20} />,
                label: "Phone",
                value: "07038246790",
              },
              {
                icon: <MapPin className="text-pink-400" size={20} />,
                label: "Location",
                value: "Tokyo, Japan",
              },
              {
                icon: <Clock className="text-indigo-400" size={20} />,
                label: "Status",
                value: "Available Now",
              },
              {
                icon: <Home className="text-purple-400" size={22} />,
                label: "Home Office",
                value: "Tokyo",
              },
            ].map((item, i) => (
              <MotionDiv
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-indigo-500/30">
                  <CardContent className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide mb-0.5 sm:mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base text-gray-200 font-semibold">
                        {item.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </MotionDiv>

          {/* right - form */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:border-indigo-500/40 transition-all">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <MessageCircle className="mr-3 text-indigo-400" size={24} />
                  Send a Message
                </h3>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-4 md:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <Input
                      name="from_name"
                      placeholder="Your Name"
                      className="bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 text-sm sm:text-base h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                      required
                    />
                    <Input
                      name="from_email"
                      type="email"
                      placeholder="Email Address"
                      className="bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 text-sm sm:text-base h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                      required
                    />
                  </div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    className="bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 text-sm sm:text-base h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                  />
                  <Input
                    name="subject"
                    placeholder="Project Subject"
                    required
                    className="bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 text-sm sm:text-base h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    className="bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 text-sm sm:text-base min-h-[100px] sm:min-h-[120px] md:min-h-[140px] rounded-lg sm:rounded-xl focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-10 sm:h-11 md:h-12 text-sm sm:text-base md:text-lg font-semibold rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 animate-spin mr-1.5 sm:mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                        <span className="ml-1.5 sm:ml-2">Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
