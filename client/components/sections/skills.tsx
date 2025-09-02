import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Cloud, 
  Wrench, 
  Monitor,
  FileCode,
  Coffee,
  Globe,
  Server,
  Layers,
  Cpu,
  GitBranch
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Java", level: "Proficient", icon: Coffee },
      { name: "PHP", level: "Advanced", icon: FileCode },
      { name: "Python", level: "Advanced", icon: FileCode },
      { name: "C", level: "Basics", icon: Code },
      { name: "C++", level: "Basics", icon: Code },
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      { name: "React", level: "Advanced", icon: Globe },
      { name: "Flask", level: "Advanced", icon: Server },
      { name: "JSP", level: "Intermediate", icon: Globe },
      { name: "JDBC", level: "Intermediate", icon: Database },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Advanced", icon: Database },
      { name: "Oracle SQL", level: "Advanced", icon: Database },
      { name: "MongoDB", level: "Intermediate", icon: Database },
    ]
  },
  {
    title: "Integration & Cloud",
    icon: Cloud,
    skills: [
      { name: "SAP CPI", level: "Intermediate", icon: Cloud },
      { name: "REST APIs", level: "Advanced", icon: Server },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Docker", level: "Intermediate", icon: Cpu },
      { name: "GitHub", level: "Advanced", icon: GitBranch },
      { name: "Eclipse", level: "Advanced", icon: Code },
      { name: "VS Code", level: "Advanced", icon: Code },
      { name: "Anaconda", level: "Intermediate", icon: Wrench },
    ]
  },
  {
    title: "Front-End Development",
    icon: Monitor,
    skills: [
      { name: "HTML", level: "Advanced", icon: Globe },
      { name: "CSS", level: "Advanced", icon: Globe },
      { name: "JavaScript", level: "Advanced", icon: Globe },
      { name: "Tailwind CSS", level: "Advanced", icon: Monitor },
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Proficient":
      return "bg-emerald-500";
    case "Advanced":
      return "bg-blue-500";
    case "Intermediate":
      return "bg-yellow-500";
    case "Basics":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
};

const getLevelWidth = (level: string) => {
  switch (level) {
    case "Proficient":
      return "w-full";
    case "Advanced":
      return "w-5/6";
    case "Intermediate":
      return "w-3/4";
    case "Basics":
      return "w-1/2";
    default:
      return "w-1/2";
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Comprehensive expertise across multiple programming languages, frameworks, and development tools
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                        <span className="font-medium text-neutral-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full text-white ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "var(--target-width)" }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                        style={{"--target-width": getLevelWidth(skill.level).replace("w-", "").replace("full", "100%").replace("5/6", "83.33%").replace("3/4", "75%").replace("1/2", "50%")} as any}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
            Proficiency Levels
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { level: "Proficient", color: "bg-emerald-500", description: "Expert level with extensive experience" },
              { level: "Advanced", color: "bg-blue-500", description: "Strong proficiency and regular usage" },
              { level: "Intermediate", color: "bg-yellow-500", description: "Good understanding with some experience" },
              { level: "Basics", color: "bg-gray-500", description: "Fundamental knowledge and understanding" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-sm">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="font-medium text-neutral-900 dark:text-white">{item.level}</span>
                <span className="text-neutral-600 dark:text-neutral-400 hidden sm:inline">
                  - {item.description}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
