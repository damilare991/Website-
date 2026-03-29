import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-black mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Bringing the authentic taste of Naija fried chicken to every neighborhood, one crispy bite at a time.
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?auto=format&fit=crop&q=80&w=800" 
                alt="Our Kitchen" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--color-primary)] text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-black font-heading mb-1">10+</p>
                <p className="font-medium">Years of Excellence</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">More Than Just Chicken</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in the heart of Lagos, Naija Fried Chicken started with a simple mission: to provide delicious, high-quality meals that everyone can afford. We believe that great food shouldn't be a luxury.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our secret lies in our unique blend of local spices, ensuring every piece of chicken is bursting with flavor. From our crispy wings to our legendary Jollof rice, every meal is a celebration of Nigerian culinary heritage.
              </p>
              <div className="pt-4 flex gap-4">
                <div className="bg-red-50 p-4 rounded-xl text-center flex-1">
                  <p className="text-3xl font-black text-[var(--color-primary)] mb-1">50+</p>
                  <p className="text-sm font-medium text-gray-700">Locations</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-xl text-center flex-1">
                  <p className="text-3xl font-black text-[var(--color-secondary)] mb-1">1M+</p>
                  <p className="text-sm font-medium text-gray-700">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600">The principles that guide everything we do, from our kitchen to your table.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Passion for Taste', desc: 'We never compromise on flavor. Every recipe is perfected to deliver maximum satisfaction.' },
              { icon: ShieldCheck, title: 'Unbeatable Value', desc: 'Premium quality food at prices that make sense for the everyday Nigerian.' },
              { icon: Zap, title: 'Speed & Convenience', desc: 'Your time is valuable. We ensure fast service whether you dine-in or order delivery.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-6 text-[var(--color-primary)]">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
