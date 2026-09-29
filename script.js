const facts = [
  "Факт: зеркало в раздевалке официально считается двенадцатым игроком.",
  "Факт: слово «скромность» покинуло чат, но вернётся после финального свистка.",
  "Факт: после фразы «я не готов» мотивация делает 100 отжиманий.",
  "Факт: это не эго. Это просто очень хорошо освещённая уверенность.",
  "Факт: SIUUU распознаётся на всех футбольных диалектах мира."
];

const fact = document.querySelector('#fact');
const toast = document.querySelector('#toast');
let factIndex = 0;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

document.querySelector('#factButton').addEventListener('click', () => {
  factIndex = (factIndex + 1) % facts.length;
  fact.textContent = facts[factIndex];
});

document.querySelector('#siuButton').addEventListener('click', () => {
  showToast('SIUUU! +7 к менталитету монстра');
});

document.querySelector('#soundButton').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const active = button.classList.toggle('active');
  button.setAttribute('aria-pressed', String(active));
  showToast(active ? 'Воображаемый стадион включён: SIIIIU!' : 'Стадион ушёл на перерыв');
});
