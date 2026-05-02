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
