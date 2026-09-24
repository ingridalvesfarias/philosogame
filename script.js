const questions = [
    {
        question: "Quem proferiu a famosa frase 'Só sei que nada sei'?",
        options: ["Platão", "Aristóteles", "Sócrates", "Descartes"],
        answer: 2,
        explanation: "Sócrates usava a ironia socrática. Reconhecer a própria ignorância era o primeiro passo para a busca da verdadeira sabedoria, diferenciando-se dos sofistas que se diziam sábios."
    },
    {
        question: "A 'Alegoria da Caverna' é uma metáfora criada por qual filósofo?",
        options: ["Sócrates", "Platão", "Maquiavel", "Kant"],
        answer: 1,
        explanation: "Platão escreveu a Alegoria da Caverna no livro 'A República' para ilustrar a ascensão do mundo sensível (as sombras) para o mundo inteligível (as ideias/a luz)."
    },
    {
        question: "Qual o princípio fundamental do existencialismo de Jean-Paul Sartre?",
        options: ["A essência precede a existência", "A existência precede a essência", "Penso, logo existo", "Deus está morto"],
        answer: 1,
        explanation: "Para Sartre, o ser humano primeiro existe, se depara com o mundo, e só depois se define através de suas escolhas e ações. Não há uma 'natureza humana' pré-definida."
    },
    {
        question: "Na filosofia de Descartes, o que significa 'Cogito, ergo sum'?",
        options: ["O homem é o lobo do homem", "Penso, logo existo", "A vida é sofrimento", "O fim justifica os meios"],
        answer: 1,
        explanation: "René Descartes, ao duvidar de tudo (dúvida metódica), chegou a uma verdade indubitável: se ele duvida, ele pensa, e se ele pensa, ele necessariamente existe."
    },
    {
        question: "Quem é considerado o 'Pai da Filosofia Moderna'?",
        options: ["Immanuel Kant", "Friedrich Nietzsche", "René Descartes", "John Locke"],
        answer: 2,
        explanation: "Descartes é considerado o pai da filosofia moderna por colocar o foco no sujeito do conhecimento (o 'eu' que pensa) e na razão como base para alcançar a verdade científica."
    },
    {
        question: "A frase 'Deus está morto' é associada a qual filósofo?",
        options: ["Karl Marx", "Søren Kierkegaard", "Friedrich Nietzsche", "Arthur Schopenhauer"],
        answer: 2,
        explanation: "Nietzsche usou essa frase não literalmente para dizer que um ser divino faleceu, mas para expressar que os valores morais cristãos e as verdades absolutas perderam sua base na sociedade ocidental moderna."
    },
    {
        question: "Para Maquiavel, em sua obra 'O Príncipe', um governante deve ser temido ou amado?",
        options: ["Apenas amado", "Apenas temido", "Amado e temido, mas se tiver que escolher, é melhor ser amado", "Amado e temido, mas se tiver que escolher, é mais seguro ser temido"],
        answer: 3,
        explanation: "Maquiavel argumenta que o ideal seria ser ambos, mas como os homens são ingratos e volúveis, o temor (apoiado no medo de punição) é uma ligação muito mais forte e segura para a manutenção do poder."
    },
    {
        question: "O que é o 'Imperativo Categórico' de Immanuel Kant?",
        options: ["Uma lei moral baseada nas consequências da ação", "Agir apenas segundo uma máxima que possas querer que se torne lei universal", "A busca pelo maior prazer para o maior número de pessoas", "Um mandamento religioso"],
        answer: 1,
        explanation: "Para Kant, uma ação só é moralmente correta se a regra por trás dela puder ser aplicada a todas as pessoas em todas as situações sem contradição, independentemente das consequências."
    },
    {
        question: "Quem escreveu que 'O homem nasce bom, mas a sociedade o corrompe'?",
        options: ["Thomas Hobbes", "Jean-Jacques Rousseau", "John Locke", "Voltaire"],
        answer: 1,
        explanation: "Rousseau acreditava no mito do 'bom selvagem', argumentando que a natureza humana é essencialmente boa, mas a civilização, a propriedade privada e as instituições sociais trazem desigualdade e corrupção."
    },
    {
        question: "Na ética aristotélica, o que é a 'Eudaimonia'?",
        options: ["Apatia perante o sofrimento", "O prazer físico", "A felicidade ou florescimento humano", "O conhecimento puro"],
        answer: 2,
        explanation: "Para Aristóteles, a 'Eudaimonia' (geralmente traduzida como felicidade) é o fim supremo da vida humana, alcançada através da prática da virtude e do exercício da razão (a excelência moral e intelectual)."
    }
];

