// PARTE 1: Carrega perguntas e respostas apartir do arquivo "perguntas.json"
let perguntas = [];

fetch('perguntas.json')
  .then(response => response.json())
  .then(data => {
    perguntas = data;
    carregarPergunta(); // inicia o quiz após carregar os dados
  })
  .catch(error => {
    console.error("Erro ao carregar perguntas:", error); //tratamento de erro
  });

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis de controle
let indiceAtual = 0;
let acertos = 0;

// PARTE EXTRA: Função para soltar confetes 🎉
function soltarConfetes() {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

// PARTE 4: Carrega uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;
  respostasElemento.innerHTML = "";

  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    const resposta = perguntaAtual.respostas[i];
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;

    botao.onclick = function () {
      const botoes = document.querySelectorAll(".botao-resposta");

      if (resposta.correto) {
        botao.classList.add("correta");
        acertos++;
      } else {
        botao.classList.add("errada");

        // Marca a resposta correta
        perguntaAtual.respostas.forEach((r, index) => {
          if (r.correto) {
            botoes[index].classList.add("correta");
          }
        });

        // Desabilita os botões
        botoes.forEach((b) => b.disabled = true);

      }

      // Desabilita os botões após clique
      botoes.forEach((b) => b.disabled = true);

      // Avança para próxima pergunta após 1 segundo
   setTimeout(() => {
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
      carregarPergunta();
    } else {
      finalizarJogo(); // chama a função de finalização
    }
    }, 1000);

    };

    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Finaliza o jogo
function finalizarJogo() {
    if (acertos === perguntas.length) {
      textoFinal.innerHTML = `🎉 <span class="mensagem-final animada">Parabéns! Você acertou Todas as perguntas do Quiz!</span>`;
      soltarConfetes();
    } else {
      textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
    }
  
    conteudo.style.display = "none";
    conteudoFinal.style.display = "flex";
      
  }

// PARTE 7: Reinicia o jogo
function reiniciarJogo() {
  indiceAtual = 0;
  acertos = 0;
  conteudoFinal.style.display = "none";
  conteudo.style.display = "block";
  carregarPergunta(indiceAtual);
}

