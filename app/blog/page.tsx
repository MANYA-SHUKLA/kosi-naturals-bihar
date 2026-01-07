'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Story of Makhana: From Kosi Region to Your Kitchen',
    excerpt:
      'Discover the journey of makhana from the fertile fields of the Kosi region to your kitchen. Learn about our sourcing process and why this superfood is gaining popularity.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    date: '2026-01-15',
    category: 'Sourcing',
    slug: 'story-of-makhana',
  },
  {
    id: 2,
    title: 'Why Small-Batch Processing Matters',
    excerpt:
      "We believe in processing our ingredients in small batches. Here's why this approach preserves quality, flavor, and nutritional value better than mass production.",
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80',
    date: '2026-01-10',
    category: 'Process',
    slug: 'small-batch-processing',
  },
  {
    id: 3,
    title: 'Building Trust Through Transparency',
    excerpt:
      "Transparency isn't just a buzzword for us—it's a core value. Learn how we ensure you know exactly where your food comes from and how it's processed.",
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80',
    date: '2026-01-05',
    category: 'Values',
    slug: 'transparency-trust',
  },
  {
    id: 4,
    title: 'Our Partnership with Kosi Region Farmers',
    excerpt:
      'Meet the farmers we work with and learn about our commitment to fair practices, sustainable sourcing, and building long-term relationships.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    date: '2026-01-20',
    category: 'Partnerships',
    slug: 'farmer-partnerships',
  },
  {
    id: 5,
    title: 'The Nutritional Benefits of Makhana',
    excerpt:
      'Makhana, also known as fox nuts, is packed with nutrients. Discover why this ancient superfood is making a comeback in modern kitchens.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    date: '2026-01-25',
    category: 'Health',
    slug: 'nutritional-benefits-makhana',
  },
  {
    id: 6,
    title: 'From Field to Kitchen: Our Quality Promise',
    excerpt:
      'Every step of our process is designed to maintain quality. From careful sourcing to minimal processing, we ensure your ingredients are the best they can be.',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80',
    date: '2026-01-30',
    category: 'Quality',
    slug: 'quality-promise',
  },
];

export default function Blog() {
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
              Stories & Insights
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-earth-900 mb-8 leading-tight">
              Our{' '}
              <span className="text-primary-600 relative">
                Blog
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -z-10 transform -skew-x-12" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-earth-600 leading-relaxed max-w-3xl mx-auto">
              Stories, insights, and updates from Kosi Naturals. Learn about our
              sourcing practices, the farmers we work with, and the journey of
              our products from field to kitchen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, type: 'spring' }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-earth-100"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary-50 to-green-50">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-primary-700 rounded-full text-xs font-bold shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center text-sm text-earth-500 mb-4">
                      <Calendar size={16} className="mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-earth-600 mb-6 leading-relaxed text-base">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary-600 font-bold group-hover:text-primary-700">
                      Read More
                      <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

