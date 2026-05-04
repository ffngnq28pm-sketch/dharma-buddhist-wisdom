export interface Mantra {
  id: string;
  title: string;
  original: string;
  transliteration: string;
  french: string;
  tradition: string;
  repetitions?: number;
  benefits?: string;
  source?: string;
}

export interface MantraCategory {
  id: string;
  title: string;
  originalTitle: string;
  icon: string;
  color: string;
  description: string;
  items: Mantra[];
}

export const MANTRA_CATEGORIES: MantraCategory[] = [
  // ─── 1. MANTRAS FONDAMENTAUX ─────────────────────────────────────────────────
  {
    id: 'fondamentaux',
    title: 'Mantras Fondamentaux',
    originalTitle: 'Mūla Mantra',
    icon: '☸',
    color: '#C67C2B',
    description: 'Les mantras les plus sacrés du bouddhisme, transmis de maître à disciple depuis des millénaires.',
    items: [
      {
        id: 'om-mani',
        title: 'Om Mani Padme Hum',
        original: 'ओं मणि पद्मे हूं',
        transliteration: 'Oṃ Maṇi Padme Hūṃ',
        french: 'Om — le joyau dans le lotus — Hum',
        tradition: 'Vajrayana',
        repetitions: 108,
        benefits: 'Invocation de la compassion infinie d\'Avalokiteshvara. Chacune des six syllabes purifie l\'un des six royaumes du samsara et cultive les six perfections (paramitas). Le mantra le plus répandu du bouddhisme tibétain.',
        source: 'Karandavyuha Sutra',
      },
      {
        id: 'om-shanti',
        title: 'Om Shanti Shanti Shanti',
        original: 'ॐ शान्ति शान्ति शान्ति',
        transliteration: 'Oṃ Śānti Śānti Śānti',
        french: 'Om — Paix, Paix, Paix',
        tradition: 'Theravada',
        repetitions: 3,
        benefits: 'Invocation de la paix sur les trois plans : corps (adhibhautika), mental (adhyatmika) et cosmique (adhidaivika). Une prière universelle de réconciliation avec soi, avec les autres et avec le cosmos.',
        source: 'Upanishads bouddhisées',
      },
      {
        id: 'namo-amitabha',
        title: 'Namo Amitabha',
        original: 'नमो अमिताभ',
        transliteration: 'Namo Amitābha',
        french: 'Hommage à la Lumière Infinie',
        tradition: 'Mahayana',
        repetitions: 108,
        benefits: 'Invocation du Bouddha de la Lumière Infinie. Dans le bouddhisme de la Terre Pure, cette récitation sincère permet la renaissance dans la Terre Pure d\'Amitabha où l\'éveil est facilement accessible.',
        source: 'Sukhavativyuha Sutra',
      },
      {
        id: 'gate-gate',
        title: 'Gate Gate Pāragate',
        original: 'गते गते पारगते पारसंगते बोधि स्वाहा',
        transliteration: 'Gate Gate Pāragate Pārasaṃgate Bodhi Svāhā',
        french: 'Allé, Allé, Allé au-delà, Allé complètement au-delà — Éveil !',
        tradition: 'Mahayana',
        repetitions: 21,
        benefits: 'Le grand mantra du Sutra du Cœur de la Prajnaparamita. Exprime le mouvement de la conscience de l\'ignorance vers l\'éveil total, le franchissement du samsara vers le nirvana, de l\'illusion vers la libération.',
        source: 'Prajnaparamita Hridaya Sutra',
      },
      {
        id: 'om-ah-hum',
        title: 'Om Ah Hum',
        original: 'ओं आः हूं',
        transliteration: 'Oṃ Āḥ Hūṃ',
        french: 'Corps — Parole — Esprit',
        tradition: 'Vajrayana',
        repetitions: 7,
        benefits: 'Triple syllabe de purification représentant les trois vajras : Om purifie le corps, Ah purifie la parole, Hum purifie l\'esprit. Utilisée pour consacrer les offrandes et purifier les trois portes avant toute pratique.',
        source: 'Tradition Nyingma',
      },
      {
        id: 'om-tare',
        title: 'Om Tare Tuttare Ture Svaha',
        original: 'ओं तारे तुत्तारे तुरे स्वाहा',
        transliteration: 'Oṃ Tāre Tuttāre Ture Svāhā',
        french: 'Om — Tara qui libère — Tara qui protège — Tara qui accomplit — Svaha',
        tradition: 'Vajrayana',
        repetitions: 21,
        benefits: 'Mantra de Tara Verte, la bodhisattva qui agit avec rapidité pour délivrer des dix-huit peurs. Tare libère du samsara, Tuttare des craintes, Ture des maladies. Svaha ancre les bénédictions dans le cœur.',
        source: 'Tantra de Tara',
      },
    ],
  },

  // ─── 2. SUTRAS ESSENTIELS ────────────────────────────────────────────────────
  {
    id: 'sutras',
    title: 'Sutras Essentiels',
    originalTitle: 'Dharmaparyāya',
    icon: '📜',
    color: '#5A8A7A',
    description: 'Les enseignements fondamentaux du Bouddha, transmis en Pali et Sanskrit, piliers de la compréhension bouddhiste.',
    items: [
      {
        id: 'prajnaparamita',
        title: 'Sutra du Cœur',
        original: 'प्रज्ञापारमिताहृदयसूत्र',
        transliteration: 'Prajñāpāramitā Hṛdaya Sūtra',
        french: 'La forme est vacuité, la vacuité est forme. La forme n\'est pas différente de la vacuité, la vacuité n\'est pas différente de la forme. Il n\'y a ni naissance ni mort, ni pureté ni souillure, ni augmentation ni diminution. Pas d\'yeux, pas d\'oreilles, pas de nez, pas de langue, pas de corps, pas d\'esprit. Pas de couleur, pas de son, pas d\'odeur, pas de goût, pas de toucher, pas d\'objet de conscience.',
        tradition: 'Mahayana',
        benefits: 'Le sutra le plus concis et le plus profond sur la vacuité (sunyata). Révèle la nature vide de tous les phénomènes et la libération qui en découle. Récité quotidiennement dans les monastères du monde entier.',
        source: 'Prajnaparamita Hridaya Sutra',
      },
      {
        id: 'diamant',
        title: 'Sutra du Diamant — Extrait',
        original: 'वज्रच्छेदिकाप्रज्ञापारमितासूत्र',
        transliteration: 'Vajracchedikā Prajñāpāramitā Sūtra',
        french: 'Considère toutes les choses conditionnées comme une étoile au lever du jour, comme une bulle dans un courant, comme un éclair dans un nuage d\'été, comme une lampe vacillante, un fantôme, un rêve. Ainsi regardes-les.',
        tradition: 'Mahayana',
        benefits: 'Ce célèbre verset de clôture du Sutra du Diamant résume son enseignement central : tous les phénomènes composés sont transitoires, comme des illusions. La sagesse du diamant coupe l\'attachement à toutes les constructions mentales.',
        source: 'Vajracchedika Prajnaparamita Sutra',
      },
      {
        id: 'dhammapada',
        title: 'Dhammapada — 10 Versets',
        original: 'ธรรมบท',
        transliteration: 'Dhammapada',
        french: '1. L\'esprit est à l\'origine de tout acte. Si tu penses et agis avec un esprit pur, le bonheur te suivra comme ton ombre.\n2. La haine ne se dissout jamais par la haine. Seul l\'amour dissout la haine. Telle est la loi ancienne et éternelle.\n3. Parmi tous les chemins, le Noble Sentier Octuple est le meilleur.\n4. Vainqueur de soi-même vaut mieux que vainqueur de mille batailles.\n5. Il vaut mieux bien vivre un seul jour que mal vivre cent ans.\n6. Nous sommes ce que nous pensons. Tout ce que nous sommes surgit avec nos pensées.\n7. Évite de faire le mal, accomplis le bien, purifie ton esprit — tel est l\'enseignement du Bouddha.\n8. Ne crois pas ce qui te plaît, mais examine ce qui est vrai.\n9. Mieux vaut vivre dans la vertu et la sagesse que dans l\'aisance et l\'ignorance.\n10. La plus grande victoire est la victoire sur soi-même.',
        tradition: 'Theravada',
        benefits: 'Le Dhammapada — "Chemin de Vérité" — est l\'un des textes les plus aimés du Canon Pali. Ces 423 versets sont la quintessence de l\'enseignement moral et spirituel du Bouddha, accessibles à tous.',
        source: 'Dhammapada, Khuddaka Nikaya',
      },
    ],
  },

  // ─── 3. ENSEIGNEMENTS QUOTIDIENS ─────────────────────────────────────────────
  {
    id: 'enseignements',
    title: 'Enseignements Quotidiens',
    originalTitle: 'Nityapāṭha',
    icon: '🪷',
    color: '#7A5A9A',
    description: 'Les piliers fondamentaux de la pensée bouddhiste pour guider chaque jour de vie.',
    items: [
      {
        id: 'quatre-nobles',
        title: 'Les 4 Nobles Vérités',
        original: 'चत्वारि आर्यसत्यानि',
        transliteration: 'Catvāri Āryasatyāni',
        french: '1. DUKKHA — La souffrance existe : l\'insatisfaction, la douleur, l\'impermanence sont inhérentes à toute existence conditionnée.\n\n2. SAMUDAYA — L\'origine de la souffrance : le désir (tanha), l\'attachement, l\'aversion et l\'ignorance créent et perpétuent la souffrance.\n\n3. NIRODHA — La cessation de la souffrance est possible : le nirvana, la libération totale, l\'extinction du désir ego-centré.\n\n4. MAGGA — Le chemin qui mène à la cessation : le Noble Sentier Octuple, voie médiane entre l\'ascèse et l\'indulgence.',
        tradition: 'Theravada',
        benefits: 'Premier enseignement du Bouddha après son Éveil, prononcé au Parc des Cerfs à Sarnath. Ces quatre vérités constituent le fondement de toute la pensée bouddhiste — le diagnostic complet de la condition humaine et son remède.',
        source: 'Dhammacakkappavattana Sutta',
      },
      {
        id: 'sentier-octuple',
        title: 'Le Noble Sentier Octuple',
        original: 'आर्याष्टाङ्गिकमार्ग',
        transliteration: 'Āryāṣṭāṅgika Mārga',
        french: 'SAGESSE (Prajna):\n1. Compréhension Juste — Voir la réalité telle qu\'elle est, comprendre les 4 Nobles Vérités\n2. Intention Juste — Pensées de renoncement, de bienveillance, de non-nuisance\n\nÉTHIQUE (Sila):\n3. Parole Juste — Vérité, douceur, utilité, non-médisance\n4. Action Juste — Non-violence, non-vol, conduite sexuelle juste\n5. Moyens d\'Existence Justes — Profession n\'impliquant pas de nuire\n\nMÉDITATION (Samadhi):\n6. Effort Juste — Cultiver le bon, abandonner le mauvais\n7. Pleine Conscience Juste — Attention au corps, aux sensations, à l\'esprit\n8. Concentration Juste — Absorption méditative profonde',
        tradition: 'Theravada',
        benefits: 'La 4e Noble Vérité développée en chemin pratique. Ni ascèse extrême ni indulgence excessive — la Voie du Milieu qui conduit graduellement à la libération en développant simultanément sagesse, éthique et méditation.',
        source: 'Dhammacakkappavattana Sutta',
      },
    ],
  },

  // ─── 4. MÉDITATION ───────────────────────────────────────────────────────────
  {
    id: 'meditation',
    title: 'Méditations Guidées',
    originalTitle: 'Bhāvanā',
    icon: '🧘',
    color: '#4A7A8A',
    description: 'Pratiques méditatives authentiques issues de différentes traditions, pour cultiver la pleine conscience et la bienveillance.',
    items: [
      {
        id: 'anapanasati',
        title: 'Anapanasati — Pleine Conscience de la Respiration',
        original: 'आनापानसति',
        transliteration: 'Ānāpānasati',
        french: 'Assieds-toi confortablement, dos droit. Ferme doucement les yeux.\n\nSens l\'air entrer par tes narines — frais, léger, vivant.\nSens l\'air sortir — chaud, apaisé, libéré.\n\nNe contrôle pas la respiration. Observe-la simplement,\ncomme on observe une rivière couler.\n\nQuand l\'esprit s\'égare (et il s\'égarera), remarque-le avec douceur.\nReviens à la respiration — sans jugement, encore et encore.\n\nChaque retour est un éveil. Chaque souffle, un nouveau commencement.',
        tradition: 'Theravada',
        repetitions: 20,
        benefits: 'La méditation fondamentale enseignée par le Bouddha. Le Sutra sur la Pleine Conscience de la Respiration décrit 16 étapes progressives menant de la simple observation du souffle à la réalisation de l\'éveil.',
        source: 'Anapanasati Sutta, Majjhima Nikaya',
      },
      {
        id: 'metta',
        title: 'Metta Bhavana — Bienveillance Aimante',
        original: 'मेत्ता भावना',
        transliteration: 'Mettā Bhāvanā',
        french: 'Commence par toi-même. Place les mains sur le cœur.\n\n"Que je sois heureux. Que je sois en bonne santé.\nQue je sois en sécurité. Que je vive dans la paix."\n\nÉtends maintenant cet amour à tes proches :\n"Que mes êtres chers soient heureux..."\n\nÉtends à ceux que tu ne connais pas :\n"Que tous les êtres soient heureux..."\n\nÉtends même à ceux qui t\'ont blessé :\n"Que tous, sans exception, soient libres de la souffrance."\n\nFinalement, rayonne vers toutes les directions :\n"Que tous les êtres, partout, soient en paix."',
        tradition: 'Theravada',
        repetitions: 10,
        benefits: 'La pratique de la bienveillance aimante cultive les quatre incommensurables : metta (bienveillance), karuna (compassion), mudita (joie sympathique) et upekkha (équanimité). Elle transforme profondément le cœur et les relations.',
        source: 'Metta Sutta, Sutta Nipata',
      },
      {
        id: 'loving-kindness',
        title: 'Loving-Kindness — Version Thich Nhat Hanh',
        original: 'मैत्री',
        transliteration: 'Maitrī',
        french: 'Que je puisse être léger de corps et d\'esprit.\nQue je sois libre de toute difficulté et à l\'aise.\nQue je sois libre d\'attachement et d\'aversion.\nQue je sois libre de toute peur.\nQue je sache regarder moi-même avec les yeux de la compréhension et de l\'amour.\nQue je sois capable de me reconnaître en tous les êtres vivants.\nQue les êtres soient heureux.\nQue tous les êtres soient libres de la souffrance.\nQue tous les êtres connaissent la joie de vivre sans souffrance.\nQue tous les êtres vivent dans l\'équanimité, sans crainte ni attachement.',
        tradition: 'Zen',
        benefits: 'Version contemporaine de Thich Nhat Hanh, maître zen vietnamien, qui a rendu la pratique de Metta accessible à l\'Occident. Cette formulation inclut la libération des attachements et la pleine conscience de l\'interdépendance.',
        source: 'Thich Nhat Hanh, Teachings on Love',
      },
    ],
  },

  // ─── 5. BOUDDHISME TIBÉTAIN ──────────────────────────────────────────────────
  {
    id: 'tibetain',
    title: 'Bouddhisme Tibétain',
    originalTitle: 'Vajrayāna',
    icon: '🔱',
    color: '#C4954A',
    description: 'Mantras et pratiques du Vajrayana tibétain — la voie du diamant, rapide et profonde.',
    items: [
      {
        id: 'chenrezig',
        title: 'Mantra de Chenrezig',
        original: 'ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྃ',
        transliteration: 'Oṃ Maṇi Padme Hūṃ',
        french: 'Om — Joyau dans le Lotus — Hum\n\nOm : Corps, parole et esprit du Bouddha\nMa : Libère de la jalousie, cultivant l\'éthique\nNi : Libère de la convoitise, cultivant la patience\nPad : Libère de l\'ignorance, cultivant le zèle\nMe : Libère de l\'attachement, cultivant la concentration\nHum : Libère de la haine, cultivant la sagesse',
        tradition: 'Vajrayana',
        repetitions: 108,
        benefits: 'Mantra du Bodhisattva de la Compassion (Chenrezig/Avalokiteshvara). Chaque syllabe purifie l\'une des six émotions néfastes et cultive l\'une des six perfections. Le Dalaï-Lama le récite des millions de fois.',
        source: 'Maṇi Kambum, texte révélé tibétain',
      },
      {
        id: 'manjushri',
        title: 'Mantra de Manjushri',
        original: 'ओं आः धीः',
        transliteration: 'Oṃ Āḥ Ra Pa Ca Na Dhīḥ',
        french: 'Om — Ah — Ra Pa Ca Na — Dhih\n\nInvocation de Manjushri, Bodhisattva de la Sagesse,\nporteur de l\'épée qui tranche l\'ignorance,\ntenant le Sutra de la Prajnaparamita.',
        tradition: 'Vajrayana',
        repetitions: 21,
        benefits: 'Mantra de Manjushri, bodhisattva de la sagesse transcendante. Stimule l\'intelligence, améliore la mémoire et la compréhension du Dharma. Dhih est la syllabe-graine de Manjushri, concentré de la sagesse non-duelle.',
        source: 'Tantra de Manjushri',
      },
      {
        id: 'tara-verte',
        title: 'Mantra de Tara Verte',
        original: 'ओं तारे तुत्तारे तुरे स्वाहा',
        transliteration: 'Oṃ Tāre Tuttāre Ture Svāhā',
        french: 'Om — Tara, je t\'invoque !\nTuttare — Libère-nous de toutes les peurs !\nTure — Accorde-nous la réalisation spirituelle !\nSvaha — Que la bénédiction soit accomplie !',
        tradition: 'Vajrayana',
        repetitions: 21,
        benefits: 'Tara Verte agit rapidement pour protéger des huit peurs ordinaires (feu, eau, éléphant, serpent, voleurs, emprisonnement, bête sauvage, esprits) et des huit peurs intérieures (fierté, ignorance, colère, jalousie, vue erronée, avarice, attachement, doute).',
        source: 'Tantra des 21 Tara',
      },
      {
        id: 'vajrasattva',
        title: 'Mantra de Vajrasattva (court)',
        original: 'ओं वज्रसत्त्व हूं',
        transliteration: 'Oṃ Vajrasattva Hūṃ',
        french: 'Om — Essence de diamant du Bouddha — Hum\n\nVajrasattva : l\'Être Vajra, indestructible et lumineux,\nincarnation de la pureté primordiale,\nmiroir de notre nature de Bouddha essentielle.',
        tradition: 'Vajrayana',
        repetitions: 100,
        benefits: 'La pratique de purification par excellence du Vajrayana. 100 000 récitations du mantra long purifient les obscurcissements accumulés. La version courte Om Vajrasattva Hum est récitée comme préliminaire à toute pratique.',
        source: 'Tradition Vajrayana',
      },
    ],
  },

  // ─── 6. ZEN ET JAPONAIS ──────────────────────────────────────────────────────
  {
    id: 'zen',
    title: 'Zen & Japonais',
    originalTitle: '禅 Zen',
    icon: '⛩',
    color: '#4A7A5A',
    description: 'Koans, gathas et enseignements du bouddhisme Zen — la voie directe vers l\'éveil.',
    items: [
      {
        id: 'koan-mu',
        title: 'Koan Mu — Le Chien a-t-il la Nature de Bouddha ?',
        original: '無',
        transliteration: 'Mu (Wú en chinois)',
        french: 'Un moine demanda à Zhaozhou : "Un chien a-t-il la nature de Bouddha ?"\nZhaozhou répondit : "Mu."\n\nMu signifie "non", "rien", "sans" — mais ce n\'est pas un simple "non".\n\nCe mot unique contient tout le mystère de l\'éveil.\nNi oui ni non. Ni être ni non-être.\nMédite Mu. Deviens Mu. Laisse Mu te traverser.\n\nQuand tu comprends vraiment Mu, tu comprends ta propre nature.',
        tradition: 'Zen',
        benefits: 'Le koan le plus célèbre du bouddhisme Zen, premier koan du recueil Mumonkan (La Barrière sans Porte). Ce simple "Mu" a conduit d\'innombrables pratiquants à l\'éveil subit (satori). Il brise les certitudes conceptuelles.',
        source: 'Mumonkan (La Barrière sans Porte), Cas 1',
      },
      {
        id: 'koan-claquement',
        title: 'Koan — Le Son d\'une Seule Main',
        original: '隻手音聲',
        transliteration: 'Sekishu Onjō',
        french: 'Maître Hakuin posait cette question à ses étudiants :\n\n"Vous connaissez le son de deux mains qui s\'applaudissent.\nMontrez-moi le son d\'une seule main."\n\nCe n\'est pas une question à résoudre intellectuellement.\nNe cherche pas de réponse dans les mots.\nÉcoute avec ton corps entier.\nÉcoute avec le silence.\nQuel est ce son avant que tu penses à lui ?',
        tradition: 'Zen',
        benefits: 'Koan créé par le maître zen japonais Hakuin Ekaku (1686-1769). Il vise à transcender la pensée duelle et à provoquer une expérience directe au-delà des catégories habituelles. Une porte vers l\'intuition non-conceptuelle.',
        source: 'Hakuin Ekaku, XVIIIe siècle',
      },
      {
        id: 'koan-visage',
        title: 'Koan — Ton Visage Originel',
        original: '父母未生前本来面目',
        transliteration: 'Fumo Mishōzen Honrai Menmoku',
        french: 'Huineng demanda à Huiming :\n"Sans penser au bien, sans penser au mal,\nmontre-moi ton visage originel,\ncelui que tu avais avant la naissance de tes parents."\n\nAvant ta naissance, qui étais-tu ?\nAvant ta première pensée ce matin, qui es-tu ?\nEntre deux pensées, qu\'y a-t-il ?\n\nCe visage-là ne vieillit pas.\nNe naît pas. Ne meurt pas.\nC\'est ta nature de Bouddha.',
        tradition: 'Zen',
        benefits: 'Koan fondamental qui pointe directement vers la nature originelle de l\'esprit, avant tout conditionnement. Enseigne la distinction entre la personnalité construite et la conscience pure sous-jacente.',
        source: 'Liuzu Tanjing (Sutra de la Plateforme du 6e Patriarche)',
      },
      {
        id: 'koan-nirvana',
        title: 'Koan — Le Nirvana du Bouddha',
        original: '仏向上事',
        transliteration: 'Butsu Kōjōji',
        french: 'Un étudiant demanda à Zhaozhou :\n"Que se passe-t-il quand quelqu\'un qui a réalisé le Bouddha rencontre quelqu\'un qui n\'a pas encore réalisé ?"\n\nZhaozhou répondit :\n"Je sers du thé aux deux."\n\nNi supérieur ni inférieur.\nNi éveillé ni endormi.\nL\'éveil ne crée pas de distance — il la dissout.\nServir du thé : l\'acte le plus simple est le plus profond.',
        tradition: 'Zen',
        benefits: 'Ce koan illustre le paradoxe de l\'éveil zen : la réalisation n\'est pas une élévation au-dessus du monde ordinaire, mais une présence totale dans les gestes les plus simples. Le thé devient sacré quand l\'esprit est pur.',
        source: 'Sayings of Zhaozhou',
      },
      {
        id: 'koan-bouddha-rencontre',
        title: 'Koan — Tue le Bouddha !',
        original: '逢佛殺佛',
        transliteration: 'Feng Fo Sha Fo',
        french: 'Le maître Linji Yixuan enseignait :\n\n"Si tu rencontres le Bouddha sur la route, tue-le !\nSi tu rencontres les patriarches, tue-les !\nSi tu rencontres les Arhats, tue-les !\n\nC\'est seulement ainsi que tu seras libéré\net ne seras pas attaché aux choses."\n\nLinji ne parle pas de meurtre physique.\nIl invite à tuer l\'image mentale du Bouddha,\nà ne pas s\'attacher à la forme extérieure\nde ce que l\'éveil devrait être.',
        tradition: 'Zen',
        benefits: 'L\'un des enseignements les plus choquants et révolutionnaires du Zen Rinzai. Linji brise l\'attachement même à l\'idéal du Bouddha et de l\'éveil, enseignant que toute fixation — même à la chose la plus sacrée — est un obstacle.',
        source: 'Linji Lu (Sayings of Linji)',
      },
      {
        id: 'gatha-reveille',
        title: 'Gatha du Réveil — Thich Nhat Hanh',
        original: 'गाथा',
        transliteration: 'Gāthā',
        french: 'En m\'éveillant ce matin,\nje souris.\nVingt-quatre heures toutes neuves sont devant moi.\nJe m\'engage à vivre pleinement\net à regarder tous les êtres\navec les yeux de la compassion.',
        tradition: 'Zen',
        benefits: 'Gatha composée par Thich Nhat Hanh pour commencer chaque journée en pleine conscience. Une gatha est une courte formule de pleine conscience qui ancre l\'attention dans le moment présent lors des activités quotidiennes.',
        source: 'Thich Nhat Hanh, Commentaries on the Anapanasati Sutra',
      },
    ],
  },
];
