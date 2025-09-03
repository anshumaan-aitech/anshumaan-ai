import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Heart, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anshumaan-sharma-b62654237",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/itsanshumaansharma",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:its.anshumaansharma@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Anshumaan Sharma
              </h3>
              <p className="text-neutral-300 mb-6 max-w-md leading-relaxed">
                Full Stack Developer passionate about building innovative solutions 
                and creating meaningful impact through technology. Always excited to 
                collaborate on new projects and challenges.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-neutral-300 hover:text-brand-400 transition-colors duration-300 text-left"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-neutral-400 text-sm">Email</p>
                  <a
                    href="mailto:its.anshumaansharma@gmail.com"
                    className="text-neutral-300 hover:text-brand-400 transition-colors duration-300"
                  >
                    its.anshumaansharma@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Phone</p>
                  <a
                    href="tel:+918825284582"
                    className="text-neutral-300 hover:text-brand-400 transition-colors duration-300"
                  >
                    +91 8825284582
                  </a>
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Location</p>
                  <p className="text-neutral-300">Pune, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-neutral-400">
              <span>© {currentYear} Anshumaan Sharma. All rights reserved.</span>
              <span className="text-neutral-600">•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>and lots of ☕</span>
              </span>
            </div>

            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-neutral-400 hover:text-brand-400 hover:bg-neutral-800"
            >
              Back to top
              <ChevronUp className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
