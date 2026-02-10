import React, { createContext, useContext, useState, ReactNode } from 'react';
import { OrderState, OrderContextType } from '../types';

const defaultOrder: OrderState = {
  selectedPackage: null,
  walletAddress: '',
  email: '',
  txHash: '',
};

const ShopContext = createContext<OrderContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [order, setOrder] = useState<OrderState>(defaultOrder);

  const updateOrder = (updates: Partial<OrderState>) => {
    setOrder(prev => ({ ...prev, ...updates }));
  };

  const resetOrder = () => {
    setOrder(defaultOrder);
  };

  return (
    <ShopContext.Provider value={{ order, updateOrder, resetOrder }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};