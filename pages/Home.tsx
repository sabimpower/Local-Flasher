import React, { useState, useEffect, useRef } from 'react';
import { PackageCard } from '../components/PackageCard';
import { PACKAGES, APP_NAME } from '../constants';
import { Package } from '../types';
import { SEO } from '../components/SEO';
import { ShieldCheck, Zap, Globe, Clock, Wallet, CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';

const NetworkStatus = () => {
  const [tps, setTps] = useState(2480);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTps(prev => prev + Math.floor(Math.random() * 80) - 40);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in">
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-xl transition-all hover:bg-white/10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(243,186,47,0.5)]"></div>
            <span className="text-[10px] text-gray-300 uppercase font-black tracking-[0.2em]">BNB Smart Chain</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-xl">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">TPS Index</span>
            <span className="text-xs font-mono text-primary font-bold">{tps.toLocaleString()}</span>
        </div>
    </div>
  );
};

export const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [visiblePackages, setVisiblePackages] = useState<Package[]>([]);

  useEffect(() => {
    if (videoRef.current) {
        // Force play on mount to ensure autoplay works reliably
        videoRef.current.play().catch(e => console.log("Autoplay check:", e));
    }
  }, []);

  // Handle limited time packages
  useEffect(() => {
    const checkPackages = () => {
        const now = Date.now();
        // Updated key to reset timer for the new $2 package launch
        const STORAGE_KEY = 'flash_promo_timer_v3'; 
        let startTime = parseInt(localStorage.getItem(STORAGE_KEY) || '0');

        // Initialize timer if not set
        if (!startTime) {
            startTime = now;
            localStorage.setItem(STORAGE_KEY, startTime.toString());
        }

        const filtered = PACKAGES.filter(pkg => {
            if (!pkg.limitedTime) return true;
            
            let durationMs = 0;
            if (pkg.durationHours) {
                durationMs = pkg.durationHours * 60 * 60 * 1000;
            } else if (pkg.durationMinutes) {
                durationMs = pkg.durationMinutes * 60 * 1000;
            } else {
                return true;
            }
            
            const isExpired = (now - startTime) > durationMs;
            
            return !isExpired;
        });

        setVisiblePackages(filtered);
    };

    checkPackages();
    // Re-check every second for precision with minute-based packages
    const interval = setInterval(checkPackages, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPackages = () => {
    const element = document.getElementById('packages-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-dark">
      <SEO title="Automated Liquidity" description={`${APP_NAME} - Professional automated liquidity injection directly to your BNB wallet. Verified, anonymous, and secure.`} />
      
      {/* Premium Hero Section */}
      <div className="relative pt-20 pb-40 overflow-hidden">
        {/* Layered Lighting Effects */}
        <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-blob"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <NetworkStatus />

          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-white mb-8 leading-[0.9] text-glow select-none">
             <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
               FLASH
             </span>
             <br />
             <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-white italic px-4">
               USDT
             </span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12 space-y-6">
            <p className="text-xl md:text-3xl text-gray-100 font-extrabold tracking-tight">
              Automated liquidity injection directly to your BNB Chain wallet.
            </p>
            <p className="text-lg md:text-xl text-gray-500 font-medium tracking-wide">
              Verified, anonymous, and instant settlement via BSC Protocol.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <button 
              onClick={scrollToPackages}
              className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-primary text-dark rounded-2xl font-black text-xl tracking-tight hover:bg-white hover:text-dark transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(243,186,47,0.25)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Initialize Injection</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <div className="flex items-center gap-4 px-8 py-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md">
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-9 h-9 rounded-full border-2 border-dark bg-gray-800 flex items-center justify-center overflow-hidden">
                            <img src={`https://api.dicebear.com/7.x/identicon/svg?seed=${i + 20}`} alt="user" />
                        </div>
                    ))}
                </div>
                <div className="text-left">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Pool</p>
                    <p className="text-xs text-white font-bold">18.5k Active Sessions</p>
                </div>
            </div>
          </div>

          {/* Featured Video Proof - Moved to Top */}
          <div className="mx-auto max-w-[280px] sm:max-w-[340px] relative z-20 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="glass-card p-3 rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-[0_0_50px_-12px_rgba(243,186,47,0.3)] ring-1 ring-white/10 transform transition-transform hover:scale-[1.02] duration-500">
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 bg-black/80 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full flex items-center gap-2 shadow-lg w-max">
                         <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Live Proof</span>
                    </div>

                    <div className="relative rounded-[2rem] overflow-hidden bg-gray-900 aspect-[9/16]">
                        {/* Loading State Placeholder */}
                        {!isVideoLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}
                        
                        <video 
                            ref={videoRef}
                            src="https://local-flasher.vercel.app/VN20260118_235231.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            preload="auto"
                            onLoadedData={() => setIsVideoLoaded(true)}
                            className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]"></div>
                        
                        <div className="absolute bottom-6 left-0 w-full text-center z-10">
                            <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest drop-shadow-md">Verified Settlement</p>
                        </div>
                    </div>
                </div>
           </div>
          
          {/* Trust Badges */}
          <div className="mt-24 flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-700">
             {[
               { icon: ShieldCheck, label: "Non-Custodial" },
               { icon: Zap, label: "Instant Fill" },
               { icon: Globe, label: "Distributed RPC" },
               { icon: ShieldAlert, label: "Audit Proof" }
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-2.5">
                  <item.icon size={18} className="text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">{item.label}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Pricing / Packages Section */}
      <div id="packages-section" className="relative bg-[#070e1b] py-32 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(243,186,47,0.06),transparent_60%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
              <span className="inline-block py-2 px-5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                Liquidity Selection
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Injection Packages</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visiblePackages.length > 0 ? (
                visiblePackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))
            ) : (
                <div className="col-span-full flex justify-center py-20">
                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
          </div>
        </div>
      </div>

      {/* Modern Feature Grid */}
      <div className="py-40 px-6 bg-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
                      Engineered for <br/>
                      <span className="text-primary">Reliable Settlement.</span>
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                      {APP_NAME} utilizes high-frequency node access to ensure your liquidity is delivered within the next block confirmation.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                    <div className="p-8 rounded-[2.5rem] border border-white/5 bg-white/5 transition-colors hover:bg-white/10 group">
                        <Wallet className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                        <h4 className="text-xl font-bold text-white mb-3">BNB Native</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Fully compatible with Metamask, Trust Wallet, and SafePal.</p>
                    </div>
                    <div className="p-8 rounded-[2.5rem] border border-white/5 bg-white/5 transition-colors hover:bg-white/10 group">
                        <CheckCircle2 className="text-secondary mb-6 group-hover:scale-110 transition-transform" size={40} />
                        <h4 className="text-xl font-bold text-white mb-3">On-Chain Proof</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Each transaction is verifiable on BscScan and FM Explorer instantly.</p>
                    </div>
                </div>
            </div>
            
            <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full"></div>
                <div className="glass-card p-10 rounded-[3rem] border border-white/10 relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                                <Zap className="text-dark" size={24} />
                            </div>
                            <div>
                              <span className="block font-bold text-white text-lg tracking-tight">System Status</span>
                              <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Global Matrix</span>
                            </div>
                        </div>
                        <span className="text-[10px] text-secondary font-black tracking-[0.2em] uppercase bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 animate-pulse">Online</span>
                    </div>
                    
                    <div className="space-y-8">
                        {[
                            { l: "Injection Latency", v: "< 2.4s", c: "bg-secondary", w: "95%" },
                            { l: "Success Rate", v: "99.9%", c: "bg-primary", w: "100%" },
                            { l: "Node Availability", v: "High", c: "bg-purple-400", w: "88%" }
                        ].map((s, i) => (
                            <div key={i} className="space-y-3">
                                <div className="flex justify-between text-xs font-black uppercase tracking-[0.1em] text-gray-400">
                                    <span>{s.l}</span>
                                    <span className="text-white">{s.v}</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className={`h-full ${s.c} group-hover:translate-x-0 transition-all duration-1000 ease-in-out`} style={{width: s.w}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-14 p-6 bg-primary/5 rounded-[2rem] border border-primary/10 text-center group-hover:bg-primary/10 transition-colors">
                        <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em] mb-2">Protocol Version</p>
                        <p className="text-2xl font-mono font-bold text-white">v4.2.0-BSC</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};