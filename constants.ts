import { Package } from './types';

export const APP_NAME = "LOCAL FLASHER";
export const LOGO_URL = "https://i.postimg.cc/4xB4xcMd/file-00000000269871fa8b131042ec711ee1.png";
export const SUPPORT_TELEGRAM = "@localflasher_bot";
// Updated to a BEP20 compatible address format
export const RECIPIENT_WALLET = "0xc1f49fb2b4f4cd3fad0aa1ec181e5e4549a13d6f";

export const PACKAGES: Package[] = [
  {
    id: 'trial',
    priceUsd: 5,
    flashAmount: 300,
    limitedTime: true,
    durationHours: 24,
    paymentLink: "https://pay.boomfi.xyz/3Bic6Pvq7CLfhnRMkXZ2snsIAbL",
  },
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
