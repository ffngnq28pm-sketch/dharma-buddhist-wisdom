export type ChallengeCategory = 'meditation' | 'dana' | 'sila' | 'sati' | 'metta';

export interface Challenge {
  id: number;
  text: string;
  category: ChallengeCategory;
  emoji: string;
}

export const CHALLENGES: Challenge[] = [
  // Méditation (25)
  { id: 1,  category: 'meditation', emoji: '🧘', text: 'Méditez 10 minutes sur votre souffle, en comptant chaque expiration de 1 à 10.' },
  { id: 2,  category: 'meditation', emoji: '🕯️', text: 'Pratiquez le bodyscan : parcourez chaque partie de votre corps avec une attention douce.' },
  { id: 3,  category: 'meditation', emoji: '🌿', text: 'Observez votre esprit pendant 5 minutes sans juger les pensées qui surgissent.' },
  { id: 4,  category: 'meditation', emoji: '🧘', text: 'Pratiquez la méditation marchée : faites 20 pas lentement, en ressentant chaque mouvement.' },
  { id: 5,  category: 'meditation', emoji: '🌙', text: 'Avant de dormir, observez les sensations dans votre corps en restant complètement immobile.' },
  { id: 6,  category: 'meditation', emoji: '🧘', text: 'Récitez le mantra "So Hum" (je suis) 21 fois, synchronisé avec votre respiration.' },
  { id: 7,  category: 'meditation', emoji: '☸',  text: 'Méditez 15 minutes sur l\'impermanence : observez comment chaque souffle naît et disparaît.' },
  { id: 8,  category: 'meditation', emoji: '🌿', text: 'Pratiquez Anapanasati (méditation sur le souffle) en suivant l\'air jusqu\'au bout de votre nez.' },
  { id: 9,  category: 'meditation', emoji: '🧘', text: 'Trouvez un endroit calme et restez simplement assis dans le silence 10 minutes — sans but.' },
  { id: 10, category: 'meditation', emoji: '🕯️', text: 'Méditez sur une bougie ou une lumière, laissant vos pensées se dissoudre dans la clarté.' },
  { id: 11, category: 'meditation', emoji: '🧘', text: 'Pratiquez la méditation sur l\'espace : imaginez votre esprit comme un ciel vaste et ouvert.' },
  { id: 12, category: 'meditation', emoji: '🌿', text: 'Observez les sons autour de vous pendant 10 minutes sans les nommer ni les juger.' },
  { id: 13, category: 'meditation', emoji: '☸',  text: 'Méditez sur la phrase : "Ceci aussi passera" — accueillez chaque moment avec équanimité.' },
  { id: 14, category: 'meditation', emoji: '🧘', text: 'Pratiquez Vipassana : observez les sensations physiques comme elles apparaissent et disparaissent.' },
  { id: 15, category: 'meditation', emoji: '🌙', text: 'Méditez au lever du soleil, en observant comment la lumière et vos pensées changent ensemble.' },
  { id: 16, category: 'meditation', emoji: '🧘', text: 'Comptez vos perles de māla 108 fois, en récitant un mantra ou en respirant consciemment.' },
  { id: 17, category: 'meditation', emoji: '🌿', text: 'Méditez dans la nature pendant 20 minutes, laissant l\'environnement être votre objet d\'attention.' },
  { id: 18, category: 'meditation', emoji: '☸',  text: 'Pratiquez Zen zazen : asseyez-vous en lotus ou demi-lotus, dos droit, yeux mi-clos, 20 minutes.' },
  { id: 19, category: 'meditation', emoji: '🧘', text: 'Observez vos émotions comme des nuages traversant le ciel de votre conscience — sans vous y accrocher.' },
  { id: 20, category: 'meditation', emoji: '🌿', text: 'Méditez sur la gratitude : sentez chaque respiration comme un don précieux de la vie.' },
  { id: 21, category: 'meditation', emoji: '🧘', text: 'Pratiquez la conscience ouverte : laissez tout ce qui surgit (pensées, sons, sensations) traverser librement.' },
  { id: 22, category: 'meditation', emoji: '🕯️', text: 'Méditez sur la flamme de la conscience — la lumière toujours présente derrière chaque expérience.' },
  { id: 23, category: 'meditation', emoji: '☸',  text: 'Récitez le Metta Sutta en méditant sur chaque être : "Que tous les êtres soient heureux."' },
  { id: 24, category: 'meditation', emoji: '🧘', text: 'Pratiquez la méditation sur la mort (maranasati) : méditez 10 minutes sur l\'impermanence de la vie.' },
  { id: 25, category: 'meditation', emoji: '🌙', text: 'Avant le sommeil, observez votre journée comme un spectateur bienveillant, sans regret ni attachement.' },

  // Dana — Générosité (15)
  { id: 26, category: 'dana', emoji: '🤲', text: 'Offrez quelque chose sans attendre de retour — temps, nourriture, argent ou parole de soutien.' },
  { id: 27, category: 'dana', emoji: '💌', text: 'Écrivez un message de gratitude sincère à quelqu\'un qui vous a aidé récemment.' },
  { id: 28, category: 'dana', emoji: '🤲', text: 'Donnez à une association ou à quelqu\'un dans le besoin — même un petit geste compte.' },
  { id: 29, category: 'dana', emoji: '🍵', text: 'Offrez un repas, un thé ou simplement votre présence à quelqu\'un qui se sent seul.' },
  { id: 30, category: 'dana', emoji: '🤲', text: 'Partagez vos connaissances ou compétences avec quelqu\'un qui en a besoin, gratuitement.' },
  { id: 31, category: 'dana', emoji: '💌', text: 'Appelez un proche que vous n\'avez pas contacté depuis longtemps — offrez-lui votre écoute.' },
  { id: 32, category: 'dana', emoji: '🤲', text: 'Faites un don à un temple, une retraite bouddhiste ou une association de méditation.' },
  { id: 33, category: 'dana', emoji: '🍵', text: 'Cuisinez pour autrui et partagez ce repas dans un esprit de générosité silencieuse.' },
  { id: 34, category: 'dana', emoji: '🤲', text: 'Aidez un inconnu aujourd\'hui — sans qu\'on vous le demande, sans attendre de remerciement.' },
  { id: 35, category: 'dana', emoji: '💌', text: 'Offrez un livre, un objet ou une sagesse que vous aimez à quelqu\'un qui pourrait en bénéficier.' },
  { id: 36, category: 'dana', emoji: '🤲', text: 'Bénévolat : consacrez une heure à servir une communauté ou une cause qui vous tient à cœur.' },
  { id: 37, category: 'dana', emoji: '🍵', text: 'Pratiquez le dana envers vous-même : offrez-vous du temps, du repos, de la douceur.' },
  { id: 38, category: 'dana', emoji: '🤲', text: 'Réconciliez-vous avec quelqu\'un — offrez le cadeau du pardon et de la paix retrouvée.' },
  { id: 39, category: 'dana', emoji: '💌', text: 'Défendez quelqu\'un qu\'on traite injustement — c\'est dana sous forme de courage.' },
  { id: 40, category: 'dana', emoji: '🤲', text: 'Écoutez vraiment quelqu\'un aujourd\'hui sans interrompre — offrez votre attention totale.' },

  // Sila — Éthique (20)
  { id: 41, category: 'sila', emoji: '🌿', text: 'Pratiquez aujourd\'hui le premier précepte : ne causez de mal à aucun être vivant.' },
  { id: 42, category: 'sila', emoji: '📖', text: 'Pratiquez le deuxième précepte : ne prenez que ce qui vous est librement offert.' },
  { id: 43, category: 'sila', emoji: '🌿', text: 'Pratiquez le troisième précepte : observez vos désirs sensuels avec conscience et modération.' },
  { id: 44, category: 'sila', emoji: '📖', text: 'Pratiquez le quatrième précepte : que chaque parole prononcée aujourd\'hui soit vraie et bienveillante.' },
  { id: 45, category: 'sila', emoji: '🌿', text: 'Pratiquez le cinquième précepte : évitez tout ce qui nuit à la clarté de l\'esprit.' },
  { id: 46, category: 'sila', emoji: '📖', text: 'Avant de parler, demandez-vous : est-ce vrai ? est-ce utile ? est-ce bienveillant ? est-ce le bon moment ?' },
  { id: 47, category: 'sila', emoji: '🌿', text: 'Observez votre consommation aujourd\'hui — nourriture, médias, achats — avec pleine conscience.' },
  { id: 48, category: 'sila', emoji: '📖', text: 'Évitez tout commérage ou critique des absents pendant 24 heures.' },
  { id: 49, category: 'sila', emoji: '🌿', text: 'Pratiquez la Parole Juste : choisissez vos mots avec soin, comme un médecin dosant un remède.' },
  { id: 50, category: 'sila', emoji: '📖', text: 'Réfléchissez à vos moyens d\'existence : sont-ils en accord avec les principes de la voie bouddhiste ?' },
  { id: 51, category: 'sila', emoji: '🌿', text: 'Observez combien d\'énergie vous dépensez en pensées et actions non éthiques aujourd\'hui.' },
  { id: 52, category: 'sila', emoji: '📖', text: 'Méditez sur les cinq préceptes comme guides de liberté — non comme contraintes, mais comme protection.' },
  { id: 53, category: 'sila', emoji: '🌿', text: 'Pratiquez l\'Effort Juste : cultivez les états sains, abandonnez doucement les états malsains.' },
  { id: 54, category: 'sila', emoji: '📖', text: 'Réduisez votre consommation d\'écrans d\'une heure aujourd\'hui — offrez ce temps à la pratique.' },
  { id: 55, category: 'sila', emoji: '🌿', text: 'Agissez en accord avec vos valeurs les plus profondes, même quand personne ne vous regarde.' },
  { id: 56, category: 'sila', emoji: '📖', text: 'Examinez honnêtement une habitude qui vous cause de la souffrance à vous ou aux autres.' },
  { id: 57, category: 'sila', emoji: '🌿', text: 'Pratiquez la non-violence dans vos pensées : observez l\'hostilité intérieure sans l\'alimenter.' },
  { id: 58, category: 'sila', emoji: '📖', text: 'Prenez soin de l\'environnement — un petit geste d\'attention envers la terre et les êtres vivants.' },
  { id: 59, category: 'sila', emoji: '🌿', text: 'Méditez sur la phrase du Dhammapada : "Maîtriser l\'esprit est plus grand que toute conquête."' },
  { id: 60, category: 'sila', emoji: '📖', text: 'Engagez-vous formellement, même pour un jour, à observer les Huit Préceptes bouddhistes.' },

  // Sati — Pleine conscience (20)
  { id: 61, category: 'sati', emoji: '🌸', text: 'Mangez un repas en pleine conscience — aucun écran, aucune conversation, juste les saveurs.' },
  { id: 62, category: 'sati', emoji: '🌸', text: 'Lavez la vaisselle en pleine conscience : eau, savon, gestes — chaque sensation présente.' },
  { id: 63, category: 'sati', emoji: '🌸', text: 'Marchez jusqu\'au travail ou dans votre quartier en observant chaque pas, chaque souffle.' },
  { id: 64, category: 'sati', emoji: '🌸', text: 'Éteignez votre téléphone pendant 2 heures et soyez pleinement présent à ce que vous faites.' },
  { id: 65, category: 'sati', emoji: '🌸', text: 'Choisissez une activité quotidienne (café du matin, douche) et faites-la en pleine conscience totale.' },
  { id: 66, category: 'sati', emoji: '🌸', text: 'Lors d\'une conversation, portez toute votre attention sur l\'autre — sans préparer votre réponse.' },
  { id: 67, category: 'sati', emoji: '🌸', text: 'Observez les transitions entre activités : l\'espace entre arrêter et commencer — restez-y un instant.' },
  { id: 68, category: 'sati', emoji: '🌸', text: 'Notez 5 sensations physiques en ce moment précis — chaleur, contact, poids, texture, mouvement.' },
  { id: 69, category: 'sati', emoji: '🌸', text: 'Pratiquez la conscience du corps en marche : sentez le sol sous vos pieds à chaque pas.' },
  { id: 70, category: 'sati', emoji: '🌸', text: 'Observez un arbre, une fleur ou un nuage pendant 5 minutes avec une attention totale et fraîche.' },
  { id: 71, category: 'sati', emoji: '🌸', text: 'Notez chaque fois que votre esprit vagabonde et revenez doucement — sans jugement — au présent.' },
  { id: 72, category: 'sati', emoji: '🌸', text: 'Faites une pause de 3 respirations conscientes toutes les heures — ancrez-vous dans le maintenant.' },
  { id: 73, category: 'sati', emoji: '🌸', text: 'Pratiquez "un seul geste à la fois" : terminez complètement ce que vous faites avant de passer à autre chose.' },
  { id: 74, category: 'sati', emoji: '🌸', text: 'Observez une émotion difficile sans fuir ni exagérer — juste la regarder comme un phénomène.' },
  { id: 75, category: 'sati', emoji: '🌸', text: 'Tenez un journal de pleine conscience : notez 3 moments où vous étiez vraiment présent aujourd\'hui.' },
  { id: 76, category: 'sati', emoji: '🌸', text: 'Pendant un repas, reconnaissez la chaîne d\'êtres qui ont contribué à ce que vous mangez.' },
  { id: 77, category: 'sati', emoji: '🌸', text: 'Pratiquez l\'écoute profonde : écoutez les sons sans les identifier, juste leur qualité vibratoire.' },
  { id: 78, category: 'sati', emoji: '🌸', text: 'Observez comment votre humeur change au fil de la journée — sans vous identifier à aucun état.' },
  { id: 79, category: 'sati', emoji: '🌸', text: 'Pratiquez le ralentissement : faites une chose habituelle 2 fois plus lentement que d\'habitude.' },
  { id: 80, category: 'sati', emoji: '🌸', text: 'À la fin de la journée, regardez-la comme un film — avec distance, curiosité et bienveillance.' },

  // Metta — Bienveillance (20)
  { id: 81,  category: 'metta', emoji: '💛', text: 'Pratiquez le Metta Bhavana : "Que je sois heureux, que je sois en paix, que je sois libéré."' },
  { id: 82,  category: 'metta', emoji: '💛', text: 'Étendez la metta à un proche : "Que tu sois heureux, que tu sois en paix, que tu sois libéré."' },
  { id: 83,  category: 'metta', emoji: '💛', text: 'Pratiquez la metta envers un être neutre — quelqu\'un que vous croisez sans le connaître vraiment.' },
  { id: 84,  category: 'metta', emoji: '💛', text: 'Pratiquez la metta envers quelqu\'un qui vous est difficile : envoyez-lui vraiment votre bienveillance.' },
  { id: 85,  category: 'metta', emoji: '💛', text: 'Étendez la metta à tous les êtres sans exception — humains, animaux, insectes, plantes.' },
  { id: 86,  category: 'metta', emoji: '💛', text: 'Souriez sincèrement à chaque personne que vous croisez aujourd\'hui — sans raison particulière.' },
  { id: 87,  category: 'metta', emoji: '💛', text: 'Pratiquez Karuna (compassion) : visualisez la souffrance d\'un être et envoyez-lui votre compassion.' },
  { id: 88,  category: 'metta', emoji: '💛', text: 'Pratiquez Mudita (joie partagée) : réjouissez-vous sincèrement du bonheur d\'un proche.' },
  { id: 89,  category: 'metta', emoji: '💛', text: 'Pratiquez Upekkha (équanimité) : envoyez votre sérénité à un être que vous ne pouvez pas aider directement.' },
  { id: 90,  category: 'metta', emoji: '💛', text: 'Pardonnez quelqu\'un qui vous a blessé — non pour lui, mais pour votre propre libération.' },
  { id: 91,  category: 'metta', emoji: '💛', text: 'Demandez-vous pardon à vous-même pour une erreur passée — avec la même douceur qu\'à un ami.' },
  { id: 92,  category: 'metta', emoji: '💛', text: 'Pratiquez la metta envers vous-même pendant 10 minutes : envoyez-vous vraiment de l\'amour.' },
  { id: 93,  category: 'metta', emoji: '💛', text: 'Pensez à un être souffrant en ce moment dans le monde et envoyez-lui mentalement votre paix.' },
  { id: 94,  category: 'metta', emoji: '💛', text: 'Pratiquez tonglen (Tibétain) : inspirez la souffrance d\'un être, expirez bonheur et lumière.' },
  { id: 95,  category: 'metta', emoji: '💛', text: 'Exprimez votre gratitude envers votre corps : remerciez-le pour tout ce qu\'il accomplit chaque jour.' },
  { id: 96,  category: 'metta', emoji: '💛', text: 'Envoyez mentalement de la metta à un pays en conflit ou une communauté en souffrance.' },
  { id: 97,  category: 'metta', emoji: '💛', text: 'Pratiquez la metta en marchant : envoyez votre bienveillance à chaque personne que vous croisez.' },
  { id: 98,  category: 'metta', emoji: '💛', text: 'Méditez sur la phrase de Thich Nhat Hanh : "L\'amour sans compréhension ne peut pas être le vrai amour."' },
  { id: 99,  category: 'metta', emoji: '💛', text: 'Lisez le Karaniya Metta Sutta et méditez sur chacune de ses images de bienveillance.' },
  { id: 100, category: 'metta', emoji: '💛', text: 'Terminez votre journée en envoyant de la metta à tous les êtres qui ont souffert aujourd\'hui dans le monde.' },
];

export function getTodayChallenge(): Challenge {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return CHALLENGES[dayOfYear % CHALLENGES.length];
}
