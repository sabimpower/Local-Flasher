import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL, APP_NAME, SUPPORT_WHATSAPP, SUPPORT_TELEGRAM } from '../constants';
import { Phone, Send } from 'lucide-react';

export const Navbar: React.FC = () => {
  const waLink = `https://wa.me/${SUPPORT_WHATSAPP.replace(/\s+/g, '').replace('+', '')}`;
  const tgLink = `https://t.me/${SUPPORT_TELEGRAM.replace('@', '')}`;

  return (
    <>
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-primary py-2 px-4 text-center overflow-hidden relative hover:bg-yellow-400 transition-colors group"
      >
        <div className="flex items-center justify-center gap-3 animate-pulse group-hover:animate-none">
          <Phone size={14} className="text-dark" />
          <span className="text-[11px] font-black uppercase tracking-widest text-dark">
            Support is now available on WhatsApp: {SUPPORT_WHATSAPP}
          </span>
        </div>
      </a>
      <nav className="w-full bg-dark/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 overflow-hidden rounded-full border border-white/10 group-hover:border-primary/50 transition-colors shadow-lg">
                <img src={LOGO_URL} alt={APP_NAME} className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {APP_NAME}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-green-500 font-bold tracking-wider uppercase">24/7 Support Active</span>
              </div>
            </div>
          </Link>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex flex-col items-end gap-1">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-[#25D366] transition-colors uppercase tracking-wider"
              >
                <Phone size={12} />
                <span>WhatsApp</span>
              </a>
              <a 
                href={tgLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-[#229ED9] transition-colors uppercase tracking-wider"
              >
                <Send size={12} />
                <span>Telegram</span>
              </a>
            </div>
            <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
            <Link to="/" className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Packages
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};