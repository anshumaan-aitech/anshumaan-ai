import { motion } from "framer-motion";
import { Award, Users, Code, Zap } from "lucide-react";

const stats = [
  {
    icon: Code,
    number: "9+",
    label: "Programming Languages",
    description: "Proficient across multiple tech stacks"
  },
  {
    icon: Award,
    number: "5+",
    label: "Certifications",
    description: "From top institutions and platforms"
  },
  {
    icon: Users,
    number: "10+",
    label: "Projects Completed",
    description: "Full-stack applications and systems"
  },
  {
    icon: Zap,
    number: "2+",
    label: "Years Experience",
    description: "In software development"
  }
];

const highlights = [
  "Expert in Java, PHP, Python, and modern web technologies",
  "Experience with SAP CPI Integration Suite and cloud platforms",
  "Proven track record in hackathons and competitive projects",
  "Strong foundation in both frontend and backend development",
  "Passionate about solving real-world problems through technology"
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Dedicated Full Stack Developer with a passion for innovation and excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto lg:mx-0 w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900 dark:to-brand-800 shadow-2xl">
              {/* Real profile image */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F800b71726c1648e2a9c47b0d351ed875%2F8d088673864f4a1f88cf09a962efaf4f?format=webp&width=800"
                alt="Anshumaan Sharma - Full Stack Developer"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Floating decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-brand-600/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-400/20 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Professional Summary
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Full Stack Developer with expertise in Java, PHP, Python, React, Flask, and SAP CPI (Integration Suite). 
                Skilled in building scalable solutions using Docker, MongoDB, MySQL, and Oracle SQL, with experience across 
                web applications, cloud integration, and hackathon projects.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Currently working as a Full Stack Developer at GenZ AI Labs Pvt. Ltd., Pune. Passionate about leveraging 
                technology to solve real-world challenges in Smart Education, Waste Management, and AI-driven platforms. 
                A collaborative team player with hands-on experience in software development, backend systems, and cloud deployment.
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Key Highlights
              </h4>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-brand-600 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-neutral-600 dark:text-neutral-400">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mx-auto w-16 h-16 bg-brand-100 dark:bg-brand-900 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-brand-600 dark:text-brand-400" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
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
