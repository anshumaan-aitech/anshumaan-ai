import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Calendar, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    title: "Smart Waste Food Management & Donation Platform",
    description: "Platform to reduce food wastage by connecting donors with NGOs/charities. Features real-time matching, inventory management, and impact tracking.",
    technologies: ["PHP", "MySQL"],
    category: "Final Year Project",
    status: "Current",
    github: "https://github.com/itsanshumaansharma",
    featured: true,
    image: "/placeholder.svg"
  },
  {
    title: "WasteToWealth",
    description: "A smart solution to convert waste into useful resources for a greener future. Winner of CodeAstraa Hackathon at Galgotias University.",
    technologies: ["PHP", "MySQL"],
    category: "Hackathon Project",
    status: "Winner",
    github: "https://github.com/itsanshumaansharma",
    featured: true,
    image: "/placeholder.svg"
  },
  {
    title: "Mentor Connect",
    description: "A career guidance platform with mentor-student interaction, calendar booking, and video conferencing. Smart India Hackathon project.",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Hackathon Project",
    status: "Completed",
    github: "https://github.com/itsanshumaansharma",
    featured: true,
    image: "/placeholder.svg"
  },
  {
    title: "Hospital Management System",
    description: "End-to-end system for patient management, billing, and appointments. Features comprehensive dashboard and reporting.",
    technologies: ["Java", "Oracle SQL", "JSP", "JDBC"],
    category: "Enterprise Project",
    status: "Completed",
    github: "https://github.com/itsanshumaansharma",
    featured: false,
    image: "/placeholder.svg"
  },
  {
    title: "Blood Bank Management System",
    description: "Platform for blood donation tracking and inventory management. Includes donor registration and emergency notification system.",
    technologies: ["Java", "Oracle SQL", "JSP", "JDBC"],
    category: "Healthcare Project",
    status: "Completed",
    github: "https://github.com/itsanshumaansharma",
    featured: false,
    image: "/placeholder.svg"
  },
  {
    title: "Student Result Management System",
    description: "Automated student result handling and grade management. Features secure login, result processing, and report generation.",
    technologies: ["Java", "Oracle SQL", "JSP", "JDBC"],
    category: "Educational Project",
    status: "Completed",
    github: "https://github.com/itsanshumaansharma",
    featured: false,
    image: "/placeholder.svg"
  },
  {
    title: "Netflix UI Clone",
    description: "Developed a responsive front-end clone of Netflix UI with modern design patterns and smooth animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend Project",
    status: "Completed",
    github: "https://github.com/itsanshumaansharma",
    featured: false,
    image: "/placeholder.svg"
  },
  {
    title: "Blinkit UI Clone",
    description: "Created an interactive grocery delivery app clone with cart functionality and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend Project",
    status: "Completed",
    github: "https://github.com/itsanshumaansharma",
    featured: false,
    image: "/placeholder.svg"
  },
  {
    title: "Chatbot Greekie",
    description: "Built a student-focused chatbot for Q&A using Google Gemini API. Features natural language processing and contextual responses.",
    technologies: ["HTML", "CSS", "JavaScript", "Google Gemini API"],
    category: "AI Project",
    status: "Completed",
    github: "https://github.com/itsanshumaansharma",
    featured: false,
    image: "/placeholder.svg"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Current":
      return "bg-green-500";
    case "Winner":
      return "bg-yellow-500";
    case "Completed":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
};

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] mx-4 bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                All Projects
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-10 w-10 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Scrollable Content */}
            <ScrollArea className="h-[calc(90vh-120px)]">
              <div className="p-6 space-y-8">
                {/* Featured Projects */}
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Featured Projects
                  </h3>
                  <div className="grid gap-6">
                    {projects.filter(p => p.featured).map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700"
                      >
                        <div className="grid md:grid-cols-3 gap-6 items-center">
                          {/* Project Visual */}
                          <div className="relative">
                            <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900 dark:to-brand-800 rounded-xl flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                                  <Star className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                                  {project.category}
                                </p>
                              </div>
                            </div>
                            {project.status === "Winner" && (
                              <div className="absolute -top-2 -right-2">
                                <div className="bg-yellow-500 text-white p-2 rounded-full">
                                  <Trophy className="w-4 h-4" />
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Project Content */}
                          <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-3">
                              <Badge variant="secondary" className="text-xs">
                                {project.category}
                              </Badge>
                              <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
                              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                                {project.status}
                              </span>
                            </div>

                            <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                              {project.title}
                            </h4>

                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1 mb-4">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            <Button
                              asChild
                              size="sm"
                              className="bg-brand-600 hover:bg-brand-700 text-white"
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Other Projects */}
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Other Projects
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {projects.filter(p => !p.featured).map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index + 3) * 0.1 }}
                        className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700"
                      >
                        {/* Project Visual */}
                        <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900 dark:to-brand-800 rounded-lg mb-4 flex items-center justify-center">
                          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {project.category}
                          </Badge>
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
                        </div>

                        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                          {project.title}
                        </h4>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="w-full"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
