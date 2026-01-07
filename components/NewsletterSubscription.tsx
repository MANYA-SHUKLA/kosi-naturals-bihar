'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, X, ArrowRight } from 'lucide-react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name: name || undefined }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setIsSubmitted(true);
      setEmail('');
      setName('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setError('There was an error subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 bg-green-50 border-2 border-green-200 rounded-xl"
      >
        <div className="flex items-start">
          <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={24} />
          <div>
            <h3 className="text-lg font-semibold text-green-900 mb-1">
              Thank you for subscribing!
            </h3>
            <p className="text-green-700 text-sm">
              We've sent you a confirmation email. Check your inbox!
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 md:py-12 lg:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6"
            >
              <Mail className="text-primary-600" size={32} />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-4"
            >
              Subscribe to Our Newsletter
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-earth-600 max-w-2xl mx-auto leading-relaxed"
            >
              Stay updated with our latest products, sourcing stories, and updates from the Kosi region.
            </motion.p>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name and Email in single row on larger screens */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="sr-only">Your name (optional)</label>
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl text-earth-900 placeholder:text-earth-400 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none transition-all shadow-md bg-white border border-earth-200"
                />
              </div>
              
              <div className="flex-1">
                <label className="sr-only">Your email address</label>
                <input
                  type="email"
                  placeholder="Your email address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-xl text-earth-900 placeholder:text-earth-400 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none transition-all shadow-md bg-white border border-earth-200"
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl"
              >
                <X className="text-red-600 flex-shrink-0" size={20} />
                <p className="text-red-700 text-sm">{error}</p>
              </motion.div>
            )}

            {/* Button and Privacy Note */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 sm:flex-none px-10 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              <p className="text-sm text-earth-500 text-center sm:text-left">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}

