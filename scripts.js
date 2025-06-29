const beats = [
  {
    title: 'Beat 1',
    file: 'beats/beat1.mp3',
    price: 'R$49'
  },
  {
    title: 'Beat 2',
    file: 'beats/beat2.mp3',
    price: 'R$69'
  }
];

const list = document.getElementById('beats-list');

beats.forEach(beat => {
  const card = document.createElement('div');
  card.className = 'beat-card';
  card.innerHTML = `
    <h3>${beat.title} • ${beat.price}</h3>
    <audio controls src="${beat.file}">Seu navegador não suporta audio.</audio>
    <a href="${beat.file}" download class="buy-btn">Comprar / Baixar</a>
  `;
  list.appendChild(card);
});