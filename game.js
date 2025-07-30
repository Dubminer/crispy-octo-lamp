
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let estado = "terra";
let creditos = 0;

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#654321";
  ctx.fillRect(370, 300, 60, 100); // base

  if (estado === "broto") {
    ctx.fillStyle = "#228B22";
    ctx.fillRect(390, 250, 20, 50);
  } else if (estado === "cana") {
    ctx.fillStyle = "#00cc00";
    ctx.fillRect(380, 180, 40, 120);
  }

  ctx.fillStyle = "#000";
  ctx.font = "20px Arial";
  ctx.fillText("Créditos Verdes: " + creditos, 10, 30);
}

canvas.addEventListener("click", () => {
  if (estado === "terra") {
    estado = "broto";
    setTimeout(() => {
      estado = "cana";
      desenhar();
    }, 2000);
  } else if (estado === "cana") {
    creditos += 10;
    estado = "terra";
  }
  desenhar();
});

desenhar();
