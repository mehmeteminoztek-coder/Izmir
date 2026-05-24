const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
const actionButton = document.querySelector("#actionButton");
const message = document.querySelector("#gameMessage");
const roundText = document.querySelector("#roundText");
const lastScore = document.querySelector("#lastScore");
const totalScore = document.querySelector("#totalScore");
const bestScore = document.querySelector("#bestScore");
const powerNeedle = document.querySelector("#powerNeedle");

const state = {
  mode: "ready",
  round: 1,
  maxRounds: 5,
  total: 0,
  best: Number(localStorage.getItem("celikComakBest") || 0),
  meter: 0,
  meterDirection: 1,
  last: 0,
  flight: null,
  particles: [],
};

const groundY = () => canvas.height * 0.76;

function formatMeters(value) {
  return `${Math.round(value)} m`;
}

function updateHud() {
  roundText.textContent = `${Math.min(state.round, state.maxRounds)} / ${state.maxRounds}`;
  lastScore.textContent = formatMeters(state.last);
  totalScore.textContent = formatMeters(state.total);
  bestScore.textContent = formatMeters(state.best);
}

function setMessage(text) {
  message.textContent = text;
}

function startLift() {
  if (state.round > state.maxRounds) resetGame();
  state.mode = "aiming";
  setMessage("Çomak havada. İbre yeşil bölgeye yaklaşınca tekrar vur!");
  actionButton.textContent = "Vur";
}

function strike() {
  const accuracy = 1 - Math.min(Math.abs(state.meter - 50) / 50, 1);
  const distance = 24 + accuracy * 92 + Math.random() * 10;
  const angle = -0.78 - accuracy * 0.18;
  const speed = 12 + accuracy * 10;
  state.mode = "flying";
  state.flight = {
    x: canvas.width * 0.19,
    y: groundY() - 92,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    rotation: -0.2,
    spin: 0.24 + accuracy * 0.24,
    distance,
    traveled: 0,
  };
  state.particles = Array.from({ length: 18 }, () => ({
    x: canvas.width * 0.19,
    y: groundY() - 36,
    vx: Math.random() * 5 - 2,
    vy: -Math.random() * 5,
    life: 1,
  }));
  actionButton.textContent = "Uçuşta";
  actionButton.disabled = true;
  setMessage(accuracy > 0.78 ? "Tam isabet! Çomak körfez rüzgarını yakaladı." : "İyi vuruş. Bir sonraki turda yeşil alanı daha iyi yakala.");
}

function finishFlight() {
  const result = state.flight.distance;
  state.last = result;
  state.total += result;
  if (result > state.best) {
    state.best = result;
    localStorage.setItem("celikComakBest", String(Math.round(state.best)));
  }
  state.flight = null;
  state.round += 1;
  updateHud();

  if (state.round > state.maxRounds) {
    state.mode = "finished";
    actionButton.disabled = false;
    actionButton.textContent = "Yeniden Oyna";
    setMessage(`Oyun bitti. Toplam mesafen ${formatMeters(state.total)}. Mahalle meydanı bu atışı konuşur.`);
  } else {
    state.mode = "ready";
    actionButton.disabled = false;
    actionButton.textContent = "Çomağı Havalandır";
    setMessage(`${state.round}. tur hazır. Çomağı havalandır ve ritmi yakala.`);
  }
}

function resetGame() {
  state.mode = "ready";
  state.round = 1;
  state.total = 0;
  state.last = 0;
  state.flight = null;
  state.particles = [];
  actionButton.disabled = false;
  actionButton.textContent = "Çomağı Havalandır";
  setMessage("Yeni oyun başladı. İlk hamle çomağı havalandırır, ikinci hamle uzaklığı belirler.");
  updateHud();
}

function handleAction() {
  if (state.mode === "ready") startLift();
  else if (state.mode === "aiming") strike();
  else if (state.mode === "finished") resetGame();
}

function drawBackground() {
  const w = canvas.width;
  const h = canvas.height;
  const gy = groundY();

  ctx.clearRect(0, 0, w, h);
  const sky = ctx.createLinearGradient(0, 0, 0, gy);
  sky.addColorStop(0, "#dbe7e5");
  sky.addColorStop(0.56, "#efe9e3");
  sky.addColorStop(1, "#d9cfc7");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "rgba(31, 111, 120, 0.14)";
  ctx.beginPath();
  ctx.moveTo(0, gy - 56);
  ctx.quadraticCurveTo(w * 0.22, gy - 104, w * 0.46, gy - 54);
  ctx.quadraticCurveTo(w * 0.67, gy - 10, w, gy - 76);
  ctx.lineTo(w, gy);
  ctx.lineTo(0, gy);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#66724c";
  ctx.fillRect(0, gy, w, h - gy);

  ctx.fillStyle = "rgba(33, 29, 26, 0.14)";
  for (let x = 30; x < w; x += 86) {
    ctx.fillRect(x, gy + 28 + Math.sin(x) * 8, 48, 3);
  }

  drawSkyline(w, gy);
}

