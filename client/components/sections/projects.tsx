import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar, Trophy, Star, Folder, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectsModal } from "@/components/projects-modal";
import { useState } from "react";

const featuredProjects = [
  {
    title: "Smart Waste Food Management & Donation Platform",
    description: "Platform to reduce food wastage by connecting donors with NGOs/charities. Features real-time matching, inventory management, and impact tracking.",
    technologies: ["PHP", "MySQL"],
    category: "Final Year Project",
    status: "Current",
    github: "https://github.com/itsanshumaansharma",
    featured: true
  },
  {
    title: "WasteToWealth",
    description: "A smart solution to convert waste into useful resources for a greener future. Winner of CodeAstraa Hackathon at Galgotias University.",
    technologies: ["PHP", "MySQL"],
    category: "Hackathon Project",
    status: "Winner",
    github: "https://github.com/itsanshumaansharma",
    featured: true
  },
  {
    title: "Mentor Connect",
    description: "A career guidance platform with mentor-student interaction, calendar booking, and video conferencing. Smart India Hackathon project.",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Hackathon Project",
    status: "Completed",
    github: "https://github.com/itsanshumaansharma",
    featured: true
  }
];

const projectStats = [
  { label: "Total Projects", value: "9+", icon: Folder },
  { label: "Hackathon Wins", value: "2", icon: Trophy },
  { label: "Technologies Used", value: "10+", icon: Star },
  { label: "Years Active", value: "3+", icon: Calendar }
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

export function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="projects" className="py-24 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              A showcase of my best work including hackathon winners, full-stack applications, and innovative solutions
            </p>
          </motion.div>

          {/* Project Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700"
              >
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Projects Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 h-full flex flex-col group-hover:scale-105">
                  {/* Project Visual */}
                  <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900 dark:to-brand-800 rounded-xl mb-6 overflow-hidden relative">
                    <div className="w-full h-full flex items-center justify-center">
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
                      <div className="absolute top-2 right-2">
                        <div className="bg-yellow-500 text-white p-2 rounded-full">
                          <Trophy className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white dark:bg-neutral-900 p-3 rounded-full">
                        <Eye className="w-6 h-6 text-brand-600" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
                      <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="text-xs text-brand-600 dark:text-brand-400 font-medium group-hover:underline">
                      Click to view details →
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Folder className="w-5 h-5 mr-3" />
              View All Projects
            </Button>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">
              Explore all 9+ projects including hackathon winners and full-stack applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Modal */}
      <ProjectsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
