
// Cana: O Futuro do Biocombustível (Jogo Simples em JavaScript)
let creditosVerdes = 0;
let fase = 0;
let crescendo = false;

const fases = [
  "🌱 Semente",
  "🌿 Broto",
  "🌾 Cana Crescida"
];

const gameLog = document.getElementById("game-log");
const btn = document.getElementById("acao-btn");
const creditosSpan = document.getElementById("creditos");

function atualizarInterface() {
  creditosSpan.textContent = creditosVerdes;
}

function logar(texto) {
  const p = document.createElement("p");
  p.textContent = texto;
  gameLog.appendChild(p);
  gameLog.scrollTop = gameLog.scrollHeight;
}

function plantar() {
  if (crescendo) {
    logar("🌱 A cana já está crescendo...");
    return;
  }

  fase = 0;
  crescendo = true;
  logar("🌱 Você plantou cana!");

  crescer();
}

function crescer() {
  let tempo = 2000;
  for (let i = 1; i < fases.length; i++) {
    setTimeout(() => {
      fase = i;
      logar("⏳ A cana evoluiu para: " + fases[fase]);
      if (fase === fases.length - 1) {
        logar("✅ A cana está pronta para a colheita!");
        btn.textContent = "🌾 Colher Cana";
      }
    }, tempo * i);
  }
}

function colher() {
  if (fase === fases.length - 1) {
    creditosVerdes += 10;
    atualizarInterface();
    logar("💰 Você colheu a cana e ganhou 10 Créditos Verdes!");
    btn.textContent = "🌱 Plantar Cana";
    crescendo = false;
  } else {
    logar("🚫 A cana ainda não está pronta.");
  }
}

btn.addEventListener("click", () => {
  if (!crescendo) {
    plantar();
    btn.textContent = "⏳ Aguardando crescimento...";
  } else if (fase === fases.length - 1) {
    colher();
  } else {
    logar("⏳ A cana ainda está crescendo...");
  }
});

atualizarInterface();