// Estado da aplicação
const state = {
    teamName: '',
    avatar: '',
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    timeRemaining: 300, // 5 minutos em segundos
    timerInterval: null
};

// Elementos do DOM
const screens = {
    login: document.getElementById('login-screen'),
    quiz: document.getElementById('quiz-screen'),
    feedback: document.getElementById('feedback-screen'),
    podium: document.getElementById('podium-screen')
};

const elements = {
    loginForm: document.getElementById('login-form'),
    displayAvatar: document.getElementById('display-avatar'),
    displayTeamName: document.getElementById('display-team-name'),
    timeLeft: document.getElementById('time-left'),
    progress: document.getElementById('progress'),
    questionNumber: document.getElementById('question-number'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    correctCount: document.getElementById('correct-count'),
    feedbackList: document.getElementById('feedback-list'),
    btnToPodium: document.getElementById('btn-to-podium'),
    btnRestart: document.getElementById('btn-restart')
};

// Funções Utilitárias
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

// Lógica do Timer
function startTimer() {
    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        elements.timeLeft.textContent = formatTime(state.timeRemaining);
        
        if(state.timeRemaining <= 60) {
            elements.timeLeft.style.animation = 'bounce 1s infinite';
        }

        if (state.timeRemaining <= 0) {
            clearInterval(state.timerInterval);
            endQuiz(true);
        }
    }, 1000);
}

// Fluxo do Jogo
elements.loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    state.teamName = document.getElementById('team-name').value;
    state.avatar = document.querySelector('input[name="avatar"]:checked').value;
    
    elements.displayTeamName.textContent = state.teamName;
    elements.displayAvatar.innerHTML = `<img src="${state.avatar}" alt="Avatar" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid #ff0000; box-shadow: 0 0 10px #ff0000;">`;
    
    initQuiz();
    showScreen('quiz');
    startTimer();
});

function initQuiz() {
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.userAnswers = [];
    state.timeRemaining = 300;
    elements.timeLeft.style.animation = 'none';
    elements.timeLeft.textContent = formatTime(state.timeRemaining);
    
    loadQuestion();
}

function loadQuestion() {
    const currentQ = questions[state.currentQuestionIndex];
    elements.questionNumber.textContent = `Questão ${state.currentQuestionIndex + 1}/${questions.length}`;
    elements.questionText.textContent = currentQ.question;
    
    const progressPercent = ((state.currentQuestionIndex) / questions.length) * 100;
    elements.progress.style.width = `${progressPercent}%`;
    
    elements.optionsContainer.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    
    currentQ.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.dataset.letter = letters[index];
        btn.dataset.index = index;
        
        btn.addEventListener('click', () => handleAnswer(index, btn));
        
        elements.optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, btnElement) {
    const currentQ = questions[state.currentQuestionIndex];
    const isCorrect = selectedIndex === currentQ.answer;
    
    // Desabilita todos os botões para não clicar duas vezes
    const buttons = elements.optionsContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
    
    // Feedback visual imediato
    if (isCorrect) {
        btnElement.classList.add('correct');
        state.score++;
    } else {
        btnElement.classList.add('wrong');
        // Destacar a correta
        buttons[currentQ.answer].classList.add('correct');
    }
    
    // Salvar resposta para o feedback final
    state.userAnswers.push({
        questionObj: currentQ,
        selected: selectedIndex,
        isCorrect: isCorrect
    });
    
    // Avançar após 2 segundos
    setTimeout(() => {
        state.currentQuestionIndex++;
        if (state.currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endQuiz(false);
        }
    }, 2000);
}

