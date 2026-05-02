import React, { createContext, useContext, useState, useEffect } from 'react';
import { AsyncStorage_like } from './storage';

export type AppTheme = 'dark' | 'light' | 'sepia';

export interface ThemeColors {
  bg: string;
  bgCard: string;
  bgSection: string;
  bgInput: string;
  bgTabBar: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textAccent: string;
  border: string;
  borderAccent: string;
  cardGradient: [string, string, string];
  statusBar: 'light' | 'dark';
}

const THEMES: Record<AppTheme, ThemeColors> = {
  dark: {
    bg: '#080C09',
    bgCard: '#0D1410',
    bgSection: 'rgba(198,124,43,0.05)',
    bgInput: 'rgba(198,124,43,0.08)',
    bgTabBar: '#0D1410',
    textPrimary: '#F5EDE0',
    textSecondary: '#C8B898',
    textMuted: '#6B5A40',
    textAccent: '#C67C2B',
    border: 'rgba(198,124,43,0.10)',
    borderAccent: 'rgba(198,124,43,0.35)',
    cardGradient: ['rgba(8,12,9,0.45)', 'rgba(8,12,9,0.72)', 'rgba(8,12,9,0.93)'],
    statusBar: 'light',
  },
  light: {
    bg: '#F9F4EC',
    bgCard: '#FFFFFF',
    bgSection: 'rgba(0,0,0,0.03)',
    bgInput: 'rgba(0,0,0,0.05)',
    bgTabBar: '#FFFFFF',
    textPrimary: '#1A1008',
    textSecondary: '#3A2A18',
    textMuted: '#8A7258',
    textAccent: '#A8682A',
    border: 'rgba(0,0,0,0.08)',
    borderAccent: 'rgba(168,104,42,0.4)',
    cardGradient: ['rgba(10,6,0,0.15)', 'rgba(10,6,0,0.50)', 'rgba(10,6,0,0.85)'],
    statusBar: 'dark',
  },
  sepia: {
    bg: '#0A0C05',
    bgCard: '#121508',
    bgSection: 'rgba(198,124,43,0.06)',
    bgInput: 'rgba(198,124,43,0.08)',
    bgTabBar: '#0A0C05',
    textPrimary: '#EAD8A8',
    textSecondary: '#C8A878',
    textMuted: '#7A6040',
    textAccent: '#D4A03C',
    border: 'rgba(210,170,90,0.12)',
    borderAccent: 'rgba(212,160,60,0.4)',
    cardGradient: ['rgba(10,12,5,0.35)', 'rgba(10,12,5,0.65)', 'rgba(10,12,5,0.93)'],
    statusBar: 'light',
  },
};

interface ThemeCtx {
  theme: AppTheme;
  colors: ThemeColors;
  setTheme: (t: AppTheme) => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: 'dark',
  colors: THEMES.dark,
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<AppTheme>('dark');

  useEffect(() => {
    const saved = AsyncStorage_like.get('dharma_theme') as AppTheme | null;
    if (saved && THEMES[saved]) setThemeState(saved);
  }, []);

  function setTheme(t: AppTheme) {
    setThemeState(t);
    AsyncStorage_like.set('dharma_theme', t);
  }

  return (
    <ThemeContext.Provider value={{ theme, colors: THEMES[theme], setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export { THEMES };
