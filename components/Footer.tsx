import React from 'react';
import { Send, Phone } from 'lucide-react';
import { SUPPORT_TELEGRAM, SUPPORT_WHATSAPP } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1221] border-t border-white/5 mt-auto" id="support">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-white font-bold text-lg mb-4">Local Flasher</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
                    The premier decentralized protocol for instant Flash USDT liquidity on the BNB network. Secure, automated, and anonymous.
                </p>
            </div>
            
            <div>
                {/* Protocol links removed as requested */}
            </div>

            <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                    <li>
                      <a 
                        href={`https://wa.me/${SUPPORT_WHATSAPP.replace(/\s+/g, '').replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <Phone size={14} />
                        WhatsApp Support
                      </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Local Flasher Protocol. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href={`https://wa.me/${SUPPORT_WHATSAPP.replace(/\s+/g, '').replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#25D366] rounded-full hover:bg-[#25D366]/20 transition-colors text-sm"
            >
              <Phone size={16} />
              <span className="font-medium">WhatsApp</span>
            </a>
            
            <a 
              href={`https://t.me/${SUPPORT_TELEGRAM.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#229ED9]/10 text-[#229ED9] rounded-full hover:bg-[#229ED9]/20 transition-colors text-sm"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.74 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.56 4.44-1.83 4.94-1.84.11 0 .35.03.5.16.13.1.17.24.19.34.02.07.03.22.02.33z"/>
              </svg>
              <span className="font-medium">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};