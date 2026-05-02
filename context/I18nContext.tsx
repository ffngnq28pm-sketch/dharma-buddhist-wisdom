import React, { createContext, useContext, useState, useEffect } from 'react';
import { AsyncStorage_like } from './storage';

export type Language = 'fr' | 'en';

export interface Translations {
  tabToday: string;
  tabLibrary: string;
  tabVassa: string;
  tabFavorites: string;
  tabSettings: string;
  wisdomOfDay: string;
  card: string;
  of: string;
  library: string;
  wisdoms: string;
  themes: string;
  sources: string;
  all: string;
  eightfoldPath: string;
  eightfoldPathSub: string;
  eightfoldPathDesc: string;
  teachers: string;
  teachersDesc: string;
  favorites: string;
  noFavorites: string;
  noFavoritesText: string;
  settings: string;
  profile: string;
  yourName: string;
  addName: string;
  greetingPreview: string;
  monthlyIntent: string;
  focusTheme: string;
  notifications: string;
  dailyWisdom: string;
  receiveDaily: string;
  sendTime: string;
  notifTheme: string;
  random: string;
  visualTheme: string;
  language: string;
  interfaceLanguage: string;
  about: string;
  aboutDharma: string;
  version: string;
  tagline: string;
  save: string;
  themeDark: string;
  themeLight: string;
  themeSepia: string;
  themeDarkDesc: string;
  themeLightDesc: string;
  themeSepiaDesc: string;
  vassaTitle: string;
  dayOf: string;
  previewMode: string;
  deepMeaning: string;
  exclusivePremium: string;
  tradition: string;
  bornIn: string;
  legacy: string;
  famousQuote: string;
  shareCard: string;
  shareCardTitle: string;
  preview: string;
  shareBtn: string;
  premiumTitle: string;
  premiumDesc: string;
  premiumSee: string;
  premiumActive: string;
  daysOf: string;
  days: string;
  day: string;
}

const FR: Translations = {
  tabToday: "Aujourd'hui",
  tabLibrary: 'Bibliothèque',
  tabVassa: 'Vassa',
  tabFavorites: 'Favoris',
  tabSettings: 'Réglages',
  wisdomOfDay: 'SAGESSE DU JOUR',
  card: 'CARTE',
  of: '/',
  library: 'Bibliothèque',
  wisdoms: 'sagesses',
  themes: 'Thèmes',
  sources: 'Sources',
  all: 'Tout',
  eightfoldPath: 'Noble Octuple Sentier',
  eightfoldPathSub: 'Aṣṭāṅga Mārga',
  eightfoldPathDesc: 'Collection exclusive — 8 volets',
  teachers: 'Maîtres du Dharma',
  teachersDesc: 'Série encyclopédique premium',
  favorites: 'Favoris',
  noFavorites: 'Aucun favori',
  noFavoritesText: "Touchez le cœur d'une sagesse pour la retrouver ici.",
  settings: 'Réglages',
  profile: 'PROFIL',
  yourName: 'Votre prénom',
  addName: 'Ajouter votre prénom...',
  greetingPreview: 'Utilisé pour : "Bonjour {name}, voici votre sagesse du jour"',
  monthlyIntent: 'INTENTION DU MOIS',
  focusTheme: 'Thème de méditation',
  notifications: 'NOTIFICATIONS',
  dailyWisdom: 'Sagesse quotidienne',
  receiveDaily: 'Recevez une sagesse chaque jour',
  sendTime: "Moment de pratique",
  notifTheme: 'Thème des notifications',
  random: 'Aléatoire',
  visualTheme: 'THÈME VISUEL',
  language: 'LANGUE',
  interfaceLanguage: "Langue de l'interface",
  about: 'À PROPOS',
  aboutDharma: 'À propos de Dharma',
  version: 'Version 1.0.0',
  tagline: 'Sagesse bouddhiste — chaque jour.',
  save: 'Sauvegarder',
  themeDark: 'Nuit du Dharma',
  themeLight: 'Aube dorée',
  themeSepia: 'Parchemin ancien',
  themeDarkDesc: 'Forêt nocturne — méditation profonde',
  themeLightDesc: 'Parchemin chaud — pratique du matin',
  themeSepiaDesc: 'Feuille ancienne — calligraphie zen',
  vassaTitle: 'Vassa — Retraite des Pluies',
  dayOf: 'Jour',
  previewMode: 'Aperçu',
  deepMeaning: 'SENS BOUDDHISTE',
  exclusivePremium: 'Collection Exclusive Premium',
  tradition: 'Tradition',
  bornIn: 'Né à',
  legacy: 'Héritage',
  famousQuote: 'Citation célèbre',
  shareCard: 'Partager',
  shareCardTitle: 'Partager',
  preview: 'APERÇU',
  shareBtn: 'Partager',
  premiumTitle: 'Dharma Premium',
  premiumDesc: 'Accédez à la sagesse complète',
  premiumSee: 'Découvrir',
  premiumActive: 'Dharma Premium actif',
  daysOf: 'jours de',
  days: 'jours',
  day: 'jour',
};

