import React from 'react';
import { SUPPORT_TELEGRAM } from '../constants';

export const FloatingSupport: React.FC = () => {
  const tgLink = `https://t.me/${SUPPORT_TELEGRAM.replace('@', '')}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* Telegram Support */}
      <a 
        href={tgLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-end gap-3"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
          <span className="text-xs font-bold text-white whitespace-nowrap">Telegram Support</span>
        </div>
        <div className="w-14 h-14 bg-[#229ED9] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(34,158,217,0.4)] hover:scale-110 transition-transform duration-300">
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.74 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.56 4.44-1.83 4.94-1.84.11 0 .35.03.5.16.13.1.17.24.19.34.02.07.03.22.02.33z"/>
          </svg>
        </div>
      </a>
    </div>
  );
};
