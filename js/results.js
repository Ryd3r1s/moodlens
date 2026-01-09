/**
 * MoodLens - Rezultatų konfigūracija
 *
 * Apibrėžia nuotaikos kategorijas, paaiškinimus, rekomendacijas ir spalvų paletes
 */

// Nuotaikos kategorijos su balų intervalais
const MOOD_CATEGORIES = {
    radiant: {
        name: "Puiki",
        minScore: 80,
        maxScore: 100,
        theme: "radiant",
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="16" fill="currentColor"/>
            <g stroke="currentColor" stroke-width="3" stroke-linecap="round">
                <line x1="32" y1="4" x2="32" y2="12"/>
                <line x1="32" y1="52" x2="32" y2="60"/>
                <line x1="4" y1="32" x2="12" y2="32"/>
                <line x1="52" y1="32" x2="60" y2="32"/>
                <line x1="12.2" y1="12.2" x2="17.9" y2="17.9"/>
                <line x1="46.1" y1="46.1" x2="51.8" y2="51.8"/>
                <line x1="12.2" y1="51.8" x2="17.9" y2="46.1"/>
                <line x1="46.1" y1="17.9" x2="51.8" y2="12.2"/>
            </g>
        </svg>`,
        explanation: "Jūs esate puikioje emocinėje būsenoje. Jūsų energija aukšta, požiūris pozityvus, jaučiatės susijungę ir motyvuoti. Tai puikus metas siekti tikslų ir dalintis savo pozityvumu su kitais."
    },
    content: {
        name: "Gera",
        minScore: 60,
        maxScore: 79,
        theme: "content",
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 8c-6 0-12 8-12 20s8 28 12 28 12-16 12-28S38 8 32 8z" fill="currentColor" opacity="0.3"/>
            <path d="M32 8c-6 0-12 8-12 20s8 28 12 28 12-16 12-28S38 8 32 8z" stroke="currentColor" stroke-width="3"/>
            <path d="M25 32c2-2 4-3 7-3s5 1 7 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
        explanation: "Jums sekasi gerai. Jūsų gyvenime yra pusiausvyra ir ramybė, net jei ne viskas tobula. Turite emocinių išteklių kasdieniniams iššūkiams įveikti ir džiaugsmo akimirkoms rasti."
    },
    neutral: {
        name: "Neutrali",
        minScore: 40,
        maxScore: 59,
        theme: "neutral",
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="28" r="20" fill="currentColor" opacity="0.3"/>
            <circle cx="32" cy="28" r="20" stroke="currentColor" stroke-width="3"/>
            <path d="M20 48c4 4 8 8 12 8s8-4 12-8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
        explanation: "Esate subalansuotoje, bet galbūt nereikšmingoje būsenoje. Nei ypač aukštai, nei žemai - tiesiog tvarkotės kasdien. Tai geras metas įvesti mažus teigiamus pokyčius, kurie galėtų pagerinti nuotaiką."
    },
    low: {
        name: "Žema",
        minScore: 20,
        maxScore: 39,
        theme: "low",
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="24" stroke="currentColor" stroke-width="3"/>
            <circle cx="32" cy="32" r="16" fill="currentColor" opacity="0.3"/>
            <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.5"/>
        </svg>`,
        explanation: "Šiuo metu patiriate emocinių iššūkių. Tai laikina, ir yra žingsnių, kuriuos galite žengti, kad pasijustumėte geriau. Būkite švelnūs sau ir apsvarstykite galimybę kreiptis į žmogų, kuriuo pasitikite."
    },
    struggling: {
        name: "Sunku",
        minScore: 0,
        maxScore: 19,
        theme: "struggling",
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8v40M24 16v32M32 8v48M40 16v32M48 8v40" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
            <ellipse cx="32" cy="56" rx="20" ry="4" fill="currentColor" opacity="0.3"/>
        </svg>`,
        explanation: "Jūs išgyvenate sunkų laikotarpį. Žinokite, kad normalu jaustis blogai, ir pagalba yra prieinama. Šie jausmai yra laikini, net jei dabar taip neatrodo. Apsvarstykite galimybę kreiptis profesionalios pagalbos."
    }
};

// Rekomendacijos kiekvienai nuotaikos kategorijai
const RECOMMENDATIONS = {
    radiant: [
        {
            text: "Švęskite ir mėgaukitės šiuo teigiamu jausmu - užsirašykite, kas sekasi gerai",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
        },
        {
            text: "Pasidalinkite savo pozityvumu su kitais - jūsų gera nuotaika yra užkrečiama",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        {
            text: "Išsikelkite ambicingus tikslus, kol esate motyvuoti - turite energijos jiems siekti",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
        },
        {
            text: "Rašykite dienoraštį apie tai, kas veikia gerai, kad galėtumėte grįžti prie šių įžvalgų vėliau",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
        }
    ],
    content: [
        {
            text: "Išlaikykite dabartines rutinas - jos akivaizdžiai jums tinka",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
        },
        {
            text: "Praktikuokite dėkingumo dienoraštį - užsirašykite tris dalykus, už kuriuos esate dėkingi šiandien",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
        },
        {
            text: "Susisiekite su draugais ar šeima - puoselėkite savo santykius",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        {
            text: "Išbandykite naują hobį ar veiklą - jūsų dabartinė būsena puikiai tinka tyrinėjimui",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
        }
    ],
    neutral: [
        {
            text: "Pajudėkite fiziškai - net trumpas pasivaikščiojimas gali pagerinti nuotaiką",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M12 8v6M9 21l3-7 3 7M6 15l6-1 6 1"/></svg>`
        },
        {
            text: "Praleiskite laiko gamtoje - natūrali aplinka įrodytai gerina nuotaiką",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
        },
        {
            text: "Klausykite pakylėjančios muzikos - sukurkite grojaraštį, kuris jus energizuoja",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`
        },
        {
            text: "Suplanuokite kažką, ko laukiate - pats laukimas gali pagerinti nuotaiką",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`
        }
    ],
    low: [
        {
            text: "Praktikuokite švelnų užuojautą sau - elkitės su savimi taip, kaip elgtumėtės su geru draugu",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
        },
        {
            text: "Trumpai pasivaikščiokite lauke - dienos šviesa ir judėjimas padeda reguliuoti nuotaiką",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        },
        {
            text: "Kreipkitės į žmogų, kuriuo pasitikite - ryšys padeda sunkiais laikais",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
        },
        {
            text: "Išbandykite 5 minučių kvėpavimo pratimą - lėti, gilūs kvėpavimai ramina nervų sistemą",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>`
        },
        {
            text: "Apribokite socialinių tinklų naudojimą - jie gali sustiprinti neigiamus jausmus",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
        }
    ],
    struggling: [
        {
            text: "Apsvarstykite pokalbį su psichikos sveikatos specialistu - pagalbos ieškojimas yra jėgos ženklas",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        {
            text: "Praktikuokite pagrindinę savirūpą - pavalgykite maistingai, gerkite vandenį, pailsėkite kai galite",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`
        },
        {
            text: "Išbandykite 5-4-3-2-1 įžeminimo techniką: įvardykite 5 dalykus, kuriuos matote, 4 kuriuos girdite, 3 kuriuos jaučiate, 2 kuriuos užuodžiate, 1 kurį ragaujate",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
        },
        {
            text: "Kreipkitės į pagalbos liniją, jei reikia skubios paramos - jums nereikia su tuo susidoroti vienam",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
        },
        {
            text: "Atminkite: šis jausmas praeis. Jūs jau anksčiau įveikėte sunkius laikus.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
        }
    ]
};

