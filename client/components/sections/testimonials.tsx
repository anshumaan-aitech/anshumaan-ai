import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    position: "Technical Lead, GenZ AI Labs",
    company: "GenZ AI Labs Pvt. Ltd.",
    content: "Anshumaan is an exceptional full-stack developer with a keen eye for detail. His work on our AI-driven platforms has been outstanding, demonstrating both technical expertise and innovative problem-solving skills.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    rating: 5
  },
  {
    id: 2,
    name: "Prof. Anjali Sharma",
    position: "Project Supervisor",
    company: "Galgotias University",
    content: "During his MCA program, Anshumaan consistently delivered high-quality projects. His Smart Waste Management platform was particularly impressive, showing his ability to tackle real-world problems with innovative solutions.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    position: "Senior Software Engineer",
    company: "Wipro TalentNext",
    content: "Anshumaan's dedication during his internship was remarkable. He quickly grasped complex concepts in full-stack development and contributed meaningfully to our REST API projects. A promising talent in the field.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    rating: 5
  },
  {
    id: 4,
    name: "Priya Mehta",
    position: "Team Lead, Web Development",
    company: "EduSkills",
    content: "Anshumaan completed all 8 modules of our web development program with exceptional performance. His commitment to learning and applying new technologies like Tailwind CSS was impressive.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
    rating: 5
  },
  {
    id: 5,
    name: "Arjun Patel",
    position: "Hackathon Judge",
    company: "CodeAstraa, Galgotias University",
    content: "The WasteToWealth project presented by Anshumaan's team was truly innovative. Their approach to converting waste into useful resources demonstrated excellent technical skills and environmental consciousness.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-brand-50 to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Testimonials from colleagues, mentors, and supervisors who have worked with me
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white dark:bg-neutral-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-neutral-200 dark:border-neutral-700"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                  </div>
                </div>

                {/* Stars Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl lg:text-2xl text-neutral-700 dark:text-neutral-300 text-center mb-8 leading-relaxed font-medium">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-600"
                    loading="lazy"
                  />
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-brand-600 dark:text-brand-400 font-medium">
                      {currentTestimonial.position}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:-left-16">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:-right-16">
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-brand-600 scale-125"
                    : "bg-neutral-300 dark:bg-neutral-600 hover:bg-brand-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-6">
            <div className="flex items-center justify-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-neutral-400'}`} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { label: "Happy Colleagues", value: "15+", description: "Across different companies" },
            { label: "Project Success", value: "100%", description: "Completion rate" },
            { label: "Positive Feedback", value: "98%", description: "From supervisors" },
            { label: "Recommendations", value: "5+", description: "From industry professionals" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700"
            >
              <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
