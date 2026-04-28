import React from 'react';
import { Send, Phone } from 'lucide-react';
import { SUPPORT_TELEGRAM } from '../constants';

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
                </ul>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Local Flasher Protocol. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href={`https://t.me/${SUPPORT_TELEGRAM.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#229ED9]/10 text-[#229ED9] rounded-full hover:bg-[#229ED9]/20 transition-colors text-sm"
            >
              <img 
                src="https://static.vecteezy.com/system/resources/previews/023/986/562/non_2x/telegram-logo-telegram-logo-transparent-telegram-icon-transparent-free-free-png.png" 
                alt="Telegram"
                className="w-4 h-4 object-contain"
              />
              <span className="font-medium">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};