// Spalvų paletės kiekvienai nuotaikai
const COLOR_PALETTES = {
    radiant: [
        { name: "Pagrindinė", hex: "#FFD93D", label: "Auksinė geltona" },
        { name: "Antrinė", hex: "#FF6B6B", label: "Koralinė" },
        { name: "Akcentas", hex: "#6BCB77", label: "Šviežia žalia" },
        { name: "Fonas", hex: "#FFF8E7", label: "Šilta kreminė" }
    ],
    content: [
        { name: "Pagrindinė", hex: "#6BCB77", label: "Švelni žalia" },
        { name: "Antrinė", hex: "#4ECDC4", label: "Žalsvai mėlyna" },
        { name: "Akcentas", hex: "#95E1D3", label: "Mėtinė" },
        { name: "Fonas", hex: "#F0FFF4", label: "Šviesi mėtinė" }
    ],
    neutral: [
        { name: "Pagrindinė", hex: "#74B9FF", label: "Dangaus mėlyna" },
        { name: "Antrinė", hex: "#A29BFE", label: "Švelni violetinė" },
        { name: "Akcentas", hex: "#DFE6E9", label: "Šviesi pilka" },
        { name: "Fonas", hex: "#F8F9FA", label: "Beveik balta" }
    ],
    low: [
        { name: "Pagrindinė", hex: "#A29BFE", label: "Prislopinta violetinė" },
        { name: "Antrinė", hex: "#74B9FF", label: "Švelni mėlyna" },
        { name: "Akcentas", hex: "#B8B5FF", label: "Levandų" },
        { name: "Fonas", hex: "#F5F3FF", label: "Šviesi levandų" }
    ],
    struggling: [
        { name: "Pagrindinė", hex: "#5C7AEA", label: "Gili mėlyna" },
        { name: "Antrinė", hex: "#74B9FF", label: "Raminanti mėlyna" },
        { name: "Akcentas", hex: "#A29BFE", label: "Švelni violetinė" },
        { name: "Fonas", hex: "#EEF1FF", label: "Blyški mėlyna" }
    ]
};

