import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { OrderDetails } from './pages/OrderDetails';
import { Payment } from './pages/Payment';
import { Confirmation } from './pages/Confirmation';
import { SUPPORT_TELEGRAM } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const TelegramFloat = () => {
  return (
    <a 
      href={`https://t.me/${SUPPORT_TELEGRAM.replace('@', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contact Support on Telegram"
    >
      <div className="absolute inset-0 bg-[#229ED9] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse-slow"></div>
      <div className="relative flex items-center justify-center w-16 h-16 bg-[#229ED9] rounded-full shadow-xl hover:scale-105 transition-transform duration-300 ring-2 ring-white/10">
        {/* Official Telegram Logo SVG */}
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white transform translate-x-[-2px] translate-y-[1px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      </div>
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#229ED9] px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
        Chat with Support
      </span>
    </a>
  );
};

const App: React.FC = () => {
  return (
    <ShopProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-dark text-white font-sans selection:bg-primary/30">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<OrderDetails />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          </main>
          <Footer />
          <TelegramFloat />
        </div>
      </Router>
    </ShopProvider>
  );
};

export default App;