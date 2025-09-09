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
import { smoothScrollTo } from "@/lib/scroll-utils";

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
];

const workModes = [
  {
    icon: Monitor,
    title: "Remote Work",
    description: "Fully equipped for remote collaboration with modern tools and technologies",
    available: true
  },
  {
    icon: Briefcase,
    title: "Long-term Projects",
    description: "Committed to long-term partnerships and project success",
    available: true
  },
  {
    icon: MessageCircle,
    title: "Consulting",
    description: "Technical consulting and architecture guidance available",
    available: true
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support for critical project phases and deployments",
    available: true
  }
];

export function AvailabilitySection() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Current <span className="text-gradient">Availability</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Ready to collaborate on your next project. Here's my current availability and working preferences.
          </p>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-800 dark:text-green-200 font-semibold">Currently Available for New Projects</span>
          </div>
        </motion.div>

        {/* Availability Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {availabilityItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                {item.label}
              </h3>
              <div className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                {item.value}
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Work Modes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-neutral-50 dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg border border-neutral-200 dark:border-neutral-700"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white text-center mb-12">
            Work Preferences & Services
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {workModes.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700"
              >
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <mode.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {mode.title}
                    </h4>
                    {mode.available && (
                      <Badge className="bg-green-500 text-white px-2 py-1 text-xs">
                        Available
                      </Badge>
                    )}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4"
            >
              <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo('#contact', 80); }}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Start a Conversation
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white px-8 py-4"
            >
              <a href="mailto:its.anshumaansharma@gmail.com">
                <Zap className="w-5 h-5 mr-2" />
                Quick Email
              </a>
            </Button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Preferred Communication</div>
              <div className="font-medium text-neutral-900 dark:text-white">Email, LinkedIn, WhatsApp</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Project Minimum</div>
              <div className="font-medium text-neutral-900 dark:text-white">2-4 weeks duration</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Budget Discussion</div>
              <div className="font-medium text-neutral-900 dark:text-white">Flexible based on scope</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
