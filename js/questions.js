/**
 * MoodLens - Klausimų ir balų duomenys
 *
 * Kiekvienas klausimas įvertina 5 emocines dimensijas:
 * - happiness: Laimė, pasitenkinimas (aukštesnis = geriau)
 * - energy: Energija, motyvacija (aukštesnis = geriau)
 * - calmness: Ramybė, atsipalaidavimas (aukštesnis = geriau)
 * - stress: Stresas, nerimas (žemesnis = geriau)
 * - sadness: Liūdesys (žemesnis = geriau)
 */

const QUESTIONS = [
    {
        id: 1,
        text: "Kaip jautėtės šįryt pabudę?",
        category: "Ryto energija",
        icon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Sunrise -->
            <path d="M10 55 H70" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <circle cx="40" cy="55" r="18" fill="currentColor" opacity="0.3"/>
            <circle cx="40" cy="55" r="18" stroke="currentColor" stroke-width="3"/>
            <!-- Sun rays -->
            <line x1="40" y1="28" x2="40" y2="20" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <line x1="22" y1="37" x2="16" y2="31" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <line x1="58" y1="37" x2="64" y2="31" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <line x1="14" y1="55" x2="8" y2="55" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
            <line x1="72" y1="55" x2="66" y2="55" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
            <!-- Bed -->
            <rect x="15" y="62" width="50" height="8" rx="2" fill="currentColor" opacity="0.2"/>
            <rect x="12" y="70" width="56" height="4" rx="2" fill="currentColor" opacity="0.4"/>
        </svg>`,
        answers: [
            {
                letter: "a",
                text: "Pailsėjęs ir kupinas energijos dienai",
                scores: { happiness: 15, energy: 15, calmness: 10, stress: -10, sadness: -10 }
            },
            {
                letter: "b",
                text: "Normaliai, pasiruošęs dienai",
                scores: { happiness: 8, energy: 8, calmness: 5, stress: -5, sadness: -5 }
            },
            {
                letter: "c",
                text: "Šiek tiek pavargęs, bet susitvarkyčiau",
                scores: { happiness: -5, energy: -5, calmness: 0, stress: 5, sadness: 5 }
            },
            {
                letter: "d",
                text: "Išsekęs ir bijau prasidedančios dienos",
                scores: { happiness: -10, energy: -15, calmness: -10, stress: 15, sadness: 15 }
            }
        ]
    },
    {
        id: 2,
        text: "Kaip jaučiatės dėl bendravimo su kitais šiuo metu?",
        category: "Socialiniai ryšiai",
        icon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Person 1 -->
            <circle cx="25" cy="28" r="10" fill="currentColor" opacity="0.3"/>
            <circle cx="25" cy="28" r="10" stroke="currentColor" stroke-width="2.5"/>
            <path d="M10 58 C10 45 18 40 25 40 C32 40 40 45 40 58" fill="currentColor" opacity="0.2"/>
            <path d="M10 58 C10 45 18 40 25 40 C32 40 40 45 40 58" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Person 2 -->
            <circle cx="55" cy="28" r="10" fill="currentColor" opacity="0.3"/>
            <circle cx="55" cy="28" r="10" stroke="currentColor" stroke-width="2.5"/>
            <path d="M40 58 C40 45 48 40 55 40 C62 40 70 45 70 58" fill="currentColor" opacity="0.2"/>
            <path d="M40 58 C40 45 48 40 55 40 C62 40 70 45 70 58" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Connection lines -->
            <path d="M32 35 Q40 42 48 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
            <circle cx="40" cy="65" r="3" fill="currentColor" opacity="0.4"/>
            <circle cx="33" cy="68" r="2" fill="currentColor" opacity="0.3"/>
            <circle cx="47" cy="68" r="2" fill="currentColor" opacity="0.3"/>
        </svg>`,
        answers: [
            {
                letter: "a",
                text: "Noriu bendrauti ir socializuotis",
                scores: { happiness: 15, energy: 12, calmness: 8, stress: -8, sadness: -12 }
            },
            {
                letter: "b",
                text: "Atviras tam, jei taip nutiktų",
                scores: { happiness: 8, energy: 5, calmness: 8, stress: -3, sadness: -5 }
            },
            {
                letter: "c",
                text: "Verčiau būčiau vienas",
                scores: { happiness: -3, energy: -5, calmness: 5, stress: 5, sadness: 8 }
            },
            {
                letter: "d",
                text: "Jaučiuosi izoliuotas ir atskirtas",
                scores: { happiness: -12, energy: -10, calmness: -5, stress: 12, sadness: 15 }
            }
        ]
    },
    {
        id: 3,
        text: "Kaip apibūdintumėte savo streso lygį šiuo metu?",
        category: "Streso lygis",
        icon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Gauge background -->
            <path d="M15 55 A30 30 0 0 1 65 55" stroke="currentColor" stroke-width="8" stroke-linecap="round" opacity="0.2"/>
            <!-- Gauge gradient segments -->
            <path d="M15 55 A30 30 0 0 1 28 30" stroke="#6BCB77" stroke-width="8" stroke-linecap="round"/>
            <path d="M28 30 A30 30 0 0 1 52 30" stroke="#FFD93D" stroke-width="8" stroke-linecap="round"/>
            <path d="M52 30 A30 30 0 0 1 65 55" stroke="#FF6B6B" stroke-width="8" stroke-linecap="round"/>
            <!-- Gauge needle -->
            <circle cx="40" cy="55" r="6" fill="currentColor"/>
            <path d="M40 55 L40 28" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <!-- Labels -->
            <text x="8" y="68" font-size="8" fill="currentColor" opacity="0.6">Žemas</text>
            <text x="52" y="68" font-size="8" fill="currentColor" opacity="0.6">Aukštas</text>
        </svg>`,
        answers: [
            {
                letter: "a",
                text: "Labai atsipalaidavęs ir ramus",
                scores: { happiness: 12, energy: 8, calmness: 15, stress: -15, sadness: -8 }
            },
            {
                letter: "b",
                text: "Šiek tiek užsiėmęs, bet susitvarko",
                scores: { happiness: 5, energy: 5, calmness: 8, stress: -5, sadness: -3 }
            },
            {
                letter: "c",
                text: "Kiek pervargęs",
                scores: { happiness: -5, energy: -3, calmness: -8, stress: 10, sadness: 5 }
            },
            {
                letter: "d",
                text: "Labai stresą jaučiantis arba neramus",
                scores: { happiness: -12, energy: -8, calmness: -15, stress: 15, sadness: 12 }
            }
        ]
    },
    {
        id: 4,
        text: "Kaip jaučiasi jūsų kūnas šiuo metu?",
        category: "Fiziniai pojūčiai",
        icon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Body outline -->
            <circle cx="40" cy="18" r="10" stroke="currentColor" stroke-width="2.5" fill="currentColor" opacity="0.2"/>
            <!-- Torso -->
            <path d="M40 28 L40 50" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <!-- Arms -->
            <path d="M40 35 L25 45" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M40 35 L55 45" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <!-- Legs -->
            <path d="M40 50 L28 70" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <path d="M40 50 L52 70" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <!-- Energy circles -->
            <circle cx="40" cy="40" r="8" stroke="currentColor" stroke-width="2" opacity="0.3" fill="none"/>
            <circle cx="40" cy="40" r="14" stroke="currentColor" stroke-width="1.5" opacity="0.2" fill="none"/>
            <circle cx="40" cy="40" r="20" stroke="currentColor" stroke-width="1" opacity="0.1" fill="none"/>
            <!-- Heart -->
            <path d="M37 38 C35 35 38 33 40 36 C42 33 45 35 43 38 L40 42 L37 38Z" fill="currentColor" opacity="0.5"/>
        </svg>`,
        answers: [
            {
                letter: "a",
                text: "Energingas ir patogiai",
                scores: { happiness: 12, energy: 15, calmness: 10, stress: -10, sadness: -8 }
            },
            {
                letter: "b",
                text: "Neutraliai, nieko ypatingo",
                scores: { happiness: 5, energy: 5, calmness: 8, stress: -3, sadness: -3 }
            },
            {
                letter: "c",
                text: "Įsitempęs arba nepatogiai",
                scores: { happiness: -5, energy: -5, calmness: -8, stress: 10, sadness: 5 }
            },
            {
                letter: "d",
                text: "Sunkiai, pavargęs arba skausmingai",
                scores: { happiness: -10, energy: -15, calmness: -10, stress: 12, sadness: 12 }
            }
        ]
    },
    {
        id: 5,
        text: "Kas geriausiai apibūdina jūsų mintis pastaruoju metu?",
        category: "Minčių pobūdis",
        icon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Brain outline -->
            <path d="M25 45 C15 45 12 35 18 28 C15 22 20 15 28 15 C30 10 38 8 45 12 C52 8 62 12 62 22 C68 25 68 35 62 40 C65 48 58 55 50 52 C45 58 35 58 30 52 C22 55 18 50 25 45Z"
                  fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
            <!-- Thought bubbles -->
            <circle cx="40" cy="32" r="4" fill="currentColor" opacity="0.4"/>
            <circle cx="32" cy="38" r="3" fill="currentColor" opacity="0.3"/>
            <circle cx="48" cy="36" r="3" fill="currentColor" opacity="0.3"/>
            <circle cx="38" cy="42" r="2" fill="currentColor" opacity="0.2"/>
            <!-- Sparkles for positive thoughts -->
            <path d="M58 18 L60 22 L64 20 L60 24 L62 28 L58 25 L54 28 L56 24 L52 20 L56 22 Z" fill="currentColor" opacity="0.5"/>
            <!-- Connection lines -->
            <path d="M35 30 Q40 35 45 30" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
            <path d="M30 36 Q35 40 40 38" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
        </svg>`,
        answers: [
            {
                letter: "a",
                text: "Pozityvios ir viltingos",
                scores: { happiness: 15, energy: 12, calmness: 10, stress: -10, sadness: -12 }
            },
            {
                letter: "b",
                text: "Daugiausia neutralios, einu su srautu",
                scores: { happiness: 5, energy: 5, calmness: 10, stress: -5, sadness: -5 }
            },
            {
                letter: "c",
                text: "Nerimastingos arba pasikartojančios",
                scores: { happiness: -8, energy: -5, calmness: -10, stress: 12, sadness: 8 }
            },
            {
                letter: "d",
                text: "Tamsios arba savikritikos kupinos",
                scores: { happiness: -15, energy: -10, calmness: -12, stress: 15, sadness: 15 }
            }
        ]
    },
    {
        id: 6,
        text: "Kiek jus domina veikla, kuri paprastai teikia malonumą?",
        category: "Susidomėjimas veikla",
        icon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Palette -->
            <ellipse cx="35" cy="45" rx="22" ry="18" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
            <!-- Color dots on palette -->
            <circle cx="28" cy="38" r="4" fill="#FF6B6B"/>
            <circle cx="38" cy="35" r="4" fill="#FFD93D"/>
            <circle cx="28" cy="50" r="4" fill="#6BCB77"/>
            <circle cx="42" cy="48" r="4" fill="#74B9FF"/>
            <!-- Thumb hole -->
            <ellipse cx="22" cy="45" rx="5" ry="4" fill="white" stroke="currentColor" stroke-width="2"/>
            <!-- Paintbrush -->
            <rect x="52" y="20" width="6" height="25" rx="2" fill="currentColor" opacity="0.4"/>
            <path d="M52 45 L55 55 L58 45" fill="currentColor" opacity="0.6"/>
            <rect x="53" y="15" width="4" height="8" rx="1" fill="currentColor" opacity="0.3"/>
            <!-- Sparkle -->
            <circle cx="62" cy="28" r="2" fill="currentColor" opacity="0.4"/>
            <circle cx="48" cy="22" r="1.5" fill="currentColor" opacity="0.3"/>
        </svg>`,
        answers: [
            {
                letter: "a",
                text: "Labai susidomėjęs, nekantrauju",
                scores: { happiness: 15, energy: 15, calmness: 8, stress: -8, sadness: -12 }
            },
            {
                letter: "b",
                text: "Šiek tiek susidomėjęs",
                scores: { happiness: 8, energy: 8, calmness: 5, stress: -3, sadness: -5 }
            },
            {
                letter: "c",
                text: "Nelabai jaučiu norą šiandien",
                scores: { happiness: -5, energy: -8, calmness: 0, stress: 5, sadness: 8 }
            },
            {
                letter: "d",
                text: "Niekas neatrodo patraukliai",
                scores: { happiness: -12, energy: -15, calmness: -5, stress: 10, sadness: 15 }
            }
        ]
    },
    {
        id: 7,
        text: "Kaip stabiliai jautėsi jūsų emocijos pastaruoju metu?",
        category: "Emocinis stabilumas",
        icon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Balance base -->
            <rect x="35" y="60" width="10" height="12" fill="currentColor" opacity="0.3"/>
            <rect x="25" y="70" width="30" height="4" rx="2" fill="currentColor" opacity="0.4"/>
            <!-- Balance beam -->
            <rect x="15" y="28" width="50" height="4" rx="2" fill="currentColor" opacity="0.5"/>
            <!-- Center pivot -->
            <polygon points="40,32 35,60 45,60" fill="currentColor" opacity="0.3"/>
            <circle cx="40" cy="30" r="5" fill="currentColor"/>
            <!-- Left pan -->
            <path d="M15 32 L12 38 L8 38 L8 42 Q15 48 22 42 L22 38 L18 38 Z" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="2"/>
            <!-- Right pan -->
            <path d="M65 32 L68 38 L72 38 L72 42 Q65 48 58 42 L58 38 L62 38 Z" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="2"/>
            <!-- Hearts in pans -->
            <path d="M13 40 C11 38 13 36 15 38 C17 36 19 38 17 40 L15 43 L13 40Z" fill="currentColor" opacity="0.5"/>
            <path d="M63 40 C61 38 63 36 65 38 C67 36 69 38 67 40 L65 43 L63 40Z" fill="currentColor" opacity="0.5"/>
        </svg>`,
        answers: [
            {
                letter: "a",
                text: "Labai stabiliai ir subalansuotai",
                scores: { happiness: 10, energy: 8, calmness: 15, stress: -12, sadness: -8 }
            },
            {
                letter: "b",
                text: "Daugiausia stabiliai su nedideliais svyravimais",
                scores: { happiness: 5, energy: 5, calmness: 8, stress: -5, sadness: -3 }
            },
            {
                letter: "c",
                text: "Tai aukštyn, tai žemyn per dieną",
                scores: { happiness: -5, energy: -3, calmness: -8, stress: 10, sadness: 5 }
            },
            {
                letter: "d",
                text: "Labai nenuspėjamai arba intensyviai",
                scores: { happiness: -10, energy: -8, calmness: -15, stress: 15, sadness: 12 }
            }
        ]
    },
    {
        id: 8,
        text: "Kaip sekėsi miegoti pastaruoju metu?",
        category: "Miego kokybė",
        icon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Moon -->
            <path d="M50 15 C35 15 25 28 25 42 C25 56 38 68 52 65 C42 62 35 52 35 40 C35 28 42 20 50 15Z"
                  fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
            <!-- Stars -->
            <path d="M60 20 L61 24 L65 25 L61 26 L60 30 L59 26 L55 25 L59 24 Z" fill="currentColor" opacity="0.6"/>
            <path d="M68 35 L69 38 L72 38 L69 40 L70 43 L68 41 L65 43 L66 40 L64 38 L67 38 Z" fill="currentColor" opacity="0.4"/>
            <circle cx="62" cy="48" r="2" fill="currentColor" opacity="0.3"/>
            <!-- Zzz -->
            <text x="45" y="55" font-size="12" font-weight="bold" fill="currentColor" opacity="0.5">Z</text>
            <text x="52" y="48" font-size="10" font-weight="bold" fill="currentColor" opacity="0.4">z</text>
            <text x="58" y="42" font-size="8" font-weight="bold" fill="currentColor" opacity="0.3">z</text>
            <!-- Cloud/pillow -->
            <ellipse cx="30" cy="68" rx="18" ry="6" fill="currentColor" opacity="0.2"/>
        </svg>`,
        answers: [
            {
                letter: "a",
                text: "Puikiai, keliuosi pailsėjęs",
                scores: { happiness: 12, energy: 15, calmness: 12, stress: -10, sadness: -8 }
            },
            {
                letter: "b",
                text: "Neblogai, galėtų būti geriau",
                scores: { happiness: 5, energy: 5, calmness: 5, stress: -3, sadness: -3 }
            },
            {
                letter: "c",
                text: "Prastai, sunku užmigti ar išmiegoti",
                scores: { happiness: -8, energy: -10, calmness: -8, stress: 12, sadness: 8 }
            },
            {
                letter: "d",
                text: "Labai blogai arba beveik nemiegu",
                scores: { happiness: -12, energy: -15, calmness: -12, stress: 15, sadness: 12 }
            }
        ]
    },
    {
        id: 9,
        text: "Kai galvojate apie ateitį, jaučiatės:",
        category: "Ateities perspektyva",
        icon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Road/path -->
            <path d="M20 70 Q30 50 40 40 Q50 30 60 15" stroke="currentColor" stroke-width="8" stroke-linecap="round" opacity="0.2"/>
            <path d="M20 70 Q30 50 40 40 Q50 30 60 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 6"/>
            <!-- Horizon sun -->
            <circle cx="60" cy="15" r="10" fill="currentColor" opacity="0.3"/>
            <circle cx="60" cy="15" r="10" stroke="currentColor" stroke-width="2"/>
            <!-- Sun rays -->
            <line x1="60" y1="2" x2="60" y2="-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
            <line x1="72" y1="15" x2="76" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
            <line x1="70" y1="5" x2="73" y2="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
            <!-- Person silhouette -->
            <circle cx="22" cy="58" r="5" fill="currentColor" opacity="0.5"/>
            <path d="M22 63 L22 72" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M22 66 L18 70" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M22 66 L26 70" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <!-- Arrow pointing forward -->
            <path d="M35 45 L45 35 M45 35 L42 42 M45 35 L38 38" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
        </svg>`,
        answers: [
            {
                letter: "a",
                text: "Optimistiškai ir su entuziazmu",
                scores: { happiness: 15, energy: 12, calmness: 10, stress: -10, sadness: -12 }
            },
            {
                letter: "b",
                text: "Atsargiai viltingai",
                scores: { happiness: 8, energy: 5, calmness: 5, stress: -3, sadness: -5 }
            },
            {
                letter: "c",
                text: "Neužtikrintai arba nerimastingai",
                scores: { happiness: -5, energy: -5, calmness: -8, stress: 12, sadness: 8 }
            },
            {
                letter: "d",
                text: "Beviltiški arba bijodamas",
                scores: { happiness: -15, energy: -12, calmness: -12, stress: 15, sadness: 15 }
            }
        ]
    },
    {
        id: 10,
        text: "Kaip gerai rūpinatės savimi?",
        category: "Savitvarka",
        icon: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Large heart -->
            <path d="M40 65 L20 45 C10 35 10 20 25 20 C32 20 38 25 40 30 C42 25 48 20 55 20 C70 20 70 35 60 45 L40 65Z"
                  fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
            <!-- Sparkles around heart -->
            <circle cx="18" cy="30" r="2" fill="currentColor" opacity="0.4"/>
            <circle cx="62" cy="30" r="2" fill="currentColor" opacity="0.4"/>
            <circle cx="40" cy="15" r="2.5" fill="currentColor" opacity="0.5"/>
            <!-- Plus sign (health) -->
            <rect x="36" y="38" width="8" height="18" rx="2" fill="currentColor" opacity="0.4"/>
            <rect x="31" y="43" width="18" height="8" rx="2" fill="currentColor" opacity="0.4"/>
            <!-- Small hearts -->
            <path d="M25 55 L22 52 C20 50 20 47 23 47 C24 47 25 48 25 49 C25 48 26 47 27 47 C30 47 30 50 28 52 L25 55Z" fill="currentColor" opacity="0.3"/>
            <path d="M55 55 L52 52 C50 50 50 47 53 47 C54 47 55 48 55 49 C55 48 56 47 57 47 C60 47 60 50 58 52 L55 55Z" fill="currentColor" opacity="0.3"/>
        </svg>`,
        answers: [
            {
                letter: "a",
                text: "Labai gerai, skiriu dėmesį savo poreikiams",
                scores: { happiness: 12, energy: 12, calmness: 12, stress: -10, sadness: -10 }
            },
            {
                letter: "b",
                text: "Pakankamai gerai",
                scores: { happiness: 5, energy: 5, calmness: 5, stress: -3, sadness: -3 }
            },
            {
                letter: "c",
                text: "Kai kurias sritis apleidžiu",
                scores: { happiness: -5, energy: -8, calmness: -5, stress: 8, sadness: 8 }
            },
            {
                letter: "d",
                text: "Visiškai nesirūpinu savimi",
                scores: { happiness: -12, energy: -12, calmness: -10, stress: 15, sadness: 15 }
            }
        ]
    }
];

// Pradiniai balai kiekvienai dimensijai (prasideda nuo 50/100)
const BASE_SCORES = {
    happiness: 50,
    energy: 50,
    calmness: 50,
    stress: 50,
    sadness: 50
};

// Dimensijų pavadinimai ir aprašymai
const DIMENSION_INFO = {
    happiness: {
        name: "Laimė",
        description: "Džiaugsmas, pasitenkinimas ir malonumas",
        positive: true
    },
    energy: {
        name: "Energija",
        description: "Motyvacija, gyvybingumas ir veržlumas",
        positive: true
    },
    calmness: {
        name: "Ramybė",
        description: "Taika, atsipalaidavimas ir ramumas",
        positive: true
    },
    stress: {
        name: "Stresas",
        description: "Įtampa, nerimas ir pervargimas",
        positive: false
    },
    sadness: {
        name: "Liūdesys",
        description: "Melancholija ir prislėgta nuotaika",
        positive: false
    }
};
