// ======================================================
// Banco de questões — Prova Bimestral de Filosofia
// (1º Anos - 3º Bimestre)
// ======================================================
const questions = [
    {
        question: "\"Onde se afirma que a filosofia só se faz em alemão, Lélia González (1935-1994) afirma o pretuguês e o complexo não de Édipo, mas do alemão, como modo de subverter e rir, por que não, do que a norma culta cultua, pretensamente erudita, porque eurodita. Nessa 'chamada América Latina que, na verdade, é muito mais ameríndia e amefricana do que outra coisa'\" (Gonzalez, 1988), como saca Lélia, negrita-se o necessário compromisso de aproximar-se de outros referenciais para forjar uma filosofia capaz de pensar as questões que nos afetam desde as experiências situadas de reexistência da práxis negro-indígena, historicamente anuladas e deslegitimadas.\n\n(REIS, Diego dos Santos. Lélia Gonzalez, Por uma Filosofia Amefricana, 2023)\n\nSegundo Diego dos Santos Reis, para a filósofa Lélia González:",
        options: [
            "como só é possível filosofar em alemão, não pode haver uma filosofia baseada numa língua inculta, tal o português brasileiro.",
            "a experiência social, cultural e étnico-racial brasileira precisa ser pensada também com base em nossa formação linguístico-cultural.",
            "a formação do pensamento filosófico não depende de marcas linguísticas, culturais e raciais.",
            "precisamos recusar a filosofia e a psicanálise, e começar a fazer uma história das existências e resistências de negros e indígenas.",
            "a filosofia amefricana deve ignorar as contribuições europeias e focar exclusivamente na recuperação de línguas indígenas mortas."
        ],
        answer: 1,
        explanation: "Lélia González propõe uma filosofia amefricana: pensar nossas questões a partir de referenciais próprios (língua, cultura e formação étnico-racial brasileira), sem depender exclusivamente da tradição filosófica europeia."
    },
    {
        question: "Sobre a relação entre Sócrates e os pré-socráticos podemos dizer:",
        options: [
            "O termo \"pré-socrático\" se refere aos filósofos que buscavam a arché, independente de terem nascido antes de Sócrates.",
            "Embora seja uma conveniência didática, o termo \"pré-socrático\" tem aplicação correta por nomear os filósofos que viveram antes de Sócrates.",
            "A filosofia de Sócrates é apenas uma recuperação dos temas abordados pelos pré-socráticos.",
            "Assim como ocorre em Heráclito, Sócrates admite a mudança constante das coisas evidenciado na defesa do valor da \"opinião\".",
            "Os pré-socráticos receberam essa nomeação de forma acertada, uma vez que todos eles tematizavam a physis exatamente da mesma maneira."
        ],
        answer: 0,
        explanation: "\"Pré-socrático\" é um termo temático, não estritamente cronológico: agrupa pensadores voltados à busca da arché (o princípio da physis), e não apenas quem viveu antes de Sócrates — alguns foram, inclusive, seus contemporâneos."
    },
    {
        question: "\"Só sei que nada sei\": esse lema socrático revela a sabedoria do mestre de Platão. Sobre seu significado, podemos inferir:",
        options: [
            "Devemos assumir nossa ignorância, pois o conhecimento verdadeiro é impossível.",
            "A ignorância nos permite aceitar a verdade: nossas opiniões são verdadeiras.",
            "O conhecimento verdadeiro só pode ser alcançado pelos ignorantes e estúpidos.",
            "A ignorância é o grande objetivo do método socrático.",
            "Ao assumirmos nossa ignorância, percebemos que ninguém é o \"dono\" da verdade: a partir daí, podemos usar a razão para obtê-la."
        ],
        answer: 4,
        explanation: "A ironia socrática não é um fim em si mesma nem uma negação do conhecimento: é o ponto de partida. Reconhecer a própria ignorância derruba a pretensão de posse da verdade e abre caminho para buscá-la racionalmente através do diálogo."
    },
    {
        question: "Sócrates, grande filósofo grego, formou numerosos discípulos, que seguiram diferentes caminhos para buscar o conhecimento real. A grande preocupação socrática era:",
        options: [
            "interpretar o mundo como sendo espiritual.",
            "compreender as causas primeiras e os fins últimos de todas as coisas, pois só se pode dizer que se conhece alguma coisa quando se conhece sua causa primeira.",
            "o autoconhecimento que poderia ser obtido por meio da ironia e da maiêutica, métodos que consistiam em fazer indagação, fingindo ignorância, para despertar no interlocutor o conhecimento latente.",
            "fazer um estudo crítico da História, comparando a História Grega com a dos povos orientais, a fim de mostrar que o mundo era mais amplo do que se imaginava.",
            "mostrar que todo o conhecimento era obtido por intermédio dos sentidos humanos e que, por esses serem falhos, era relativo e limitado."
        ],
        answer: 2,
        explanation: "Diferente dos pré-socráticos, voltados à natureza (physis), Sócrates deslocou a filosofia para o ser humano e a ética, buscando o autoconhecimento (\"conhece-te a ti mesmo\") por meio da ironia e da maiêutica."
    },
    {
        question: "\"Sócrates introduziu uma novidade na discussão filosófica por meio de seu método, dividido em duas partes. A primeira etapa é a ironia, em que ele finge nada saber para desmontar as falsas certezas do oponente. A segunda etapa é a maiêutica, que significa 'parto', ajudando a dar à luz novas ideias e a buscar a definição precisa de um conceito.\"\n\nA finalidade central do método dialógico socrático consiste em:",
        options: [
            "Apenas acumular opiniões.",
            "Memorizar regras morais.",
            "Obter definições conceituais após expor as contradições do interlocutor.",
            "Realizar longos discursos.",
            "Apresentar dogmas."
        ],
        answer: 2,
        explanation: "O método socrático combina ironia (refutação das falsas certezas) e maiêutica (o \"parto\" das ideias) com um objetivo preciso: chegar a definições conceituais claras, e não apenas acumular opiniões ou discursos."
    }
];

