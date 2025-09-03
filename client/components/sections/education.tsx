import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Award, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Galgotias University",
    location: "Greater Noida",
    period: "2023 – 2025",
    grade: "CGPA: 8.82",
    gradeType: "CGPA",
    status: "Current",
    description: "Pursuing advanced studies in computer applications with focus on software development, algorithms, and emerging technologies. Specialized coursework in Full Stack Development, AI/ML, and modern software engineering practices.",
    highlights: [
      "Specialized in Full Stack Development and Software Engineering",
      "Active participation in hackathons and coding competitions",
      "Research projects in AI and Machine Learning applications",
      "Advanced coursework in Data Structures, Algorithms, and System Design",
      "Hands-on experience with modern development frameworks and tools"
    ],
    icon: GraduationCap,
    color: "bg-brand-600"
  }
];

const getStatusBadge = (status: string) => {
  return status === "Current" 
    ? "bg-green-500 text-white animate-pulse" 
    : "bg-neutral-500 text-white";
};

const getGradeDisplay = (grade: string, gradeType: string) => {
  if (gradeType === "CGPA") {
    return { value: grade.split(": ")[1], label: "CGPA" };
  }
  return { value: grade, label: "Percentage" };
};

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Academic excellence and continuous learning from school to advanced studies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-600 to-brand-400 hidden md:block" />

          <div className="space-y-12">
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 ${education.color} rounded-full border-4 border-white dark:border-neutral-900 shadow-lg hidden md:block`} />
                
                {/* Education Card */}
                <div className="md:ml-20 bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className={`w-12 h-12 ${education.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <education.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                          {education.degree}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-neutral-600 dark:text-neutral-400">
                          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                            <GraduationCap className="w-4 h-4" />
                            <span className="font-medium">{education.institution}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{education.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start lg:items-end space-y-3">
                      <Badge className={getStatusBadge(education.status)}>
                        {education.status}
                      </Badge>
                      <div className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{education.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 ${education.color} rounded-full`} />
                        <span className="text-lg font-bold text-neutral-900 dark:text-white">
                          {getGradeDisplay(education.grade, education.gradeType).value}
                        </span>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">
                          {getGradeDisplay(education.grade, education.gradeType).label}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {education.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {education.highlights.map((highlight, highlightIndex) => (
                        <motion.li
                          key={highlightIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + highlightIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-2 h-2 ${education.color} rounded-full mt-2.5 flex-shrink-0`} />
                          <span className="text-neutral-600 dark:text-neutral-400">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Current CGPA",
              value: "8.82",
              description: "Master's in Computer Applications",
              icon: Star,
              color: "text-yellow-500"
            },
            {
              title: "Specialization",
              value: "MCA",
              description: "Advanced Computing",
              icon: Calendar,
              color: "text-blue-500"
            },
            {
              title: "Research Focus",
              value: "AI/ML",
              description: "Emerging Technologies",
              icon: GraduationCap,
              color: "text-green-500"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700"
            >
              <div className="w-16 h-16 bg-white dark:bg-neutral-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                {stat.title}
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
