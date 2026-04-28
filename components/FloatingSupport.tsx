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
        className="group flex items-center justify-end"
      >
        <div className="w-14 h-14 bg-[#229ED9] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(34,158,217,0.4)] hover:scale-110 transition-transform duration-300 overflow-hidden">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/023/986/562/non_2x/telegram-logo-telegram-logo-transparent-telegram-icon-transparent-free-free-png.png" 
            alt="Telegram Support"
            className="w-full h-full object-cover transform scale-110"
          />
        </div>
      </a>
    </div>
  );
};
