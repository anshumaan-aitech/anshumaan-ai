import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "../typewriter";

const skills = ["Java", "React", "PHP", "Python", "Flask", "SAP CPI"];

export function HeroSection() {

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
      {/* Background Pattern */}
      <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23e5e7eb\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23374151\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">
              Anshumaan Sharma
            </span>
          </motion.h1>

          {/* Subtitle with Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4"
          >
            Full Stack Developer
          </motion.div>

          {/* Animated Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 min-h-[2.5rem] flex items-center justify-center"
          >
            Specializing in{" "}
            <span className="text-brand-600 dark:text-brand-400 font-medium ml-2">
              <Typewriter words={skills} speed={150} delay={2000} />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about building scalable solutions using modern technologies and cloud integration. 
            Currently working at GenZ AI Labs, solving real-world challenges in Smart Education, 
            Waste Management, and AI-driven platforms.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <a
                href="https://github.com/anshumaan-sharma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-3" />
                View GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-medium rounded-xl border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <a
                href="https://www.linkedin.com/in/anshumaan-sharma-b62654237"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                Connect on LinkedIn
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
              Scroll to explore
            </span>
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop"
              }}
              className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors hardware-accelerated"
              style={{ willChange: "transform" }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Optimized Floating Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop"
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-brand-600/8 rounded-full blur-3xl hardware-accelerated"
        style={{ willChange: "transform, opacity" }}
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
          repeatType: "loop"
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-brand-400/8 rounded-full blur-3xl hardware-accelerated"
        style={{ willChange: "transform, opacity" }}
      />
    </section>
  );
}
