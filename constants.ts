import { Package } from './types';

export const APP_NAME = "LOCAL FLASHER";
export const LOGO_URL = "https://i.postimg.cc/4xB4xcMd/file-00000000269871fa8b131042ec711ee1.png";
export const SUPPORT_TELEGRAM = "@localflasher_bot";
// Updated to a BEP20 compatible address format
export const RECIPIENT_WALLET = "0xc1f49fb2b4f4cd3fad0aa1ec181e5e4549a13d6f";

export const PACKAGES: Package[] = [
  {
    id: 'trial',
    priceUsd: 8,
    flashAmount: 700,
    limitedTime: false,
  },
  {
    id: 'starter',
    priceUsd: 19,
    flashAmount: 2000,
  },
  {
    id: 'pro',
    priceUsd: 30,
    flashAmount: 3200,
    popular: true,
  },
  {
    id: 'business',
    priceUsd: 50,
    flashAmount: 6800,
  },
  {
    id: 'enterprise',
    priceUsd: 110,
    flashAmount: 14000,
  },
];
