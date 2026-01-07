'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText, UserCheck, Mail, Phone, AlertCircle, CheckCircle2, Database } from 'lucide-react';

const sections = [
  {
    icon: FileText,
    title: 'Introduction',
    color: 'from-primary-500 to-primary-700',
    content: (
      <p className="leading-relaxed text-lg text-earth-700">
        Kosi Naturals ("we," "our," or "us") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our website. We value your trust and are dedicated to
        maintaining the highest standards of data protection.
      </p>
    ),
  },
  {
    icon: Database,
    title: 'Information We Collect',
    color: 'from-green-500 to-green-700',
    content: (
      <div>
        <p className="leading-relaxed text-lg text-earth-700 mb-4">
          We may collect information that you provide directly to us, including:
        </p>
        <ul className="space-y-3">
          {[
            'Name and contact information (email, phone number)',
            'Inquiry details and messages',
            'Newsletter subscription preferences',
            'Any other information you choose to provide',
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-earth-700 text-lg">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    color: 'from-blue-500 to-blue-700',
    content: (
      <div>
        <p className="leading-relaxed text-lg text-earth-700 mb-4">We use the information we collect to:</p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Respond to your inquiries and requests',
            'Provide information about our products and services',
            'Improve our website and services',
            'Communicate with you about our products and services',
            'Send you newsletters and updates (with your consent)',
            'Analyze website usage and trends',
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-4 bg-earth-50 rounded-xl"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-earth-700">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Lock,
    title: 'Information Sharing',
    color: 'from-purple-500 to-purple-700',
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-lg text-earth-700">
          We do not sell, trade, or otherwise transfer your personal information to third
          parties without your consent, except as described in this policy.
        </p>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
          <p className="text-earth-800 font-semibold mb-2">We may share information with:</p>
          <ul className="space-y-2 text-earth-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>Service providers who assist us in operating our website and conducting our business</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>Legal authorities when required by law or to protect our rights</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Shield,
    title: 'Data Security',
    color: 'from-red-500 to-red-700',
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-lg text-earth-700">
          We implement appropriate security measures to protect your personal information.
          However, no method of transmission over the Internet is 100% secure, and we
          cannot guarantee absolute security.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Encryption', desc: 'SSL/TLS encryption for data transmission' },
            { title: 'Secure Storage', desc: 'Protected databases and servers' },
            { title: 'Access Control', desc: 'Limited access to personal data' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-red-50 rounded-xl border-2 border-red-100"
            >
              <h4 className="font-bold text-earth-900 mb-2">{item.title}</h4>
              <p className="text-earth-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: UserCheck,
    title: 'Your Rights',
    color: 'from-orange-500 to-orange-700',
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-lg text-earth-700">
          You have the right to access, update, or delete your personal information. If you
          would like to exercise these rights, please contact us using the information
          provided below.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Access your personal data',
            'Correct inaccurate information',
            'Request data deletion',
            'Object to data processing',
            'Data portability',
            'Withdraw consent',
          ].map((right, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl"
            >
              <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0" />
              <span className="text-earth-700 font-medium">{right}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Privacy() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth-50 via-primary-50/30 to-purple-50/20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-primary-700 font-semibold text-sm mb-6 shadow-lg"
            >
              <Shield className="w-5 h-5" />
              <span>Your Privacy Matters</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-earth-900 mb-6 leading-tight">
              Privacy{' '}
              <span className="text-primary-600 relative">
                Policy
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-earth-600 leading-relaxed mb-6">
              We are committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-earth-600 font-medium shadow-lg"
            >
              <AlertCircle className="w-5 h-5 text-primary-600" />
              <span>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gradient-to-b from-white to-earth-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-earth-100">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${section.color} p-8`}>
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-8">
                      {section.content}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-10 md:p-12 text-center shadow-2xl">
              <Mail className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Contact Us
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="mailto:info@kosinaturals.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 bg-white text-primary-700 rounded-xl font-bold hover:bg-earth-50 transition-colors shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  info@kosinaturals.com
                </motion.a>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 bg-white text-primary-700 rounded-xl font-bold hover:bg-earth-50 transition-colors shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  +91 98765 43210
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
