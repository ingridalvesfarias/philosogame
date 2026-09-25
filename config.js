// Configurações do Firebase
// Este arquivo está no .gitignore para não ser enviado para repositórios públicos
const firebaseConfig = {
  apiKey: "AIzaSyBf3bkS7XQsqk2POs01hBwuEqvvT_zhCmk",
  authDomain: "philosogame-7a658.firebaseapp.com",
  databaseURL: "https://philosogame-7a658-default-rtdb.firebaseio.com",
  projectId: "philosogame-7a658",
  storageBucket: "philosogame-7a658.firebasestorage.app",
  messagingSenderId: "215281760807",
  appId: "1:215281760807:web:14bd6582177f3b7dbf2c02"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();