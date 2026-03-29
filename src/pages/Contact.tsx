import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg">We'd love to hear from you. Whether you have a question about our menu, pricing, or anything else, our team is ready to answer all your questions.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="bg-red-50 p-3 rounded-xl text-[var(--color-primary)]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                <p className="text-gray-600 text-sm">123 Chicken Avenue, Victoria Island, Lagos, Nigeria</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="bg-red-50 p-3 rounded-xl text-[var(--color-primary)]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">+234 800 CHICKEN</p>
                <p className="text-gray-600 text-sm">+234 901 234 5678</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="bg-red-50 p-3 rounded-xl text-[var(--color-primary)]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600 text-sm">hello@naijafriedchicken.com</p>
                <p className="text-gray-600 text-sm">support@naijafriedchicken.com</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className="bg-red-50 p-3 rounded-xl text-[var(--color-primary)]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Opening Hours</h3>
                <p className="text-gray-600 text-sm">Mon - Sun: 8:00 AM - 10:00 PM</p>
                <p className="text-gray-600 text-sm">Public Holidays: 9:00 AM - 9:00 PM</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="How can we help you?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-red-500/30 flex items-center justify-center gap-2 w-full md:w-auto">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gray-200 rounded-3xl h-96 w-full flex items-center justify-center overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-40"></div>
          <div className="relative z-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl text-center shadow-xl">
            <MapPin className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-2" />
            <h3 className="font-bold text-gray-900 text-lg">Find us on the map</h3>
            <p className="text-gray-600 text-sm mt-1">Interactive map integration goes here</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
