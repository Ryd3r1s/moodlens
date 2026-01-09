/**
 * MoodLens - Main Application Logic
 */

// ===== Application State =====
const state = {
    currentQuestion: 0,
    answers: [],
    dimensions: { ...BASE_SCORES },
    isTransitioning: false
};

// ===== DOM Elements =====
const screens = {
    landing: document.getElementById('landing'),
    quiz: document.getElementById('quiz'),
    loading: document.getElementById('loading'),
    results: document.getElementById('results')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    retakeBtn: document.getElementById('retake-btn'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    questionContainer: document.getElementById('question-container'),
    questionIcon: document.getElementById('question-icon'),
    questionText: document.getElementById('question-text'),
    answersContainer: document.getElementById('answers-container'),
    moodIcon: document.getElementById('mood-icon'),
    gaugeFill: document.getElementById('gauge-fill'),
    moodScore: document.getElementById('mood-score'),
    moodCategory: document.getElementById('mood-category'),
    moodExplanation: document.getElementById('mood-explanation'),
    dimensionsGrid: document.getElementById('dimensions-grid'),
    recommendationsList: document.getElementById('recommendations-list'),
    colorPalette: document.getElementById('color-palette'),
    supportNote: document.getElementById('support-note')
};

// Transition duration in ms
const TRANSITION_DURATION = 300;

// ===== Screen Management =====
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// ===== Quiz Functions =====
function startQuiz() {
    // Reset state
    state.currentQuestion = 0;
    state.answers = new Array(QUESTIONS.length).fill(null);
    state.dimensions = { ...BASE_SCORES };
    state.isTransitioning = false;

    // Show quiz screen
    showScreen('quiz');
    renderQuestion();
}

function renderQuestion() {
    const question = QUESTIONS[state.currentQuestion];
    const totalQuestions = QUESTIONS.length;

    // Update progress
    const progress = ((state.currentQuestion + 1) / totalQuestions) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `Klausimas ${state.currentQuestion + 1} iš ${totalQuestions}`;

    // Update question icon
    elements.questionIcon.innerHTML = question.icon;

    // Update question text
    elements.questionText.textContent = question.text;

    // Render answers
    elements.answersContainer.innerHTML = question.answers.map((answer, index) => `
        <div class="answer-option ${state.answers[state.currentQuestion] === index ? 'selected' : ''}"
             data-index="${index}"
             tabindex="0"
             role="button"
             aria-pressed="${state.answers[state.currentQuestion] === index}">
            <span class="answer-letter">${answer.letter.toUpperCase()}</span>
            <span class="answer-text">${answer.text}</span>
        </div>
    `).join('');

    // Add event listeners to answers
    document.querySelectorAll('.answer-option').forEach(option => {
        option.addEventListener('click', () => selectAnswer(parseInt(option.dataset.index)));
        option.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectAnswer(parseInt(option.dataset.index));
            }
        });
    });

    // Update navigation buttons
    elements.prevBtn.disabled = state.currentQuestion === 0;
    elements.nextBtn.disabled = state.answers[state.currentQuestion] === null;

    // Update next button text
    if (state.currentQuestion === totalQuestions - 1) {
        elements.nextBtn.innerHTML = `
            <span>Žiūrėti rezultatus</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        `;
    } else {
        elements.nextBtn.innerHTML = `
            <span>Kitas</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        `;
    }
}

function selectAnswer(answerIndex) {
    state.answers[state.currentQuestion] = answerIndex;

    // Update UI
    document.querySelectorAll('.answer-option').forEach((option, index) => {
        option.classList.toggle('selected', index === answerIndex);
        option.setAttribute('aria-pressed', index === answerIndex);
    });

    // Enable next button
    elements.nextBtn.disabled = false;
}

function goToPreviousQuestion() {
    if (state.currentQuestion > 0 && !state.isTransitioning) {
        transitionToQuestion(state.currentQuestion - 1, 'backward');
    }
}

function goToNextQuestion() {
    if (state.answers[state.currentQuestion] === null || state.isTransitioning) return;

    if (state.currentQuestion < QUESTIONS.length - 1) {
        transitionToQuestion(state.currentQuestion + 1, 'forward');
    } else {
        calculateResults();
    }
}

function transitionToQuestion(newIndex, direction) {
    state.isTransitioning = true;

    const container = elements.questionContainer;
    const slideOut = direction === 'forward' ? 'slide-out-left' : 'slide-out-right';
    const slideIn = direction === 'forward' ? 'slide-in-right' : 'slide-in-left';

    // Phase 1: Slide out current question
    container.classList.add('transitioning', slideOut);

    setTimeout(() => {
        // Update the question index and render new content
        state.currentQuestion = newIndex;
        renderQuestion();

        // Phase 2: Prepare slide in (set initial position)
        container.classList.remove(slideOut);
        container.classList.add(slideIn);

        // Force reflow to ensure the slide-in class is applied
        void container.offsetWidth;

        // Phase 3: Animate in
        requestAnimationFrame(() => {
            container.classList.remove(slideIn);

            setTimeout(() => {
                container.classList.remove('transitioning');
                state.isTransitioning = false;
            }, TRANSITION_DURATION);
        });
    }, TRANSITION_DURATION);
}

