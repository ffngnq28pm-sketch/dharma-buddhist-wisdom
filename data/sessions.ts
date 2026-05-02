export interface SessionStep {
  type: 'intro' | 'reading' | 'practice' | 'reflection' | 'closing';
  durationSec: number;
  text: string;
  instruction?: string;
}

export interface DailySessionData {
  id: string;
  title: string;
  subtitle: string;
  durationMin: number;
  theme: string;
  steps: SessionStep[];
}

export const DAILY_SESSIONS: DailySessionData[] = [
  {
    id: 'session_01',
    title: '5 min · Anapanasati — Souffle et présence',
    subtitle: 'Pleine conscience du souffle · Tradition Theravada',
    durationMin: 5,
    theme: 'Anapanasati',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: 'Anapanasati — la pleine conscience du souffle',
        instruction: 'Installez-vous confortablement. Dos droit, mains posées sur les genoux. Fermez doucement les yeux.',
      },
      {
        type: 'reading',
        durationSec: 60,
        text: `Le Bouddha enseignait : «Inspirant longuement, il sait : j'inspire longuement. Expirant longuement, il sait : j'expire longuement.» Le souffle est le fil d'Ariane qui nous ramène au moment présent, encore et encore, sans jugement.`,
        instruction: 'Lisez lentement. Laissez chaque mot résonner.',
      },
      {
        type: 'practice',
        durationSec: 120,
        text: `Portez toute l\'attention à la sensation du souffle au niveau des narines ou de l\'abdomen. Quand l\'esprit s\'égare — et il s\'égarera — revenez simplement, avec douceur, sans reproche.`,
        instruction: 'Comptez mentalement chaque expiration de 1 à 10, puis recommencez.',
      },
      {
        type: 'reflection',
        durationSec: 45,
        text: `Observez : votre esprit est-il plus calme ? Plus agité ? Ni l\'un ni l\'autre ? Toute expérience est juste. L\'important est d\'avoir observé.`,
      },
      {
        type: 'closing',
        durationSec: 45,
        text: `Que ce moment de présence se prolonge dans votre journée. Chaque souffle est une porte vers l\'éveil. Sadhu, sadhu, sadhu.`,
        instruction: 'Ouvrez doucement les yeux. Portez cette qualité de présence avec vous.',
      },
    ],
  },
  {
    id: 'session_02',
    title: '7 min · Metta — Amour bienveillant',
    subtitle: 'Méditation de la bonté aimante · Tradition Theravada',
    durationMin: 7,
    theme: 'Metta',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Metta Bhavana — le développement de l\'amour bienveillant`,
        instruction: `Asseyez-vous avec aisance. Laissez votre cœur s\'ouvrir. Cette pratique commence par vous-même.`,
      },
      {
        type: 'reading',
        durationSec: 60,
        text: `Le Bouddha enseignait dans le Metta Sutta : «Que tous les êtres soient heureux. Que tous les êtres soient en paix. Que tous les êtres soient libérés de la souffrance.» Metta est l\'amour sans condition, sans frontière, sans l\'ombre de l\'attachement.`,
      },
      {
        type: 'practice',
        durationSec: 180,
        text: `Répétez silencieusement, en vous adressant d\'abord à vous-même :\n\n«Puissé-je être heureux.\nPuissé-je être en bonne santé.\nPuissé-je être en paix.\nPuissé-je être libéré de la souffrance.»\n\nÉtendez ensuite ces souhaits à un être cher, à un être neutre, à un être difficile, puis à tous les êtres sans exception.`,
        instruction: 'Laissez chaque souhait naître du cœur, non de la tête.',
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Metta est une graine. Elle ne fleurit pas toujours immédiatement. Quelle résistance avez-vous rencontrée ? Quelle ouverture s\'est manifestée ? Les deux sont précieuses.`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Que l\'amour cultivé ici irradie vers tous les êtres, visibles et invisibles, proches et lointains. Metta est l\'antidote à la haine. Portez-la dans le monde. Sadhu.`,
      },
    ],
  },
  {
    id: 'session_03',
    title: '8 min · Karuna — Compassion',
    subtitle: `L\'ouverture au cœur de la souffrance · Tradition Mahayana`,
    durationMin: 8,
    theme: 'Karuna',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Karuna — la compassion, littéralement «trembler devant la souffrance d\'autrui»`,
        instruction: 'Placez une main sur le cœur. Sentez sa chaleur. Cette chaleur est Karuna.',
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Shantideva écrivait : «Tant que demeurera l\'espace, tant que demeureront des êtres vivants, que je demeure moi aussi pour dissiper la souffrance du monde.» Karuna ne détourne pas le regard de la douleur — elle la regarde en face, sans se perdre.`,
      },
      {
        type: 'practice',
        durationSec: 200,
        text: `Appelez à l\'esprit quelqu\'un qui souffre. Sentez leur douleur sans vous y noyer. Répétez :\n\n«Puisses-tu être libéré de la souffrance.\nPuisses-tu trouver la paix.\nJe suis avec toi dans cette obscurité.»\n\nÉtendez progressivement à tous les êtres qui souffrent en ce moment sur Terre.`,
        instruction: 'Si la compassion génère de la détresse, revenez au souffle, puis revenez.',
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `La compassion et la sagesse doivent marcher ensemble. Karuna sans Prajna peut mener à l\'épuisement. Prajna sans Karuna peut mener à la froideur. Comment les équilibrez-vous dans votre vie ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Que votre capacité à ressentir la souffrance d\'autrui devienne une source de force, non d\'épuisement. Karuna bien cultivée est une armure douce. Portez-la avec grâce.`,
      },
    ],
  },
  {
    id: 'session_04',
    title: '5 min · Mudita — Joie sympathique',
    subtitle: `Se réjouir du bonheur d\'autrui · Tradition Theravada`,
    durationMin: 5,
    theme: 'Mudita',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: `Mudita — la joie sympathique, antidote à l\'envie et à la jalousie`,
        instruction: 'Détendez le visage. Laissez apparaître un léger sourire. Mudita commence là.',
      },
      {
        type: 'reading',
        durationSec: 60,
        text: `Mudita est parfois appelée «la joie de l\'altruiste». Elle est l\'opposé de la schadenfreude — elle se réjouit sincèrement du bonheur des autres. Le Bouddha l\'enseignait comme remède à l\'envie, cette source de souffrance insidieuse.`,
      },
      {
        type: 'practice',
        durationSec: 120,
        text: `Pensez à quelqu\'un qui vit un moment de bonheur, de réussite, d\'amour. Laissez leur joie entrer en vous. Répétez :\n\n«Je me réjouis de ton bonheur.\nTa joie est ma joie.\nTon épanouissement me réjouit.»\n\nLaissez ce sentiment se propager naturellement.`,
        instruction: `Si vous ressentez de la résistance, c\'est normal. Observez-la avec curiosité.`,
      },
      {
        type: 'reflection',
        durationSec: 40,
        text: `Y a-t-il des domaines de vie où il vous est plus difficile de vous réjouir du bonheur d\'autrui ? Ces zones sont les plus précieuses à explorer avec Mudita.`,
      },
      {
        type: 'closing',
        durationSec: 50,
        text: 'Un monde où chacun se réjouit du bonheur des autres serait un monde transformé. Vous en plantez la graine ici. Que Mudita fleurisse dans votre journée.',
      },
    ],
  },
  {
    id: 'session_05',
    title: '6 min · Upekkha — Équanimité',
    subtitle: 'La sérénité sans indifférence · Tradition Theravada',
    durationMin: 6,
    theme: 'Upekkha',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Upekkha — l\'équanimité, la quatrième des Brahma-viharas, les «demeures divines»`,
        instruction: 'Imaginez un lac de montagne. Profond, vaste, calme. Les vagues à la surface ne troublent pas les profondeurs. Vous êtes ce lac.',
      },
      {
        type: 'reading',
        durationSec: 70,
        text: `Upekkha n\'est pas l\'indifférence ou le détachement froid. C\'est la capacité de rester présent, ouvert, sans être emporté par les hauts et les bas. Le Bouddha l\'enseignait comme la sagesse de voir les choses telles qu\'elles sont, sans ajouter d\'histoire.`,
      },
      {
        type: 'practice',
        durationSec: 150,
        text: `Appelez à l\'esprit une situation difficile de votre vie. Observez les sensations, les émotions, sans chercher à les changer. Répétez :\n\n«Les êtres héritent de leurs actions.\nJe ne peux pas contrôler leur chemin.\nJe reste présent, ouvert, stable.»\n\nÉtendez cette équanimité à toutes les situations de votre vie.`,
        instruction: `Upekkha n\'exclut pas la compassion — elle lui donne un sol stable.`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Où dans votre vie manquez-vous d\'équanimité ? Où êtes-vous emporté par les circonstances ? Ces endroits sont des invitations à cultiver Upekkha.`,
      },
      {
        type: 'closing',
        durationSec: 30,
        text: 'Que cette stabilité silencieuse vous accompagne. Non comme une armure, mais comme un sol solide sous vos pieds. Upekkha est votre demeure intérieure.',
      },
    ],
  },
  {
    id: 'session_06',
    title: '6 min · Anicca — Impermanence',
    subtitle: `Tout change, tout passe · Trois Marques de l\'Existence`,
    durationMin: 6,
    theme: 'Anicca',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: `Anicca — l\'impermanence, première des trois Tilakkhana (marques de l\'existence)`,
        instruction: 'Posez les mains sur vos genoux. Sentez le battement de votre cœur. Ce rythme lui-même changera. Tout est en mouvement.',
      },
      {
        type: 'reading',
        durationSec: 70,
        text: `Le Bouddha enseignait : «Sabbe sankhara anicca» — tous les phénomènes composés sont impermanents. Cette vérité, vue directement et non seulement intellectuellement, libère de l\'attachement. La souffrance naît de vouloir que ce qui change demeure fixe.`,
      },
      {
        type: 'practice',
        durationSec: 160,
        text: `Portez l\'attention sur les sensations dans votre corps. Observez comment elles naissent et disparaissent. Chatouillements, pulsations, température — tout est en flux. Maintenant portez cette observation à vos pensées : elles arrivent, elles partent. À vos émotions : elles surgissent, elles se dissolvent.`,
        instruction: `Rien ne mérite d\'être agrippé. Rien ne mérite d\'être repoussé. Observez seulement.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Qu\'est-ce que vous tentez en ce moment de maintenir fixe alors que cela change ? Qu\'est-ce que vous résistez à lâcher ? Anicca vous invite à ouvrir la main.`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Ce moment lui-même est impermanent. Sa beauté tient aussi à cela. Que la sagesse de l\'impermanence allège votre rapport au monde. Tout passe — même la souffrance. Sadhu.`,
      },
    ],
  },
  {
    id: 'session_07',
    title: '7 min · Dukkha — Regarder la souffrance en face',
    subtitle: `Première Noble Vérité · La nature insatisfaisante de l\'existence`,
    durationMin: 7,
    theme: 'Dukkha',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Dukkha — souvent traduit par «souffrance», mais plus précisément : l\'insatisfaction inhérente à l\'existence conditionnée`,
        instruction: `Permettez-vous d\'être exactement là où vous êtes. Pas de tentative de vous sentir mieux. Juste cette honnêteté.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `La Première Noble Vérité n\'est pas pessimiste — elle est radicalement honnête. Le Bouddha n\'a pas dit que la vie est entièrement souffrance. Il a dit qu\'il existe, tissée dans l\'existence conditionnée, une qualité d\'insatisfaction que nous portons souvent sans la voir. La voir clairement est déjà la moitié du chemin.`,
      },
      {
        type: 'practice',
        durationSec: 180,
        text: `Appelez à l\'esprit une souffrance que vous portez en ce moment — grande ou petite. Ne cherchez pas à la résoudre. Simplement, observez-la : où la ressentez-vous dans le corps ? De quelle texture est-elle ? Quelle histoire l\'accompagne ? Observez comment, quand vous cessez de combattre la souffrance, elle commence à changer de nature.`,
        instruction: `Dukkha vu clairement n\'est plus tout à fait la même chose.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Qu\'avez-vous découvert en regardant votre souffrance sans la fuir ? La sagesse bouddhiste dit : le problème n\'est pas la souffrance, c\'est notre relation à la souffrance.`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: 'Vous avez fait quelque chose de courageux : vous avez regardé Dukkha en face. Ce courage est le début de la libération. La Deuxième Noble Vérité vous attend. Sadhu.',
      },
    ],
  },
  {
    id: 'session_08',
    title: '6 min · Anatta — Non-soi',
    subtitle: `Troisième Marque de l\'Existence · Le lâcher-prise du «moi»`,
    durationMin: 6,
    theme: 'Anatta',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Anatta — le non-soi, l\'enseignement le plus vertigineux et le plus libérateur du Bouddha`,
        instruction: 'Posez cette question simplement, sans chercher à y répondre immédiatement : «Qui médite en ce moment ?»',
      },
      {
        type: 'reading',
        durationSec: 70,
        text: `Le Bouddha démontait le «soi» en cinq agrégats — Khandhas — : la forme, la sensation, la perception, les formations mentales, la conscience. Il demandait : lequel de ces agrégats est «vous» ? Aucun n\'est permanent, aucun n\'est «mien» en dernier ressort. Cette vue libère de l\'orgueil, de la honte, de la défensivité.`,
      },
      {
        type: 'practice',
        durationSec: 160,
        text: `Observez les pensées qui surgissent. Posez-vous : «Qui pense cela ?» Observez les émotions. Posez-vous : «Qui ressent cela ?» Observez les sensations. Posez-vous : «Qui sent cela ?» À chaque fois, cherchez l\'observateur — et notez ce que vous trouvez (ou ne trouvez pas).`,
        instruction: `Ne tentez pas de comprendre intellectuellement. Cherchez directement dans l\'expérience.`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Anatta n\'est pas le nihilisme — elle ne dit pas «vous n\'existez pas». Elle dit : votre existence est plus vaste, plus fluide, plus interconnectée que l\'idée d\'un «moi» fixe et séparé. Quelle légèreté cela apporte-t-il ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Ce qui pratique ici n\'est pas séparable de ce qui est pratiqué. Que cette perméabilité des frontières du «moi» apporte libération et paix. Les étoiles ne souffrent pas d\'être les étoiles.`,
      },
    ],
  },
  {
    id: 'session_09',
    title: '5 min · Sila — Éthique et intention juste',
    subtitle: 'Première branche du Noble Octuple Sentier · Fondation de la pratique',
    durationMin: 5,
    theme: 'Sila',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: `Sila — l\'éthique bouddhiste, non comme règles imposées de l\'extérieur, mais comme expression de la sagesse et de la compassion`,
        instruction: 'Prenez un moment pour vous rappeler un geste bienveillant que vous avez accompli récemment. Aussi petit soit-il.',
      },
      {
        type: 'reading',
        durationSec: 65,
        text: `Sila recouvre la parole juste, l\'action juste, le moyen d\'existence juste. Ces trois branches du Sentier ne sont pas des carcans — elles sont la façon dont la sagesse intérieure se manifeste dans le monde. Quand l\'esprit est pur, les actions le reflètent naturellement.`,
      },
      {
        type: 'practice',
        durationSec: 130,
        text: `Réfléchissez à vos actions d\'hier :\n\n— Ai-je dit des paroles qui ont blessé inutilement ?\n— Ai-je agi depuis la peur, l\'avidité, ou l\'attachement ?\n— Mon activité quotidienne crée-t-elle du bien pour moi et les autres ?\n\nNe vous jugez pas. Observez avec la clarté bienveillante d\'un médecin.`,
        instruction: 'Sila est une pratique de toute une vie. Chaque jour est un nouveau commencement.',
      },
      {
        type: 'reflection',
        durationSec: 45,
        text: `Quelle intention éthique souhaitez-vous cultiver aujourd\'hui ? Sila commence dans l\'intention avant même l\'action.`,
      },
      {
        type: 'closing',
        durationSec: 30,
        text: `Que vos actions d\'aujourd\'hui soient en harmonie avec votre sagesse la plus profonde. Sila est la fondation sur laquelle Samadhi et Prajna peuvent s\'élever.`,
      },
    ],
  },
  {
    id: 'session_10',
    title: '8 min · Samadhi — Concentration unifiée',
    subtitle: `L\'esprit rassemblé en un seul point · Jhana`,
    durationMin: 8,
    theme: 'Samadhi',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Samadhi — la concentration, l\'unification de l\'esprit. Pas la concentration forcée, mais l\'absorption naturelle dans l\'objet de méditation.`,
        instruction: 'Choisissez un objet de méditation : votre souffle, un point lumineux imaginaire devant vous, ou une image du Bouddha.',
      },
      {
        type: 'reading',
        durationSec: 70,
        text: `Les Jhanas — états d\'absorption méditative — ne sont pas des états extraordinaires réservés aux moines. Ils sont disponibles à quiconque s\'entraîne avec constance. Le premier Jhana apporte joie et plaisir nés de la concentration. C\'est le début du chemin vers la libération.`,
      },
      {
        type: 'practice',
        durationSec: 220,
        text: `Portez toute votre attention sur votre objet de méditation. Quand l\'esprit s\'égare — notez simplement «pensée», «planification», «souvenir» — et revenez. Chaque retour est un moment de Samadhi. Avec le temps, les intervalles entre les distractions s\'allongent. C\'est suffisant.`,
        instruction: 'La qualité compte plus que la durée. Même 10 secondes de vraie concentration est précieux.',
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Comment décririez-vous l\'état de votre esprit maintenant par rapport à avant la pratique ? Samadhi est un entraînement — comme un muscle, il se développe graduellement.`,
      },
      {
        type: 'closing',
        durationSec: 50,
        text: 'Un esprit concentré est un esprit capable de voir clairement. Samadhi prépare le sol de Prajna — la sagesse. Que cette clarté vous accompagne. Sadhu, sadhu, sadhu.',
      },
    ],
  },
  {
    id: 'session_11',
    title: '7 min · Prajna — Sagesse discriminante',
    subtitle: 'La sagesse libératrice · Vision directe de la réalité',
    durationMin: 7,
    theme: 'Prajna',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Prajna — la sagesse qui voit les choses telles qu\'elles sont, non telles qu\'on voudrait qu\'elles soient`,
        instruction: `Posez-vous cette question : «Qu\'est-ce que je crois fermement et qui pourrait ne pas être vrai ?»`,
      },
      {
        type: 'reading',
        durationSec: 75,
        text: `Prajna ne s\'acquiert pas par la lecture seule — elle émerge de la méditation et de la réflexion profonde. Le Bouddha distinguait trois niveaux : Suta-maya-panna (sagesse née de l\'écoute), Cinta-maya-panna (née de la réflexion), et Bhavana-maya-panna (née de la méditation). La vraie sagesse transforme, elle ne s\'accumule pas.`,
      },
      {
        type: 'practice',
        durationSec: 190,
        text: `Choisissez une croyance que vous portez sur vous-même ou sur le monde. Examinez-la comme un scientifique bienveillant :\n— D\'où vient cette croyance ?\n— Quelles preuves la soutiennent ? Quelles preuves la contredisent ?\n— Si elle était fausse, comment se transformerait votre vie ?\n— Est-ce que cette croyance sert votre éveil ou le freine ?`,
        instruction: `Prajna n\'est pas scepticisme destructeur. C\'est une investigation bienveillante et rigoureuse.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Qu\'avez-vous découvert ? La sagesse commence souvent par un «je ne sais pas» honnête. C\'est là que l\'investigation véritable commence.`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Que la sagesse continue de s\'approfondir en vous, non comme un trésor qu\'on accumule, mais comme un feu qui éclaire. «La sagesse est la lumière dans l\'obscurité.» Sadhu.`,
      },
    ],
  },
  {
    id: 'session_12',
    title: '6 min · Triple Joyau — Refuge',
    subtitle: 'Bouddha · Dharma · Sangha · Le refuge fondamental',
    durationMin: 6,
    theme: 'Triple Joyau',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: 'Tisarana — les Trois Refuges : le Bouddha, le Dharma, la Sangha. La fondation de toute pratique bouddhiste.',
        instruction: 'Portez la main au cœur. Sentez la chaleur. Ces trois refuges sont déjà en vous.',
      },
      {
        type: 'reading',
        durationSec: 75,
        text: `Prendre refuge dans le Bouddha, c\'est faire confiance que l\'éveil est possible. Prendre refuge dans le Dharma, c\'est s\'appuyer sur les enseignements comme boussole. Prendre refuge dans la Sangha, c\'est reconnaître que nous n\'évoluons pas seuls. Ces trois joyaux sont les piliers de la vie bouddhiste.`,
      },
      {
        type: 'practice',
        durationSec: 150,
        text: `Récitez trois fois, avec pleine conscience de chaque mot :\n\n«Buddham saranam gacchami\n— Je prends refuge dans le Bouddha.\n\nDhammam saranam gacchami\n— Je prends refuge dans le Dharma.\n\nSangham saranam gacchami\n— Je prends refuge dans la Sangha.»\n\nLaissez chaque refuge s\'incarner dans votre expérience présente.`,
        instruction: 'Ne récitez pas mécaniquement. Sentez le sens de chaque refuge.',
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: 'Lequel des trois refuges vous soutient le plus en ce moment ? Lequel ressentez-vous comme le plus lointain ? Cette observation est elle-même une forme de Prajna.',
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Vous n\'êtes pas seul sur ce chemin. Des millions d\'êtres, à travers les siècles, ont pris ces mêmes refuges. Vous faites partie de cette continuité vivante. Sadhu, sadhu, sadhu.`,
      },
    ],
  },
  {
    id: 'session_13',
    title: '9 min · Quatre Nobles Vérités',
    subtitle: 'Le premier enseignement du Bouddha · Dhammacakkappavattana Sutta',
    durationMin: 9,
    theme: 'Quatre Nobles Vérités',
    steps: [
      {
        type: 'intro',
        durationSec: 45,
        text: 'Les Quatre Ariya Sacca — Nobles Vérités — le premier enseignement du Bouddha après son éveil, au Parc des Gazelles de Sarnath',
        instruction: 'Ces quatre vérités sont un diagnostic médical complet : la maladie, sa cause, la guérison possible, et le traitement.',
      },
      {
        type: 'reading',
        durationSec: 100,
        text: `1. Dukkha Sacca : la souffrance existe.\n2. Samudaya Sacca : la souffrance a une origine — le désir, le cramponnement, Tanha.\n3. Nirodha Sacca : la cessation de la souffrance est possible — c\'est le Nibbana.\n4. Magga Sacca : il existe un chemin vers cette cessation — le Noble Octuple Sentier.\n\nLe Bouddha ne disait pas que tout est souffrance. Il disait : voici la vérité nue, regardons-la et suivons le chemin.`,
      },
      {
        type: 'practice',
        durationSec: 240,
        text: `Appliquez les Quatre Nobles Vérités à une souffrance concrète de votre vie :\n\n1. Quelle est la souffrance ? (Dukkha — nommez-la clairement)\n2. Quelle est sa cause ? (Samudaya — quel désir ou cramponnement l\'alimente ?)\n3. Est-il possible de s\'en libérer ? (Nirodha — imaginez un moment sans ce cramponnement)\n4. Quel chemin mène à cette liberté ? (Magga — une action concrète)`,
        instruction: 'Soyez honnête. Les Nobles Vérités ne fonctionnent que si on les applique à sa propre vie.',
      },
      {
        type: 'reflection',
        durationSec: 65,
        text: `Le Bouddha avait vu souffrance, vieillesse, maladie, mort — et au lieu de se détourner, il avait cherché la libération. Qu\'avez-vous découvert en appliquant ce cadre à votre propre expérience ?`,
      },
      {
        type: 'closing',
        durationSec: 50,
        text: `Vous portez maintenant une boussole. Les Quatre Nobles Vérités ne sont pas un dogme à croire — elles sont un outil à utiliser. Continuez à les appliquer, jour après jour. C\'est ainsi que fonctionne le Dharma. Sadhu.`,
      },
    ],
  },
  {
    id: 'session_14',
    title: '8 min · Noble Octuple Sentier',
    subtitle: 'Ariya Atthangika Magga · La voie vers la libération',
    durationMin: 8,
    theme: 'Noble Octuple Sentier',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `L\'Ariya Atthangika Magga — le Noble Octuple Sentier — est la Quatrième Noble Vérité, le chemin concret vers la libération`,
        instruction: 'Le Sentier est organisé en trois groupes : Prajna (sagesse), Sila (éthique), Samadhi (concentration). Ils se nourrissent mutuellement.',
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Les huit branches :\n1. Vue juste (Samma ditthi)\n2. Intention juste (Samma sankappa)\n3. Parole juste (Samma vaca)\n4. Action juste (Samma kammanta)\n5. Moyen d\'existence juste (Samma ajiva)\n6. Effort juste (Samma vayama)\n7. Pleine conscience juste (Samma sati)\n8. Concentration juste (Samma samadhi)`,
      },
      {
        type: 'practice',
        durationSec: 210,
        text: `Choisissez l\'une des huit branches sur laquelle vous souhaitez vous concentrer aujourd\'hui. Réfléchissez :\n— Comment cette branche se manifeste-t-elle (ou manque-t-elle) dans ma vie quotidienne ?\n— Quelle serait une action concrète pour la cultiver aujourd\'hui ?\n— Quel obstacle intérieur dois-je surmonter pour y arriver ?\n\nMéditation sur l\'intention choisie pendant deux minutes.`,
        instruction: `Le Sentier n\'est pas linéaire. Toutes les branches se développent simultanément.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Le Noble Octuple Sentier n\'est pas une liste de règles à cocher — c\'est une façon d\'orienter sa vie entière. Comment cette vision transforme-t-elle votre compréhension de la pratique quotidienne ?`,
      },
      {
        type: 'closing',
        durationSec: 50,
        text: `Chaque moment est une opportunité de pratiquer le Sentier. Pas parfaitement — mais avec intention. L\'effort juste inclut de ne pas s\'épuiser. Marchez avec grâce. Sadhu.`,
      },
    ],
  },
  {
    id: 'session_15',
    title: `7 min · Bodhicitta — L\'esprit d\'éveil`,
    subtitle: `L\'aspiration du Bodhisattva · Tradition Mahayana`,
    durationMin: 7,
    theme: 'Bodhicitta',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Bodhicitta — littéralement «esprit d\'éveil» — l\'aspiration à atteindre l\'éveil non pas pour soi seul, mais pour le bénéfice de tous les êtres`,
        instruction: 'Imaginez tous les êtres vivants — humains, animaux, visibles et invisibles — en cercles concentriques autour de vous. Tous aspirent au bonheur, tous souhaitent éviter la souffrance.',
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Shantideva écrivait dans le Bodhicaryavatara : «Que tout le bien que j\'ai accompli serve à dissiper la souffrance de tous les êtres vivants.» Bodhicitta est à la fois aspiration (Bodhicitta-pranidhana) et application (Bodhicitta-prasthana). L\'aspiration sans l\'action reste vide. L\'action sans l\'aspiration perd son sens.`,
      },
      {
        type: 'practice',
        durationSec: 180,
        text: `Répétez ce vœu du Bodhisattva, avec tout votre cœur :\n\n«Aussi nombreux que soient les êtres sensibles, je fais le vœu de les libérer tous.\nAussi profondes que soient les souffrances, je fais le vœu de les éliminer toutes.\nAussi innombrables que soient les portes du Dharma, je fais le vœu de les franchir toutes.\nAussi suprême que soit la voie du Bouddha, je fais le vœu de l\'accomplir.»\n\nLaissez chaque vœu résonner profondément.`,
        instruction: 'Bodhicitta se cultive par la répétition sincère, pas par la perfection immédiate.',
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: 'Comment Bodhicitta transforme-t-elle votre motivation à pratiquer ? La différence entre «je médite pour aller mieux» et «je pratique pour servir tous les êtres» est vertigineuse. Quelle différence ressentez-vous ?',
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Que ce vœu du Bodhisattva guide chacune de vos actions aujourd\'hui. Même la plus petite bonté, offerte avec Bodhicitta, devient un acte d\'éveil universel.`,
      },
    ],
  },
  {
    id: 'session_16',
    title: '5 min · Refuge dans le Bouddha',
    subtitle: `La confiance en l\'éveil comme possibilité réelle`,
    durationMin: 5,
    theme: 'Refuge',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: `Prendre refuge dans le Bouddha ne signifie pas adorer une statue. C\'est faire confiance que l\'éveil est réel, qu\'il a été atteint, qu\'il peut l\'être encore.`,
        instruction: `Imaginez le Bouddha assis sous l\'Arbre de Bodhi. La nuit de son éveil. La sérénité de son visage. Cette sérénité est également en vous.`,
      },
      {
        type: 'reading',
        durationSec: 60,
        text: `À ses derniers mots, le Bouddha dit : «Atta dipa viharatha» — «Soyez votre propre île, votre propre lumière, votre propre refuge.» Prendre refuge dans le Bouddha, c\'est aussi reconnaître le Bouddha-nature en soi-même — le potentiel d\'éveil qui n\'a jamais été souillé.`,
      },
      {
        type: 'practice',
        durationSec: 120,
        text: `Visualisez une lumière dorée au centre de votre poitrine. Elle représente votre Bouddha-nature — toujours présente, jamais ternie par les erreurs passées. Respirez et laissez cette lumière s\'étendre doucement à tout votre être. Sentez que l\'éveil n\'est pas quelque chose à acquérir — c\'est quelque chose à révéler.`,
        instruction: 'Si la visualisation est difficile, sentez simplement une chaleur bienveillante en vous.',
      },
      {
        type: 'reflection',
        durationSec: 40,
        text: `Croyez-vous vraiment que l\'éveil est possible pour vous — dans cette vie ? Si non, qu\'est-ce qui crée cette résistance ? Cette question mérite d\'être portée comme un koan.`,
      },
      {
        type: 'closing',
        durationSec: 50,
        text: `Buddham saranam gacchami. Je prends refuge dans le Bouddha — la lumière de l\'éveil que je reconnais en moi et dans tous les êtres. Que cette confiance vous soutienne.`,
      },
    ],
  },
  {
    id: 'session_17',
    title: '8 min · Sunyata — La vacuité',
    subtitle: 'Le cœur du Mahayana · Prajnaparamita',
    durationMin: 8,
    theme: 'Sunyata',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Sunyata — la vacuité — l\'enseignement central du Mahayana, et peut-être le plus mal compris`,
        instruction: `La vacuité ne signifie pas le néant. Elle signifie que les phénomènes sont vides d\'existence inhérente, d\'une essence fixe et indépendante. Approchez cet enseignement avec curiosité.`,
      },
      {
        type: 'reading',
        durationSec: 85,
        text: `Le Prajnaparamita Hridaya Sutra enseigne : «La forme est vacuité, la vacuité est forme.» Nagarjuna expliquait : parce que les choses sont vides d\'existence inhérente, elles peuvent changer, évoluer, naître et mourir. La vacuité est la condition de possibilité de tout changement — donc de toute libération. Ce qui serait absolument fixe ne pourrait pas se transformer.`,
      },
      {
        type: 'practice',
        durationSec: 210,
        text: `Observez un objet proche de vous — ou votre propre main. Demandez-vous : quelle est son «essence» ? Si vous le décomposez — atomes, espace, énergie — où est «l\'objet» ? Maintenant observez vos pensées de la même façon. Où commence une pensée ? Où finit-elle ? Qui pense ?\n\nSentez comment cette investigation n\'enlève pas la réalité des choses — elle en révèle la nature profonde : interdépendante, fluide, libre.`,
        instruction: `Sunyata n\'est pas à comprendre — elle est à voir directement.`,
      },
      {
        type: 'reflection',
        durationSec: 65,
        text: `Si vous n\'avez pas d\'essence fixe, qu\'est-ce que cela libère ? L\'identité rigide, la honte, l\'orgueil — tous requièrent un «soi» fixe. Que se passe-t-il quand on commence à les voir comme vides ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Sunyata n\'est pas la fin de la pratique — c\'est son cœur lumineux. Gate gate paragate parasamgate bodhi svaha — allé, allé, allé au-delà, complètement allé au-delà, éveil ! Sadhu.`,
      },
    ],
  },
  {
    id: 'session_18',
    title: '7 min · Interdépendance — Pratītyasamutpāda',
    subtitle: 'La co-production conditionnée · Tout est relié',
    durationMin: 7,
    theme: 'Interdépendance',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Pratītyasamutpāda — la co-production conditionnée, traduite par «interdépendance». Peut-être l\'enseignement le plus révolutionnaire du Bouddha.`,
        instruction: `Tenez-vous assis et demandez-vous : combien d\'êtres ont contribué à ce moment présent ? Vos parents, leurs parents, les agriculteurs qui ont nourri les sages, les traducteurs qui ont préservé le Dharma...`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Le Bouddha enseignait : «Quand ceci est, cela est. Avec la naissance de ceci, cela naît. Quand ceci n\'est pas, cela n\'est pas. Avec la cessation de ceci, cela cesse.» Rien n\'existe isolément. Chaque phénomène est un nœud dans un réseau infini de relations. Thich Nhat Hanh appelait cela «inter-être» — vous êtes fait de soleil, de nuages, de terre, de tous vos ancêtres.`,
      },
      {
        type: 'practice',
        durationSec: 180,
        text: `Tenez un objet simple — une feuille de papier, une orange, votre téléphone. Tracez mentalement toutes les connexions qui lui ont permis d\'exister ici, dans votre main :\n\n— Les matières premières et leur origine\n— Les personnes qui les ont transformées\n— Les routes et transports\n— L\'énergie, l\'eau, l\'air\n— La chaîne d\'êtres humains, chacun avec sa propre souffrance et sa propre joie\n\nSentez comment vous participez aussi à cette toile.`,
        instruction: `L\'interdépendance vue clairement génère naturellement compassion et gratitude.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Comment la vision de l\'interdépendance transforme-t-elle votre rapport à la consommation, aux relations, à l\'environnement ? L\'éveil et l\'engagement écologique et social sont-ils séparables ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Vous n\'êtes pas seul. Vous n\'avez jamais été seul. Vous êtes le fruit de millions d\'actes de bonté, de sagesse, d\'amour. Que la conscience de l\'interdépendance vous apporte humilité et gratitude.`,
      },
    ],
  },
  {
    id: 'session_19',
    title: '5 min · Gatha — Vers de pleine conscience',
    subtitle: 'Poèmes de présence du quotidien · Thich Nhat Hanh',
    durationMin: 5,
    theme: 'Gatha',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: 'Les Gathas — vers de pleine conscience — transforment les gestes ordinaires en actes de méditation. Thich Nhat Hanh en a composé des centaines.',
        instruction: `Les Gathas ne sont pas des prières à quelqu\'un. Ce sont des rappels à revenir à la présence dans les actes les plus simples.`,
      },
      {
        type: 'reading',
        durationSec: 60,
        text: `En vous réveillant : «Mes yeux s\'ouvrent sur un ciel nouveau. Je prie pour que tous les êtres regardent avec des yeux de compassion.»\n\nEn vous lavant les mains : «L\'eau coule sur mes mains. Je la reçois avec soin. Je lave toute souffrance et tension.»\n\nEn mangeant : «Dans cette nourriture, je vois clairement la présence du cosmos entier soutenant mon existence.»`,
      },
      {
        type: 'practice',
        durationSec: 130,
        text: 'Composez votre propre Gatha pour un geste quotidien que vous faites machinalement — boire votre café, ouvrir une porte, allumer votre téléphone. Un seul vers suffit. Il doit :\n— Ancrer dans le présent\n— Éveiller gratitude ou conscience\n— Être mémorisable\n\nRécitez-le maintenant silencieusement plusieurs fois.',
        instruction: 'Ce Gatha devient votre objet de méditation pour la journée.',
      },
      {
        type: 'reflection',
        durationSec: 40,
        text: `Comment les Gathas transforment-ils la relation aux actes quotidiens ? Y a-t-il un geste de votre journée qui mériterait d\'être «consacré» par un vers de présence ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Toute la vie peut être pratique. Toute la vie peut être Dharma. Les Gathas en sont le rappel vivant. Portez votre Gatha aujourd\'hui comme un fil de présence.`,
      },
    ],
  },
  {
    id: 'session_20',
    title: '8 min · Tonglen — Donner et recevoir',
    subtitle: 'La méditation de transformation de la souffrance · Tradition Tibétaine',
    durationMin: 8,
    theme: 'Tonglen',
    steps: [
      {
        type: 'intro',
        durationSec: 45,
        text: 'Tonglen — «donner et recevoir» en tibétain — une pratique puissante et à contre-courant : on respire la souffrance, on expire le bien-être',
        instruction: `Tonglen va à l\'encontre de l\'instinct qui pousse à éviter la souffrance. C\'est une pratique courageuse. Commencez doucement.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Pema Chödrön enseigne : «Avec chaque inspiration, vous prenez en vous la chaleur brûlante, la lourdeur, l\'obscurité qui est souffrance. Avec chaque expiration, vous envoyez fraîcheur, légèreté, espace.» Tonglen inverse la logique de l\'ego qui cherche à accumuler le bonheur et rejeter la souffrance. Cette inversion est elle-même libératrice.`,
      },
      {
        type: 'practice',
        durationSec: 210,
        text: `Phase 1 (1 min) : Inspirez — noirceur chaude et lourde. Expirez — lumière fraîche et légère. Établissez ce rythme.\n\nPhase 2 (1 min) : Pensez à votre propre souffrance du moment. En inspirant, accueillez-la pleinement. En expirant, envoyez-vous bien-être et espace.\n\nPhase 3 (1 min) : Pensez à quelqu\'un qui souffre. En inspirant, prenez leur souffrance. En expirant, envoyez-leur tout ce dont ils ont besoin.\n\nPhase 4 (30 sec) : Étendez à tous les êtres qui souffrent de la même façon.`,
        instruction: 'Si vous vous sentez submergé, revenez à votre souffle normal. Tonglen se pratique graduellement.',
      },
      {
        type: 'reflection',
        durationSec: 65,
        text: `Comment vous sentez-vous après Tonglen ? La pratique peut être déstabilisante au début — c\'est signe que quelque chose s\'ouvre. Comment le cœur réagit-il quand on cesse de fuir la souffrance ?`,
      },
      {
        type: 'closing',
        durationSec: 50,
        text: `Tonglen transforme la peur en courage, l\'isolement en connexion, la résistance en compassion. Avec chaque pratique, vous élargissez la capacité du cœur à contenir la souffrance sans en être détruit. Sadhu.`,
      },
    ],
  },
  {
    id: 'session_21',
    title: '6 min · Vipassana — Vision pénétrante',
    subtitle: `L\'insight direct dans la nature de l\'esprit · Tradition Theravada`,
    durationMin: 6,
    theme: 'Vipassana',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Vipassana — «voir clairement», «vision pénétrante» — la méditation qui révèle directement Anicca, Dukkha et Anatta dans l\'expérience vive`,
        instruction: `Vipassana ne demande pas de croire quoi que ce soit. Elle demande d\'observer ce qui se passe réellement.`,
      },
      {
        type: 'reading',
        durationSec: 65,
        text: `S.N. Goenka enseignait : «La technique de Vipassana travaille au niveau le plus profond de l\'esprit. Elle ne supprime pas les réactions superficiellement — elle les déracine.» L\'observation équanime des sensations corporelles dissout les tendances profondes — les Sankhara — qui génèrent la souffrance.`,
      },
      {
        type: 'practice',
        durationSec: 165,
        text: 'Balayez systématiquement le corps de la tête aux pieds et des pieds à la tête. Pour chaque zone, observez simplement les sensations — sans chercher à les changer, sans vous identifier à elles. Notez mentalement : «chaleur», «pression», «vibration», «néant». Maintenez une équanimité totale devant les sensations agréables et désagréables.',
        instruction: `L\'équanimité n\'est pas l\'indifférence — c\'est la sagesse qui ne s\'accroche ni ne repousse.`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Vipassana révèle que ce qu\'on appelle «corps» et «esprit» sont en réalité un flux constant de sensations, pensées, et perceptions. Comment cette vue change-t-elle votre rapport à la douleur ? Au plaisir ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: 'Chaque session de Vipassana approfondit la vision. Pas une vision intellectuelle, mais une vision directe, expérientielle, qui libère. Continuez à pratiquer. Le fruit vient en son temps. Sadhu.',
      },
    ],
  },
  {
    id: 'session_22',
    title: `6 min · Zazen — Simplement s\'asseoir`,
    subtitle: `La méditation du Zen · «Shikantaza» — Juste s\'asseoir`,
    durationMin: 6,
    theme: 'Zazen',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: `Zazen — la méditation assise du Zen. Dogen enseignait que s\'asseoir en zazen n\'est pas un moyen d\'atteindre l\'éveil — c\'est l\'éveil lui-même.`,
        instruction: 'Adoptez la posture : dos droit, mains en Dhyana mudra (main droite sur la gauche, pouces se touchant légèrement). Yeux mi-ouverts, regard vers le bas. Menton légèrement rentré.',
      },
      {
        type: 'reading',
        durationSec: 65,
        text: `Dogen Zenji écrivait : «Apprendre la voie bouddhiste, c\'est s\'étudier soi-même. S\'étudier soi-même, c\'est s\'oublier soi-même. S\'oublier soi-même, c\'est être éveillé par toutes choses.» Shikantaza — juste s\'asseoir — ne demande rien d\'autre que d\'être complètement là, sans agenda, sans attente.`,
      },
      {
        type: 'practice',
        durationSec: 170,
        text: `Asseyez-vous. Simplement. Sans technique particulière. Laissez les pensées passer comme des nuages dans un ciel bleu. Ne les suivez pas, ne les repoussez pas. Vous êtes le ciel — vaste, immobile, accueillant tout. Quand vous réalisez que vous étiez emporté par une pensée, ce retour lui-même est zazen. Il n\'y a pas d\'échec en zazen.`,
        instruction: `La «bonne» zazen n\'est pas celle où l\'esprit ne pense pas — c\'est celle où vous êtes pleinement là.`,
      },
      {
        type: 'reflection',
        durationSec: 50,
        text: `Y a-t-il une différence entre «faire zazen» et «être en zazen» ? Le Zen pointe vers quelque chose qui ne peut être saisi par l\'intellect, seulement vécu. Qu\'avez-vous touché ici ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: 'Mu. Rien à atteindre. Rien à devenir. Simplement ceci. Simplement maintenant. La voie du Zen est la voie directe. Continuez à vous asseoir.',
      },
    ],
  },
  {
    id: 'session_23',
    title: `7 min · Koan — L\'éveil par le paradoxe`,
    subtitle: `Quel est le son d\'une seule main ? · Tradition Rinzai Zen`,
    durationMin: 7,
    theme: 'Koan',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Le Koan — question ou énoncé paradoxal utilisé en Zen pour court-circuiter la pensée conceptuelle et provoquer un saut direct vers l\'éveil`,
        instruction: `Le koan n\'est pas un puzzle à résoudre intellectuellement. Il est à porter dans le corps, dans les viscères, jusqu\'à ce qu\'il vous ouvre.`,
      },
      {
        type: 'reading',
        durationSec: 70,
        text: `Joshu demanda à Nansen : «Qu\'est-ce que le Tao ?» Nansen répondit : «L\'esprit ordinaire est le Tao.» Joshu : «Doit-on chercher à l\'atteindre ?» Nansen : «Si tu cherches à l\'atteindre, tu t\'en éloignes.» Joshu : «Comment peut-on savoir si on est sur le Tao ?» Nansen : «Le Tao n\'appartient ni à savoir ni à ne pas savoir. Savoir est illusion. Ne pas savoir est ignorance.»`,
      },
      {
        type: 'practice',
        durationSec: 190,
        text: `Portez ce koan : «Avant que vos parents soient nés, quel était votre visage originel ?»\n\nNe cherchez pas une réponse en mots. Portez la question dans votre corps entier. Laissez-la résonner. Laissez-la vous déranger. Laissez-la dissoudre vos certitudes. Asseyez-vous avec l\'inconfort du «ne pas savoir».`,
        instruction: `L\'esprit qui ne sait pas est l\'esprit du débutant — le plus précieux.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `Shunryu Suzuki disait : «Dans l\'esprit du débutant, il y a de nombreuses possibilités. Dans l\'esprit de l\'expert, il y en a peu.» Comment cultiver cet esprit du débutant dans votre vie quotidienne ?`,
      },
      {
        type: 'closing',
        durationSec: 40,
        text: `Portez le koan avec vous. Non comme un poids, mais comme une lanterne. Il s\'illuminera en son propre temps, souvent là où vous ne l\'attendez pas — dans la cuisine, sous la douche, au réveil.`,
      },
    ],
  },
  {
    id: 'session_24',
    title: '6 min · Satipatthana — Quatre fondements',
    subtitle: 'Les quatre applications de la pleine conscience · Mahasatipatthana Sutta',
    durationMin: 6,
    theme: 'Satipatthana',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: 'Satipatthana — les quatre fondements de la pleine conscience : kaya (corps), vedana (sensations), citta (esprit), dhamma (phénomènes)',
        instruction: 'Le Bouddha disait : «Voici le seul chemin direct vers la purification des êtres, la transcendance de la tristesse et des lamentations, la disparition de la douleur et de la détresse, la réalisation du Nibbana.»',
      },
      {
        type: 'reading',
        durationSec: 65,
        text: `Les quatre fondements permettent d\'observer l\'ensemble de l\'expérience :\n1. Kaya — corps, souffle, postures, éléments\n2. Vedana — le ton hédonique de chaque sensation (agréable/désagréable/neutre)\n3. Citta — l\'état de l\'esprit à chaque instant\n4. Dhamma — les phénomènes mentaux, les obstacles, les facteurs d\'éveil`,
      },
      {
        type: 'practice',
        durationSec: 160,
        text: `Pendant quelques minutes, explorez chaque fondement :\n\nKaya (30 sec) : Où êtes-vous dans votre corps ? Quelle est votre posture ?\nVedana (30 sec) : Les sensations présentes sont-elles agréables, désagréables, neutres ?\nCitta (30 sec) : L\'esprit est-il calme, agité, concentré, dispersé ?\nDhamma (30 sec) : Y a-t-il de la convoitise, de l\'aversion, de la torpeur, de l\'agitation ? Ou des facteurs positifs — sati, samadhi, prajna ?`,
        instruction: 'Pas de jugement. Pure observation.',
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Satipatthana est un diagnostic complet de l\'expérience présente. Avec de l\'entraînement, cette observation devient continue — pas seulement assise sur le coussin, mais dans toute la vie.`,
      },
      {
        type: 'closing',
        durationSec: 45,
        text: 'Que la pleine conscience des quatre fondements devienne votre compagnon constant. Non comme une obligation, mais comme une lumière toujours disponible. Sati est la septième branche du Noble Sentier. Elle porte tout le reste. Sadhu.',
      },
    ],
  },
  {
    id: 'session_25',
    title: '7 min · Pleine Lune — Uposatha',
    subtitle: `La journée d\'observance bouddhiste · Rafraîchir la pratique`,
    durationMin: 7,
    theme: 'Uposatha',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: `Uposatha — les jours d\'observance coïncidant avec les phases lunaires. Occasion de rafraîchir les préceptes, d\'approfondir la pratique, de se reconnecter à la Sangha.`,
        instruction: `Aujourd\'hui est une invitation à faire le bilan. Pas avec culpabilité, mais avec la clarté d\'un praticien honnête.`,
      },
      {
        type: 'reading',
        durationSec: 75,
        text: `Dans les monastères, Uposatha est le jour de la récitation du Patimokkha — les règles du Vinaya. Pour les laïcs, c\'est l\'occasion d\'observer les Huit Préceptes, de méditer plus longuement, d\'étudier le Dharma. Le cycle lunaire rappelle Anicca — et l\'invitation permanente à recommencer.`,
      },
      {
        type: 'practice',
        durationSec: 180,
        text: 'Prenez un moment de bilan sincère :\n\n— Comment ma pratique a-t-elle évolué ce mois ?\n— Ai-je honoré les Cinq Préceptes dans ma vie quotidienne ?\n— Quelle qualité du cœur ai-je cultivée ? Quelle qualité reste à développer ?\n— Y a-t-il une action à poser pour rafraîchir mon engagement ?\n\nTerminez par la récitation des Trois Refuges et des Cinq Préceptes.',
        instruction: 'Uposatha est un reset mensuel. Chaque cycle est un nouveau départ.',
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: `La vie contemplative a besoin de rythme — quotidien, hebdomadaire, mensuel. Uposatha est l\'un de ces rythmes. Comment créez-vous des rythmes de pratique dans votre propre vie ?`,
      },
      {
        type: 'closing',
        durationSec: 45,
        text: `Que ce renouvellement de l\'intention soit comme une lune qui se lève — fraîche, lumineuse, fidèle à son cycle. Le Dharma est vivant parce que les pratiquants le vivent. Sadhu, sadhu, sadhu.`,
      },
    ],
  },
  {
    id: 'session_26',
    title: '6 min · Maranasati — Conscience de la mort',
    subtitle: 'La contemplation de la mort comme maître de vie',
    durationMin: 6,
    theme: 'Maranasati',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: 'Maranasati — la pleine conscience de la mort — non pour engendrer la peur, mais pour clarifier ce qui compte vraiment et intensifier la pratique.',
        instruction: `Le Bouddha enseignait Maranasati comme l\'une des dix contemplations. Les plus grands méditants l\'ont utilisée pour atteindre l\'éveil. Approchez-la avec respect et courage.`,
      },
      {
        type: 'reading',
        durationSec: 70,
        text: `Michel de Montaigne — qui s\'était nourri de sagesse antique proche du bouddhisme — écrivait : «Que philosopher c\'est apprendre à mourir.» Le Bouddha disait : «De toutes les méditations, la méditation sur la mort est la plus haute.» Elle clarifie l\'essentiel et dissout les peurs superficielles.`,
      },
      {
        type: 'practice',
        durationSec: 165,
        text: `Contemplez honnêtement :\n\n«Ce corps mourra un jour. Cette personne que j\'appelle "moi" cessera.»\n\nObservez ce qui surgit — peur, résistance, acceptation, paix. Maintenant posez-vous : «Si je ne vivais plus qu\'un an, que changerais-je dans ma vie ? Qu\'abandonnerais-je ? Qu\'est-ce qui m\'importe vraiment ?»\n\nLaissez ces réponses vous enseigner.`,
        instruction: `Maranasati bien pratiquée engendre la joie et l\'urgence de pratiquer, non la dépression.`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: `Steve Jobs disait : «Se souvenir que je mourrai bientôt est l\'outil le plus important que j\'ai jamais rencontré pour prendre les grandes décisions de ma vie.» Maranasati transforme les priorités. Qu\'avez-vous découvert ?`,
      },
      {
        type: 'closing',
        durationSec: 35,
        text: `Que la conscience de l\'impermanence de cette vie vous rende plus vivant, plus présent, plus généreux. La mort n\'est pas l\'ennemi — elle est le plus honnête des enseignants. Sadhu.`,
      },
    ],
  },
  {
    id: 'session_27',
    title: '5 min · Mantra — Om Mani Padme Hum',
    subtitle: 'Le mantra de Avalokiteshvara · Compassion universelle',
    durationMin: 5,
    theme: 'Mantra',
    steps: [
      {
        type: 'intro',
        durationSec: 30,
        text: `Om Mani Padme Hum — le mantra le plus récité au monde. «La joie dans le lotus.» Le mantra d\'Avalokiteshvara, le Bodhisattva de la compassion.`,
        instruction: 'Installez-vous confortablement. Si vous avez un mala (rosaire bouddhiste), tenez-le dans la main droite. Sinon, les mains en Anjali mudra (paumes jointes).',
      },
      {
        type: 'reading',
        durationSec: 55,
        text: `Chacune des six syllabes du mantra purifie l\'une des six réalités d\'existence :\nOm — purification de l\'orgueil\nMa — purification de la jalousie\nNi — purification du désir\nPad — purification de l\'ignorance\nMe — purification de l\'avidité\nHum — purification de la haine\n\nLa récitation sincère active la compassion d\'Avalokiteshvara en soi-même.`,
      },
      {
        type: 'practice',
        durationSec: 140,
        text: 'Récitez Om Mani Padme Hum en synchronisation avec le souffle :\n— Inspiration : Om Mani\n— Expiration : Padme Hum\n\nLaissez le mantra se répéter naturellement, comme une rivière qui coule. Ne forcez pas la concentration — laissez le mantra vous porter.',
        instruction: 'La quantité de récitations importe moins que la qualité de présence.',
      },
      {
        type: 'reflection',
        durationSec: 40,
        text: `Le mantra agit à un niveau plus profond que la compréhension intellectuelle. Comment vous sentez-vous après cette récitation ? Y a-t-il une différence de qualité dans l\'espace intérieur ?`,
      },
      {
        type: 'closing',
        durationSec: 35,
        text: `Que la compassion d\'Avalokiteshvara — qui entend les cris du monde — s\'éveille en vous. Om Mani Padme Hum. La joie dans le lotus. La sagesse au cœur de la souffrance.`,
      },
    ],
  },
  {
    id: 'session_28',
    title: '7 min · Cinq Préceptes — Panca Sila',
    subtitle: `L\'éthique bouddhiste pour les laïcs · Fondation de la pratique`,
    durationMin: 7,
    theme: 'Cinq Préceptes',
    steps: [
      {
        type: 'intro',
        durationSec: 40,
        text: 'Les Panca Sila — Cinq Préceptes — sont la base éthique de la vie bouddhiste laïque. Ils ne sont pas des commandements mais des engagements librement pris.',
        instruction: `Avant de commencer, reconnectez-vous à votre motivation : pourquoi pratiquer l\'éthique ? Non par peur du châtiment, mais par amour de la liberté et des autres.`,
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Les Cinq Préceptes :\n1. Ne pas prendre la vie (ahimsa)\n2. Ne pas prendre ce qui n\'est pas donné\n3. Ne pas commettre d\'inconduite sexuelle\n4. Ne pas mentir ni parler faux\n5. Ne pas consommer de substances qui troublent l\'esprit\n\nChaque précepte a un aspect négatif (s\'abstenir) et un aspect positif (cultiver).`,
      },
      {
        type: 'practice',
        durationSec: 190,
        text: `Pour chaque précepte, réfléchissez :\n\n1. Comment ai-je respecté (ou non) ce précepte cette semaine ?\n2. Comment puis-je l\'incarner plus pleinement dans ma vie ?\n\nTerminez par la récitation solennelle :\n«Je prends l\'engagement de m\'abstenir de... Je cultive à la place...»\n\nDites-le avec conviction pour chacun des cinq préceptes.`,
        instruction: `L\'autocritique sans compassion n\'est pas Sila — c\'est de l\'ego. Soyez honnête ET bienveillant.`,
      },
      {
        type: 'reflection',
        durationSec: 60,
        text: 'Lequel des cinq préceptes vous est le plus difficile à observer ? Lequel vous apporte le plus de liberté quand vous le respectez ? Ces réponses révèlent beaucoup sur votre terrain de pratique.',
      },
      {
        type: 'closing',
        durationSec: 30,
        text: `Sila est la fondation. Sans éthique, la méditation n\'a pas de sol. Avec éthique, chaque acte quotidien devient pratique. Que vos engagements d\'aujourd\'hui nourrissent votre éveil. Sadhu.`,
      },
    ],
  },
  {
    id: 'session_29',
    title: '6 min · Sangha — La communauté comme refuge',
    subtitle: 'Troisième joyau du Triple Refuge · Pratiquer ensemble',
    durationMin: 6,
    theme: 'Sangha',
    steps: [
      {
        type: 'intro',
        durationSec: 35,
        text: 'Sangha — la communauté des pratiquants — est le troisième joyau du Triple Refuge. Ananda, le disciple préféré du Bouddha, lui demanda : «Est-ce que la bonne amitié spirituelle est la moitié du chemin saint ?» Le Bouddha répondit : «Non, Ananda. Elle est tout le chemin saint.»',
        instruction: `Pensez à une personne qui a soutenu votre chemin spirituel. Peut-être même sans s\'en rendre compte.`,
      },
      {
        type: 'reading',
        durationSec: 65,
        text: `Thich Nhat Hanh enseignait : «La Sangha n\'est pas seulement un groupe de pratiquants. C\'est un corps vivant de Bouddhas en formation.» La solitude est parfois nécessaire sur le chemin — mais l\'isolement l\'entrave. Nous avons besoin de miroirs vivants pour voir nos angles morts.`,
      },
      {
        type: 'practice',
        durationSec: 160,
        text: `Méditation sur la Sangha :\n\nPhase 1 : Appelez à l\'esprit les êtres qui ont nourri votre chemin. Envoyez-leur Metta.\n\nPhase 2 : Pensez à la Sangha invisible — tous les pratiquants bouddhistes dans le monde qui méditent en ce moment. Sentez cette connexion silencieuse.\n\nPhase 3 : Pensez à la Sangha historique — les moines, nonnes, pratiquants à travers 2500 ans. Vous êtes leur continuation vivante.`,
        instruction: `Vous n\'êtes jamais seul dans cette pratique.`,
      },
      {
        type: 'reflection',
        durationSec: 55,
        text: 'Avez-vous une Sangha — formelle ou informelle ? Comment nourrissez-vous ces relations de pratique ? Si vous pratiquez seul, comment pourriez-vous trouver ou créer une communauté spirituelle ?',
      },
      {
        type: 'closing',
        durationSec: 45,
        text: 'Sangham saranam gacchami. Je prends refuge dans la Sangha. Que cette connexion invisible mais réelle avec tous les pratiquants du Dharma vous soutienne et vous réconforte. Vous êtes en bonne compagnie. Sadhu.',
      },
    ],
  },
  {
    id: 'session_30',
    title: `10 min · Nibbana — L\'aperçu de la libération`,
    subtitle: 'La cessation du cramponnement · La paix au-delà des mots',
    durationMin: 10,
    theme: 'Nibbana',
    steps: [
      {
        type: 'intro',
        durationSec: 50,
        text: `Nibbana — souvent traduit par «extinction» ou «libération». Non l\'extinction de soi, mais l\'extinction de la soif, de l\'aversion, de l\'illusion. Udana 8.1 : «Il y a, ô moines, un non-né, non-devenu, non-fait, non-conditionné. S\'il n\'y avait pas ce non-né... il n\'y aurait pas d\'évasion possible du né, du devenu, du fait, du conditionné.»`,
        instruction: 'Cette session est une invitation à toucher, même brièvement, quelque chose au-delà du conditionné. Ne cherchez pas. Laissez simplement.',
      },
      {
        type: 'reading',
        durationSec: 80,
        text: `Ajahn Chah disait : «Si vous lâchez un peu, vous aurez un peu de paix. Si vous lâchez beaucoup, vous aurez beaucoup de paix. Si vous lâchez totalement, vous aurez la paix totale.» Nibbana n\'est pas un endroit où l\'on va — c\'est ce qui reste quand le cramponnement cesse. Il est déjà là, toujours disponible, obscurci seulement par notre saisie.`,
      },
      {
        type: 'practice',
        durationSec: 280,
        text: `Phase 1 — Calme (2 min) : Établissez une concentration stable sur le souffle.\n\nPhase 2 — Lâcher (2 min) : À chaque expiration, lâchez quelque chose. Un souci. Une espérance. Une identité. «Je lâche l\'inquiétude.» «Je lâche l\'ambition.» «Je lâche même l\'idée du méditant.»\n\nPhase 3 — Espace (1 min) : Cessez tout effort. Ni concentration, ni lâcher. Simplement l\'espace ouvert de la conscience. Voyez ce qui demeure quand rien n\'est agrippé.`,
        instruction: `Nibbana ne peut pas être forcé. Il ne peut être qu\'invité par le lâcher-prise.`,
      },
      {
        type: 'reflection',
        durationSec: 70,
        text: `Y a-t-il eu un moment, même fugace, d\'espace ouvert — sans agenda, sans histoire, sans cramponnement ? Ce moment, aussi bref soit-il, est une indication de ce vers quoi le chemin pointe. Comment le décrire ? Peut-être qu\'il ne peut pas l\'être.`,
      },
      {
        type: 'closing',
        durationSec: 60,
        text: `Nibbana n\'est pas la fin de la pratique — c\'est son horizon toujours ouvert. Chaque moment de lâcher est un pas. Chaque acte de compassion est un pas. Chaque regard lucide sur l\'impermanence est un pas.\n\nQue votre pratique vous porte, pas à pas, vers la paix qui surpasse toute compréhension.\n\nSadhu, sadhu, sadhu.`,
      },
    ],
  },
];
