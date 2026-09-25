# 🧠 PhilosoGame — Quiz Multiplayer de Filosofia

![PhilosoGame](assets/title.png)

> *"A sabedoria começa na dúvida."* — Sócrates

**PhilosoGame** é uma aplicação web interativa e multiplayer no estilo *Quiz Game*, desenvolvida para dinamizar o ensino e aprendizado de Filosofia. Com estética gamer dark/neon, suporte a sincronização em tempo real via Firebase e proteção anticola com embaralhamento individual de questões, a plataforma permite realizar avaliações e dinâmicas de forma engajadora.

---

## 🚀 Funcionalidades

- ⚡ **Multiplayer em Tempo Real:** Sincronização automática de salas e participantes alimentada pelo **Firebase Realtime Database**.
- 👥 **Dois Modos de Jogo:**
  - **Jogar em Equipe:** Jogadores com o mesmo nome somam pontuação coletiva para o grupo no pódio.
  - **Jogar Individual:** Competição individual entre todos os alunos presentes na sala.
- 🔀 **Sistema Anticola (Randomização Dupla):** Cada participante recebe as perguntas e as alternativas em ordens aleatórias e individuais.
- 🕒 **Cronômetro regressivo:** Contagem de tempo limite (5 minutos) com animação de destaque no último minuto.
- 📜 **Feedback Pedagógico Detalhado:** Ao terminar o quiz, o aluno visualiza as respostas incorretas acompanhadas de explicações e aprofundamento teórico.
- 🏆 **Pódio Interativo:** Exibição dos 3 primeiros colocados com animação de confetes e avatares personalizados.
- 🛠️ **Painel de Depuração Embutido:** Diagnóstico em tempo real acionável via parâmetro de URL (`?debug=1`).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3:** Layout totalmente responsivo com suporte a efeitos Glassmorphism e estética *gamer/neon*.
- **JavaScript (Vanilla ES6+):** Lógica da aplicação modularizada, manipular de eventos e controle do estado global.
- **Firebase Realtime Database (v8 SDK):** Persistência de dados em tempo real, gerenciamento de lobby e sincronização de pódio.
- **Google Fonts:** Tipografias `Anton` e `Roboto`.

---

## 📁 Estrutura do Projeto

```text
philosogame/
├── assets/             # Imagens, logotipos e avatares dos avatares/jogadores
│   ├── title.png       # Logotipo principal
│   ├── 1.jpg
│   ├── ...
├── config.js           # Configuração da API do Firebase Realtime Database
├── index.html          # Estrutura HTML de todas as telas (Login, Lobby, Quiz, Feedback, Pódio)
├── script.js           # Lógica do jogo, manipuladores do Firebase e banco de questões
├── style.css           # Estilização visual, animações e responsividade
└── README.md           # Documentação do projeto
```

---

## ⚙️ Configuração e Instalação

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/philosogame.git
cd philosogame
```

### 2. Configurar o Firebase
Crie um projeto no [Firebase Console](https://console.firebase.google.com/) e ative o **Realtime Database**.

1. Crie o arquivo `config.js` na raiz do projeto (ou edite o existente) com as credenciais do seu projeto:

```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://SEU_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
```

2. Configure as **Regras de Segurança (Rules)** no Realtime Database do Firebase para permitir leitura e escrita temporárias em desenvolvimento:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### 3. Executar o Projeto
Como o projeto é construído em Vanilla JS, basta abrir o arquivo `index.html` diretamente em seu navegador web ou utilizar extensões de servidor local como o **Live Server** no VS Code.

---

## 🎮 Como Jogar

1. **Entrar em uma Sala:**
   - Digite o **Código da Sala** (ex: `FILO101`).
   - Insira o **Seu Nome ou Nome da Equipe**.
   - Escolha seu **Avatar**.
   - Selecione **Jogar em Equipe** ou **Jogar Individual**.
2. **Lobby de Espera:**
   - Aguarde os outros jogadores entrarem na sala.
   - Clique em **COMEÇAR O JOGO** quando todos estiverem prontos.
3. **Responder ao Quiz:**
   - Responda às questões antes que o tempo limite de 5 minutos acabe.
4. **Análise e Pódio:**
   - Veja quais questões errou com as devidas explicações e avance para descobrir quem conquistou o pódio final!

## 📸 Preview

Acesse: https://philosogame.vercel.app/

<img src="assets/imagem do projeto.png" alt="imagem do projeto">

---

## 🐛 Modo de Depuração (Debug)

Caso deseje monitorar requisições ou identificar falhas na conexão com o Firebase diretamente na tela sem abrir a ferramenta de desenvolvedor do navegador, adicione `?debug=1` ao final da URL da aplicação:

```text
http://localhost:5500/index.html?debug=1
```

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.