// ======================================================
// Estado da aplicação
// ======================================================
const state = {
    roomCode: '',
    mode: '',           // 'equipe' | 'individual'
    playerId: '',
    playerName: '',
    avatar: '',
    orderedQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    timeRemaining: 300, // 5 minutos em segundos
    timerInterval: null,
    confettiFired: false,
    // referências ativas do Firebase, para poder desligar (.off) depois
    lobbyPlayersRef: null,
    startedRef: null,
    podiumRef: null
};

// ======================================================
// Elementos do DOM
// ======================================================
const screens = {
    login: document.getElementById('login-screen'),
    lobby: document.getElementById('lobby-screen'),
    quiz: document.getElementById('quiz-screen'),
    feedback: document.getElementById('feedback-screen'),
    podium: document.getElementById('podium-screen')
};

const elements = {
    loginForm: document.getElementById('login-form'),
    btnJoinTeam: document.getElementById('btn-join-team'),
    btnJoinSolo: document.getElementById('btn-join-solo'),
    lobbyRoomCode: document.getElementById('lobby-room-code'),
    lobbyModeInfo: document.getElementById('lobby-mode-info'),
    lobbyPlayers: document.getElementById('lobby-players'),
    lobbyPlayerCount: document.getElementById('lobby-player-count'),
    btnStartGame: document.getElementById('btn-start-game'),
    displayAvatar: document.getElementById('display-avatar'),
    displayTeamName: document.getElementById('display-team-name'),
    timeLeft: document.getElementById('time-left'),
    progress: document.getElementById('progress'),
    questionNumber: document.getElementById('question-number'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    correctCount: document.getElementById('correct-count'),
    totalQuestions: document.getElementById('total-questions'),
    feedbackList: document.getElementById('feedback-list'),
    btnToPodium: document.getElementById('btn-to-podium'),
    btnRestart: document.getElementById('btn-restart')
};

// ======================================================
// Diagnóstico — evita que um elemento faltando ou o Firebase
// não carregado quebrem TODOS os botões silenciosamente
// ======================================================
function showFatalError(msg) {
    console.error('[PhilosoGame]', msg);
    const banner = document.createElement('div');
    banner.textContent = '⚠️ ' + msg;
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#b00020;color:#fff;padding:10px 15px;font-family:sans-serif;font-size:0.9rem;z-index:99999;text-align:center;';
    document.body.appendChild(banner);
}

const missingIds = Object.entries(elements)
    .filter(([, el]) => !el)
    .map(([key]) => key);
if (missingIds.length > 0) {
    showFatalError(
        `Estes elementos não foram encontrados no HTML: ${missingIds.join(', ')}. ` +
        `Provavelmente o index.html está desatualizado — baixe a versão mais recente e substitua o arquivo inteiro.`
    );
}

if (typeof firebase === 'undefined' || typeof database === 'undefined') {
    showFatalError(
        'O Firebase não carregou (verifique sua conexão com a internet e o config.js). Os botões de entrar na sala não vão funcionar até isso ser corrigido.'
    );
}

// Anexa um listener só se o elemento existir, e avisa no console se não existir,
// em vez de lançar um erro que travaria a execução do resto do script.
function on(el, event, handler) {
    if (!el) {
        console.warn('[PhilosoGame] Não foi possível anexar o evento "' + event + '": elemento não existe.');
        return;
    }
    el.addEventListener(event, handler);
}

// ======================================================
// Painel de depuração visível na tela (sem precisar abrir o
// console do navegador) — mostra cada passo do que o app
// está tentando fazer, em tempo real.
//
// Fica ESCONDIDO por padrão. Para ativar (ex: se algo travar
// de novo no futuro), abra o app assim:
//   index.html?debug=1
// ======================================================
const DEBUG_MODE = new URLSearchParams(window.location.search).get('debug') === '1';
let debugBox = null;
function debugLog(msg, isError) {
    console.log('[PhilosoGame]', msg);
    if (!DEBUG_MODE) return;
    if (!debugBox) {
        debugBox = document.createElement('div');
        debugBox.id = 'philosogame-debug';
        debugBox.style.cssText = 'position:fixed;bottom:0;left:0;right:0;max-height:35vh;overflow-y:auto;background:rgba(0,0,0,0.9);color:#0f0;font-family:monospace;font-size:12px;padding:8px 10px;z-index:99998;border-top:2px solid #ff0000;';
        document.body.appendChild(debugBox);
    }
    const line = document.createElement('div');
    const time = new Date().toLocaleTimeString();
    line.textContent = `[${time}] ${msg}`;
    if (isError) line.style.color = '#ff5555';
    debugBox.appendChild(line);
    debugBox.scrollTop = debugBox.scrollHeight;
}
debugLog('Script carregado. Firebase: ' + (typeof firebase !== 'undefined' ? 'OK' : 'FALTANDO') + ' | database: ' + (typeof database !== 'undefined' ? 'OK' : 'FALTANDO'));

// ======================================================
// Funções Utilitárias
// ======================================================
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Firebase keys não podem ter . # $ [ ] /
function sanitizeRoomCode(code) {
    return code.trim().toUpperCase().replace(/[.#$\[\]\/\s]/g, '');
}

function generatePlayerId() {
    return 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
}

// Gera um conjunto de perguntas só para este jogador: ordem das perguntas
// embaralhada E ordem das alternativas embaralhada (a letra da resposta
// certa muda de pessoa para pessoa). Cada aluno que entra recebe a sua
// própria versão — mesmo dois jogadores na mesma sala não veem a mesma
// sequência, o que dificulta cola numa prova real.
function buildRandomizedQuestions() {
    const questionOrder = shuffle(questions.map((_, i) => i));
    return questionOrder.map(qIndex => {
        const original = questions[qIndex];
        const optionOrder = shuffle(original.options.map((_, i) => i));
        return {
            question: original.question,
            options: optionOrder.map(i => original.options[i]),
            answer: optionOrder.indexOf(original.answer),
            explanation: original.explanation
        };
    });
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Alguns métodos do Firebase (como transaction()) podem nunca resolver
// quando as regras do Realtime Database bloqueiam o acesso. Isso "trava"
// o app sem erro nenhum. Esse helper garante que sempre teremos uma
// resposta (mesmo que seja um erro de timeout) em no máximo `ms`.
function withTimeout(promise, ms, label) {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error(
                `Tempo esgotado esperando: ${label}. Isso geralmente significa que as regras do Firebase Realtime Database estão bloqueando leitura/escrita, ou que a databaseURL/projeto está errado.`
            )), ms)
        )
    ]);
}

