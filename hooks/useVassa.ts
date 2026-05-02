import { useMemo } from 'react';

// Vassa (Rain Retreat): 90 days, organized by 4 Foundations of Mindfulness (Satipatthana)
// Days 1-22:  Kaya    (Corps)      — deep green '#4A7A5A'
// Days 23-45: Vedana  (Sensations) — earth      '#7A5A4A'
// Days 46-67: Citta   (Esprit)     — deep blue  '#4A5A7A'
// Days 68-90: Dhamma  (Phénomènes) — saffron    '#C67C2B'

const VASSA_SEASONS = [
  { start: new Date(2025, 6, 11), end: new Date(2025, 9, 7), total: 90 },   // Jul 11 – Oct 7 2025
  { start: new Date(2026, 6, 30), end: new Date(2026, 9, 26), total: 90 },  // Jul 30 – Oct 26 2026
];

export type Foundation = 'Kaya' | 'Vedana' | 'Citta' | 'Dhamma';

const FOUNDATION_RANGES: { foundation: Foundation; dayStart: number; dayEnd: number; color: string; label: string; desc: string }[] = [
  { foundation: 'Kaya',   dayStart: 1,  dayEnd: 22, color: '#4A7A5A', label: 'Kāya — Corps',        desc: 'Méditation sur le corps, le souffle et la posture' },
  { foundation: 'Vedana', dayStart: 23, dayEnd: 45, color: '#7A5A4A', label: 'Vedanā — Sensations', desc: 'Observation des tonalités agréables, neutres et désagréables' },
  { foundation: 'Citta',  dayStart: 46, dayEnd: 67, color: '#4A5A7A', label: 'Citta — Esprit',      desc: 'Observation des états mentaux, pensées et émotions' },
  { foundation: 'Dhamma', dayStart: 68, dayEnd: 90, color: '#C67C2B', label: 'Dhamma — Phénomènes', desc: 'Les Cinq Agrégats, les Six Bases sensorielles et les obstacles' },
];

export function getFoundationForDay(day: number): (typeof FOUNDATION_RANGES)[number] {
  return FOUNDATION_RANGES.find((r) => day >= r.dayStart && day <= r.dayEnd) ?? FOUNDATION_RANGES[3];
}

export interface VassaState {
  isVassa: boolean;
  day: number;
  total: number;
  daysLeft: number;
  foundationLabel: string;
  satipatthanaColor: string;
  foundation: Foundation;
  nextSeason: string | null;
  daysUntilNext: number;
}

export function useVassa(): VassaState {
  return useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    for (const season of VASSA_SEASONS) {
      const start = new Date(season.start);
      start.setHours(0, 0, 0, 0);
      const end = new Date(season.end);
      end.setHours(0, 0, 0, 0);

      if (now >= start && now <= end) {
        const day = Math.floor((now.getTime() - start.getTime()) / 86400000) + 1;
        const daysLeft = Math.ceil((end.getTime() - now.getTime()) / 86400000);
        const foundationInfo = getFoundationForDay(day);
        return {
          isVassa: true,
          day,
          total: season.total,
          daysLeft,
          foundationLabel: foundationInfo.label,
          satipatthanaColor: foundationInfo.color,
          foundation: foundationInfo.foundation,
          nextSeason: null,
          daysUntilNext: 0,
        };
      }
    }

    // Not in Vassa — find next
    let nextSeason: string | null = null;
    let daysUntilNext = 9999;

    for (const season of VASSA_SEASONS) {
      const start = new Date(season.start);
      start.setHours(0, 0, 0, 0);
      const diff = Math.ceil((start.getTime() - now.getTime()) / 86400000);
      if (diff > 0 && diff < daysUntilNext) {
        daysUntilNext = diff;
        nextSeason = 'Vassa — Retraite des Pluies';
      }
    }

    return {
      isVassa: false,
      day: 0,
      total: 90,
      daysLeft: 0,
      foundationLabel: '',
      satipatthanaColor: '#C67C2B',
      foundation: 'Kaya',
      nextSeason,
      daysUntilNext,
    };
  }, [new Date().toDateString()]);
}
