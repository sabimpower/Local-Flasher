import React from 'react';
import { SUPPORT_WHATSAPP, SUPPORT_TELEGRAM } from '../constants';

export const FloatingSupport: React.FC = () => {
  const waLink = `https://wa.me/${SUPPORT_WHATSAPP.replace(/\s+/g, '').replace('+', '')}`;
  const tgLink = `https://t.me/${SUPPORT_TELEGRAM.replace('@', '')}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* WhatsApp Support */}
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-end gap-3"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
          <span className="text-xs font-bold text-white whitespace-nowrap">WhatsApp Support</span>
        </div>
        <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300">
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

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
