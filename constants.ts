import { Package } from './types';

export const APP_NAME = "LOCAL FLASHER";
export const LOGO_URL = "https://i.postimg.cc/4xB4xcMd/file-00000000269871fa8b131042ec711ee1.png";
export const SUPPORT_TELEGRAM = "@localflasher_bot";
// Updated to a BEP20 compatible address format
export const RECIPIENT_WALLET = "0xc1f49fb2b4f4cd3fad0aa1ec181e5e4549a13d6f";

export const PACKAGES: Package[] = [
  {
    id: 'pro-flash',
    priceUsd: 65,
    flashAmount: 6100,
    popular: true,
    limitedTime: true,
    durationHours: 24,
    paymentLink: "", // Placeholder - needs to be updated by the user
  },
  {
    id: 'enterprise',
    priceUsd: 100,
    flashAmount: 13000,
    paymentLink: "https://pay.boomfi.xyz/3AWkmAZ4kb9vOfJSWsk3hVj8hbA",
  },
  {
    id: 'whale',
    priceUsd: 180,
    flashAmount: 17000,
    bestValue: true,
    paymentLink: "https://pay.boomfi.xyz/3BwcwuMIwF7aDgnReCFGvHYSi6s",
  },
  {
    id: 'institutional',
    priceUsd: 240,
    flashAmount: 20000,
    paymentLink: "https://pay.boomfi.xyz/3BwdLNuGbkTrJT3hx7yKdghqt69",
  },
];
