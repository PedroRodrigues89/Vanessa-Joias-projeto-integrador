// Música de fundo
const musicBtn = document.getElementById('musicBtn');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    backgroundMusic.pause();
    musicBtn.textContent = '🎵';
  } else {
    backgroundMusic.play();
    musicBtn.textContent = '🔇';
  }
  isPlaying = !isPlaying;
});

// Carrinho
let carrinho = [];

function adicionarCarrinho(item, preco) {
  carrinho.push({item, preco});
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('itens-carrinho');
  const total = document.getElementById('total');
  lista.innerHTML = "";
  let soma = 0;
  carrinho.forEach((produto, index) => {
    lista.innerHTML += `<li>${produto.item} - R$ ${produto.preco} <button onclick="removerItem(${index})">Remover</button></li>`;
    soma += produto.preco;
  });
  total.innerText = `Total: R$ ${soma}`;
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function limparCarrinho() {
  carrinho = [];
  atualizarCarrinho();
}

function confirmarPedido() {
  if (confirm("Deseja realmente enviar o pedido?")) {
    let mensagem = "Olá, gostaria de fazer um pedido:\n";
    let total = 0;
    carrinho.forEach(produto => {
      mensagem += `- ${produto.item}: R$ ${produto.preco}\n`;
      total += produto.preco;
    });
    mensagem += `\nTotal: R$ ${total}`;

    const numero = "5521992081641"; // <-- Seu número do WhatsApp aqui
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
    limparCarrinho();
  }
}


// Relógio
setInterval(() => {
  const data = new Date();
  document.getElementById('relogio').innerText = data.toLocaleTimeString();
}, 1000);

// Clima (apenas estação)
function atualizarClima() {
  const data = new Date();
  const mes = data.getMonth();
  let estacao = "";

  if (mes >= 2 && mes <= 4) estacao = "Outono 🍂";
  else if (mes >= 5 && mes <= 7) estacao = "Inverno ❄️";
  else if (mes >= 8 && mes <= 10) estacao = "Primavera 🌸";
  else estacao = "Verão ☀️";

  document.getElementById('clima').innerText = `Data: ${data.toLocaleDateString()} | ${estacao}`;
}
atualizarClima();


