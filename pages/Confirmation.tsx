import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { SEO } from '../components/SEO';
import { CheckCircle, ExternalLink, Zap } from 'lucide-react';
import { SUPPORT_TELEGRAM } from '../constants';

export const Confirmation: React.FC = () => {
  const { order } = useShop();
  const navigate = useNavigate();

  // Generate a random Order ID for display
  const orderId = React.useMemo(() => Math.random().toString(36).substr(2, 9).toUpperCase(), []);

  if (!order.selectedPackage) {
      // If state is lost (e.g. after redirect), we might want to show a generic message or redirect home.
      // For this demo flow where we assume we might land here, let's just redirect if no package.
      // But if the user wants to see this page, they likely need to be in the flow.
      // Since we redirect to BoomFi, this page might not be reachable in the same session easily.
      // However, I will keep the check.
      return null; 
  }

  return (
    <div className="min-h-screen bg-dark pt-20 px-4 relative overflow-hidden flex items-center justify-center">
      <SEO title="Order Confirmed" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,241,149,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] animate-blob pointer-events-none"></div>
      
      <div className="max-w-md w-full mx-auto text-center relative z-10 -mt-20">
        <div className="mb-8 flex justify-center relative">
            <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center animate-pulse-slow">
                <CheckCircle className="text-secondary w-12 h-12 drop-shadow-[0_0_15px_rgba(20,241,149,0.5)]" />
            </div>
            <div className="absolute inset-0 rounded-full border border-secondary/20 animate-ping opacity-20"></div>
        </div>
        
        <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Order Initiated!</h1>
        <p className="text-gray-400 mb-8 font-medium">
            Your payment is being processed. <br/>
            <span className="text-secondary font-bold text-lg">{order.selectedPackage.flashAmount.toLocaleString()} Flash</span>
        </p>

        <div className="glass-card rounded-3xl p-8 mb-8 text-left ring-1 ring-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
                <Zap size={64} className="text-white transform rotate-12" />
            </div>
            
            <div className="space-y-5 relative z-10">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Status</span>
                    <span className="flex items-center gap-2 text-secondary text-sm font-bold bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
                        Pending Payment
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Order ID</span>
                    <span className="text-white text-sm font-mono font-medium">#{orderId}</span>
                </div>
                 <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Package</span>
                    <span className="text-white text-sm font-bold">{order.selectedPackage.flashAmount.toLocaleString()} Flash</span>
                </div>
                 <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Price</span>
                    <span className="text-white text-sm font-bold">${order.selectedPackage.priceUsd} USD</span>
                </div>
            </div>
        </div>

        <p className="text-gray-500 text-xs mb-8 leading-relaxed">
            Please complete your payment on the BoomFi page. <br/>
            Once confirmed, your flash will be delivered automatically.
        </p>

        <a 
            href={`https://t.me/${SUPPORT_TELEGRAM.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all border border-white/10 hover:border-primary/30 font-bold text-sm"
        >
            <span>Need Help?</span>
            <span className="text-primary flex items-center gap-1">
                Contact Support <ExternalLink size={14} />
            </span>
        </a>
      </div>
    </div>
  );
};
