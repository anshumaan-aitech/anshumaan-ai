import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, Building, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Wipro TalentNext – Java Full Stack Development",
    issuer: "Wipro TalentNext",
    year: "2024",
    type: "Professional Certification",
    description: "Comprehensive certification in Java Full Stack Development covering enterprise-level application development, REST APIs, and deployment strategies.",
    skills: ["Java", "Full Stack Development", "REST APIs", "Enterprise Applications"],
    icon: Building,
    verified: true,
    credentialUrl: "#"
  },
  {
    title: "Java Business Application Training",
    issuer: "IIT Bombay",
    year: "2025",
    type: "Academic Training",
    description: "Advanced training program from prestigious IIT Bombay focusing on Java business applications and enterprise development practices.",
    skills: ["Java", "Business Applications", "Enterprise Development", "System Design"],
    icon: GraduationCap,
    verified: true,
    credentialUrl: "#"
  },
  {
    title: "Java & Oracle Database Management",
    issuer: "GET IT PROJECT PVT. LTD.",
    year: "2023",
    type: "Technical Training",
    description: "Specialized training in Java programming and Oracle database management, covering both development and database administration skills.",
    skills: ["Java", "Oracle SQL", "Database Management", "Backend Development"],
    icon: Award,
    verified: true,
    credentialUrl: "#"
  },
  {
    title: "Project Development Using Java",
    issuer: "Udemy",
    year: "2023",
    type: "Online Course",
    description: "Comprehensive course on Java project development, covering best practices, design patterns, and real-world application development.",
    skills: ["Java", "Project Development", "Design Patterns", "Best Practices"],
    icon: GraduationCap,
    verified: true,
    credentialUrl: "#"
  },
  {
    title: "Advanced Diploma in Computer Application",
    issuer: "Wizard Tech",
    year: "2022",
    type: "Diploma",
    description: "Advanced diploma program covering comprehensive computer applications, programming fundamentals, and software development principles.",
    skills: ["Computer Applications", "Programming", "Software Development", "IT Fundamentals"],
    icon: Award,
    verified: true,
    credentialUrl: "#"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Professional Certification":
      return "bg-blue-500 text-white";
    case "Academic Training":
      return "bg-green-500 text-white";
    case "Technical Training":
      return "bg-purple-500 text-white";
    case "Online Course":
      return "bg-orange-500 text-white";
    case "Diploma":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const getIssuerIcon = (issuer: string) => {
  if (issuer.includes("IIT")) return GraduationCap;
  if (issuer.includes("Wipro")) return Building;
  return Award;
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            <span className="text-gradient">Certifications</span> & Training
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Professional certifications and specialized training from renowned institutions and organizations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-xl flex items-center justify-center shadow-md">
                      <cert.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    {cert.verified && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={getTypeColor(cert.type)}>
                      {cert.type}
                    </Badge>
                    <div className="flex items-center space-x-1 text-neutral-600 dark:text-neutral-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{cert.year}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 line-clamp-2">
                    {cert.title}
                  </h3>

                  <div className="flex items-center space-x-2 mb-4">
                    <Building className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {cert.issuer}
                    </span>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-1 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-all duration-300"
                  >
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Credential
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 lg:p-12 shadow-lg border border-neutral-200 dark:border-neutral-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Committed to staying current with the latest technologies and industry best practices through ongoing professional development.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Total Certifications", value: "5+", description: "From top institutions" },
                { label: "Training Hours", value: "500+", description: "Hands-on learning" },
                { label: "Technologies Covered", value: "15+", description: "Diverse skill set" },
                { label: "Years of Learning", value: "3+", description: "Continuous growth" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