const EN: Translations = {
  tabToday: 'Today',
  tabLibrary: 'Library',
  tabVassa: 'Vassa',
  tabFavorites: 'Favorites',
  tabSettings: 'Settings',
  wisdomOfDay: 'WISDOM OF THE DAY',
  card: 'CARD',
  of: '/',
  library: 'Library',
  wisdoms: 'wisdoms',
  themes: 'Themes',
  sources: 'Sources',
  all: 'All',
  eightfoldPath: 'Noble Eightfold Path',
  eightfoldPathSub: 'Aṣṭāṅga Mārga',
  eightfoldPathDesc: 'Exclusive collection — 8 spokes',
  teachers: 'Dharma Masters',
  teachersDesc: 'Premium encyclopedia series',
  favorites: 'Favorites',
  noFavorites: 'No favorites yet',
  noFavoritesText: 'Tap the heart on a wisdom card to save it here.',
  settings: 'Settings',
  profile: 'PROFILE',
  yourName: 'Your first name',
  addName: 'Add your name...',
  greetingPreview: 'Used for: "Good morning {name}, here is your wisdom for today"',
  monthlyIntent: 'MONTHLY INTENTION',
  focusTheme: 'Meditation theme',
  notifications: 'NOTIFICATIONS',
  dailyWisdom: 'Daily wisdom',
  receiveDaily: 'Receive a wisdom every day',
  sendTime: 'Practice moment',
  notifTheme: 'Notification theme',
  random: 'Random',
  visualTheme: 'VISUAL THEME',
  language: 'LANGUAGE',
  interfaceLanguage: 'Interface language',
  about: 'ABOUT',
  aboutDharma: 'About Dharma',
  version: 'Version 1.0.0',
  tagline: 'Buddhist wisdom — every day.',
  save: 'Save',
  themeDark: 'Dharma Night',
  themeLight: 'Golden Dawn',
  themeSepia: 'Ancient Parchment',
  themeDarkDesc: 'Dark forest — deep meditation',
  themeLightDesc: 'Warm parchment — morning practice',
  themeSepiaDesc: 'Ancient leaf — zen calligraphy',
  vassaTitle: 'Vassa — Rain Retreat',
  dayOf: 'Day',
  previewMode: 'Preview',
  deepMeaning: 'BUDDHIST MEANING',
  exclusivePremium: 'Exclusive Premium Collection',
  tradition: 'Tradition',
  bornIn: 'Born in',
  legacy: 'Legacy',
  famousQuote: 'Famous quote',
  shareCard: 'Share',
  shareCardTitle: 'Share',
  preview: 'PREVIEW',
  shareBtn: 'Share',
  premiumTitle: 'Dharma Premium',
  premiumDesc: 'Access all the wisdom',
  premiumSee: 'Discover',
  premiumActive: 'Dharma Premium active',
  daysOf: 'days of',
  days: 'days',
  day: 'day',
};

export const LANG_MAP: Record<Language, Translations> = { fr: FR, en: EN };

export const LANG_META: { code: Language; label: string; native: string; rtl: boolean }[] = [
  { code: 'fr', label: 'Français', native: 'Français', rtl: false },
  { code: 'en', label: 'English', native: 'English', rtl: false },
];

interface I18nCtx {
  lang: Language;
  t: Translations;
  setLang: (l: Language) => void;
  isRTL: boolean;
}

const I18nContext = createContext<I18nCtx>({
  lang: 'fr',
  t: FR,
  setLang: () => {},
  isRTL: false,
});

const KEY = 'dharma_language';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('fr');

  useEffect(() => {
    const saved = AsyncStorage_like.get(KEY) as Language | null;
    if (saved && LANG_MAP[saved]) setLangState(saved);
  }, []);

  function setLang(l: Language) {
    setLangState(l);
    AsyncStorage_like.set(KEY, l);
  }

  const t = LANG_MAP[lang];

  return (
    <I18nContext.Provider value={{ lang, t, setLang, isRTL: false }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
