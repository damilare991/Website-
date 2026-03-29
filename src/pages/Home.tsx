import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock, MapPin, ShieldCheck, Star, Truck, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';

const POPULAR_MEALS = [
  {
    id: '1',
    name: 'Spicy Fried Chicken Combo',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=800',
    description: '2 pieces of spicy fried chicken, regular fries, and a drink.',
  },
  {
    id: '2',
    name: 'Jollof Rice & Chicken',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
    description: 'Classic Nigerian Jollof rice served with a juicy piece of fried chicken.',
  },
  {
    id: '3',
    name: 'Family Feast Bucket',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?auto=format&fit=crop&q=80&w=800',
    description: '10 pieces of chicken, 4 regular fries, 2 large sides, and a 2L drink.',
  },
  {
    id: '4',
    name: 'Fried Rice & Chicken',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800',
    description: 'Delicious fried rice packed with veggies, served with fried chicken.',
  },
];

export function Home() {
  const { addItem } = useCart();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-[var(--color-primary)] font-bold text-sm mb-6">
              🔥 Hot & Crispy Every Time
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-gray-900 leading-tight mb-6">
              Delicious, Affordable Chicken <br />
              <span className="text-[var(--color-primary)]">— Delivered Fast</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Experience the true taste of Naija with our freshly prepared meals. Unbeatable value, mouth-watering flavor, and lightning-fast delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:-translate-y-1"
              >
                Order Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:border-gray-300"
              >
                <MapPin className="w-5 h-5" /> Find a Location
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-secondary)] to-[var(--color-primary)] rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=1000"
                alt="Crispy Fried Chicken Bucket"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Fast Delivery</p>
                  <p className="text-xs text-gray-500">Under 30 mins</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Order Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Popular Meals</h2>
              <p className="text-gray-600">Our customers' absolute favorites. What are you craving?</p>
            </div>
            <Link to="/menu" className="hidden md:flex items-center gap-2 text-[var(--color-primary)] font-bold hover:underline">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {POPULAR_MEALS.map((meal, index) => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm">
                    ₦{meal.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2 line-clamp-1">{meal.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{meal.description}</p>
                  <button
                    onClick={() => addItem(meal)}
                    className="w-full bg-gray-900 hover:bg-[var(--color-primary)] text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/menu" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:underline">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Why Choose Naija Fried Chicken?</h2>
            <p className="text-gray-600">We don't just serve food; we serve happiness in every bite. Here's why millions trust us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Affordable Prices', desc: 'Premium taste that doesn\'t break the bank.' },
              { icon: Utensils, title: 'Freshly Prepared', desc: 'Cooked fresh daily with locally sourced ingredients.' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Hot meals delivered to your door in record time.' },
              { icon: MapPin, title: 'Nationwide Presence', desc: 'Find us in every major city across Nigeria.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-[var(--color-primary)]">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-20 bg-[var(--color-primary)] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20">
            <div className="max-w-xl">
              <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-secondary)] text-gray-900 font-bold text-sm mb-4 animate-pulse">
                Limited Time Offer
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">Weekend Family Fiesta!</h2>
              <p className="text-lg text-white/90 mb-8">
                Get 20% off all Family Buckets this weekend. Treat the whole family to crispy goodness without emptying your wallet.
              </p>
              <Link
                to="/menu"
                className="inline-flex bg-white text-[var(--color-primary)] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg items-center justify-center gap-2 transition-colors"
              >
                Claim Offer Now
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?auto=format&fit=crop&q=80&w=800"
                alt="Family Bucket"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Don't just take our word for it. Hear from our satisfied customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Chinedu O.', text: 'Omo, this chicken is too sweet! The crunch is unbelievable and the jollof rice tastes like party jollof.', rating: 5 },
              { name: 'Aisha M.', text: 'Best value for money hands down. I order the spicy combo every Friday for movie night.', rating: 5 },
              { name: 'Tolu A.', text: 'Delivery was super fast. The food arrived piping hot. Highly recommended!', rating: 4 },
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex gap-1 mb-4 text-[var(--color-secondary)]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <p className="font-bold text-gray-900">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download / Location */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Craving Chicken? We're Closer Than You Think</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Download our mobile app for exclusive deals, easier ordering, and real-time tracking. Or find a branch near you for a quick walk-in.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Download App
            </button>
            <Link to="/contact" className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors border border-gray-700">
              Find Nearest Branch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