function drawSkyline(w, gy) {
  ctx.save();
  ctx.translate(w * 0.68, gy - 126);
  ctx.fillStyle = "rgba(33, 29, 26, 0.12)";
  ctx.fillRect(-120, 46, 240, 80);
  ctx.fillRect(-82, 18, 34, 108);
  ctx.fillRect(44, 0, 32, 126);
  ctx.beginPath();
  ctx.arc(60, 0, 24, Math.PI, 0);
  ctx.fill();
  ctx.fillRect(-18, 64, 40, 62);
  ctx.restore();
}

function drawPlayer() {
  const x = canvas.width * 0.16;
  const y = groundY() - 20;
  ctx.save();
  ctx.lineCap = "round";
  ctx.strokeStyle = "#211d1a";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(x, y - 92, 17, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y - 74);
  ctx.lineTo(x - 8, y - 32);
  ctx.moveTo(x - 8, y - 32);
  ctx.lineTo(x - 28, y);
  ctx.moveTo(x - 8, y - 32);
  ctx.lineTo(x + 22, y);
  ctx.stroke();

  const swing = state.mode === "aiming" ? Math.sin(performance.now() / 120) * 0.4 : 0;
  ctx.translate(x - 6, y - 60);
  ctx.rotate(-0.95 + swing);
  ctx.strokeStyle = "#8b5a34";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(96, 0);
  ctx.stroke();
  ctx.restore();
}

function drawComak() {
  const gy = groundY();
  ctx.save();
  ctx.strokeStyle = "#a65f3b";
  ctx.lineWidth = 9;
  ctx.lineCap = "round";
  if (state.flight) {
    ctx.translate(state.flight.x, state.flight.y);
    ctx.rotate(state.flight.rotation);
    ctx.beginPath();
    ctx.moveTo(-22, 0);
    ctx.lineTo(22, 0);
    ctx.stroke();
  } else if (state.mode === "aiming") {
    const bob = Math.sin(performance.now() / 110) * 10;
    ctx.translate(canvas.width * 0.22, gy - 98 + bob);
    ctx.rotate(0.78 + bob * 0.01);
    ctx.beginPath();
    ctx.moveTo(-24, 0);
    ctx.lineTo(24, 0);
    ctx.stroke();
  } else {
    ctx.translate(canvas.width * 0.22, gy - 18);
    ctx.rotate(-0.12);
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(28, 0);
    ctx.stroke();
  }
  ctx.restore();
}

function drawDistanceMarkers() {
  const gy = groundY();
  ctx.save();
  ctx.fillStyle = "rgba(255, 255, 255, 0.68)";
  ctx.strokeStyle = "rgba(33, 29, 26, 0.24)";
  ctx.font = "700 18px system-ui, sans-serif";
  [25, 50, 75, 100].forEach((meter) => {
    const x = canvas.width * 0.25 + meter * 6.2;
    ctx.beginPath();
    ctx.moveTo(x, gy + 8);
    ctx.lineTo(x, gy + 42);
    ctx.stroke();
    ctx.fillText(`${meter}m`, x - 18, gy + 66);
  });
  ctx.restore();
}

function drawParticles() {
  ctx.save();
  state.particles.forEach((p) => {
    ctx.globalAlpha = Math.max(p.life, 0);
    ctx.fillStyle = "#d9cfc7";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

function updateMeter() {
  if (state.mode !== "aiming") return;
  state.meter += state.meterDirection * 1.65;
  if (state.meter >= 100 || state.meter <= 0) {
    state.meter = Math.max(0, Math.min(100, state.meter));
    state.meterDirection *= -1;
  }
}

function updateFlight() {
  if (!state.flight) return;
  const f = state.flight;
  f.x += f.vx;
  f.y += f.vy;
  f.vy += 0.38;
  f.rotation += f.spin;
  f.traveled += f.vx * 0.12;
  if (f.y >= groundY() - 18 || f.traveled >= f.distance) finishFlight();
}

function updateParticles() {
  state.particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.18;
    p.life -= 0.026;
  });
  state.particles = state.particles.filter((p) => p.life > 0);
}

function draw() {
  updateMeter();
  updateFlight();
  updateParticles();
  powerNeedle.style.left = `${state.meter}%`;

  drawBackground();
  drawDistanceMarkers();
  drawParticles();
  drawPlayer();
  drawComak();

  requestAnimationFrame(draw);
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.round(rect.width);
  canvas.height = Math.round(rect.height);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

actionButton.addEventListener("click", handleAction);
canvas.addEventListener("click", handleAction);
window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    handleAction();
  }
});
window.addEventListener("resize", resizeCanvas);

updateHud();
resizeCanvas();
draw();