// ======================================================
// Entrada na sala (Firebase)
// ======================================================
on(elements.loginForm, 'submit', (e) => e.preventDefault());
on(elements.btnJoinTeam, 'click', () => { debugLog('Clique: Jogar em Equipe'); attemptJoin('equipe'); });
on(elements.btnJoinSolo, 'click', () => { debugLog('Clique: Jogar Individual'); attemptJoin('individual'); });

async function attemptJoin(chosenMode) {
    const rawRoom = document.getElementById('room-code').value;
    const roomCode = sanitizeRoomCode(rawRoom);
    const name = document.getElementById('team-name').value.trim();
    const avatar = document.querySelector('input[name="avatar"]:checked').value;

    if (!roomCode || !name) {
        debugLog('Validação falhou: código da sala ou nome vazio.', true);
        alert('Preencha o código da sala e o seu nome / nome da equipe.');
        return;
    }

    debugLog(`Tentando entrar na sala "${roomCode}" como "${name}" (modo: ${chosenMode})...`);

    elements.btnJoinTeam.disabled = true;
    elements.btnJoinSolo.disabled = true;

    state.roomCode = roomCode;
    state.playerId = generatePlayerId();
    state.playerName = name;
    state.avatar = avatar;

    const roomRef = database.ref('rooms/' + roomCode);

    try {
        debugLog('Chamando roomRef.transaction()...');
        // Cria a sala apenas se ela ainda não existir (evita condição de corrida
        // entre dois dispositivos criando a mesma sala ao mesmo tempo).
        // Usamos um timeout porque, se as regras do Firebase bloquearem o
        // acesso, a transaction() pode nunca resolver sozinha.
        const result = await withTimeout(
            roomRef.transaction((current) => {
                if (current === null) {
                    return {
                        mode: chosenMode,
                        started: false,
                        createdAt: firebase.database.ServerValue.TIMESTAMP
                    };
                }
                return current; // já existe: não sobrescreve
            }),
            8000,
            'criar/entrar na sala (transaction)'
        );
        debugLog('transaction() concluída. committed=' + result.committed);

        const roomData = result.snapshot.val();
        debugLog('Dados da sala recebidos: ' + JSON.stringify(roomData));

        if (!roomData) {
            throw new Error('A sala voltou vazia/inválida — provável bloqueio nas regras do Firebase Realtime Database (permissão negada).');
        }

        state.mode = roomData.mode;
        // Cada jogador recebe sua própria ordem aleatória de perguntas e alternativas.
        state.orderedQuestions = buildRandomizedQuestions();

        debugLog('Registrando jogador na sala...');
        await withTimeout(
            database.ref(`rooms/${roomCode}/players/${state.playerId}`).set({
                name,
                avatar,
                score: 0,
                finished: false,
                joinedAt: firebase.database.ServerValue.TIMESTAMP
            }),
            8000,
            'registrar jogador na sala'
        );
        debugLog('Jogador registrado com sucesso. Indo para o lobby.');

        elements.displayTeamName.textContent = name;
        elements.displayAvatar.innerHTML = `<img src="${avatar}" alt="Avatar" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid #ff0000; box-shadow: 0 0 10px #ff0000;">`;

        enterLobby(roomData.mode, chosenMode);
    } catch (err) {
        debugLog('ERRO: ' + (err && err.message ? err.message : err), true);
        console.error('Erro ao entrar na sala:', err);
        alert('Não foi possível conectar à sala.\n\nDetalhe técnico: ' + (err && err.message ? err.message : err) + '\n\nVerifique sua internet, as regras do Firebase Realtime Database, e tente novamente.');
    } finally {
        elements.btnJoinTeam.disabled = false;
        elements.btnJoinSolo.disabled = false;
    }
}

