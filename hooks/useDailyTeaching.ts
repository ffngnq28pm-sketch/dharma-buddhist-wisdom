import { useMemo } from 'react';

export interface DailyBuddhistWisdom {
  date: string;
  teaching: string;
  teacher: string;
  tradition: string;
  story: string;
  practice: string;
  pali?: string;
}

function getTodayMMDD(): string {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${mm}-${dd}`;
}

let BUDDHIST_WISDOM: DailyBuddhistWisdom[] = [];
try {
  BUDDHIST_WISDOM = require('@/data/buddhistWisdom').BUDDHIST_WISDOM ?? [];
} catch {}

const FALLBACK: DailyBuddhistWisdom = {
  date: '01-01',
  teaching: 'L\'impermanence comme libération',
  teacher: 'Bouddha Shakyamuni',
  tradition: 'Theravada',
  story: 'Le Bouddha, sous l\'arbre Bodhi, comprit que toutes choses surgissent et disparaissent — et que cette réalité même est la porte vers la paix.',
  practice: 'Observez aujourd\'hui trois choses qui ont changé depuis hier. Accueillez ce changement sans résistance.',
  pali: 'Anicca vata saṅkhārā',
};

export function useDailyTeaching(): DailyBuddhistWisdom {
  return useMemo(() => {
    const today = getTodayMMDD();
    return BUDDHIST_WISDOM.find((t) => t.date === today) ?? FALLBACK;
  }, []);
}
