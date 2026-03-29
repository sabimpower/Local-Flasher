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
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-3 h-3 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.74 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.56 4.44-1.83 4.94-1.84.11 0 .35.03.5.16.13.1.17.24.19.34.02.07.03.22.02.33z"/>
                </svg>
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