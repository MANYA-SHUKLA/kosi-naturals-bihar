'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Users, Heart } from 'lucide-react';
import NewsletterSubscription from '@/components/NewsletterSubscription';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-earth-50">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm"
              >
                <Leaf className="w-4 h-4" />
                <span>100% Natural & Organic</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-earth-900 leading-tight"
              >
                Honest Food from the{' '}
                <span className="text-primary-600 relative">
                  Heart of Bihar
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-earth-700 leading-relaxed max-w-xl"
              >
                Working closely with farmers in the Kosi region to bring you
                natural, minimally processed ingredients. From field to kitchen,
                with transparency at every step.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  Explore Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all hover:scale-105 shadow-md"
                >
                  Our Story
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-earth-200"
              >
                <div>
                  <div className="text-3xl font-bold text-primary-600">100+</div>
                  <div className="text-sm text-earth-600">Happy Farmers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-sm text-earth-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">1000+</div>
                  <div className="text-sm text-earth-600">Happy Customers</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-green-600/20 z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&q=80"
                  alt="Farm fields"
                  width={800}
                  height={900}
                  className="object-cover w-full h-[600px] lg:h-[700px]"
                  priority
                />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-earth-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-earth-900">Direct from Farmers</div>
                    <div className="text-sm text-earth-600">Fair Trade Practices</div>
                  </div>
                </div>
                <p className="text-sm text-earth-700">
                  Supporting local farmers with fair prices and sustainable practices.
                </p>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-200 rounded-full blur-2xl opacity-30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-white overflow-hidden">
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
              Our Core Values
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-6">
              What Makes Us{' '}
              <span className="text-primary-600 relative">
                Different
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to transparency, quality, and farmer partnerships
              sets us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: Users,
                title: 'Farmer Partnerships',
                description:
                  'We work directly with farmers in the Kosi region, ensuring fair practices and sustainable sourcing.',
                gradient: 'from-primary-500 to-primary-700',
                bgGradient: 'from-primary-50 to-primary-100/50',
              },
              {
                icon: Leaf,
                title: 'Minimal Processing',
                description:
                  'Small-batch processing with minimal intervention, preserving the natural goodness of every ingredient.',
                gradient: 'from-green-500 to-green-700',
                bgGradient: 'from-green-50 to-green-100/50',
              },
              {
                icon: Heart,
                title: 'Transparency',
                description:
                  'From field to kitchen, we believe in honest food that you can trust. Know exactly where your food comes from.',
                gradient: 'from-red-500 to-red-700',
                bgGradient: 'from-red-50 to-red-100/50',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8, type: 'spring' }}
                  className="group relative"
                >
                  <div className={`relative h-full p-8 lg:p-10 bg-gradient-to-br ${value.bgGradient} rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
                    {/* Decorative gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`relative w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <Icon className="text-white" size={40} />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-earth-900 mb-4 group-hover:text-primary-700 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-lg text-earth-600 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Decorative corner element */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-5 rounded-bl-full -translate-y-1/2 translate-x-1/2`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative py-24 bg-earth-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-10 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-10 translate-y-1/2" />
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
              Premium Quality
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-6">
              Our{' '}
              <span className="text-primary-600 relative">
                Products
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
              Discover our range of natural, minimally processed ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {[
              {
                name: 'Makhana (Fox Nuts)',
                description:
                  'Premium quality makhana sourced directly from Kosi region farmers.',
                image:
                  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
                badge: 'Best Seller',
              },
              {
                name: 'Natural Ingredients',
                description:
                  'A variety of natural, minimally processed ingredients for your kitchen.',
                image:
                  'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
                badge: 'New',
              },
              {
                name: 'Small-Batch Processed',
                description:
                  'Carefully processed in small batches to maintain quality and freshness.',
                image:
                  'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80',
                badge: 'Premium',
              },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, type: 'spring' }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-earth-100">
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary-50 to-green-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-primary-700 rounded-full text-xs font-bold shadow-lg">
                        {product.badge}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/5 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-earth-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-earth-600 mb-6 leading-relaxed text-lg">
                      {product.description}
                    </p>
                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg group/link hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 group"
            >
              View All Products
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <NewsletterSubscription />
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 bg-earth-50 text-earth-900 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6"
              >
                Join Our Journey
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-earth-900"
              >
                Ready to Experience{' '}
                <span className="relative">
                  Honest Food?
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-earth-600 leading-relaxed"
              >
                Whether you're a conscious consumer or a trade buyer, we're here
                to help you discover the best of what the Kosi region has to offer.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get in Touch
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                  </span>
                </Link>
                
                <Link
                  href="/about"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    Learn More About Us
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
            >
              {[
                { number: '100+', label: 'Happy Farmers' },
                { number: '50+', label: 'Products' },
                { number: '1000+', label: 'Happy Customers' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="bg-white border border-earth-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-earth-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

