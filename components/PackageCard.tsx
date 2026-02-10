import React from 'react';
import { Package } from '../types';
import { Zap, CheckCircle2, Clock } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

interface PackageCardProps {
  pkg: Package;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const { updateOrder } = useShop();
  const navigate = useNavigate();

  const handleSelect = () => {
    updateOrder({ selectedPackage: pkg });
    navigate('/order');
  };

  const getExpirationText = () => {
    if (pkg.durationMinutes) {
        return `Expires in ${pkg.durationMinutes} Minute${pkg.durationMinutes > 1 ? 's' : ''}`;
    }
    if (pkg.durationHours) {
        if (pkg.durationHours < 24) {
            return `Expires in ${pkg.durationHours} Hour${pkg.durationHours > 1 ? 's' : ''}`;
        }
        return `Expires in ${Math.round(pkg.durationHours / 24)} Days`;
    }
    return 'Limited Offer';
  };

  return (
    <div className={`relative flex flex-col p-6 bg-card/60 backdrop-blur-md rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 ${pkg.popular ? 'border-primary shadow-lg shadow-primary/10 scale-105 z-10' : 'border-white/5 hover:border-white/20'}`}>
      
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full text-center">
          <span className="bg-gradient-to-r from-primary to-yellow-500 text-dark text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/40 ring-1 ring-white/10">
            Most Popular
          </span>
        </div>
      )}

      {pkg.limitedTime && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full text-center">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-red-500/40 ring-1 ring-white/10 flex items-center justify-center gap-1 w-max mx-auto">
            <Clock size={12} />
            Limited Offer
          </span>
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-5 mt-2">
        <div className={`p-2.5 rounded-xl ${pkg.popular ? 'bg-primary text-dark shadow-lg shadow-primary/30' : pkg.limitedTime ? 'bg-orange-500/10 text-orange-500' : 'bg-white/5 text-gray-400'}`}>
            <Zap size={20} fill={pkg.popular ? "currentColor" : "none"} />
        </div>
        <div>
            <h3 className="text-lg font-bold text-white leading-none mb-1">
                {pkg.flashAmount.toLocaleString()} Flash
            </h3>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Package</span>
        </div>
      </div>

      <div className="mb-6 pb-6 border-b border-white/5">
        <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">${pkg.priceUsd}</span>
            <span className="text-sm text-gray-400 font-medium">USD</span>
        </div>
        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            <p className="text-xs text-primary font-bold tracking-wide">Pay with USDT (BEP20)</p>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        <li className="flex items-start gap-3 text-sm text-gray-300">
          <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
          <span className="leading-snug">Instant Automated Delivery</span>
        </li>
        <li className="flex items-start gap-3 text-sm text-gray-300">
          <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
          <span className="leading-snug">BNB Smart Chain (BEP20)</span>
        </li>
        <li className="flex items-start gap-3 text-sm text-gray-300">
          <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
          <span className="leading-snug">24/7 Priority Support</span>
        </li>
        {pkg.limitedTime ? (
            <li className="flex items-start gap-3 text-sm text-red-300">
              <Clock size={16} className="text-red-500 shrink-0 mt-0.5" />
              <span className="leading-snug font-bold">
                  {getExpirationText()}
              </span>
            </li>
        ) : (
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
              <span className="leading-snug">Escrow Protected</span>
            </li>
        )}
      </ul>

      <button
        onClick={handleSelect}
        className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 ${
          pkg.popular 
            ? 'bg-gradient-to-r from-primary to-yellow-500 hover:shadow-lg hover:shadow-primary/25 text-dark' 
            : pkg.limitedTime
            ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/20 text-white'
            : 'bg-white/10 hover:bg-white/20 text-white hover:text-white'
        }`}
      >
        Select Package
      </button>
    </div>
  );
};