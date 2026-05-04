export interface WisdomCard {
  id: string;
  pali: string; // original language text (Pali/Sanskrit/Tibetan transliteration)
  source: string;
  french: string;
  philosophy: string;
  philosophyAuthor: string;
  theme: Theme;
  sourceType: SourceType;
  backgroundImage: string;
  premium: boolean;
}

export type Theme =
  | 'Anicca' // Impermanence
  | 'Karuna' // Compassion
  | 'Metta' // Bienveillance
  | 'Prajna' // Sagesse
  | 'Sati' // Pleine conscience
  | 'Dana' // Générosité
  | 'Sila' // Éthique
  | 'Upekkha' // Équanimité
  | 'Bodhi' // Éveil
  | 'Nirvana' // Libération
  | 'Dukkha' // Souffrance transformée
  | 'Mudita' // Joie partagée
  | 'Shanti' // Paix
  | 'Samadhi' // Concentration
  | 'Karma'; // Action juste

export type SourceType =
  | 'Dhammapada'
  | 'Majjhima Nikaya'
  | 'Digha Nikaya'
  | 'Samyutta Nikaya'
  | 'Anguttara Nikaya'
  | 'Sutta Nipata'
  | 'Udana'
  | 'Itivuttaka'
  | 'Thich Nhat Hanh'
  | 'Shunryu Suzuki'
  | 'Ajahn Chah'
  | 'Pema Chödrön'
  | 'Nagarjuna'
  | 'Milarepa'
  | 'Bodhidharma'
  | 'Huang Po'
  | 'Dogen'
  | 'Matthieu Ricard';

// ── Education system ─────────────────────────────────────────

export type GradeLevel =
  | 'Éveillant'
  | 'Pratiquant'
  | 'Méditant'
  | 'Upasaka'
  | 'Samana'
  | 'Bhikkhu'
  | 'Thera'
  | 'Mahathera'
  | 'Bodhi'
  | 'Arahant';

export interface Lesson {
  id: string;
  moduleId: number;
  order: number;
  title: string;
  subtitle: string;
  content: string;
  keyPoints: string[];
  paliQuote?: string;
  paliSource?: string;
  duration: number;
}

export interface EducationModule {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export type QuizDifficulty = 'facile' | 'moyen' | 'difficile';

export interface QuizQuestion {
  id: string;
  moduleId: number;
  difficulty: QuizDifficulty;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  source?: string;
}

export interface ModuleProgress {
  moduleId: number;
  lessonsCompleted: string[];
  quizScores: number[];
  bestScore: number;
  unlocked: boolean;
}

export interface EducationProgress {
  modules: Record<number, ModuleProgress>;
  totalQuizAnswered: number;
  totalCorrect: number;
  grade: GradeLevel;
  gradeScore: number;
  lastActivity: string;
}
