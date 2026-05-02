export interface BuddhistTeacher {
  id: string;
  name: string;
  paliName: string;
  years: string;
  origin: string;
  tradition: string;
  portrait: string;
  description: string;
  legacy: string;
  famousQuote: string;
  works: string[];
  color: string;
}

export const BUDDHIST_TEACHERS: BuddhistTeacher[] = [
  {
    id: 'shakyamuni',
    name: 'Bouddha Shakyamuni',
    paliName: 'Siddhattha Gotama',
    years: '563 — 483 av. J.-C.',
    origin: 'Kapilavastu (Népal actuel)',
    tradition: 'Fondateur du Bouddhisme',
    portrait: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Fils du roi Suddhodana, Siddhattha Gotama grandit dans le luxe d'un palais jusqu'au jour où, à 29 ans, il découvrit la vieillesse, la maladie et la mort. Bouleversé, il quitta tout pour chercher la libération. Après six années d'austérités extrêmes, il trouva la Voie du Milieu et, méditant sous le figuier pippal à Bodhgaya, atteignit l'Éveil (Bodhi) à 35 ans. Il passa les 45 années suivantes à enseigner à des milliers d'êtres, des rois aux mendiants.",
    legacy: "Fondateur d'une tradition vivante qui compte 500 millions de pratiquants. Les Quatre Nobles Vérités et le Noble Octuple Sentier restent le cœur de l'enseignement. Son Parinirvana à Kusinara, à 80 ans, n'a pas mis fin à son influence — elle s'est amplifiée à travers toute l'Asie et le monde entier.",
    famousQuote: "Vous-même devez faire l'effort. Les Bouddhas ne font qu'indiquer le chemin.",
    works: ['Dhammapada', 'Majjhima Nikaya', 'Digha Nikaya', 'Sutta Nipata', 'Samyutta Nikaya'],
    color: '#C67C2B',
  },
  {
    id: 'nagarjuna',
    name: 'Nagarjuna',
    paliName: 'Nāgārjuna',
    years: '150 — 250 apr. J.-C.',
    origin: 'Inde du Sud (Andhra Pradesh)',
    tradition: 'Madhyamaka — Voie du Milieu',
    portrait: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Nagarjuna est souvent considéré comme le philosophe bouddhiste le plus influent après le Bouddha lui-même. Fondateur de l'école Madhyamaka (Voie du Milieu), il a démontré avec une rigueur logique exceptionnelle la doctrine de la Sunyata (vacuité) : tous les phénomènes sont vides d'existence propre, et c'est précisément cette vacuité qui permet leur interdépendance. Sa pensée a profondément influencé le Mahayana tibétain, zen et Hua Yen.",
    legacy: "Ses Mulamadhyamakakarika (Strophes fondamentales sur la Voie du Milieu) sont l'un des textes philosophiques les plus commentés de l'histoire bouddhiste. Il a établi le principe que la libération n'est pas une destination séparée du monde, mais la réalisation de la nature de ce monde même.",
    famousQuote: "Les choses n'existent pas en elles-mêmes, ni dans autre chose, ni dans les deux, ni sans cause.",
    works: ['Mulamadhyamakakarika', 'Vigrahavyavartani', 'Sunyatasaptati', 'Ratnavali'],
    color: '#4A6FA5',
  },
  {
    id: 'bodhidharma',
    name: 'Bodhidharma',
    paliName: 'Pútídámó (菩提達磨)',
    years: 'Ve — VIe siècle',
    origin: 'Inde du Sud / Chine',
    tradition: 'Chan (Zen) — Fondateur',
    portrait: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Moine indien légendaire, Bodhidharma traversa l'Himalaya pour apporter le Dharma en Chine, fondant ainsi l'école Chan (Zen). L'épisode célèbre de sa méditation de neuf ans face à un mur au temple Shaolin, et sa rencontre avec l'Empereur Wu — à qui il répond que le mérite accumulé par ses bonnes oeuvres est « absolument rien » — résument parfaitement sa pédagogie directe et paradoxale. Il enseigne la transmission directe « hors des écritures, directement vers le cœur ».",
    legacy: "Fondateur du Zen, Bodhidharma a transmis une approche de l'éveil radical qui transforme l'enseignement bouddhiste : pas de rituels complexes, pas de textes savants — seulement la conscience directe de la nature de l'esprit, ici et maintenant. Son lignage est à l'origine de toutes les écoles Zen, au Japon, en Corée et au Vietnam.",
    famousQuote: "Ne vous appuyez pas sur les mots et les lettres. Transmission directe hors des Écritures.",
    works: ['Anthologie du Patriarche Bodhi', 'Traité de deux entrées et quatre pratiques', 'Sermon de sang'],
    color: '#5A3A2A',
  },
  {
    id: 'milarepa',
    name: 'Milarepa',
    paliName: 'Jetsun Milarepa (རྗེ་བཙུན་མི་ལ་རས་པ)',
    years: '1052 — 1135',
    origin: 'Gungthang, Tibet',
    tradition: 'Vajrayana — Kagyupa',
    portrait: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "L'histoire de Milarepa est l'une des plus frappantes du bouddhisme tibétain. Après avoir pratiqué la magie noire pour venger sa famille et causé la mort de plusieurs personnes, il chercha la rédemption auprès du maître Marpa, qui lui imposa des années d'épreuves extraordinaires. Purifié par ces souffrances, il atteignit l'Éveil en une seule vie. Il vécut ensuite dans les grottes de l'Himalaya, vêtu d'un simple voile de coton, composant des milliers de chants mystiques.",
    legacy: "Milarepa est le symbole tibétain de la rédemption totale et de la possibilité d'atteindre l'Éveil en une seule vie. Ses Cent Mille Chants sont parmi les poèmes mystiques les plus beaux de la littérature mondiale. Il a transmis l'enseignement Mahamudra à son disciple Gampopa, fondant ainsi la lignée Kagyupa.",
    famousQuote: "Ma religion est d'aimer. Ma pratique est la compassion.",
    works: ['Les Cent Mille Chants de Milarepa', 'La Vie de Milarepa', 'Les Enseignements de Milarepa'],
    color: '#5A7A8A',
  },
  {
    id: 'dogen',
    name: 'Dogen Zenji',
    paliName: 'Dōgen Zenji (道元禅師)',
    years: '1200 — 1253',
    origin: 'Kyoto, Japon',
    tradition: 'Sōtō Zen',
    portrait: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Fondateur de l'école Sōtō Zen au Japon, Dogen voyagea en Chine pour étudier le bouddhisme Chan sous le maître Rujing. Il atteignit l'Éveil en entendant son maître dire à un moine somnolent : « Corps et esprit doivent tomber. » Dogen enseigna que le zazen (méditation assise) n'est pas un moyen d'atteindre l'Éveil — il est l'Éveil lui-même. Son Shobogenzo, écrit en japonais classique, est considéré comme l'un des plus grands chefs-d'œuvre philosophiques du Japon.",
    legacy: "Dogen a établi le zazen comme pratique centrale de la voie zen. Sa formule « La pratique et l'Éveil ne font qu'un » et son insistance sur « l'être-temps » (uji) ont profondément influencé la philosophie japonaise. Le Shobogenzo reste une référence incontournable pour les pratiquants zen du monde entier.",
    famousQuote: "Étudier la voie du Bouddha, c'est s'étudier soi-même. S'étudier soi-même, c'est s'oublier soi-même.",
    works: ['Shobogenzo', 'Tenzo Kyokun', 'Fukanzazengi', 'Eihei Koroku'],
    color: '#4A5A7A',
  },
  {
    id: 'thich-nhat-hanh',
    name: 'Thich Nhat Hanh',
    paliName: 'Thích Nhất Hạnh',
    years: '1926 — 2022',
    origin: 'Thừa Thiên-Huế, Vietnam · France',
    tradition: 'Pleine conscience engagée',
    portrait: 'https://images.pexels.com/photos/1819484/pexels-photo-1819484.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Moine zen vietnamien, Thich Nhat Hanh a développé le concept de « bouddhisme engagé » — une pratique qui unit méditation et action sociale. Pendant la guerre du Vietnam, il fonda l'Ordre de l'Interbeing et travailla pour la paix, ce qui lui valut l'exil. Il s'installa en France et fonda le Village des Pruniers en Dordogne, l'un des centres de méditation les plus influents au monde. Ses livres, traduits en cinquante langues, ont initié des millions de personnes à la pleine conscience.",
    legacy: "Thich Nhat Hanh a rendu le bouddhisme accessible à l'Occident sans le diluer. Son concept d'« interbeing » (interdépendance profonde) et ses pratiques simples — marche méditative, respiration consciente, écoute profonde — ont transformé la vie de millions de personnes, croyantes ou non.",
    famousQuote: "Le miracle, ce n'est pas de marcher sur les eaux. Le miracle, c'est de marcher sur la terre verte dans l'instant présent.",
    works: ['La Paix en soi, la paix en marche', 'Le Miracle de la pleine conscience', 'Être libre là où vous êtes', 'La Colère'],
    color: '#4A7A5A',
  },
  {
    id: 'ajahn-chah',
    name: 'Ajahn Chah',
    paliName: 'Phra Ajahn Chah Subhaddo',
    years: '1918 — 1992',
    origin: 'Ubon Ratchathani, Thaïlande',
    tradition: 'Forêt Theravada — Dhamma',
    portrait: 'https://images.pexels.com/photos/258510/pexels-photo-258510.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Ajahn Chah est l'un des maîtres Theravada les plus aimés du XXe siècle. Moine forestier thaïlandais, il atteignit l'Éveil après des années d'errance dans les forêts de Thaïlande. Il fonda le monastère de Wat Pah Pong et, pour ses disciples occidentaux, Wat Pah Nanachat. Son enseignement, direct, plein d'humour et profondément pratique, est empreint de la sagesse simple et directe de la tradition forestière. Ajahn Sumedho, son disciple principal, a fondé le premier monastère bouddhiste d'Occident en Angleterre.",
    legacy: "Ajahn Chah a formé une génération de maîtres occidentaux qui ont rendu le Theravada accessible en dehors de l'Asie. Son enseignement sur le lâcher-prise, la non-identification et la nature de l'esprit reste une référence vivante pour des milliers de pratiquants en Occident.",
    famousQuote: "Si tu lâches un peu, tu auras un peu de paix. Si tu lâches beaucoup, tu auras beaucoup de paix. Si tu lâches tout, tu auras une paix totale.",
    works: ['La Bodhi — Arbre de l\'Éveil', 'Tout simplement', 'L\'Eau immobile', 'Réfléchir à la nature'],
    color: '#8B5A2B',
  },
  {
    id: 'pema-chodron',
    name: 'Pema Chödrön',
    paliName: 'Ani Pema Chödrön (འི་མི་མ་ཆོས་སྒྲོན)',
    years: '1936 — présent',
    origin: 'New York, États-Unis · Nouvelle-Écosse, Canada',
    tradition: 'Vajrayana Shambhala',
    portrait: 'https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Première femme abbesse d'un monastère bouddhiste tibétain en Occident, Pema Chödrön a découvert le bouddhisme après un divorce difficile. Elle devint la disciple de Chögyam Trungpa Rinpoche et est maintenant abbesse du monastère Gampo Abbey en Nouvelle-Écosse. Ses enseignements, empreints de psychologie moderne et de sagesse tibétaine, touchent particulièrement les personnes traversant des périodes de souffrance, d'incertitude et de transformation.",
    legacy: "Pema Chödrön a rendu l'enseignement bouddhiste tibétain accessible aux Occidentaux en le traduisant dans un langage contemporain et psychologiquement ancré. Ses livres sur comment traverser la souffrance avec grâce — en particulier « Quand tout s'effondre » — ont transformé la vie de millions de personnes.",
    famousQuote: "Vous êtes l'être le plus proche de vous-même, et pourtant vous vous traitez souvent moins bien qu'un étranger.",
    works: ['Quand tout s\'effondre', 'L\'Art de la méditation', 'La Sagesse de l\'insécurité', 'Commencer là où vous êtes'],
    color: '#8B4A6F',
  },
];
