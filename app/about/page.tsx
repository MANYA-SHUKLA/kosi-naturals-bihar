'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, Users, Heart, Award, MapPin, Handshake } from 'lucide-react';

export default function About() {
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
              About Kosi Naturals
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-earth-900 mb-8 leading-tight">
              Our{' '}
              <span className="text-primary-600 relative">
                Story
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-earth-600 leading-relaxed max-w-3xl mx-auto">
              Rooted in the Kosi region of Bihar, we're building a food brand
              that honors the land, the farmers, and the honest process of
              bringing natural ingredients to your kitchen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                Our Purpose
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-8 leading-tight">
                Our{' '}
                <span className="text-primary-600 relative">
                  Mission
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
                </span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-earth-600 leading-relaxed">
                  Kosi Naturals was born from a simple belief: food should be
                  honest, transparent, and connected to its source. We work
                  directly with farmers in the Kosi region, building relationships
                  based on trust, fair practices, and mutual respect.
                </p>
                <p className="text-lg md:text-xl text-earth-600 leading-relaxed">
                  Our focus is on small-batch processing with minimal intervention.
                  We believe that the best ingredients speak for themselves, and
                  our role is simply to preserve their natural goodness from field
                  to kitchen.
                </p>
                <p className="text-lg md:text-xl text-earth-600 leading-relaxed">
                  Whether you're a conscious consumer in India looking for
                  trustworthy, traceable food, or a trade buyer seeking a reliable
                  sourcing partner, we're here to build that connection with
                  integrity and transparency.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
            >
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80"
                alt="Farmers working"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              What We Stand For
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-4">
              Our{' '}
              <span className="text-primary-600 relative">
                Values
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Transparency',
                description:
                  'We believe in complete transparency about where our products come from, how they are processed, and who grows them. Every step of the journey is clear and honest.',
                gradient: 'from-red-500 to-red-700',
                bgGradient: 'from-red-50 to-red-100/50',
              },
              {
                icon: Handshake,
                title: 'Farmer Partnership',
                description:
                  'Our relationships with farmers are built on trust, fair pricing, and long-term commitment. We work together, not just as suppliers, but as partners.',
                gradient: 'from-primary-500 to-primary-700',
                bgGradient: 'from-primary-50 to-primary-100/50',
              },
              {
                icon: Leaf,
                title: 'Minimal Processing',
                description:
                  'We process in small batches with minimal intervention. Our goal is to preserve the natural goodness of ingredients, not to transform them beyond recognition.',
                gradient: 'from-green-500 to-green-700',
                bgGradient: 'from-green-50 to-green-100/50',
              },
              {
                icon: Award,
                title: 'Quality & Consistency',
                description:
                  "Whether you're buying for your kitchen or sourcing for trade, you can count on consistent quality, clear origin, and dependable supply.",
                gradient: 'from-yellow-500 to-yellow-700',
                bgGradient: 'from-yellow-50 to-yellow-100/50',
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

      {/* Origin Story */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group order-2 lg:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                alt="Kosi region"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6"
              >
                <MapPin className="w-4 h-4" />
                <span>Our Origin</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-8 leading-tight">
                Rooted in the{' '}
                <span className="text-primary-600 relative">
                  Kosi Region
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
                </span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-earth-600 leading-relaxed">
                  The Kosi region of Bihar is known for its rich agricultural
                  heritage and fertile lands. It's here that we source our makhana
                  and other natural ingredients, working closely with local
                  farmers who have been cultivating these crops for generations.
                </p>
                <p className="text-lg md:text-xl text-earth-600 leading-relaxed">
                  By staying connected to our roots and building direct
                  relationships with farmers, we ensure that every product carries
                  the story of its origin—a story we're proud to share with you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

