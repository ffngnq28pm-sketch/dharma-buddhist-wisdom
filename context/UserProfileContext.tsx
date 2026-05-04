import React, { createContext, useContext, useState, useEffect } from 'react';
import { AsyncStorage_like } from './storage';

export type FocusTheme = 'Anicca' | 'Karuna' | 'Prajna' | 'Sati' | 'Metta' | 'Shanti';
export type NotifPreset = 'Aube' | 'Matin' | 'Midi' | 'Soir' | 'Veillée';
export type AppTheme = 'dark' | 'light' | 'sepia';

export interface UserProfile {
  firstName: string;
  focusTheme: FocusTheme;
  focusStartedAt: number;
  notifEnabled: boolean;
  notifPreset: NotifPreset;
  notifTheme: string;
  appTheme: AppTheme;
  onboardingDone: boolean;
}

const DEFAULT: UserProfile = {
  firstName: '',
  focusTheme: 'Sati',
  focusStartedAt: Date.now(),
  notifEnabled: false,
  notifPreset: 'Matin',
  notifTheme: '',
  appTheme: 'dark',
  onboardingDone: false,
};

interface ProfileCtx {
  profile: UserProfile;
  update: (patch: Partial<UserProfile>) => void;
  focusDays: number;
}

const ProfileContext = createContext<ProfileCtx>({
  profile: DEFAULT,
  update: () => {},
  focusDays: 0,
});

const KEY = 'dharma_user_profile';

export function UserProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT);

  useEffect(() => {
    const raw = AsyncStorage_like.get(KEY);
    if (raw) {
      try {
        setProfile({ ...DEFAULT, ...JSON.parse(raw) });
      } catch {}
    }
  }, []);

  function update(patch: Partial<UserProfile>) {
    setProfile((prev) => {
      const next = { ...prev, ...patch };
      AsyncStorage_like.set(KEY, JSON.stringify(next));
      return next;
    });
  }

  const focusDays = Math.max(
    1,
    Math.floor((Date.now() - profile.focusStartedAt) / 86400000) + 1
  );

  return (
    <ProfileContext.Provider value={{ profile, update, focusDays }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useUserProfile() {
  return useContext(ProfileContext);
}

export const FOCUS_THEMES: FocusTheme[] = [
  'Anicca',
  'Karuna',
  'Prajna',
  'Sati',
  'Metta',
  'Shanti',
];

export const FOCUS_THEME_ICONS: Record<FocusTheme, string> = {
  Anicca: '☸',
  Karuna: '🤝',
  Prajna: '⚖️',
  Sati: '🌿',
  Metta: '💛',
  Shanti: '🕊️',
};

export const NOTIF_PRESETS: { key: NotifPreset; label: string; time: string; desc: string }[] = [
  { key: 'Aube',    label: 'Aube',    time: '05:30', desc: "Méditation de l'aube — éveil intérieur" },
  { key: 'Matin',   label: 'Matin',   time: '08:00', desc: 'Pratique du matin' },
  { key: 'Midi',    label: 'Midi',    time: '12:00', desc: 'Pleine conscience de mi-journée' },
  { key: 'Soir',    label: 'Soir',    time: '18:00', desc: 'Méditation du coucher du soleil' },
  { key: 'Veillée', label: 'Veillée', time: '21:00', desc: 'Contemplation nocturne' },
];