/**
 * Apskaičiuoti bendrą nuotaikos balą iš dimensijų balų
 * @param {Object} dimensions - Dimensijų balai
 * @returns {number} - Bendras nuotaikos balas (0-100)
 */
function calculateOverallScore(dimensions) {
    // Teigiamos dimensijos prisideda teigiamai, neigiamos dimensijos invertuojamos
    const positiveSum = dimensions.happiness + dimensions.energy + dimensions.calmness;
    const negativeSum = (100 - dimensions.stress) + (100 - dimensions.sadness);

    // Svoris: teigiamos dimensijos 60%, invertuotos neigiamos 40%
    const weightedScore = (positiveSum / 3) * 0.6 + (negativeSum / 2) * 0.4;

    // Apriboti iki 0-100
    return Math.max(0, Math.min(100, Math.round(weightedScore)));
}

/**
 * Gauti nuotaikos kategoriją pagal bendrą balą
 * @param {number} score - Bendras nuotaikos balas
 * @returns {Object} - Nuotaikos kategorijos objektas
 */
function getMoodCategory(score) {
    for (const [key, category] of Object.entries(MOOD_CATEGORIES)) {
        if (score >= category.minScore && score <= category.maxScore) {
            return { key, ...category };
        }
    }
    // Numatytoji reikšmė - neutrali, jei kažkas nepavyksta
    return { key: 'neutral', ...MOOD_CATEGORIES.neutral };
}

/**
 * Gauti rekomendacijas nuotaikos kategorijai
 * @param {string} moodKey - Nuotaikos kategorijos raktas
 * @returns {Array} - Rekomendacijų objektų masyvas
 */
function getRecommendations(moodKey) {
    return RECOMMENDATIONS[moodKey] || RECOMMENDATIONS.neutral;
}

/**
 * Gauti spalvų paletę nuotaikos kategorijai
 * @param {string} moodKey - Nuotaikos kategorijos raktas
 * @returns {Array} - Spalvų objektų masyvas
 */
function getColorPalette(moodKey) {
    return COLOR_PALETTES[moodKey] || COLOR_PALETTES.neutral;
}
