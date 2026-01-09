/**
 * MoodLens - Results Configuration
 *
 * Defines mood categories, explanations, recommendations, and color palettes
 */

// Mood categories with score ranges
const MOOD_CATEGORIES = {
    radiant: {
        name: "Radiant",
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
        explanation: "You're in a wonderful emotional space right now. Your energy is high, your outlook is positive, and you're feeling connected and motivated. This is a great time to pursue goals and share your positivity with others."
    },
    content: {
        name: "Content",
        minScore: 60,
        maxScore: 79,
        theme: "content",
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 8c-6 0-12 8-12 20s8 28 12 28 12-16 12-28S38 8 32 8z" fill="currentColor" opacity="0.3"/>
            <path d="M32 8c-6 0-12 8-12 20s8 28 12 28 12-16 12-28S38 8 32 8z" stroke="currentColor" stroke-width="3"/>
            <path d="M25 32c2-2 4-3 7-3s5 1 7 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
        explanation: "You're doing well overall. There's a sense of balance and calm in your life, even if not everything is perfect. You have the emotional resources to handle everyday challenges and find moments of joy."
    },
    neutral: {
        name: "Neutral",
        minScore: 40,
        maxScore: 59,
        theme: "neutral",
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="28" r="20" fill="currentColor" opacity="0.3"/>
            <circle cx="32" cy="28" r="20" stroke="currentColor" stroke-width="3"/>
            <path d="M20 48c4 4 8 8 12 8s8-4 12-8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
        explanation: "You're in a balanced but perhaps unremarkable state. Neither particularly high nor low, you're managing day to day. This is a good time to introduce small positive changes that could boost your mood."
    },
    low: {
        name: "Low",
        minScore: 20,
        maxScore: 39,
        theme: "low",
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="24" stroke="currentColor" stroke-width="3"/>
            <circle cx="32" cy="32" r="16" fill="currentColor" opacity="0.3"/>
            <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.5"/>
        </svg>`,
        explanation: "You're experiencing some emotional challenges right now. This is temporary, and there are steps you can take to feel better. Be gentle with yourself and consider reaching out to someone you trust."
    },
    struggling: {
        name: "Struggling",
        minScore: 0,
        maxScore: 19,
        theme: "struggling",
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8v40M24 16v32M32 8v48M40 16v32M48 8v40" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
            <ellipse cx="32" cy="56" rx="20" ry="4" fill="currentColor" opacity="0.3"/>
        </svg>`,
        explanation: "You're going through a difficult time. Please know that it's okay to not be okay, and support is available. These feelings are temporary, even when they don't feel that way. Consider reaching out for professional support."
    }
};

