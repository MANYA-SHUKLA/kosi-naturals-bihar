'use client';

import { motion } from 'framer-motion';
import { FileText, CheckCircle2, XCircle, AlertTriangle, Scale, Globe, Shield, Mail, Phone, BookOpen, Gavel, Info } from 'lucide-react';

const sections = [
  {
    icon: BookOpen,
    title: 'Acceptance of Terms',
    color: 'from-primary-500 to-primary-700',
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-lg text-earth-700">
          By accessing and using this website, you accept and agree to be bound by the terms
          and provision of this agreement. If you do not agree to these terms, please do not
          use this website.
        </p>
        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-xl">
          <p className="text-earth-800 font-semibold">
            Your continued use of this website constitutes acceptance of these terms and any future modifications.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: FileText,
    title: 'Use License',
    color: 'from-green-500 to-green-700',
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-lg text-earth-700 mb-4">
          Permission is granted to temporarily access the materials on Kosi Naturals' website
          for personal, non-commercial transitory viewing only. This is the grant of a license,
          not a transfer of title, and under this license you may not:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Modify or copy the materials',
            'Use the materials for any commercial purpose',
            'Attempt to decompile or reverse engineer any software',
            'Remove any copyright or other proprietary notations',
            'Transfer the materials to another person',
            'Mirror the materials on any other server',
          ].map((restriction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border-2 border-red-100"
            >
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="text-earth-700 font-medium">{restriction}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: 'Disclaimer',
    color: 'from-orange-500 to-orange-700',
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-lg text-earth-700">
          The materials on Kosi Naturals' website are provided on an 'as is' basis. Kosi
          Naturals makes no warranties, expressed or implied, and hereby disclaims and
          negates all other warranties including, without limitation, implied warranties or
          conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of rights.
        </p>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-earth-800 font-semibold mb-2">Important Notice:</p>
              <p className="text-earth-700">
                We do not guarantee the accuracy, completeness, or timeliness of any information on this website.
                Use the information at your own discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Shield,
    title: 'Limitations',
    color: 'from-red-500 to-red-700',
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-lg text-earth-700">
          In no event shall Kosi Naturals or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or due to
          business interruption) arising out of the use or inability to use the materials
          on Kosi Naturals' website, even if Kosi Naturals or a Kosi Naturals authorized
          representative has been notified orally or in writing of the possibility of such
          damage.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Direct Damages', desc: 'Not liable for direct losses' },
            { title: 'Indirect Damages', desc: 'Not liable for indirect losses' },
            { title: 'Consequential Damages', desc: 'Not liable for consequential losses' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-red-50 rounded-xl border-2 border-red-100 text-center"
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
    icon: Info,
    title: 'Accuracy of Materials',
    color: 'from-blue-500 to-blue-700',
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-lg text-earth-700">
          The materials appearing on Kosi Naturals' website could include technical,
          typographical, or photographic errors. Kosi Naturals does not warrant that any
          of the materials on its website are accurate, complete, or current. Kosi Naturals
          may make changes to the materials contained on its website at any time without
          notice.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-earth-800 font-semibold mb-2">Material Updates:</p>
              <p className="text-earth-700">
                We reserve the right to update, modify, or remove any content on this website at any time without prior notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Globe,
    title: 'Links',
    color: 'from-purple-500 to-purple-700',
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-lg text-earth-700">
          Kosi Naturals has not reviewed all of the sites linked to its website and is not
          responsible for the contents of any such linked site. The inclusion of any link
          does not imply endorsement by Kosi Naturals of the site. Use of any such linked
          website is at the user's own risk.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'External Links', desc: 'We are not responsible for external website content' },
            { title: 'No Endorsement', desc: 'Links do not imply our endorsement' },
            { title: 'User Responsibility', desc: 'You use linked sites at your own risk' },
            { title: 'Third-Party Content', desc: 'We do not control third-party websites' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-5 bg-purple-50 rounded-xl border-2 border-purple-100"
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
    icon: Gavel,
    title: 'Modifications',
    color: 'from-indigo-500 to-indigo-700',
    content: (
      <div className="space-y-4">
        <p className="leading-relaxed text-lg text-earth-700">
          Kosi Naturals may revise these terms of service for its website at any time
          without notice. By using this website you are agreeing to be bound by the then
          current version of these terms of service.
        </p>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-earth-800 font-semibold mb-2">Terms Updates:</p>
              <p className="text-earth-700">
                We recommend reviewing these terms periodically. Continued use of the website after changes
                constitutes acceptance of the modified terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Terms() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth-50 via-primary-50/30 to-indigo-50/20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
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
              <Scale className="w-5 h-5" />
              <span>Legal Information</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-earth-900 mb-6 leading-tight">
              Terms &{' '}
              <span className="text-primary-600 relative">
                Conditions
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-earth-600 leading-relaxed mb-6">
              Please read these terms carefully before using our website. By accessing and using this site, you agree to be bound by these terms.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-earth-600 font-medium shadow-lg"
            >
              <AlertTriangle className="w-5 h-5 text-primary-600" />
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
              <FileText className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                If you have any questions about these Terms & Conditions, please contact us:
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
