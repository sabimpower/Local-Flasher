import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { SEO } from '../components/SEO';
import { ArrowLeft, Wallet, Mail, Shield } from 'lucide-react';

export const OrderDetails: React.FC = () => {
  const { order, updateOrder } = useShop();
  const navigate = useNavigate();
  const [wallet, setWallet] = useState(order.walletAddress);
  const [email, setEmail] = useState(order.email);
  const [error, setError] = useState('');

  if (!order.selectedPackage) {
    navigate('/');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // BEP20 / EVM address validation (starts with 0x, 42 chars)
    if (!wallet || wallet.length < 40 || !wallet.startsWith('0x')) {
      setError('Please enter a valid BNB Smart Chain (BEP20) wallet address.');
      return;
    }
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    updateOrder({ walletAddress: wallet, email });
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-dark pt-24 pb-24 px-4 relative overflow-hidden">
      <SEO title="Complete Order" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
      
      <div className="max-w-lg mx-auto relative z-10">
        <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
        >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Change Package</span>
        </button>

        <div className="glass-card rounded-[2.5rem] p-8 md:p-10 shadow-2xl ring-1 ring-white/5">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Shield size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-black text-white leading-none">Order Details</h2>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Secure Information</p>
                </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 mb-8 border border-white/5">
                <p className="text-gray-400 text-sm">
                    Selected Package: <span className="text-white font-bold ml-1">{order.selectedPackage.flashAmount.toLocaleString()} Flash</span>
                </p>
                <p className="text-gray-400 text-sm mt-1">
                    Total: <span className="text-primary font-bold ml-1">${order.selectedPackage.priceUsd} USDT</span>
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">
                        Recipient Wallet (BEP20)
                    </label>
                    <div className="relative group">
                        <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                        <input 
                            type="text" 
                            value={wallet}
                            onChange={(e) => setWallet(e.target.value)}
                            className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600 font-mono text-sm"
                            placeholder="Enter 0x... address"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">
                        Contact Email
                    </label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder-gray-600 font-mono text-sm"
                            placeholder="your@email.com"
                        />
                    </div>
                    <p className="text-[10px] text-gray-600 mt-2 font-medium">Used for order confirmation and support.</p>
                </div>

                {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm font-medium animate-fade-in">
                        {error}
                    </div>
                )}

                <button 
                    type="submit"
                    className="w-full bg-primary text-dark font-black py-4 rounded-xl hover:bg-white hover:text-dark hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 uppercase tracking-wide text-sm mt-4"
                >
                    Proceed to Payment
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};