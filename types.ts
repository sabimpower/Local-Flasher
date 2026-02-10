export interface Package {
  id: string;
  priceUsd: number;
  flashAmount: number;
  popular?: boolean;
  limitedTime?: boolean;
  durationHours?: number;
  durationMinutes?: number;
}

export interface OrderState {
  selectedPackage: Package | null;
  walletAddress: string;
  email: string;
  txHash: string;
}

export type OrderContextType = {
  order: OrderState;
  updateOrder: (updates: Partial<OrderState>) => void;
  resetOrder: () => void;
};