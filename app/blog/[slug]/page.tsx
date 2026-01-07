'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';

const blogPosts: Record<string, any> = {
  'story-of-makhana': {
    title: 'The Story of Makhana: From Kosi Region to Your Kitchen',
    date: '2026-01-15',
    category: 'Sourcing',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80',
    content: `Makhana, also known as fox nuts or lotus seeds, has been a staple in Indian cuisine for centuries. But what makes our makhana special is its origin—the fertile Kosi region of Bihar.

The Kosi region, with its unique soil composition and climate, produces some of the finest makhana in India. Our journey begins here, working directly with local farmers who have been cultivating this crop for generations.

From the moment the seeds are harvested to the final product that reaches your kitchen, every step is carefully managed. We ensure minimal processing to preserve the natural crunch, flavor, and nutritional value that makes makhana a superfood.

When you choose Kosi Naturals, you're not just buying a product—you're supporting a chain of trust that connects you directly to the farmers and the land where your food is grown.`,
  },
  'small-batch-processing': {
    title: 'Why Small-Batch Processing Matters',
    date: '2026-01-10',
    category: 'Process',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80',
    content: `In a world of mass production, we choose a different path: small-batch processing. This isn't just a marketing term—it's a commitment to quality that affects every aspect of our products.

Small-batch processing allows us to maintain strict quality control. Each batch is carefully monitored, ensuring consistency and freshness. Unlike mass production, where quality can vary, we can guarantee that every product meets our standards.

This approach also means we can be more selective. We work with smaller quantities, which means we can choose the best ingredients and process them with care and attention to detail.

The result? Products that taste better, retain more nutrients, and maintain their natural characteristics. It's the difference between food that's processed and food that's cared for.`,
  },
  'transparency-trust': {
    title: 'Building Trust Through Transparency',
    date: '2026-01-05',
    category: 'Values',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80',
    content: `Transparency isn't just a buzzword for us—it's a core value that guides everything we do. We believe you have the right to know exactly where your food comes from and how it's processed.

That's why we're open about our sourcing practices, our relationships with farmers, and our processing methods. We don't hide behind vague terms or marketing language. Instead, we provide clear, honest information about every step of the journey.

This transparency builds trust. When you know the story behind your food, you can make informed choices. You can feel confident that you're supporting ethical practices and getting quality products.

We're committed to maintaining this transparency as we grow. It's not just about building a brand—it's about building a relationship with you based on honesty and trust.`,
  },
  'farmer-partnerships': {
    title: 'Our Partnership with Kosi Region Farmers',
    date: '2026-01-20',
    category: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80',
    content: `At Kosi Naturals, our relationship with farmers is the foundation of everything we do. We don't just source ingredients—we build partnerships that benefit everyone involved.

The farmers in the Kosi region have been cultivating makhana and other natural ingredients for generations. They understand the land, the climate, and the traditional methods that produce the best quality crops. We respect this knowledge and work alongside them, not against them.

Our partnership model ensures fair prices, sustainable practices, and long-term relationships. We believe that when farmers thrive, we all benefit. That's why we're committed to fair trade practices and supporting the communities that grow our food.

When you choose Kosi Naturals, you're supporting these farmers and their families. You're helping preserve traditional farming methods and ensuring that future generations can continue to benefit from the rich agricultural heritage of the Kosi region.`,
  },
  'nutritional-benefits-makhana': {
    title: 'The Nutritional Benefits of Makhana',
    date: '2026-01-25',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80',
    content: `Makhana, also known as fox nuts or lotus seeds, has been a part of traditional Indian cuisine for centuries. But it's only recently that modern science has confirmed what our ancestors knew—makhana is a nutritional powerhouse.

Rich in protein, fiber, and essential minerals, makhana is an excellent addition to any diet. It's naturally low in calories and fat, making it a perfect snack for those looking to maintain a healthy lifestyle. The high protein content helps keep you full longer, while the fiber supports digestive health.

What makes makhana particularly special is its mineral content. It's rich in magnesium, potassium, and phosphorus, all essential for maintaining healthy bodily functions. Additionally, makhana contains antioxidants that help protect your cells from damage.

Whether you enjoy it roasted as a snack, added to curries, or incorporated into desserts, makhana offers a delicious way to boost your nutrition. At Kosi Naturals, we ensure that our makhana retains all these natural benefits through our minimal processing approach.`,
  },
  'quality-promise': {
    title: 'From Field to Kitchen: Our Quality Promise',
    date: '2026-01-30',
    category: 'Quality',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80',
    content: `Quality isn't something we check at the end of production—it's something we build into every step of our process. From the moment we select our farming partners to the final product that reaches your kitchen, quality is our top priority.

Our quality promise begins with careful sourcing. We work only with farmers who share our commitment to natural, sustainable practices. We visit farms regularly, ensuring that growing conditions meet our standards and that traditional methods are preserved.

During processing, we maintain strict quality control. Every batch is tested for freshness, purity, and nutritional value. We use minimal processing techniques that preserve the natural characteristics of the ingredients while ensuring safety and quality.

But our quality promise doesn't end when the product leaves our facility. We're committed to providing you with products that meet the highest standards every time. If you're ever not satisfied with the quality of our products, we want to know about it.

When you choose Kosi Naturals, you're choosing quality you can trust. It's not just a promise—it's our commitment to you.`,
  },
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params);
  const post = blogPosts[slug];

  useEffect(() => {
    if (!post) {
      router.push('/blog');
    }
  }, [post, router]);

  if (!post) {
    return null;
  }

  return (
    <div className="pt-20">
      {/* Hero Image Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-earth-50">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6">
              <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-primary-700 rounded-full text-sm font-bold shadow-lg">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-white/90 text-base">
              <Calendar size={18} className="mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <article className="relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-12 font-semibold text-lg group"
            >
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
              Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {post.content.split('\n').map((paragraph: string, idx: number) => {
                if (paragraph.trim()) {
                  return (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                      className="text-lg md:text-xl text-earth-600 mb-8 leading-relaxed"
                    >
                      {paragraph.trim()}
                    </motion.p>
                  );
                }
                return null;
              })}
            </motion.div>

            {/* Back to Blog Link at Bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 pt-12 border-t border-earth-200"
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg group"
              >
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                Back to All Posts
              </Link>
            </motion.div>
          </div>
        </div>
      </article>
    </div>
  );
}

