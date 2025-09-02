import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "GenZ AI Labs Pvt. Ltd.",
    location: "Pune",
    period: "July 2025 – Present",
    type: "Full Time",
    icon: Briefcase,
    description: "Working on AI-driven platforms and full-stack applications, contributing to innovative solutions in the AI space.",
    technologies: ["Java", "React", "Python", "AI/ML"],
    current: true
  },
  {
    title: "Java Business Application Training",
    company: "IIT Bombay",
    location: "Mumbai",
    period: "Completed on 17 June 2025",
    type: "Training",
    icon: GraduationCap,
    description: "Completed advanced training in Java business applications from prestigious IIT Bombay.",
    technologies: ["Java", "Business Applications", "Enterprise Development"],
    current: false
  },
  {
    title: "Java Full Stack Development Intern",
    company: "Wipro TalentNext",
    location: "Remote",
    period: "May – Sept 2024 (5 months)",
    type: "Internship",
    icon: Briefcase,
    description: "Worked on REST APIs, full-stack applications, and deployment strategies. Gained hands-on experience in enterprise-level development.",
    technologies: ["Java", "REST APIs", "Full Stack", "Deployment"],
    current: false
  },
  {
    title: "Web Full Stack Developer Internship",
    company: "EduSkills (Virtual)",
    location: "Remote",
    period: "July – Sept 2024",
    type: "Internship",
    icon: Briefcase,
    description: "Learned HTML, CSS, JS, Tailwind CSS, and SQL, completing 8 modules + final assessment with comprehensive web development training.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "SQL"],
    current: false
  },
  {
    title: "Android Developer Internship",
    company: "EduSkills (Virtual)",
    location: "Remote",
    period: "Apr – Jun 2024",
    type: "Internship",
    icon: Briefcase,
    description: "Focused on Android app UI, layouts, and backend service integration. Developed mobile application development skills.",
    technologies: ["Android", "UI/UX", "Mobile Development", "Backend Integration"],
    current: false
  },
  {
    title: "Java & Oracle Training",
    company: "GET IT Projects Pvt. Ltd.",
    location: "Patna",
    period: "Nov 2022 – Apr 2023 (6 months)",
    type: "Training",
    icon: GraduationCap,
    description: "Comprehensive training in Java programming and Oracle database management, building strong foundation in enterprise technologies.",
    technologies: ["Java", "Oracle SQL", "Database Management", "Enterprise Systems"],
    current: false
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Full Time":
      return "bg-green-500 text-white";
    case "Internship":
      return "bg-blue-500 text-white";
    case "Training":
      return "bg-purple-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            A journey of continuous learning and growth in software development and technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-600 to-brand-400 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-brand-600 rounded-full border-4 border-white dark:border-neutral-800 shadow-lg hidden md:block" />
                
                {/* Experience Card */}
                <div className="md:ml-20 bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        experience.current 
                          ? "bg-green-100 dark:bg-green-900" 
                          : "bg-brand-100 dark:bg-brand-900"
                      }`}>
                        <experience.icon className={`w-6 h-6 ${
                          experience.current 
                            ? "text-green-600 dark:text-green-400" 
                            : "text-brand-600 dark:text-brand-400"
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-neutral-600 dark:text-neutral-400">
                          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start lg:items-end space-y-2">
                      <Badge className={`${getTypeColor(experience.type)} px-3 py-1`}>
                        {experience.type}
                      </Badge>
                      <div className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{experience.period}</span>
                      </div>
                      {experience.current && (
                        <Badge className="bg-green-500 text-white animate-pulse">
                          Current Position
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { label: "Years of Experience", value: "2+", icon: Calendar },
            { label: "Companies Worked", value: "5+", icon: Briefcase },
            { label: "Certifications", value: "5+", icon: Award },
            { label: "Technologies Mastered", value: "15+", icon: GraduationCap }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700"
            >
              <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
