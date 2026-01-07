'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'FAQ', href: '/faq' },
  ],
};

const socialLinks = [
  { name: 'Email', icon: Mail, href: 'mailto:info@kosinaturals.com' },
  { name: 'Phone', icon: Phone, href: 'tel:+918005586588' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-earth-50/50 to-white text-earth-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circle 1 */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-2xl"
        />
        
        {/* Floating Circle 2 */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-20 w-40 h-40 bg-green-200/25 rounded-full blur-2xl"
        />
        
        {/* Floating Circle 3 */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-1/4 w-36 h-36 bg-primary-100/30 rounded-full blur-2xl"
        />
        
        {/* Floating Circle 4 */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-100/30 rounded-full blur-2xl"
        />
        
        {/* Small floating shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-10 w-16 h-16 bg-primary-200/20 rounded-lg blur-sm"
        />
        
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-1/3 left-16 w-20 h-20 bg-green-100/25 rounded-lg blur-sm"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative z-20"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
              Kosi Naturals
            </h3>
            <p className="text-earth-700 text-base leading-relaxed mb-6 max-w-md">
              Honest food from the heart of Bihar. Working closely with farmers
              to bring you natural, minimally processed ingredients.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-earth-100 hover:bg-primary-600 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border border-earth-200 hover:border-primary-500"
                    aria-label={social.name}
                  >
                    <Icon size={22} className="text-earth-700 hover:text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-20"
          >
            <h4 className="text-lg font-bold text-earth-900 mb-4 uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-earth-700 hover:text-primary-600 transition-colors text-base inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-20"
          >
            <h4 className="text-lg font-bold text-earth-900 mb-4 uppercase tracking-wider text-sm">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-earth-700 hover:text-primary-600 transition-colors text-base inline-block hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-earth-200 my-8 relative z-20" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-20"
        >
          <p className="text-earth-600 text-sm">
            © {new Date().getFullYear()} Kosi Naturals. All rights reserved.
          </p>
          <p className="text-earth-600 text-sm">
            Made with ❤️ in Bihar, India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

