import { Package } from './types';

export const APP_NAME = "LOCAL FLASHER";
export const LOGO_URL = "https://i.postimg.cc/4xB4xcMd/file-00000000269871fa8b131042ec711ee1.png";
export const SUPPORT_TELEGRAM = "@localflasher_bot";
export const SUPPORT_WHATSAPP = "+855 71 595 0789";
// Updated to a BEP20 compatible address format
export const RECIPIENT_WALLET = "0xc1f49fb2b4f4cd3fad0aa1ec181e5e4549a13d6f";

export const PACKAGES: Package[] = [
  {
    id: 'starter',
    priceUsd: 10,
    flashAmount: 900,
    popular: true,
    paymentLink: "https://pay.boomfi.xyz/3BXI4RwgpLz1TQxK6fILeOfOWd8",
  },
  {
    id: 'pro',
    priceUsd: 25,
    flashAmount: 2500,
    paymentLink: "https://pay.boomfi.xyz/3AWkBJrcyoQycNDqhLc7ObQFGOz",
  },
  {
    id: 'business',
    priceUsd: 50,
    flashAmount: 6000,
    paymentLink: "https://pay.boomfi.xyz/3AWkgvTa6qLinUrBNPU7JDmI3Ph",
  },
  {
    id: 'enterprise',
    priceUsd: 100,
    flashAmount: 13000,
    paymentLink: "https://pay.boomfi.xyz/3AWkmAZ4kb9vOfJSWsk3hVj8hbA",
  },
];
