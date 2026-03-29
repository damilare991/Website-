import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Filter, Search } from 'lucide-react';

const MENU_CATEGORIES = ['All', 'Chicken', 'Rice Meals', 'Sides', 'Drinks'];

const MENU_ITEMS = [
  { id: '1', name: 'Spicy Fried Chicken Combo', price: 4500, category: 'Chicken', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=800', description: '2 pieces of spicy fried chicken, regular fries, and a drink.' },
  { id: '2', name: 'Jollof Rice & Chicken', price: 3800, category: 'Rice Meals', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', description: 'Classic Nigerian Jollof rice served with a juicy piece of fried chicken.' },
  { id: '3', name: 'Family Feast Bucket', price: 15000, category: 'Chicken', image: 'https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?auto=format&fit=crop&q=80&w=800', description: '10 pieces of chicken, 4 regular fries, 2 large sides, and a 2L drink.' },
  { id: '4', name: 'Fried Rice & Chicken', price: 3800, category: 'Rice Meals', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800', description: 'Delicious fried rice packed with veggies, served with fried chicken.' },
  { id: '5', name: 'Crispy Chicken Wings (6pcs)', price: 3000, category: 'Chicken', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=800', description: 'Perfectly seasoned, crispy fried chicken wings.' },
  { id: '6', name: 'Large Fries', price: 1500, category: 'Sides', image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=800', description: 'Golden, crispy, and perfectly salted french fries.' },
  { id: '7', name: 'Coleslaw', price: 1000, category: 'Sides', image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&q=80&w=800', description: 'Freshly made creamy coleslaw.' },
  { id: '8', name: 'Chilled Coke (50cl)', price: 500, category: 'Drinks', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800', description: 'Ice cold refreshing Coca-Cola.' },
  { id: '9', name: 'Bottled Water', price: 300, category: 'Drinks', image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&q=80&w=800', description: 'Pure, chilled bottled water.' },
  { id: '10', name: 'Village Rice & Chicken', price: 4000, category: 'Rice Meals', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800', description: 'Traditional village-style rice with assorted meats and fried chicken.' },
];

export function Menu() {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-4">Our Menu</h1>
          <p className="text-gray-600 text-lg">Explore our mouth-watering selection of freshly prepared meals.</p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          {/* Categories */}
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 hide-scrollbar">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[var(--color-primary)] text-white shadow-md shadow-red-500/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search meals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm">
                    ₦{item.price.toLocaleString()}
                  </div>
                  <div className="absolute top-4 left-4 bg-[var(--color-secondary)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-heading font-bold text-xl mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-1">{item.description}</p>
                  <button
                    onClick={() => addItem(item)}
                    className="w-full bg-gray-900 hover:bg-[var(--color-primary)] text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 mt-auto"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Filter className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">No meals found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-6 text-[var(--color-primary)] font-bold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
