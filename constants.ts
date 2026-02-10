import { Package } from './types';

export const APP_NAME = "LOCAL FLASHER";
export const LOGO_URL = "https://i.postimg.cc/4xB4xcMd/file-00000000269871fa8b131042ec711ee1.png";
export const SUPPORT_TELEGRAM = "@localflasher_bot";
// Updated to a BEP20 compatible address format
export const RECIPIENT_WALLET = "0xc1f49fb2b4f4cd3fad0aa1ec181e5e4549a13d6f";

export const PACKAGES: Package[] = [
  {
    id: 'trial',
    priceUsd: 4,
    flashAmount: 300,
    limitedTime: false,
  },
  {
    id: 'starter',
    priceUsd: 11,
    flashAmount: 900,
  },
  {
    id: 'pro',
    priceUsd: 25,
    flashAmount: 2500,
    popular: true,
  },
  {
    id: 'business',
    priceUsd: 50,
    flashAmount: 6000,
  },
  {
    id: 'enterprise',
    priceUsd: 100,
    flashAmount: 13000,
  },
];