// ======================================================
// Lobby
// ======================================================
function enterLobby(actualMode, chosenMode) {
    elements.lobbyRoomCode.textContent = state.roomCode;

    let modeText = actualMode === 'equipe' ? 'Modo: Jogo em Equipe' : 'Modo: Individual';
    if (actualMode !== chosenMode) {
        modeText += ' — esta sala já estava criada nesse modo.';
    }
    elements.lobbyModeInfo.textContent = modeText;

    elements.btnStartGame.style.display = 'inline-block';

    attachLobbyPlayers();
    attachStartedListener();

    showScreen('lobby');
}

function attachLobbyPlayers() {
    if (state.lobbyPlayersRef) state.lobbyPlayersRef.off();
    state.lobbyPlayersRef = database.ref('rooms/' + state.roomCode + '/players');
    state.lobbyPlayersRef.on('value', (snap) => {
        const players = Object.values(snap.val() || {});
        elements.lobbyPlayerCount.textContent = players.length;
        elements.lobbyPlayers.innerHTML = players.map(p => `
            <div style="text-align:center;">
                <img src="${p.avatar}" alt="${escapeHtml(p.name)}" style="width:55px;height:55px;border-radius:50%;object-fit:cover;border:2px solid #ff0000;box-shadow:0 0 10px rgba(255,0,0,0.5);">
                <div style="margin-top:6px;font-size:0.85rem;max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(p.name)}</div>
            </div>
        `).join('');
    });
}

