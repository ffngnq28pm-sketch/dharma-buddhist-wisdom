export interface EightfoldSpoke {
  id: string;
  number: number;
  paliName: string;
  french: string;
  category: 'Prajna' | 'Sila' | 'Samadhi';
  color: string;
  description: string;
  practice: string;
  quote: string;
  quoteSource: string;
}

export const EIGHTFOLD_PATH: EightfoldSpoke[] = [
  {
    id: 'samma-ditthi',
    number: 1,
    paliName: 'Sammā-diṭṭhi',
    french: 'Compréhension juste',
    category: 'Prajna',
    color: '#C67C2B',
    description: "La compréhension juste est la vision claire de la réalité telle qu'elle est. Elle consiste à comprendre les Quatre Nobles Vérités : la nature de la souffrance (dukkha), son origine dans le désir (samudaya), sa cessation possible (nirodha) et le chemin qui y mène (magga). C'est voir les phénomènes tels qu'ils sont — impermanents, interdépendants, sans soi fixe. Cette compréhension n'est pas intellectuelle seulement ; elle s'approfondit avec la pratique et la méditation.",
    practice: "Contemplez chaque jour la nature impermanente de vos expériences. Observez comment les plaisirs et peines apparaissent et disparaissent. Méditez sur les Quatre Nobles Vérités. Lisez et réfléchissez aux enseignements du Bouddha. Questionnez vos présupposés sur le 'moi' et la permanence.",
    quote: "Qu'est-ce que la compréhension juste ? Comprendre la souffrance, comprendre l'origine de la souffrance, comprendre la cessation de la souffrance, comprendre le chemin menant à la cessation de la souffrance.",
    quoteSource: "Majjhima Nikaya 141",
  },
  {
    id: 'samma-sankappa',
    number: 2,
    paliName: 'Sammā-saṅkappa',
    french: 'Intention juste',
    category: 'Prajna',
    color: '#B5692A',
    description: "L'intention juste désigne les motivations qui orientent nos pensées et actions. Elle comprend trois aspects : l'intention de renoncement (nekkhamma-saṅkappa) — renoncer aux désirs sensuels pour une joie plus profonde ; l'intention de bienveillance (abyāpāda-saṅkappa) — vouloir le bien pour tous les êtres sans exception ; et l'intention de non-nuisance (avihiṃsā-saṅkappa) — agir sans violence, avec compassion. C'est purifier la source même de nos actions.",
    practice: "Au début de chaque journée, posez l'intention d'agir avec sagesse, bienveillance et non-nuisance. Avant toute action importante, vérifiez : 'Cela contribue-t-il à réduire la souffrance ou à l'augmenter ?' Cultivez des pensées de metta (bienveillance aimante) vers vous-même et les autres. Pratiquez le renoncement progressif des attachements.",
    quote: "Pensées de renoncement, pensées de non-mauvaise-volonté, pensées de non-cruauté — voilà ce qu'on appelle l'intention juste.",
    quoteSource: "Digha Nikaya 22",
  },
  {
    id: 'samma-vaca',
    number: 3,
    paliName: 'Sammā-vācā',
    french: 'Parole juste',
    category: 'Sila',
    color: '#4A7A5A',
    description: "La parole juste est l'un des fondements de l'éthique bouddhiste. Elle implique de s'abstenir de quatre formes de parole nocive : le mensonge (qui trompe), les paroles divisantes (qui sèment la discorde), les paroles blessantes (qui blessent ou humilient), et les bavardages futiles (qui n'ont aucune valeur). La parole juste est véridique, aimante, unificatrice et utile. Chaque mot prononcé est une semence — qu'est-ce que vous souhaitez cultiver dans le monde ?",
    practice: "Avant de parler, appliquez le triple filtre : Est-ce vrai ? Est-ce aimable ? Est-ce utile ? Pratiquez le silence conscient — observez la tendance à combler chaque silence. Pratiquez l'écoute profonde, sans préparer votre réponse. Notez dans un journal les moments où votre parole a apporté du bien.",
    quote: "Et qu'est-ce que la parole juste ? S'abstenir du mensonge, de la parole divisante, de la parole blessante et du bavardage futile.",
    quoteSource: "Samyutta Nikaya 45.8",
  },
  {
    id: 'samma-kammanta',
    number: 4,
    paliName: 'Sammā-kammanta',
    french: 'Action juste',
    category: 'Sila',
    color: '#3D6B4D',
    description: "L'action juste concerne la conduite corporelle et ses effets sur les êtres. Elle repose sur trois piliers : s'abstenir de tuer tout être vivant (ahimsā), s'abstenir de voler ou de prendre ce qui n'est pas donné, et s'abstenir d'une conduite sexuelle nuisible. Ces principes ne sont pas de simples interdictions — ils reflètent la reconnaissance que nos actions créent des ondulations dans le tissu de l'interdépendance. Chaque geste juste contribue à la paix du monde.",
    practice: "Pratiquez l'ahimsa (non-violence) dans vos actions quotidiennes : envers les animaux, la nature, les autres humains. Examinez votre consommation — comment vos achats affectent-ils d'autres êtres ? Cultivez la simplicité et l'équité. Engagez-vous dans des actes de service (seva) réguliers. Observez les conséquences de vos actions avec attention et sans jugement.",
    quote: "S'abstenir de prendre la vie, s'abstenir de prendre ce qui n'est pas donné, s'abstenir d'une conduite sexuelle incorrecte — cela s'appelle l'action juste.",
    quoteSource: "Digha Nikaya 22",
  },
  {
    id: 'samma-ajiva',
    number: 5,
    paliName: 'Sammā-ājīva',
    french: "Moyen d'existence juste",
    category: 'Sila',
    color: '#2D5C3E',
    description: "Le moyen d'existence juste s'applique à la façon dont nous gagnons notre vie. Le Bouddha a précisé cinq métiers à éviter car ils causent de la souffrance : le commerce d'armes, le commerce d'êtres vivants (esclavage, traite d'animaux), l'élevage pour l'abattoir, le commerce de poisons et le commerce d'alcool. Plus largement, tout travail qui implique de tromper, d'exploiter, de nuire ou de créer de l'addiction est contraire au Dharma. Nos activités économiques participent de notre pratique spirituelle.",
    practice: "Examinez votre travail actuel : contribue-t-il à réduire ou à augmenter la souffrance ? Si vous ne pouvez changer d'emploi immédiatement, comment pouvez-vous agir de manière plus éthique dans votre cadre de travail ? Consommez de manière consciente. Investissez dans des entreprises qui respectent les êtres. Explorez ce que serait un travail en alignement total avec le Dharma.",
    quote: "Et qu'est-ce que le moyen d'existence juste ? Un noble disciple, ayant abandonné un moyen d'existence faux, gagne sa vie par un moyen d'existence juste.",
    quoteSource: "Majjhima Nikaya 117",
  },
  {
    id: 'samma-vayama',
    number: 6,
    paliName: 'Sammā-vāyāma',
    french: 'Effort juste',
    category: 'Samadhi',
    color: '#4A5A7A',
    description: "L'effort juste constitue le moteur énergétique du chemin. Il comprend quatre dimensions : empêcher les états mentaux négatifs non encore apparus de surgir, abandonner ceux déjà présents, cultiver les états mentaux positifs non encore apparus, et maintenir ceux déjà présents. C'est l'art de l'équilibre entre trop d'effort (qui produit l'agitation) et trop peu (qui produit la torpeur) — comme accorder les cordes d'un instrument ni trop tendues ni trop lâches.",
    practice: "Méditez régulièrement, même peu de temps chaque jour — la régularité prime sur la durée. Observez les tendances mentales qui vous entravent : agitation, torpeur, doute, désir, animosité. Cultivez activement les qualités qui nourrissent l'éveil : sati, samadhi, metta. Après chaque pratique, notez ce qui a bien fonctionné et ce qui peut s'améliorer.",
    quote: "Il génère l'aspiration, s'efforce, active l'énergie, soutient et tend l'esprit pour empêcher les états mauvais de surgir.",
    quoteSource: "Digha Nikaya 22",
  },
  {
    id: 'samma-sati',
    number: 7,
    paliName: 'Sammā-sati',
    french: 'Pleine conscience',
    category: 'Samadhi',
    color: '#3D4E6B',
    description: "La pleine conscience (sati) est le cœur vivant du Noble Octuple Sentier. Elle est définie dans le Satipatthana Sutta comme l'observation claire et continue de quatre domaines : le corps (kāya), les sensations (vedanā), l'esprit (citta), et les objets mentaux (dhamma). La pleine conscience n'est pas simplement une technique de relaxation — c'est une façon d'être constamment présent, d'observer sans s'identifier, de voir avec une clarté non réactive. Elle révèle la nature de l'expérience : impermanente, insatisfaisante, vide de soi fixe.",
    practice: "Pratiquez le body-scan quotidien. Marchez en conscience : sentez chaque pas. Mangez en pleine conscience : observez les saveurs, textures, odeurs. Pratiquez la respiration consciente plusieurs fois par jour — quelques respirations en pleine attention. Lors d'émotions fortes, nommez-les : 'Je remarque de la colère', 'Je remarque de l'anxiété' — sans vous identifier à elles.",
    quote: "Le moine demeure contemplant le corps dans le corps — ardent, clairement conscient et attentif — ayant mis de côté l'avidité et le chagrin par rapport au monde.",
    quoteSource: "Majjhima Nikaya 10 — Satipatthana Sutta",
  },
  {
    id: 'samma-samadhi',
    number: 8,
    paliName: 'Sammā-samādhi',
    french: 'Concentration juste',
    category: 'Samadhi',
    color: '#2E3D5C',
    description: "La concentration juste (samādhi) désigne les quatre jhana — des états de méditation profonde progressivement plus raffinés. Dans le premier jhana, l'esprit s'est retiré des désirs sensuels et reste avec joie et bonheur. Le deuxième jhana voit s'apaiser la pensée discursive. Le troisième, la joie s'estompe pour laisser l'équanimité. Le quatrième jhana atteint la pureté de l'équanimité et de la pleine conscience, sans plaisir ni douleur. Ces états ne sont pas des fins en eux-mêmes — ils créent le sol mental d'où naît la sagesse libératrice.",
    practice: "Établissez une pratique de méditation assise régulière : 20 à 45 minutes par jour. Choisissez un objet de méditation unique — la respiration, un mantra, une sensation. Lorsque l'esprit s'égare, ramenez-le doucement. Cultivez les sept facteurs d'éveil : sati, dhamma-vicaya, viriya, pīti, passaddhi, samādhi, upekkhā. Trouvez un enseignant qualifié pour approfondir les jhanas.",
    quote: "Entrant dans le premier jhana, il demeure — avec pensée et examen, né de la retraite, rempli de joie et de bonheur.",
    quoteSource: "Digha Nikaya 2 — Samaññaphala Sutta",
  },
];
