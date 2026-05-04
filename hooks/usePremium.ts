import { useState, useEffect, useCallback } from 'react';
import { AsyncStorage_like } from '@/context/storage';
import { StoreService } from '@/services/StoreService';

export const FREE_CARD_LIMIT = 50;

export type PremiumPlan = 'monthly' | 'yearly';

export interface PurchaseResult {
  success: boolean;
  error?: string;
}

export interface PremiumState {
  isPremium: boolean;
  isLoading: boolean;
  purchasePlan: (plan: PremiumPlan) => Promise<PurchaseResult>;
  restorePurchases: () => Promise<boolean>;
  purchaseTip: (size: 'small' | 'medium' | 'large') => Promise<PurchaseResult>;
  isCardLocked: (cardIndex: number) => boolean;
  unlockPremium: () => void;
}

const PREMIUM_KEY = 'dharma_premium_v1';

let _isPremium = false;
let _listeners: Array<(v: boolean) => void> = [];

function broadcast(v: boolean) {
  _isPremium = v;
  _listeners.forEach((fn) => fn(v));
}

export function usePremium(): PremiumState {
  const [isPremium, setIsPremium] = useState(_isPremium);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const stored = StoreService.isPremiumActive() || AsyncStorage_like.get(PREMIUM_KEY) === 'true';
    if (stored !== _isPremium) broadcast(stored);
    const unsubRC = StoreService.onPremiumChange(broadcast);
    _listeners.push(setIsPremium);
    return () => {
      unsubRC();
      _listeners = _listeners.filter((fn) => fn !== setIsPremium);
    };
  }, []);

  const purchasePlan = useCallback(async (plan: PremiumPlan): Promise<PurchaseResult> => {
    setIsLoading(true);
    try {
      const productId = plan === 'yearly' ? 'dharma_premium_yearly' : 'dharma_premium_monthly';
      const result = await StoreService.purchase(productId);
      if (result.success) broadcast(true);
      return result;
    } catch (e) {
      return { success: false, error: String(e) };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const restorePurchases = useCallback(async (): Promise<boolean> => {
    setIsLoading(true);
    try {
      const ok = await StoreService.restore();
      if (ok) broadcast(true);
      return ok;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const purchaseTip = useCallback(
    async (_size: 'small' | 'medium' | 'large'): Promise<PurchaseResult> => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        return { success: false, error: 'Store non configuré en mode développement' };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const isCardLocked = useCallback(
    (cardIndex: number) => !isPremium && cardIndex >= FREE_CARD_LIMIT,
    [isPremium]
  );

  const unlockPremium = useCallback(() => {
    AsyncStorage_like.set(PREMIUM_KEY, 'true');
    broadcast(true);
  }, []);

  return { isPremium, isLoading, purchasePlan, restorePurchases, purchaseTip, isCardLocked, unlockPremium };
}
