import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

export function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
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

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-1 gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-700">
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Project Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900 dark:to-brand-800 rounded-2xl overflow-hidden shadow-lg">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-brand-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <Star className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-brand-600 dark:text-brand-400 font-medium">
                              {project.title}
                            </p>
                          </div>
                        </div>
                      </div>
                      {project.status === "Winner" && (
                        <div className="absolute -top-3 -right-3">
                          <div className="bg-yellow-500 text-white p-3 rounded-full shadow-lg">
                            <Trophy className="w-6 h-6" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge variant="secondary" className="text-sm">
                          {project.category}
                        </Badge>
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`} />
                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                        {project.title}
                      </h3>

                      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Button
                          asChild
                          className="bg-brand-600 hover:bg-brand-700 text-white"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center"
          >
            Other Notable Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900 dark:to-brand-800 rounded-xl mb-6 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
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
                    </div>

                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                      {project.title}
                    </h4>

                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Want to see more of my work?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-600 hover:bg-brand-700 text-white px-8"
          >
            <a
              href="https://github.com/itsanshumaansharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
