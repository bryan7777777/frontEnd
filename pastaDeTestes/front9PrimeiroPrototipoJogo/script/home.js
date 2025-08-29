document.getElementById('iniciar').addEventListener('click', () => {
  document.getElementById('mapContainer').style.display = 'block';
  document.getElementById('mapContainer').style.top = '0';
  gerarMapa();
});

function gerarMapa() {
  const map = document.getElementById('map');
  map.innerHTML = '';

  for (let i = 0; i < 10; i++) {
    const node = document.createElement('div');
    node.className = 'sala';
    node.dataset.tipo = escolherTipoSala(); // batalha, loja, etc.
    node.style.top = `${i * 200}px`;
    node.style.left = `${Math.random() * 80 + 10}%`;
    node.innerText = node.dataset.tipo.toUpperCase();
    node.addEventListener('click', () => {
      alert(`Você entrou em uma sala de ${node.dataset.tipo}`);
    });
    map.appendChild(node);
  }
}

function escolherTipoSala() {
  const tipos = ['batalha', 'loja', 'inimigo forte', 'boss'];
  return tipos[Math.floor(Math.random() * tipos.length)];
}