function attachStartedListener() {
    if (state.startedRef) state.startedRef.off();
    state.startedRef = database.ref('rooms/' + state.roomCode + '/started');
    state.startedRef.on('value', (snap) => {
        if (snap.val() === true) {
            if (state.startedRef) { state.startedRef.off(); state.startedRef = null; }
            if (state.lobbyPlayersRef) { state.lobbyPlayersRef.off(); state.lobbyPlayersRef = null; }
            initQuiz();
            showScreen('quiz');
            startTimer();
        }
    });
}

on(elements.btnStartGame, 'click', () => {
    database.ref('rooms/' + state.roomCode + '/started').set(true);
});

// ======================================================
// Lógica do Timer
// ======================================================
function startTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        elements.timeLeft.textContent = formatTime(state.timeRemaining);

        if (state.timeRemaining <= 60) {
            elements.timeLeft.style.animation = 'bounce 1s infinite';
        }

        if (state.timeRemaining <= 0) {
            clearInterval(state.timerInterval);
            endQuiz(true);
        }
    }, 1000);
}

// ======================================================
// Fluxo do Quiz
// ======================================================
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
    const currentQ = state.orderedQuestions[state.currentQuestionIndex];
    elements.questionNumber.textContent = `Questão ${state.currentQuestionIndex + 1}/${state.orderedQuestions.length}`;
    elements.questionText.textContent = currentQ.question;

    const progressPercent = (state.currentQuestionIndex / state.orderedQuestions.length) * 100;
    elements.progress.style.width = `${progressPercent}%`;

    elements.optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E'];

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
    const currentQ = state.orderedQuestions[state.currentQuestionIndex];
    const isCorrect = selectedIndex === currentQ.answer;

    const buttons = elements.optionsContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        btnElement.classList.add('correct');
        state.score++;
    } else {
        btnElement.classList.add('wrong');
        buttons[currentQ.answer].classList.add('correct');
    }

    state.userAnswers.push({
        questionObj: currentQ,
        selected: selectedIndex,
        isCorrect: isCorrect
    });

    setTimeout(() => {
        state.currentQuestionIndex++;
        if (state.currentQuestionIndex < state.orderedQuestions.length) {
            loadQuestion();
        } else {
            endQuiz(false);
        }
    }, 2000);
}

function endQuiz() {
    clearInterval(state.timerInterval);
    generateFeedback();

    // Envia o resultado final para o Firebase, para entrar no pódio real da sala
    database.ref(`rooms/${state.roomCode}/players/${state.playerId}`).update({
        score: state.score,
        finished: true,
        finishedAt: firebase.database.ServerValue.TIMESTAMP
    }).catch(err => console.error('Erro ao salvar pontuação:', err));

    showScreen('feedback');
}

