const kleuren = [
  '#e63946',
  '#f1c40f',
  '#16a085',
  '#8e44ad',
  '#2980b9',
  '#e67e22',
  '#2ecc71',
  '#ff6b6b'
];

const randomKleur = kleuren[Math.floor(Math.random() * kleuren.length)];
document.documentElement.style.setProperty('--accent-kleur', randomKleur);