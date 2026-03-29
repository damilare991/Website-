import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function Layout() {
  const location = useLocation();
  const { totalItems } = useCart();
  const isCheckout = location.pathname === '/checkout';

  return (
    <div className="min-h-screen flex flex-col relative pb-20 md:pb-0">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Mobile Sticky Order Button */}
      {!isCheckout && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-30">
          <Link
            to="/menu"
            className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-500/30"
          >
            <ShoppingBag className="w-5 h-5" />
            Order Now
            {totalItems > 0 && (
              <span className="ml-2 bg-white text-[var(--color-primary)] px-2 py-0.5 rounded-full text-xs">
                {totalItems} item{totalItems !== 1 ? 's' : ''}
              </span>
            )}
          </Link>
        </div>
      )}
    </div>
  );
}
