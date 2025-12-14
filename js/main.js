  // Efeito flip ao toque
  const card = document.getElementById('card');
  card.addEventListener('click', () => card.classList.toggle('flip'));

  // Geração de flocos de neve e ícones natalinos
  const icons = ['❄️', '🎄', '🎅', '🍪', '🎁', '⭐'];
  function createFallingElement() {
    const snow = document.createElement('div');
    snow.classList.add('snowflake');
    snow.textContent = icons[Math.floor(Math.random() * icons.length)];
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = (Math.random() * 5 + 5) + 's';
    snow.style.fontSize = (Math.random() * 1 + 1) + 'em';
    document.body.appendChild(snow);
    snow.addEventListener('animationend', () => snow.remove());
  }

  setInterval(createFallingElement, 400);
  // Slider suave com fade
  const slides = document.querySelectorAll('.slide');
  let current = 0;
  function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }
  setInterval(nextSlide, 4000);

  // Personalização via parâmetro de URL (?mensagem=)
  const params = new URLSearchParams(window.location.search);
  const msg = params.get('mensagem');
  if (msg) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = decodeURIComponent(msg);

  }
  /* AUDIO CONTROL */
const audio = document.getElementById("music");
const audioBtn = document.getElementById("audioToggle");
let playing = false;

audioBtn.onclick = () => {
    playing ? audio.pause() : audio.play();
    playing = !playing;
    audioBtn.textContent = playing ? "🔊" : "🔈";
};