// Recommendations for each mood category
const RECOMMENDATIONS = {
    radiant: [
        {
            text: "Celebrate and savor this positive feeling - write down what's going well",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
        },
        {
            text: "Share your positivity with others - your good mood is contagious",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        {
            text: "Set ambitious goals while you're motivated - you have the energy to pursue them",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
        },
        {
            text: "Journal about what's working well so you can return to these insights later",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
        }
    ],
    content: [
        {
            text: "Maintain your current routines - they're clearly working for you",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
        },
        {
            text: "Practice gratitude journaling - write three things you're thankful for today",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
        },
        {
            text: "Connect with friends or family - nurture your relationships",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        {
            text: "Try a new hobby or activity - your current state is great for exploration",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
        }
    ],
    neutral: [
        {
            text: "Get some physical movement - even a short walk can boost your mood",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M12 8v6M9 21l3-7 3 7M6 15l6-1 6 1"/></svg>`
        },
        {
            text: "Spend time in nature - natural environments have proven mood-lifting effects",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
        },
        {
            text: "Listen to uplifting music - create a playlist that energizes you",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`
        },
        {
            text: "Plan something to look forward to - anticipation itself can boost mood",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`
        }
    ],
    low: [
        {
            text: "Practice gentle self-compassion - treat yourself as you would a good friend",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
        },
        {
            text: "Take a short walk outside - daylight and movement help regulate mood",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        },
        {
            text: "Reach out to someone you trust - connection helps during difficult times",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
        },
        {
            text: "Try a 5-minute breathing exercise - slow, deep breaths calm the nervous system",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>`
        },
        {
            text: "Limit social media consumption - it can amplify negative feelings",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
        }
    ],
    struggling: [
        {
            text: "Consider talking to a mental health professional - seeking help is a sign of strength",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
        },
        {
            text: "Practice basic self-care - eat something nourishing, drink water, rest when you can",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`
        },
        {
            text: "Try the 5-4-3-2-1 grounding technique: Name 5 things you see, 4 you hear, 3 you feel, 2 you smell, 1 you taste",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
        },
        {
            text: "Reach out to a crisis helpline if you need immediate support - you don't have to face this alone",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
        },
        {
            text: "Remember: This feeling will pass. You've gotten through difficult times before.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
        }
    ]
};

// Color palettes for each mood
const COLOR_PALETTES = {
    radiant: [
        { name: "Primary", hex: "#FFD93D", label: "Golden Yellow" },
        { name: "Secondary", hex: "#FF6B6B", label: "Coral" },
        { name: "Accent", hex: "#6BCB77", label: "Fresh Green" },
        { name: "Background", hex: "#FFF8E7", label: "Warm Cream" }
    ],
    content: [
        { name: "Primary", hex: "#6BCB77", label: "Soft Green" },
        { name: "Secondary", hex: "#4ECDC4", label: "Teal" },
        { name: "Accent", hex: "#95E1D3", label: "Mint" },
        { name: "Background", hex: "#F0FFF4", label: "Light Mint" }
    ],
    neutral: [
        { name: "Primary", hex: "#74B9FF", label: "Sky Blue" },
        { name: "Secondary", hex: "#A29BFE", label: "Soft Purple" },
        { name: "Accent", hex: "#DFE6E9", label: "Light Gray" },
        { name: "Background", hex: "#F8F9FA", label: "Off White" }
    ],
    low: [
        { name: "Primary", hex: "#A29BFE", label: "Muted Purple" },
        { name: "Secondary", hex: "#74B9FF", label: "Soft Blue" },
        { name: "Accent", hex: "#B8B5FF", label: "Lavender" },
        { name: "Background", hex: "#F5F3FF", label: "Light Lavender" }
    ],
    struggling: [
        { name: "Primary", hex: "#5C7AEA", label: "Deep Blue" },
        { name: "Secondary", hex: "#74B9FF", label: "Calming Blue" },
        { name: "Accent", hex: "#A29BFE", label: "Soft Purple" },
        { name: "Background", hex: "#EEF1FF", label: "Pale Blue" }
    ]
};

/**
 * Calculate the overall mood score from dimension scores
 * @param {Object} dimensions - The dimension scores
 * @returns {number} - Overall mood score (0-100)
 */
function calculateOverallScore(dimensions) {
    // Positive dimensions contribute positively, negative dimensions are inverted
    const positiveSum = dimensions.happiness + dimensions.energy + dimensions.calmness;
    const negativeSum = (100 - dimensions.stress) + (100 - dimensions.sadness);

    // Weight: positive dimensions 60%, inverted negative 40%
    const weightedScore = (positiveSum / 3) * 0.6 + (negativeSum / 2) * 0.4;

    // Clamp to 0-100
    return Math.max(0, Math.min(100, Math.round(weightedScore)));
}

/**
 * Get the mood category based on overall score
 * @param {number} score - Overall mood score
 * @returns {Object} - Mood category object
 */
function getMoodCategory(score) {
    for (const [key, category] of Object.entries(MOOD_CATEGORIES)) {
        if (score >= category.minScore && score <= category.maxScore) {
            return { key, ...category };
        }
    }
    // Default to neutral if something goes wrong
    return { key: 'neutral', ...MOOD_CATEGORIES.neutral };
}

/**
 * Get recommendations for a mood category
 * @param {string} moodKey - The mood category key
 * @returns {Array} - Array of recommendation objects
 */
function getRecommendations(moodKey) {
    return RECOMMENDATIONS[moodKey] || RECOMMENDATIONS.neutral;
}

/**
 * Get color palette for a mood category
 * @param {string} moodKey - The mood category key
 * @returns {Array} - Array of color objects
 */
function getColorPalette(moodKey) {
    return COLOR_PALETTES[moodKey] || COLOR_PALETTES.neutral;
}
