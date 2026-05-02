import { useState, useCallback, useEffect } from 'react';
import { AsyncStorage_like } from '@/context/storage';

const JOURNAL_KEY = 'dharma_journal_v1';
const SESSION_DONE_KEY = 'dharma_session_done_v1';
const PATH_PROGRESS_KEY = 'dharma_path_progress_v1';

// ── Journal ──

export interface JournalEntry {
  id: string;
  date: string; // ISO date string
  presence: string;
  impermanence: string;
  compassion: string;
  teaching: string;
  intention: string;
  gratitude: string;
}

type JournalStore = Record<string, JournalEntry>;

function loadJournal(): JournalStore {
  const raw = AsyncStorage_like.get(JOURNAL_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as JournalStore;
  } catch {
    return {};
  }
}

function saveJournal(store: JournalStore): void {
  AsyncStorage_like.set(JOURNAL_KEY, JSON.stringify(store));
}

// ── Session Done ──

type SessionDoneStore = Record<string, string>; // sessionId → ISO date

function loadSessionDone(): SessionDoneStore {
  const raw = AsyncStorage_like.get(SESSION_DONE_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as SessionDoneStore;
  } catch {
    return {};
  }
}

function saveSessionDone(store: SessionDoneStore): void {
  AsyncStorage_like.set(SESSION_DONE_KEY, JSON.stringify(store));
}

// ── Path Progress ──

export interface PathProgress {
  pathId: string;
  startedAt: string; // ISO date
  completedDays: number[];
  lastActiveAt: string; // ISO date
}

type PathProgressStore = Record<string, PathProgress>;

function loadPathProgress(): PathProgressStore {
  const raw = AsyncStorage_like.get(PATH_PROGRESS_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as PathProgressStore;
  } catch {
    return {};
  }
}

function savePathProgress(store: PathProgressStore): void {
  AsyncStorage_like.set(PATH_PROGRESS_KEY, JSON.stringify(store));
}

// ── Hook ──

export interface UsePracticeReturn {
  // Journal
  journalEntries: JournalStore;
  getJournalEntry: (date: string) => JournalEntry | null;
  saveJournalEntry: (entry: Omit<JournalEntry, 'id'>) => void;
  journalStreak: number;

  // Sessions
  sessionDone: SessionDoneStore;
  markSessionDone: (sessionId: string) => void;
  isSessionDone: (sessionId: string) => boolean;
  totalSessionsDone: number;

  // Paths
  pathProgress: PathProgressStore;
  startPath: (pathId: string) => void;
  markPathDayDone: (pathId: string, day: number) => void;
  getPathProgress: (pathId: string) => PathProgress | null;
  isPathStarted: (pathId: string) => boolean;
}

export function usePractice(): UsePracticeReturn {
  const [journalEntries, setJournalEntries] = useState<JournalStore>(loadJournal);
  const [sessionDone, setSessionDone] = useState<SessionDoneStore>(loadSessionDone);
  const [pathProgress, setPathProgress] = useState<PathProgressStore>(loadPathProgress);

  // Reload on mount in case of cross-component updates
  useEffect(() => {
    setJournalEntries(loadJournal());
    setSessionDone(loadSessionDone());
    setPathProgress(loadPathProgress());
  }, []);

  // ── Journal ──

  const getJournalEntry = useCallback(
    (date: string): JournalEntry | null => {
      return journalEntries[date] ?? null;
    },
    [journalEntries]
  );

  const saveJournalEntryFn = useCallback(
    (entry: Omit<JournalEntry, 'id'>): void => {
      setJournalEntries((prev) => {
        const updated: JournalStore = {
          ...prev,
          [entry.date]: { ...entry, id: entry.date },
        };
        saveJournal(updated);
        return updated;
      });
    },
    []
  );

  const journalStreak = (() => {
    const today = new Date();
    let streak = 0;
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const key = d.toISOString().split('T')[0];
      if (journalEntries[key]) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  })();

  // ── Sessions ──

  const markSessionDone = useCallback((sessionId: string): void => {
    setSessionDone((prev) => {
      const updated: SessionDoneStore = {
        ...prev,
        [sessionId]: new Date().toISOString(),
      };
      saveSessionDone(updated);
      return updated;
    });
  }, []);

  const isSessionDone = useCallback(
    (sessionId: string): boolean => {
      return sessionId in sessionDone;
    },
    [sessionDone]
  );

  const totalSessionsDone = Object.keys(sessionDone).length;

  // ── Paths ──

  const startPath = useCallback((pathId: string): void => {
    setPathProgress((prev) => {
      if (prev[pathId]) return prev; // already started
      const now = new Date().toISOString();
      const updated: PathProgressStore = {
        ...prev,
        [pathId]: {
          pathId,
          startedAt: now,
          completedDays: [],
          lastActiveAt: now,
        },
      };
      savePathProgress(updated);
      return updated;
    });
  }, []);

  const markPathDayDone = useCallback((pathId: string, day: number): void => {
    setPathProgress((prev) => {
      const existing = prev[pathId];
      if (!existing) return prev;
      const completedDays = existing.completedDays.includes(day)
        ? existing.completedDays
        : [...existing.completedDays, day];
      const updated: PathProgressStore = {
        ...prev,
        [pathId]: {
          ...existing,
          completedDays,
          lastActiveAt: new Date().toISOString(),
        },
      };
      savePathProgress(updated);
      return updated;
    });
  }, []);

  const getPathProgress = useCallback(
    (pathId: string): PathProgress | null => {
      return pathProgress[pathId] ?? null;
    },
    [pathProgress]
  );

  const isPathStarted = useCallback(
    (pathId: string): boolean => {
      return pathId in pathProgress;
    },
    [pathProgress]
  );

  return {
    journalEntries,
    getJournalEntry,
    saveJournalEntry: saveJournalEntryFn,
    journalStreak,

    sessionDone,
    markSessionDone,
    isSessionDone,
    totalSessionsDone,

    pathProgress,
    startPath,
    markPathDayDone,
    getPathProgress,
    isPathStarted,
  };
}
