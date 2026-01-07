'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'consumer',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'consumer',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again or contact us directly at info@kosinaturals.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-earth-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-8"
            >
              Contact Us
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-earth-900 mb-8 leading-tight">
              Get in{' '}
              <span className="text-primary-600 relative">
                Touch
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-earth-600 leading-relaxed max-w-3xl mx-auto">
              Whether you're a consumer looking for our products or a trade buyer
              exploring sourcing opportunities, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6"
              >
                Reach Out
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-12 leading-tight">
                Contact{' '}
                <span className="text-primary-600 relative">
                  Information
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
                </span>
              </h2>
              <div className="space-y-6 mb-10">
                <motion.a
                  href="mailto:info@kosinaturals.com"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-6 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl border border-primary-200/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-earth-900 mb-1 text-lg">Email</h3>
                    <p className="text-earth-600 group-hover:text-primary-600 transition-colors">
                      info@kosinaturals.com
                    </p>
                  </div>
                </motion.a>
                <motion.a
                  href="tel:+918005586588"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl border border-green-200/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-earth-900 mb-1 text-lg">Phone</h3>
                    <p className="text-earth-600 group-hover:text-green-600 transition-colors">
                      +91 80055 86588
                    </p>
                  </div>
                </motion.a>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start p-6 bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl border border-yellow-200/50"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-earth-900 mb-1 text-lg">Location</h3>
                    <p className="text-earth-600">
                      Kosi Region, Bihar, India
                    </p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="p-8 bg-gradient-to-br from-earth-50 to-earth-100/50 rounded-2xl border border-earth-200"
              >
                <h3 className="font-bold text-earth-900 mb-3 text-lg">
                  For Trade Buyers
                </h3>
                <p className="text-earth-600 leading-relaxed">
                  We welcome inquiries from exporters, importers, and distributors
                  looking for reliable sourcing partners. Please mention your
                  trade requirements in your message.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-earth-50/50 rounded-3xl p-8 lg:p-10 border border-earth-200 shadow-xl">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 bg-green-50 rounded-2xl border-2 border-green-200 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <CheckCircle className="text-green-600 mx-auto mb-6" size={64} />
                    </motion.div>
                    <h3 className="text-3xl font-serif font-bold text-green-900 mb-4">
                      Thank You!
                    </h3>
                    <p className="text-green-700 text-lg">
                      We've received your message and will get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-bold text-earth-900 mb-3"
                      >
                        I am a... <span className="text-primary-600">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-earth-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white shadow-sm hover:shadow-md"
                        required
                      >
                        <option value="consumer">Consumer</option>
                        <option value="trade">Trade Buyer</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-earth-900 mb-3"
                      >
                        Name <span className="text-primary-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full px-5 py-4 border-2 border-earth-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white shadow-sm hover:shadow-md placeholder:text-earth-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-earth-900 mb-3"
                      >
                        Email <span className="text-primary-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="w-full px-5 py-4 border-2 border-earth-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white shadow-sm hover:shadow-md placeholder:text-earth-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-earth-900 mb-3"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-5 py-4 border-2 border-earth-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white shadow-sm hover:shadow-md placeholder:text-earth-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-bold text-earth-900 mb-3"
                      >
                        Subject <span className="text-primary-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this regarding?"
                        className="w-full px-5 py-4 border-2 border-earth-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white shadow-sm hover:shadow-md placeholder:text-earth-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-earth-900 mb-3"
                      >
                        Message <span className="text-primary-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-5 py-4 border-2 border-earth-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white shadow-sm hover:shadow-md resize-none placeholder:text-earth-400"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-5 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

