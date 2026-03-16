import { motion } from "motion/react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success("Message sent successfully!", {
      description: `Thank you ${formData.name}! We'll get back to you within 24 hours.`,
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactClick = (type: string, value: string) => {
    navigator.clipboard.writeText(value);
    toast.success(`${type} copied to clipboard`, {
      description: value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl tracking-tight text-black mb-6">
            Get in Touch
          </h2>
          <div className="w-16 h-px bg-black mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl tracking-tight text-black mb-12">
                Let's collaborate
              </h3>

              <div className="space-y-8">
                <button 
                  onClick={() => handleContactClick('Email', 'hello@devstudio.com')}
                  className="flex items-start gap-4 text-left w-full hover:opacity-60 transition-opacity"
                >
                  <Mail className="w-5 h-5 text-black mt-1" strokeWidth={1} />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="text-black">hello@rdnlabs.io</div>
                  </div>
                </button>

                {/* <button 
                  onClick={() => handleContactClick('Phone', '+1 (555) 123-4567')}
                  className="flex items-start gap-4 text-left w-full hover:opacity-60 transition-opacity"
                >
                  <Phone className="w-5 h-5 text-black mt-1" strokeWidth={1} />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <div className="text-black">+1 (760) 576-9672</div>
                  </div>
                </button> */}

                <button 
                  onClick={() => handleContactClick('Address', 'San Francisco, CA')}
                  className="flex items-start gap-4 text-left w-full hover:opacity-60 transition-opacity"
                >
                  <MapPin className="w-5 h-5 text-black mt-1" strokeWidth={1} />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="text-black">San Francisco, CA</div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Tell us about your project"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-2 px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}