function endQuiz(timeOut = false) {
    clearInterval(state.timerInterval);
    generateFeedback();
    showScreen('feedback');
}

function generateFeedback() {
    elements.correctCount.textContent = state.score;
    elements.feedbackList.innerHTML = '';
    
    state.userAnswers.forEach((ans, index) => {
        if (!ans.isCorrect) {
            const fbItem = document.createElement('div');
            fbItem.classList.add('feedback-item');
            
            fbItem.innerHTML = `
                <div class="feedback-question">${index + 1}. ${ans.questionObj.question}</div>
                <div class="feedback-wrong">❌ Sua resposta: ${ans.questionObj.options[ans.selected] !== undefined ? ans.questionObj.options[ans.selected] : 'Tempo Esgotado / Não respondida'}</div>
                <div class="feedback-answer">✅ Correta: ${ans.questionObj.options[ans.questionObj.answer]}</div>
                <div class="feedback-explanation"><strong>Aprofundamento:</strong> ${ans.questionObj.explanation}</div>
            `;
            elements.feedbackList.appendChild(fbItem);
        }
    });
    
    if (state.score === questions.length) {
        elements.feedbackList.innerHTML = `
            <div class="feedback-item acerto">
                <div class="feedback-question">Parabéns!</div>
                <div class="feedback-explanation">Sua equipe atingiu a sabedoria plena! Nenhuma questão incorreta.</div>
            </div>
        `;
    }
}

// Lógica do Pódio
elements.btnToPodium.addEventListener('click', () => {
    generatePodium();
    showScreen('podium');
});

function generatePodium() {
    // Simulando outras equipes com base na pontuação do jogador para criar um pódio
    const playerTeam = { name: state.teamName, avatar: state.avatar, score: state.score };
    
    // Gerar duas equipes fakes para competir
    const fakeTeams = [
        { name: "Os Sofistas", avatar: "assets/2.jpg", score: Math.floor(Math.random() * 8) + 2 }, // 2 a 9
        { name: "Cínicos", avatar: "assets/3.jpg", score: Math.floor(Math.random() * 7) + 3 }      // 3 a 9
    ];
    
    const allTeams = [playerTeam, ...fakeTeams].sort((a, b) => b.score - a.score);
    
    // Atribuir ao DOM (1º é o index 0, 2º é o index 1, 3º é o index 2)
    document.getElementById('podium-1-name').textContent = allTeams[0].name + ` (${allTeams[0].score})`;
    document.getElementById('podium-1-avatar').innerHTML = `<img src="${allTeams[0].avatar}" alt="Avatar">`;
    
    document.getElementById('podium-2-name').textContent = allTeams[1].name + ` (${allTeams[1].score})`;
    document.getElementById('podium-2-avatar').innerHTML = `<img src="${allTeams[1].avatar}" alt="Avatar">`;
    
    document.getElementById('podium-3-name').textContent = allTeams[2].name + ` (${allTeams[2].score})`;
    document.getElementById('podium-3-avatar').innerHTML = `<img src="${allTeams[2].avatar}" alt="Avatar">`;
    
    // Disparar a comemoração!
    createConfetti();
}

function createConfetti() {
    const colors = ['#ff0000', '#00e5ff', '#ffffff', '#ffd700', '#ff00ff'];
    for(let i=0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 1.5) + 's';
        
        // Alternar entre quadrados e círculos para dar variedade
        if (Math.random() > 0.5) confetti.style.borderRadius = '50%';
        
        document.body.appendChild(confetti);
        
        // Limpar após o final da animação para não pesar o navegador
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

elements.btnRestart.addEventListener('click', () => {
    // Reseta form e volta pro inicio
    elements.loginForm.reset();
    showScreen('login');
});
