import { motion } from "framer-motion";
import { 
  Clock, 
  Calendar, 
  Globe, 
  MapPin, 
  Monitor, 
  Briefcase, 
  MessageCircle, 
  Headphones,
  CheckCircle,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const availabilityItems = [
  {
    icon: CheckCircle,
    label: "Current Status",
    value: "Available",
    description: "Ready to take on new projects",
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900"
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    description: "Quick communication guaranteed",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900"
  },
  {
    icon: Calendar,
    label: "Project Start",
    value: "1-2 weeks",
    description: "Flexible timeline based on project scope",
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900"
  },
  {
    icon: Globe,
    label: "Timezone",
    value: "IST (UTC+5:30)",
    description: "India Standard Time",
    color: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-900"
  }
];\n\nconst workModes = [\n  {\n    icon: Monitor,\n    title: "Remote Work",\n    description: "Fully equipped for remote collaboration with modern tools and technologies",\n    available: true\n  },\n  {\n    icon: Briefcase,\n    title: "Long-term Projects",\n    description: "Committed to long-term partnerships and project success",\n    available: true\n  },\n  {\n    icon: MessageCircle,\n    title: "Consulting",\n    description: "Technical consulting and architecture guidance available",\n    available: true\n  },\n  {\n    icon: Headphones,\n    title: "24/7 Support",\n    description: "Dedicated support for critical project phases and deployments",\n    available: true\n  }\n];\n\nexport function AvailabilitySection() {\n  return (\n    <section className="py-24 bg-white dark:bg-neutral-900">\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <motion.div\n          initial={{ opacity: 0, y: 20 }}\n          whileInView={{ opacity: 1, y: 0 }}\n          transition={{ duration: 0.8 }}\n          viewport={{ once: true }}\n          className="text-center mb-16"\n        >\n          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">\n            Current <span className="text-gradient">Availability</span>\n          </h2>\n          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">\n            Ready to collaborate on your next project. Here's my current availability and working preferences.\n          </p>\n        </motion.div>\n\n        {/* Status Indicator */}\n        <motion.div\n          initial={{ opacity: 0, scale: 0.9 }}\n          whileInView={{ opacity: 1, scale: 1 }}\n          transition={{ duration: 0.6, delay: 0.2 }}\n          viewport={{ once: true }}\n          className="text-center mb-16"\n        >\n          <div className="inline-flex items-center space-x-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full px-6 py-3">\n            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />\n            <span className="text-green-800 dark:text-green-200 font-semibold">Currently Available for New Projects</span>\n          </div>\n        </motion.div>\n\n        {/* Availability Details */}\n        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">\n          {availabilityItems.map((item, index) => (\n            <motion.div\n              key={index}\n              initial={{ opacity: 0, y: 30 }}\n              whileInView={{ opacity: 1, y: 0 }}\n              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}\n              viewport={{ once: true }}\n              className="text-center"\n            >\n              <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>\n                <item.icon className={`w-8 h-8 ${item.color}`} />\n              </div>\n              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">\n                {item.label}\n              </h3>\n              <div className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">\n                {item.value}\n              </div>\n              <p className="text-sm text-neutral-600 dark:text-neutral-400">\n                {item.description}\n              </p>\n            </motion.div>\n          ))}\n        </div>\n\n        {/* Work Modes */}\n        <motion.div\n          initial={{ opacity: 0, y: 30 }}\n          whileInView={{ opacity: 1, y: 0 }}\n          transition={{ duration: 0.8, delay: 0.6 }}\n          viewport={{ once: true }}\n          className="bg-neutral-50 dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg border border-neutral-200 dark:border-neutral-700"\n        >\n          <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white text-center mb-12">\n            Work Preferences & Services\n          </h3>\n          \n          <div className="grid md:grid-cols-2 gap-8">\n            {workModes.map((mode, index) => (\n              <motion.div\n                key={index}\n                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}\n                whileInView={{ opacity: 1, x: 0 }}\n                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}\n                viewport={{ once: true }}\n                className="flex items-start space-x-4 p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700"\n              >\n                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-xl flex items-center justify-center flex-shrink-0">\n                  <mode.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />\n                </div>\n                <div className="flex-1">\n                  <div className="flex items-center space-x-3 mb-2">\n                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">\n                      {mode.title}\n                    </h4>\n                    {mode.available && (\n                      <Badge className="bg-green-500 text-white px-2 py-1 text-xs">\n                        Available\n                      </Badge>\n                    )}\n                  </div>\n                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">\n                    {mode.description}\n                  </p>\n                </div>\n              </motion.div>\n            ))}\n          </div>\n        </motion.div>\n\n        {/* Quick Contact */}\n        <motion.div\n          initial={{ opacity: 0, y: 30 }}\n          whileInView={{ opacity: 1, y: 0 }}\n          transition={{ duration: 0.8, delay: 1.0 }}\n          viewport={{ once: true }}\n          className="text-center mt-16"\n        >\n          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">\n            Ready to Start Your Project?\n          </h3>\n          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">\n            Let's discuss your project requirements and how I can help bring your ideas to life.\n          </p>\n          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">\n            <Button\n              asChild\n              size="lg"\n              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4"\n            >\n              <a href="#contact">\n                <MessageCircle className="w-5 h-5 mr-2" />\n                Start a Conversation\n              </a>\n            </Button>\n            <Button\n              asChild\n              variant="outline"\n              size="lg"\n              className="border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white px-8 py-4"\n            >\n              <a href="mailto:its.anshumaansharma@gmail.com">\n                <Zap className="w-5 h-5 mr-2" />\n                Quick Email\n              </a>\n            </Button>\n          </div>\n          \n          {/* Additional Info */}\n          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">\n            <div className="text-center">\n              <div className="text-sm text-neutral-500 dark:text-neutral-400">Preferred Communication</div>\n              <div className="font-medium text-neutral-900 dark:text-white">Email, LinkedIn, WhatsApp</div>\n            </div>\n            <div className="text-center">\n              <div className="text-sm text-neutral-500 dark:text-neutral-400">Project Minimum</div>\n              <div className="font-medium text-neutral-900 dark:text-white">2-4 weeks duration</div>\n            </div>\n            <div className="text-center">\n              <div className="text-sm text-neutral-500 dark:text-neutral-400">Budget Discussion</div>\n              <div className="font-medium text-neutral-900 dark:text-white">Flexible based on scope</div>\n            </div>\n          </div>\n        </motion.div>\n      </div>\n    </section>\n  );\n}