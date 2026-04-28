import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { SEO } from '../components/SEO';
import { ShieldCheck, ArrowLeft, ExternalLink, CreditCard, CheckCircle } from 'lucide-react';

export const Payment: React.FC = () => {
  const { order } = useShop();
  const navigate = useNavigate();

  if (!order.selectedPackage) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-dark pt-20 pb-24 px-4 relative overflow-hidden">
      <SEO title="Secure Checkout" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        
        <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
        >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Order Details</span>
        </button>

        {/* Trust Banner */}
        <div className="flex items-center justify-center gap-2 mb-8 text-secondary/80 bg-secondary/5 py-2 px-4 rounded-full w-fit mx-auto border border-secondary/10 backdrop-blur-sm">
          <ShieldCheck size={16} />
          <span className="text-xs font-black tracking-wide uppercase">Secure Payment Gateway</span>
        </div>

        <div className="glass-card rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
            
            {/* Header */}
            <div className="text-center mb-10 relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">Complete Payment</h2>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <span className="text-sm font-medium">Selected Package:</span>
                  <span className="text-white font-bold bg-white/10 px-3 py-1 rounded-full text-sm border border-white/5">{order.selectedPackage.flashAmount.toLocaleString()} Flash</span>
                </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-dark/40 rounded-2xl p-6 border border-white/5 flex flex-col items-center gap-4 backdrop-blur-sm mb-8">
                <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Total Amount Due</span>
                <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-mono font-black text-white tracking-tighter">${order.selectedPackage.priceUsd}</span>
                    <span className="text-xl font-bold text-secondary">USD</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Powered by BoomFi Auto-Pay</p>
            </div>

            {/* Payment Action */}
            <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                        <CheckCircle size={18} className="text-secondary" />
                        Automated Processing
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        You will be redirected to our secure payment partner, BoomFi, to complete your transaction. Your flash tokens will be automatically dispatched to your BNB wallet upon confirmation.
                    </p>
                </div>

                {order.selectedPackage.paymentLink ? (
                  <a 
                      href={order.selectedPackage.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-primary to-purple-600 text-white font-black py-5 rounded-xl hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 uppercase tracking-wide text-sm text-center"
                  >
                      <span>Pay Securely with BoomFi</span>
                      <ExternalLink size={18} strokeWidth={3} />
                  </a>
                ) : (
                  <button 
                      disabled
                      className="w-full bg-gray-800 text-gray-500 font-black py-5 rounded-xl flex items-center justify-center gap-3 uppercase tracking-wide text-sm cursor-not-allowed"
                  >
                      <span>Payment Link Not Set</span>
                  </button>
                )}
                
                <div className="flex justify-center gap-4 mt-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for Payment Icons if needed */}
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <CreditCard size={14} />
                        <span>Crypto Accepted</span>
                    </div>
                </div>
            </div>

        </div>
        
        <div className="mt-8 flex justify-center items-center gap-4 opacity-50 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <span>256-bit Encryption</span>
            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
            <span>BoomFi Secured</span>
        </div>
      </div>
    </div>
  );
};