function generateFeedback() {
    elements.correctCount.textContent = state.score;
    elements.totalQuestions.textContent = state.orderedQuestions.length;
    elements.feedbackList.innerHTML = '';

    state.userAnswers.forEach((ans, index) => {
        if (!ans.isCorrect) {
            const fbItem = document.createElement('div');
            fbItem.classList.add('feedback-item');

            fbItem.innerHTML = `
                <div class="feedback-question">${index + 1}. ${escapeHtml(ans.questionObj.question)}</div>
                <div class="feedback-wrong">❌ Sua resposta: ${ans.questionObj.options[ans.selected] !== undefined ? escapeHtml(ans.questionObj.options[ans.selected]) : 'Tempo Esgotado / Não respondida'}</div>
                <div class="feedback-answer">✅ Correta: ${escapeHtml(ans.questionObj.options[ans.questionObj.answer])}</div>
                <div class="feedback-explanation"><strong>Aprofundamento:</strong> ${escapeHtml(ans.questionObj.explanation)}</div>
            `;
            elements.feedbackList.appendChild(fbItem);
        }
    });

    if (state.score === state.orderedQuestions.length) {
        elements.feedbackList.innerHTML = `
            <div class="feedback-item acerto">
                <div class="feedback-question">Parabéns!</div>
                <div class="feedback-explanation">Sua equipe atingiu a sabedoria plena! Nenhuma questão incorreta.</div>
            </div>
        `;
    }
}

// ======================================================
// Pódio (dados reais da sala via Firebase)
// ======================================================
on(elements.btnToPodium, 'click', () => {
    showScreen('podium');
    state.confettiFired = false;

    if (state.podiumRef) state.podiumRef.off();
    state.podiumRef = database.ref('rooms/' + state.roomCode + '/players');
    state.podiumRef.on('value', (snap) => {
        const standings = computeStandings(snap.val());
        renderPodium(standings);
        if (!state.confettiFired) {
            createConfetti();
            state.confettiFired = true;
        }
    });
});

function computeStandings(playersObj) {
    const players = Object.values(playersObj || {});

    if (state.mode === 'equipe') {
        const teams = {};
        players.forEach(p => {
            const key = (p.name || '').trim().toLowerCase();
            if (!key) return;
            if (!teams[key]) {
                teams[key] = { name: p.name, avatar: p.avatar, score: 0, members: 0 };
            }
            teams[key].score += p.score || 0;
            teams[key].members += 1;
        });
        return Object.values(teams).sort((a, b) => b.score - a.score);
    }

    return players
        .map(p => ({ name: p.name, avatar: p.avatar, score: p.score || 0, members: 1 }))
        .sort((a, b) => b.score - a.score);
}

function renderPodium(standings) {
    const slots = [
        { name: document.getElementById('podium-1-name'), avatar: document.getElementById('podium-1-avatar'), place: document.querySelector('.first-place') },
        { name: document.getElementById('podium-2-name'), avatar: document.getElementById('podium-2-avatar'), place: document.querySelector('.second-place') },
        { name: document.getElementById('podium-3-name'), avatar: document.getElementById('podium-3-avatar'), place: document.querySelector('.third-place') }
    ];

    slots.forEach((slot, i) => {
        const entry = standings[i];
        if (entry) {
            slot.place.style.display = '';
            const label = (state.mode === 'equipe' && entry.members > 1)
                ? `${entry.name} (${entry.score} pts · ${entry.members} jogadores)`
                : `${entry.name} (${entry.score} pts)`;
            slot.name.textContent = label;
            slot.avatar.innerHTML = `<img src="${entry.avatar}" alt="Avatar">`;
        } else {
            slot.place.style.display = 'none';
        }
    });
}

function createConfetti() {
    const colors = ['#ff0000', '#00e5ff', '#ffffff', '#ffd700', '#ff00ff'];
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 1.5) + 's';

        if (Math.random() > 0.5) confetti.style.borderRadius = '50%';

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// ======================================================
// Reiniciar
// ======================================================
on(elements.btnRestart, 'click', () => {
    if (state.podiumRef) { state.podiumRef.off(); state.podiumRef = null; }
    if (state.lobbyPlayersRef) { state.lobbyPlayersRef.off(); state.lobbyPlayersRef = null; }
    if (state.startedRef) { state.startedRef.off(); state.startedRef = null; }
    clearInterval(state.timerInterval);

    elements.loginForm.reset();
    showScreen('login');
});