// ===== Results Calculation =====
function calculateResults() {
    // Show loading screen
    showScreen('loading');

    // Calculate dimension scores
    state.dimensions = { ...BASE_SCORES };

    state.answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            const answer = QUESTIONS[questionIndex].answers[answerIndex];
            Object.entries(answer.scores).forEach(([dimension, score]) => {
                state.dimensions[dimension] += score;
            });
        }
    });

    // Clamp dimension scores to 0-100
    Object.keys(state.dimensions).forEach(key => {
        state.dimensions[key] = Math.max(0, Math.min(100, state.dimensions[key]));
    });

    // Simulate processing time for better UX
    setTimeout(() => {
        showResults();
    }, 1500);
}

function showResults() {
    const overallScore = calculateOverallScore(state.dimensions);
    const moodCategory = getMoodCategory(overallScore);

    // Apply theme
    document.body.dataset.mood = moodCategory.theme;

    // Update mood icon
    elements.moodIcon.innerHTML = moodCategory.icon;

    // Update gauge
    elements.gaugeFill.style.left = `${overallScore}%`;

    // Update score
    elements.moodScore.textContent = overallScore;

    // Update category and explanation
    elements.moodCategory.textContent = moodCategory.name;
    elements.moodExplanation.textContent = moodCategory.explanation;

    // Render dimension bars
    renderDimensions();

    // Render recommendations
    renderRecommendations(moodCategory.key);

    // Render color palette
    renderColorPalette(moodCategory.key);

    // Show/hide support note for struggling mood
    elements.supportNote.classList.toggle('visible', moodCategory.key === 'struggling' || moodCategory.key === 'low');

    // Show results screen
    showScreen('results');
}

function renderDimensions() {
    const dimensionOrder = ['happiness', 'energy', 'calmness', 'stress', 'sadness'];

    elements.dimensionsGrid.innerHTML = dimensionOrder.map(key => {
        const info = DIMENSION_INFO[key];
        const value = state.dimensions[key];
        // For negative dimensions (stress, sadness), invert the display
        const displayValue = info.positive ? value : 100 - value;

        return `
            <div class="dimension-item">
                <div class="dimension-header">
                    <span class="dimension-name">${info.name}</span>
                    <span class="dimension-value">${value}%</span>
                </div>
                <div class="dimension-bar">
                    <div class="dimension-fill ${key}" style="width: ${value}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

function renderRecommendations(moodKey) {
    const recommendations = getRecommendations(moodKey);

    elements.recommendationsList.innerHTML = recommendations.map(rec => `
        <li class="recommendation-item">
            <span class="recommendation-icon">${rec.icon}</span>
            <span class="recommendation-text">${rec.text}</span>
        </li>
    `).join('');
}

function renderColorPalette(moodKey) {
    const palette = getColorPalette(moodKey);

    elements.colorPalette.innerHTML = palette.map(color => `
        <div class="color-swatch">
            <div class="swatch-color" style="background-color: ${color.hex}"></div>
            <span class="swatch-label">${color.label}</span>
            <span class="swatch-hex">${color.hex}</span>
        </div>
    `).join('');
}

function retakeQuiz() {
    // Reset theme
    document.body.removeAttribute('data-mood');

    // Go back to landing
    showScreen('landing');
}

// ===== Event Listeners =====
elements.startBtn.addEventListener('click', startQuiz);
elements.prevBtn.addEventListener('click', goToPreviousQuestion);
elements.nextBtn.addEventListener('click', goToNextQuestion);
elements.retakeBtn.addEventListener('click', retakeQuiz);

// Keyboard navigation for quiz
document.addEventListener('keydown', (e) => {
    if (!screens.quiz.classList.contains('active')) return;

    if (e.key === 'ArrowLeft' && !elements.prevBtn.disabled) {
        goToPreviousQuestion();
    } else if (e.key === 'ArrowRight' && !elements.nextBtn.disabled) {
        goToNextQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        const index = parseInt(e.key) - 1;
        if (index < QUESTIONS[state.currentQuestion].answers.length) {
            selectAnswer(index);
        }
    } else if (e.key.toLowerCase() >= 'a' && e.key.toLowerCase() <= 'd') {
        const index = e.key.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        if (index < QUESTIONS[state.currentQuestion].answers.length) {
            selectAnswer(index);
        }
    }
});

// Initialize
console.log('MoodLens initialized successfully');
