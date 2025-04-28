


/// Relógio
function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');
  document.getElementById('relogio').innerHTML = `${horas}:${minutos}:${segundos}`;
}
setInterval(atualizarRelogio, 1000);

// Clima e estação
function atualizarClima() {
  const agora = new Date();
  const mes = agora.getMonth() + 1;
  let estacao = '';

  if (mes >= 3 && mes <= 5) estacao = 'Outono 🍂';
  else if (mes >= 6 && mes <= 8) estacao = 'Inverno ❄️';
  else if (mes >= 9 && mes <= 11) estacao = 'Primavera 🌸';
  else estacao = 'Verão ☀️';

  const dia = agora.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
  document.getElementById('clima').innerHTML = `${dia} - ${estacao}`;
}
atualizarClima();

// Carrinho atualizado
const carrinho = [];

function adicionarCarrinho(item, preco) {
  carrinho.push({ item, preco });
  renderizarCarrinho();
}

function removerCarrinho(index) {
  carrinho.splice(index, 1);
  renderizarCarrinho();
}

function renderizarCarrinho() {
  const lista = document.getElementById('itens-carrinho');
  lista.innerHTML = "";
  carrinho.forEach((produto, index) => {
    lista.innerHTML += `<li>${produto.item} - R$ ${produto.preco} 
      <button onclick="removerCarrinho(${index})">Remover</button></li>`;
  });
  calcularValor();
}

function calcularValor() {
  const total = carrinho.reduce((soma, produto) => soma + produto.preco, 0);
  document.getElementById('total').innerText = `Total: R$ ${total}`;
}

function enviarPedido() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  let mensagem = 'Olá, quero comprar:\n';
  carrinho.forEach(produto => {
    mensagem += `- ${produto.item} (R$${produto.preco})\n`;
  });
  const total = carrinho.reduce((soma, produto) => soma + produto.preco, 0);
  mensagem += `\nTotal: R$${total}`;
  const url = `https://wa.me/5521992081641?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}


  
// Modal de Confirmação
function mostrarModal() {
  document.getElementById('modal').style.display = 'flex';
}

function confirmarEnvio(confirmado) {
  document.getElementById('modal').style.display = 'none';
  if (confirmado) {
    enviarPedido();
  }
}

// Botão limpar pedido
function limparCarrinho() {
  carrinho.length = 0;
  renderizarCarrinho();
}

// Relógio atualizado
function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');
  document.getElementById('relogio').innerHTML = `${horas}:${minutos}:${segundos}`;
}
setInterval(atualizarRelogio, 1000);

// Clima e estação
function atualizarClima() {
  const agora = new Date();
  const mes = agora.getMonth() + 1;
  let estacao = '';

  if (mes >= 3 && mes <= 5) estacao = 'Outono 🍂';
  else if (mes >= 6 && mes <= 8) estacao = 'Inverno ❄️';
  else if (mes >= 9 && mes <= 11) estacao = 'Primavera 🌸';
  else estacao = 'Verão ☀️';

  const dia = agora.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
  document.getElementById('clima').innerHTML = `${dia} - ${estacao}`;
}
atualizarClima();
