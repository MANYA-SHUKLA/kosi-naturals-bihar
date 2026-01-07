'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Package, Leaf, Award } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Makhana (Fox Nuts)',
    description:
      'Sourced directly from Kosi region farmers, our makhana is carefully selected and minimally processed to preserve its natural crunch and nutritional value. Perfect for snacking or cooking.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    features: [
      'Direct from Kosi region farmers',
      'Minimally processed',
      'Small-batch quality',
      'Rich in protein and fiber',
    ],
    category: 'Primary Product',
  },
  {
    id: 2,
    name: 'Natural Makhana Varieties',
    description:
      'We offer various grades and sizes of makhana, each carefully sorted and processed to maintain quality. Whether for domestic consumption or trade export, we ensure consistent standards.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    features: [
      'Multiple grades available',
      'Consistent quality',
      'Export-ready packaging',
      'Traceable origin',
    ],
    category: 'Primary Product',
  },
  {
    id: 3,
    name: 'Other Natural Ingredients',
    description:
      'Beyond makhana, we work with farmers to source other natural ingredients from the region. Each product follows our same principles of transparency, minimal processing, and farmer partnership.',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80',
    features: [
      'Region-specific ingredients',
      'Small-batch processing',
      'Farmer-direct sourcing',
      'Quality assured',
    ],
    category: 'Additional Products',
  },
];

export default function Products() {
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
              Premium Quality
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-earth-900 mb-8 leading-tight">
              Our{' '}
              <span className="text-primary-600 relative">
                Products
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-earth-600 leading-relaxed max-w-3xl mx-auto">
              Discover our range of natural, minimally processed ingredients
              sourced directly from farmers in the Kosi region. Each product
              carries the story of its origin and our commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-primary-700 rounded-full text-xs font-bold shadow-lg">
                      {product.category}
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                    {product.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-6 leading-tight">
                    {product.name}
                  </h2>
                  <p className="text-lg md:text-xl text-earth-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-4 mb-10">
                    {product.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start group/feature"
                      >
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover/feature:bg-primary-200 transition-colors">
                          <Leaf size={16} className="text-primary-600" />
                        </div>
                        <p className="text-lg text-earth-700 pt-1">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 group"
                  >
                    Inquire About This Product
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 bg-earth-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6"
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-4">
              Why Choose{' '}
              <span className="text-primary-600 relative">
                Kosi Naturals?
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: Package,
                title: 'Consistent Quality',
                description:
                  'Every batch meets our strict quality standards, ensuring you get the same great product every time.',
                gradient: 'from-primary-500 to-primary-700',
                bgGradient: 'from-primary-50 to-primary-100/50',
              },
              {
                icon: Leaf,
                title: 'Traceable Origin',
                description:
                  'Know exactly where your products come from. We provide clear information about sourcing and processing.',
                gradient: 'from-green-500 to-green-700',
                bgGradient: 'from-green-50 to-green-100/50',
              },
              {
                icon: Award,
                title: 'Dependable Supply',
                description:
                  "Whether you're a consumer or trade buyer, you can count on us for reliable, consistent supply.",
                gradient: 'from-yellow-500 to-yellow-700',
                bgGradient: 'from-yellow-50 to-yellow-100/50',
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8, type: 'spring' }}
                  className="group relative"
                >
                  <div className={`relative h-full p-8 lg:p-10 bg-gradient-to-br ${benefit.bgGradient} rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
                    {/* Decorative gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`relative w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 mx-auto`}
                    >
                      <Icon className="text-white" size={40} />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-earth-900 mb-4 text-center group-hover:text-primary-700 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-lg text-earth-600 leading-relaxed text-center">
                      {benefit.description}
                    </p>

                    {/* Decorative corner element */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-5 rounded-bl-full -translate-y-1/2 translate-x-1/2`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-8"
            >
              Get Started
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-earth-900 leading-tight">
              Interested in Our{' '}
              <span className="text-primary-600 relative">
                Products?
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-earth-600 leading-relaxed">
              Whether you're looking for products for your kitchen or exploring
              trade opportunities, we'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 group"
            >
              Get in Touch
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

