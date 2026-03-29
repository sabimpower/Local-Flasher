import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingSupport } from './components/FloatingSupport';
import { Home } from './pages/Home';
import { OrderDetails } from './pages/OrderDetails';
import { Payment } from './pages/Payment';
import { Confirmation } from './pages/Confirmation';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
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
          <FloatingSupport />
        </div>
      </Router>
    </ShopProvider>
  );
};

export default App;