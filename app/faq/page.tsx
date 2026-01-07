'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Package, Globe, CreditCard, Mail, Shield, Leaf, Users } from 'lucide-react';

const faqs = [
  {
    category: 'Sourcing & Quality',
    icon: Leaf,
    questions: [
      {
        question: 'Where do you source your products from?',
        answer:
          'We source our makhana and other natural ingredients directly from farmers in the Kosi region of Bihar. We work closely with local farmers who have been cultivating these crops for generations, ensuring quality and supporting local communities.',
      },
      {
        question: 'How do you ensure quality and consistency?',
        answer:
          'We process our products in small batches with strict quality control measures. Each batch is carefully monitored to ensure consistency. We maintain direct relationships with our farmers, which allows us to oversee the entire process from field to final product.',
      },
      {
        question: 'What makes your processing "minimal"?',
        answer:
          'We believe in preserving the natural goodness of ingredients. Our processing involves only what\'s necessary to ensure safety and quality—no unnecessary additives, preservatives, or transformations. We process in small batches to maintain freshness and nutritional value.',
      },
      {
        question: 'How can I trace the origin of your products?',
        answer:
          'We provide clear information about the origin of our products. Each batch can be traced back to the farmers and the region where it was grown. We believe in complete transparency about our sourcing and processing practices.',
      },
    ],
  },
  {
    category: 'Trade & Business',
    icon: Users,
    questions: [
      {
        question: 'Do you offer products for trade buyers?',
        answer:
          'Yes, we welcome trade buyers including exporters, importers, and distributors. We can provide consistent quality, clear origin documentation, and reliable supply. Please contact us through our contact form or email to discuss your specific requirements.',
      },
      {
        question: 'Do you ship internationally?',
        answer:
          'We work with trade buyers who handle international shipping. If you\'re a trade buyer interested in our products for export, please contact us to discuss your requirements and we can arrange appropriate packaging and documentation.',
      },
    ],
  },
  {
    category: 'Payment & Orders',
    icon: CreditCard,
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer:
          'For consumers, we accept various payment methods. For trade buyers, we work with standard trade payment terms. Please contact us to discuss payment options that work for your situation.',
      },
    ],
  },
  {
    category: 'Updates & Communication',
    icon: Mail,
    questions: [
      {
        question: 'How can I stay updated about new products?',
        answer:
          'You can follow us on Instagram and LinkedIn for updates. We also share stories and insights on our blog. For trade buyers, we recommend reaching out directly so we can keep you informed about availability and new offerings.',
      },
    ],
  },
];

const allFAQs = faqs.flatMap(category => 
  category.questions.map(q => ({ ...q, category: category.category }))
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = selectedCategory
    ? faqs.find(cat => cat.category === selectedCategory)?.questions || []
    : allFAQs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const displayedFAQs = selectedCategory
    ? faqs.find(cat => cat.category === selectedCategory)?.questions || []
    : allFAQs;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth-50 via-primary-50/30 to-green-50/20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
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
              <HelpCircle className="w-5 h-5" />
              <span>Got Questions? We've Got Answers</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-earth-900 mb-6 leading-tight">
              Frequently Asked{' '}
              <span className="text-primary-600 relative">
                Questions
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-earth-600 leading-relaxed mb-8">
              Find answers to common questions about our products, sourcing practices, and how we work.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative max-w-2xl mx-auto"
            >
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-earth-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedCategory(null);
                }}
                className="w-full pl-14 pr-5 py-4 bg-white rounded-2xl border-2 border-earth-200 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100 text-earth-900 placeholder-earth-400 shadow-lg transition-all"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-earth-100 sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery('');
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedCategory === null
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-earth-100 text-earth-700 hover:bg-earth-200'
              }`}
            >
              All Questions
            </motion.button>
            {faqs.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setSelectedCategory(category.category);
                    setSearchQuery('');
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    selectedCategory === category.category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-earth-100 text-earth-700 hover:bg-earth-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.category}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-earth-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {selectedCategory ? (
            <div className="space-y-4">
              {displayedFAQs.map((faq, index) => {
                const category = faqs.find(cat => cat.category === selectedCategory);
                const Icon = category?.icon || HelpCircle;
                const globalIndex = allFAQs.findIndex(f => f.question === faq.question);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div className="border-2 border-earth-200 rounded-2xl overflow-hidden hover:border-primary-300 hover:shadow-xl transition-all bg-white">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-8 py-6 text-left flex items-start justify-between gap-4 bg-gradient-to-r from-earth-50 to-white hover:from-primary-50 hover:to-white transition-all"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors flex-shrink-0">
                            <Icon className="text-primary-700 w-6 h-6" />
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-earth-900 pr-4 leading-snug">
                            {faq.question}
                          </h3>
                        </div>
                        <ChevronDown
                          className={`text-primary-600 flex-shrink-0 transition-transform mt-1 ${
                            openIndex === globalIndex ? 'rotate-180' : ''
                          }`}
                          size={24}
                        />
                      </button>
                      {openIndex === globalIndex && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 py-6 bg-white border-t border-earth-100">
                            <p className="text-earth-700 leading-relaxed text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-6">
              {faqs.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                    className="mb-12"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-lg">
                        <Icon className="text-white w-8 h-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900">
                        {category.category}
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {category.questions.map((faq, index) => {
                        const globalIndex = allFAQs.findIndex(f => f.question === faq.question);
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (categoryIndex * 0.1) + (index * 0.05), duration: 0.5 }}
                            className="group"
                          >
                            <div className="border-2 border-earth-200 rounded-2xl overflow-hidden hover:border-primary-300 hover:shadow-xl transition-all bg-white">
                              <button
                                onClick={() => toggleFAQ(globalIndex)}
                                className="w-full px-8 py-6 text-left flex items-start justify-between gap-4 bg-gradient-to-r from-earth-50 to-white hover:from-primary-50 hover:to-white transition-all"
                              >
                                <h3 className="text-lg md:text-xl font-bold text-earth-900 pr-4 leading-snug flex-1">
                                  {faq.question}
                                </h3>
                                <ChevronDown
                                  className={`text-primary-600 flex-shrink-0 transition-transform ${
                                    openIndex === globalIndex ? 'rotate-180' : ''
                                  }`}
                                  size={24}
                                />
                              </button>
                              {openIndex === globalIndex && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-8 py-6 bg-white border-t border-earth-100">
                                    <p className="text-earth-700 leading-relaxed text-lg">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 p-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl text-center shadow-2xl"
          >
            <div className="max-w-2xl mx-auto">
              <Shield className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We're here to help. Get in touch with us and we'll be happy to answer any questions you may have.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-700 rounded-xl font-bold text-lg hover:bg-earth-50 transition-colors shadow-xl hover:shadow-2xl"
              >
                Contact Us
                <ChevronDown className="ml-2 rotate-[-90deg] w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
