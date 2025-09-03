import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  MessageCircle,
  CheckCircle,
  AlertCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "its.anshumaansharma@gmail.com",
    link: "mailto:its.anshumaansharma@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8825284582",
    link: "tel:+918825284582"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Greater Noida, India",
    link: "#"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    username: "@anshumaan-sharma",
    url: "https://www.linkedin.com/in/anshumaan-sharma-b62654237",
    color: "text-blue-600 hover:text-blue-700"
  },
  {
    icon: Github,
    label: "GitHub",
    username: "@itsanshumaansharma",
    url: "https://github.com/itsanshumaansharma",
    color: "text-neutral-900 dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300"
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // In a real implementation, you would send to Formspree or your backend
      // For now, we'll simulate a form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setFormStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.' 
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 5000);
      
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly.' 
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {info.label}
                      </p>
                      {info.link !== "#" ? (
                        <a
                          href={info.link}
                          className="text-lg font-medium text-neutral-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-neutral-900 dark:text-white">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <div className="w-14 h-14 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center group-hover:bg-brand-100 dark:group-hover:bg-brand-900 transition-all duration-300 shadow-lg">
                      <social.icon className={`w-7 h-7 ${social.color} group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors`} />
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {social.label}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {social.username}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Direct Email Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white"
              >
                <a href="mailto:its.anshumaansharma@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send me an email directly
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-neutral-700 dark:text-neutral-300">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-2"
                    disabled={formStatus.type === 'loading'}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-neutral-700 dark:text-neutral-300">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="mt-2"
                    disabled={formStatus.type === 'loading'}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-neutral-700 dark:text-neutral-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help you..."
                    rows={6}
                    required
                    className="mt-2 resize-none"
                    disabled={formStatus.type === 'loading'}
                  />
                </div>

                {/* Form Status */}
                {formStatus.type !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center space-x-3 ${
                      formStatus.type === 'success' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : formStatus.type === 'error'
                        ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                        : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    }`}
                  >
                    {formStatus.type === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                    {formStatus.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                    {formStatus.type === 'loading' && (
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0" />
                    )}
                    <p className="text-sm">{formStatus.message}</p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white"
                  disabled={formStatus.type === 'loading'}
                >
                  {formStatus.type === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
