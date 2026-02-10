import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { RECIPIENT_WALLET } from '../constants';
import { SEO } from '../components/SEO';
import { Copy, AlertTriangle, Check, Loader2, ShieldCheck, Info, ArrowLeft } from 'lucide-react';

export const Payment: React.FC = () => {
  const { order, updateOrder } = useShop();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');

  if (!order.selectedPackage) {
    navigate('/');
    return null;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(RECIPIENT_WALLET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!txHash) return;

    // Validation: EVM transaction hashes are 66 characters (0x + 64 hex characters)
    if (txHash.length < 60 || txHash.length > 70) {
      setError('Invalid transaction signature. Please enter a valid BNB Chain transaction hash.');
      return;
    }

    setIsVerifying(true);
    // Simulate network verification delay
    setTimeout(() => {
        setIsVerifying(false);
        updateOrder({ txHash });
        navigate('/confirmation');
    }, 3000);
  };

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
        <div className="flex items-center justify-center gap-2 mb-8 text-primary/80 bg-primary/5 py-2 px-4 rounded-full w-fit mx-auto border border-primary/10 backdrop-blur-sm">
          <ShieldCheck size={16} />
          <span className="text-xs font-black tracking-wide uppercase">Secure BNB Gateway</span>
        </div>

        <div className="glass-card rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
            
            {/* Header */}
            <div className="text-center mb-10 relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">Complete Payment</h2>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <span className="text-sm font-medium">Selected Package:</span>
                  <span className="text-dark font-bold bg-primary px-3 py-1 rounded-full text-sm border border-primary/50 shadow-lg shadow-primary/20">{order.selectedPackage.flashAmount.toLocaleString()} Flash</span>
                </div>
            </div>

            {/* Warning Box */}
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-5 mb-8 flex gap-4 items-start relative overflow-hidden">
                <div className="bg-orange-500/10 p-2 rounded-lg shrink-0">
                  <AlertTriangle className="text-orange-500" size={24} />
                </div>
                <div className="text-sm text-orange-200/90">
                    <p className="font-bold mb-1 text-orange-100 uppercase tracking-wide text-xs">Attention Required</p>
                    <p className="leading-relaxed text-gray-300">
                      Please ensure you are sending <strong className="text-white">USDT (BEP20)</strong> via BNB Smart Chain. 
                      Transfers on other networks (Solana, TRC20, ERC20) will result in <span className="text-orange-400 font-bold">permanent loss</span>.
                    </p>
                </div>
            </div>

            {/* Payment Details */}
            <div className="space-y-6 mb-10">
                <div className="bg-dark/40 rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 backdrop-blur-sm">
                    <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Total Amount</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-mono font-black text-white tracking-tighter">{order.selectedPackage.priceUsd}</span>
                        <span className="text-xl font-bold text-primary">USDT</span>
                    </div>
                </div>

                <div className="bg-dark/40 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-4">
                        <label className="text-gray-400 text-xs font-black uppercase tracking-widest">Merchant Wallet</label>
                        <span className="text-[10px] text-dark bg-primary px-2 py-0.5 rounded-full border border-primary/20 font-bold">BSC Network</span>
                    </div>
                    <div className="flex items-center gap-3 bg-black/50 rounded-xl p-4 border border-white/10 group hover:border-primary/50 transition-colors">
                        <div className="break-all font-mono text-sm text-gray-300 flex-grow leading-relaxed font-medium">
                            {RECIPIENT_WALLET}
                        </div>
                        <button 
                            onClick={handleCopy}
                            className={`p-3 rounded-xl transition-all shrink-0 ${copied ? 'bg-secondary text-dark shadow-lg shadow-secondary/20' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
                            title="Copy Address"
                        >
                            {copied ? <Check size={20} strokeWidth={3} /> : <Copy size={20} />}
                        </button>
                    </div>
                    <div className="mt-4 flex items-start gap-2 text-xs text-gray-500 px-1">
                      <Info size={14} className="mt-0.5 shrink-0 text-primary" />
                      <p>Copy the address and send the exact amount from your wallet.</p>
                    </div>
                </div>
            </div>

            {/* Verification Form */}
            <div className="border-t border-white/5 pt-8">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center text-sm font-black shadow-inner">2</span>
                  Verify Transaction
                </h3>
                <form onSubmit={handleVerify} className="space-y-5">
                    <div>
                        <input 
                            type="text" 
                            value={txHash}
                            onChange={(e) => {
                                setTxHash(e.target.value.trim());
                                setError('');
                            }}
                            className={`w-full bg-black/20 border rounded-xl py-4 px-5 text-white focus:outline-none focus:ring-1 transition-all placeholder-gray-600 font-mono text-sm ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-primary focus:ring-primary/50'}`}
                            placeholder="Enter transaction hash (0x...)"
                            required
                        />
                    </div>
                    
                    {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 animate-fade-in">
                            <AlertTriangle className="text-red-400 shrink-0" size={20} />
                            <span className="text-sm font-medium text-red-300">{error}</span>
                        </div>
                    )}

                    <button 
                        type="submit"
                        disabled={isVerifying || !txHash}
                        className="w-full bg-gradient-to-r from-primary to-yellow-500 text-dark font-black py-5 rounded-xl hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 uppercase tracking-wide text-sm"
                    >
                        {isVerifying ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Verifying on Blockchain...
                            </>
                        ) : (
                            <>
                                <span>Confirm Payment</span>
                                <Check size={18} strokeWidth={3} />
                            </>
                        )}
                    </button>
                </form>
            </div>

        </div>
        
        <div className="mt-8 flex justify-center items-center gap-4 opacity-50 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <span>256-bit Encryption</span>
            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
            <span>Secure Validation</span>
        </div>
      </div>
    </div>
  );
};