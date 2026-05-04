import { useMemo } from 'react';
import { Theme } from '@/types';

export type BuddhistPeriod =
  | 'vesak'
  | 'asalha'
  | 'vassa'
  | 'kathina'
  | 'magha'
  | 'losar'
  | 'ordinary';

interface BuddhistEvent {
  name: string;
  date: [number, number, number]; // [year, month (1-based), day]
}

const BUDDHIST_EVENTS: BuddhistEvent[] = [
  // 2025
  { name: 'Magha Puja',    date: [2025, 2, 12] },
  { name: 'Losar',         date: [2025, 2, 28] },
  { name: 'Vesak',         date: [2025, 5, 12] },
  { name: 'Asalha Puja',   date: [2025, 7, 10] },
  { name: 'Début du Vassa', date: [2025, 7, 11] },
  { name: 'Fin du Vassa',  date: [2025, 10, 7] },
  { name: 'Kathina',       date: [2025, 10, 8] },
  // 2026
  { name: 'Losar',         date: [2026, 2, 17] },
  { name: 'Magha Puja',    date: [2026, 3, 3] },
  { name: 'Vesak',         date: [2026, 5, 4] },
  { name: 'Asalha Puja',   date: [2026, 7, 29] },
  { name: 'Début du Vassa', date: [2026, 7, 30] },
  { name: 'Fin du Vassa',  date: [2026, 10, 26] },
  // 2027
  { name: 'Vesak',         date: [2027, 5, 20] },
];

function toMs(y: number, m: number, d: number): number {
  return new Date(y, m - 1, d).getTime();
}

function getPeriod(now: Date): BuddhistPeriod {
  const t = now.getTime();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  const y = now.getFullYear();

  // Vesak: full moon of May (approx May 12 2025, May 4 2026, May 20 2027)
  const vesakDays: [number, number, number][] = [[2025, 5, 12], [2026, 5, 4], [2027, 5, 20]];
  for (const [vy, vm, vd] of vesakDays) {
    if (t >= toMs(vy, vm, vd) && t <= toMs(vy, vm, vd + 2)) return 'vesak';
  }

  // Asalha: full moon of July
  const asalhaDays: [number, number, number][] = [[2025, 7, 10], [2026, 7, 29]];
  for (const [ay, am, ad] of asalhaDays) {
    if (t >= toMs(ay, am, ad) && t <= toMs(ay, am, ad + 2)) return 'asalha';
  }

  // Vassa: July-October rain retreat
  const vassaPeriods: [number, number, number, number, number, number][] = [
    [2025, 7, 11, 2025, 10, 7],
    [2026, 7, 30, 2026, 10, 26],
  ];
  for (const [sy, sm, sd, ey, em, ed] of vassaPeriods) {
    if (t >= toMs(sy, sm, sd) && t <= toMs(ey, em, ed)) return 'vassa';
  }

  // Kathina: October-November (month after Vassa end)
  const kathinaPeriods: [number, number, number, number, number, number][] = [
    [2025, 10, 8, 2025, 11, 7],
    [2026, 10, 27, 2026, 11, 26],
  ];
  for (const [sy, sm, sd, ey, em, ed] of kathinaPeriods) {
    if (t >= toMs(sy, sm, sd) && t <= toMs(ey, em, ed)) return 'kathina';
  }

  // Magha: full moon of February-March
  const maghaDays: [number, number, number][] = [[2025, 2, 12], [2026, 3, 3]];
  for (const [my, mm, md] of maghaDays) {
    if (t >= toMs(my, mm, md) && t <= toMs(my, mm, md + 2)) return 'magha';
  }

  // Losar: Tibetan New Year (February)
  const losarDays: [number, number, number][] = [[2025, 2, 28], [2026, 2, 17]];
  for (const [ly, lm, ld] of losarDays) {
    if (t >= toMs(ly, lm, ld) && t <= toMs(ly, lm, ld + 2)) return 'losar';
  }

  return 'ordinary';
}

export const PERIOD_THEMES: Record<BuddhistPeriod, Theme[]> = {
  vesak:    ['Bodhi', 'Karuna', 'Metta'],
  asalha:   ['Prajna', 'Sati', 'Bodhi'],
  vassa:    ['Sati', 'Samadhi', 'Sila'],
  kathina:  ['Dana', 'Sila', 'Karuna'],
  magha:    ['Metta', 'Karuna', 'Sila'],
  losar:    ['Anicca', 'Karma', 'Bodhi'],
  ordinary: [],
};

export const PERIOD_LABELS: Record<BuddhistPeriod, string> = {
  vesak:    'Vesak — Éveil du Bouddha',
  asalha:   'Asalha — Premier Enseignement',
  vassa:    'Vassa — Retraite des Pluies',
  kathina:  'Kathina — Offrande des Robes',
  magha:    'Magha Puja — Assemblée des Moines',
  losar:    'Losar — Nouvel An Tibétain',
  ordinary: '',
};

export const PERIOD_EMOJI: Record<BuddhistPeriod, string> = {
  vesak:    '☸',
  asalha:   '🌙',
  vassa:    '🌧️',
  kathina:  '🪷',
  magha:    '✨',
  losar:    '🎐',
  ordinary: '🌿',
};

// Lunar phase calculation
const NEW_MOON_REF = new Date('2000-01-06T18:14:00Z').getTime();
const LUNAR_CYCLE_MS = 29.53059 * 24 * 3600 * 1000;
const PHASE_EMOJIS = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];

function getLunarPhase(date: Date) {
  const elapsed = date.getTime() - NEW_MOON_REF;
  const fraction = (((elapsed % LUNAR_CYCLE_MS) + LUNAR_CYCLE_MS) % LUNAR_CYCLE_MS) / LUNAR_CYCLE_MS;
  const idx = Math.floor(fraction * 8) % 8;
  const labels = [
    'Nouvelle lune', 'Croissant', 'Premier quartier', 'Gibbeuse croissante',
    'Pleine lune', 'Gibbeuse décroissante', 'Dernier quartier', 'Croissant décroissant',
  ];
  return { emoji: PHASE_EMOJIS[idx], label: labels[idx], fraction };
}

function daysUntilNextEvent(now: Date): { name: string; daysLeft: number } | null {
  const t = now.getTime();
  let best: { name: string; daysLeft: number } | null = null;

  for (const ev of BUDDHIST_EVENTS) {
    const evMs = toMs(...ev.date);
    const diff = Math.ceil((evMs - t) / 86400000);
    if (diff <= 0) continue;
    if (!best || diff < best.daysLeft) best = { name: ev.name, daysLeft: diff };
  }

  return best;
}

export interface BuddhistCalendarState {
  period: BuddhistPeriod;
  periodLabel: string;
  periodEmoji: string;
  lunarPhase: { emoji: string; label: string; fraction: number };
  nextEvent: { name: string; daysLeft: number } | null;
}

export function useBuddhistCalendar(): BuddhistCalendarState {
  return useMemo(() => {
    const now = new Date();
    const period = getPeriod(now);
    return {
      period,
      periodLabel: PERIOD_LABELS[period],
      periodEmoji: PERIOD_EMOJI[period],
      lunarPhase: getLunarPhase(now),
      nextEvent: daysUntilNextEvent(now),
    };
  }, [new Date().toDateString()]);
}
