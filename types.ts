export interface Package {
  id: string;
  priceUsd: number;
  flashAmount: number;
  popular?: boolean;
  limitedTime?: boolean;
  durationHours?: number;
  durationMinutes?: number;
  paymentLink?: string;
}

export interface OrderState {
  selectedPackage: Package | null;
  walletAddress: string;
  email: string;
  telegram: string;
  txHash: string;
}

export type OrderContextType = {
  order: OrderState;
  updateOrder: (updates: Partial<OrderState>) => void;
  resetOrder: () => void;
};