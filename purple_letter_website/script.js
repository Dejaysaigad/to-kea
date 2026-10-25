document.getElementById("openLetter").addEventListener("click", () => {
  const welcome = document.getElementById("welcomeScreen");
  welcome.classList.add("teddy-reveal");
  document.getElementById("openLetter").disabled = true;
  setTimeout(() => {
    document.body.classList.add("letter-open");
    welcome.setAttribute("aria-hidden", "true");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1500);
});
const heartsLayer = document.querySelector(".floating-hearts");
function floatHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 20}px`;
  heart.style.animationDuration = `${6 + Math.random() * 5}s`;
  heartsLayer.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}
for (let i = 0; i < 12; i++) setTimeout(floatHeart, i * 450);
setInterval(floatHeart, 900);
if (false) {
const heartsLayer = document.querySelector(".floating-hearts");
const toast = document.getElementById("toast");
const dialog = document.getElementById("editDialog");
const originalMessage = `I just wanted to take a moment to remind you how special you are. You bring so much light into the world, and I hope you never forget how wonderful you are.

Every smile, every kind word, and every little moment can make an ordinary day feel magical. I hope this little letter brings a bit of warmth to yours.

No grand words are needed. Just know that you matter, you are appreciated, and you deserve all the gentle happiness life can offer.

Keep being your lovely self. The world is sweeter with a little more kindness in it.`;
let toastTimer;

function makeHeart(x = Math.random() * 100, big = false) {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = Math.random() > 0.35 ? "♥" : "♡";
  heart.style.left = `${x}%`;
  heart.style.fontSize = `${big ? 25 + Math.random() * 20 : 12 + Math.random() * 19}px`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  heartsLayer.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}
function heartBurst(count = 14) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => makeHeart(35 + Math.random() * 30, true), i * 65);
  }
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}
function renderLetter() {
  document.getElementById("letterGreeting").textContent =
    document.getElementById("recipient").value.trim() || "My Dearest,";
  const content = document.getElementById("letterContent");
  content.replaceChildren();
  const message = document.getElementById("message").value.trim() || originalMessage;
  message.split(/\n\s*\n/).forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    content.appendChild(p);
  });
  document.getElementById("signature").textContent =
    document.getElementById("sender").value.trim() || "Always Yours";
}

document.getElementById("heartButton").addEventListener("click", () => {
  heartBurst(18);
  showToast("A little heart, just for you. 💜");
});
document.getElementById("surpriseButton").addEventListener("click", () => {
  heartBurst(26);
  showToast("You deserve all the lovely things. Keep shining! 💜");
});
document.getElementById("editButton").addEventListener("click", () => {
  document.getElementById("message").value = Array.from(document.querySelectorAll("#letterContent p"))
    .map(p => p.textContent).join("\n\n");
  document.getElementById("recipient").value = document.getElementById("letterGreeting").textContent;
  document.getElementById("sender").value = document.getElementById("signature").textContent;
  dialog.showModal();
});
document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
document.getElementById("letterForm").addEventListener("submit", event => {
  event.preventDefault();
  renderLetter();
  dialog.close();
  showToast("Your letter has been updated. 💜");
});
document.getElementById("resetButton").addEventListener("click", () => {
  document.getElementById("recipient").value = "My Dearest,";
  document.getElementById("message").value = originalMessage;
  document.getElementById("sender").value = "Always Yours";
});
for (let i = 0; i < 9; i++) {
  setTimeout(() => makeHeart(), i * 600);
}
setInterval(() => makeHeart(), 1300);
}
