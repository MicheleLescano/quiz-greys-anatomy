// PARTE 1: Lista de perguntas e respostas
const perguntas = [
    {
      "pergunta": "Em qual temporada ocorreu o acidente aéreo?",
      "respostas": [
        {"opcao": "temporada 8", "correto": true},
        {"opcao": "temporada 5", "correto": false},
        {"opcao": "temporada 12", "correto": false},
        {"opcao": "temporada 9", "correto": false}
      ]
    },
    {
      "pergunta": "Quem foi o primeiro chefe de cirurgia mostrado na série?",
      "respostas": [
        {"opcao": "Dr. Derek Shepherd", "correto": false},
        {"opcao": "Dr. Owen Hunt", "correto": false},
        {"opcao": "Dr. Richard Webber", "correto": true},
        {"opcao": "Dr. Bailey", "correto": false}
      ]
    },
    {
      "pergunta": "Qual o apelido de Derek Shepherd?",
      "respostas": [
        {"opcao": "McSteamy", "correto": false},
        {"opcao": "McChief", "correto": false},
        {"opcao": "McCutie", "correto": false},
        {"opcao": "McDreamy", "correto": true}
      ]
    },
    {
      "pergunta": "Quem foi a melhor amiga de Meredith Grey?",
      "respostas": [
        {"opcao": "Izzie Stevens", "correto": false},
        {"opcao": "Cristina Yang", "correto": true},
        {"opcao": "April Kepner", "correto": false},
        {"opcao": "Lexie Grey", "correto": false}
      ]
    },
    {
      "pergunta": "Qual especialidade a Cristina Yang escolheu?",
      "respostas": [
        {"opcao": "Cirurgia Pediátrica", "correto": false},
        {"opcao": "Neurocirurgia", "correto": false},
        {"opcao": "Cirurgia Cardiotorácica", "correto": true},
        {"opcao": "Ortopedia", "correto": false}
      ]
    },
    {
      "pergunta": "Quem era o marido de Miranda Bailey?",
      "respostas": [
        {"opcao": "Ben Warren", "correto": true},
        {"opcao": "Richard Webber", "correto": false},
        {"opcao": "George O'Malley", "correto": false},
        {"opcao": "Jackson Avery", "correto": false}
      ]
    },
    {
      "pergunta": "Qual personagem morreu em um acidente de ônibus?",
      "respostas": [
        {"opcao": "George O'Malley", "correto": true},
        {"opcao": "Denny Duquette", "correto": false},
        {"opcao": "Mark Sloan", "correto": false},
        {"opcao": "Alex Karev", "correto": false}
      ]
    },
    {
      "pergunta": "Quem era Lexie Grey?",
      "respostas": [
        {"opcao": "Ex-esposa de Derek", "correto": false},
        {"opcao": "Meia-irmã de Meredith", "correto": true},
        {"opcao": "Filha de Bailey", "correto": false},
        {"opcao": "Mãe de Zola", "correto": false}
      ]
    },
    {
      "pergunta": "Qual desses personagens era um bombeiro antes de virar cirurgião?",
      "respostas": [
        {"opcao": "Owen Hunt", "correto": false},
        {"opcao": "Jackson Avery", "correto": false},
        {"opcao": "Andrew DeLuca", "correto": false},
        {"opcao": "Ben Warren", "correto": true}
      ]
    },
    {
      "pergunta": "Quem ficou com a guarda da Zola?",
      "respostas": [
        {"opcao": "Cristina Yang", "correto": false},
        {"opcao": "Miranda Bailey", "correto": false},
        {"opcao": "Meredith e Derek", "correto": true}, 
        {"opcao": "Callie Torres", "correto": false}
      ]
    },
    {
      "pergunta": "Quem fundou o hospital junto com Richard Webber?",
      "respostas": [
        {"opcao": "Derek Shepherd", "correto": false},
        {"opcao": "Ellis Grey", "correto": true},
        {"opcao": "Alex Karev", "correto": false},
        {"opcao": "Teddy Altman", "correto": false}
      ]
    },
    {
      "pergunta": "Quem foi o grande amor de Mark Sloan?",
      "respostas": [
        {"opcao": "Lexie Grey", "correto": true},
        {"opcao": "Addison Montgomery", "correto": false},
        {"opcao": "Arizona Robbins", "correto": false},
        {"opcao": "Cristina Yang", "correto": false}
      ]
    },
    {
      "pergunta": "Quem era o pai da filha da Callie Torres?",
      "respostas": [
        {"opcao": "George O'Malley", "correto": false},
        {"opcao": "Arizona Robbins", "correto": false},
        {"opcao": "Jackson Avery", "correto": false},
        {"opcao": "Mark Sloan", "correto": true}
      ]
    },
    {
      "pergunta": "Qual médica sofreu um acidente de carro indo para o hospital?",
      "respostas": [
        {"opcao": "April Kepner", "correto": true},
        {"opcao": "Izzie Stevens", "correto": false},
        {"opcao": "Amelia Shepherd", "correto": false},
        {"opcao": "Teddy Altman", "correto": false}
      ]
    },
    {
      "pergunta": "Qual desses personagens era chefe de trauma?",
      "respostas": [
        {"opcao": "Alex Karev", "correto": false},
        {"opcao": "Jackson Avery", "correto": false},
        {"opcao": "Owen Hunt", "correto": true},
        {"opcao": "Ben Warren", "correto": false}
      ]
    },
    {
      "pergunta": "Em que cidade se passa a série Grey’s Anatomy?",
      "respostas": [
        {"opcao": "Chicago", "correto": false},
        {"opcao": "Nova York", "correto": false},
        {"opcao": "Los Angeles", "correto": false},
        {"opcao": "Seattle", "correto": true}
      ]
    },
    {
      "pergunta": "Quem criou a competição cirúrgica entre os internos?",
      "respostas": [
        {"opcao": "Richard Webber", "correto": true},
        {"opcao": "Miranda Bailey", "correto": false},
        {"opcao": "Cristina Yang", "correto": false},
        {"opcao": "Derek Shepherd", "correto": false}
      ]
    },
    {
      "pergunta": "Quem sofreu um AVC e ficou com sequelas por um tempo?",
      "respostas": [
        {"opcao": "April Kepner", "correto": false},
        {"opcao": "Meredith Grey", "correto": false},
        {"opcao": "Izzie Stevens", "correto": true},
        {"opcao": "Lexie Grey", "correto": false}
      ]
    },
    {
      "pergunta": "Quem foi diagnosticada com câncer e sobreviveu?",
      "respostas": [
        {"opcao": "Lexie Grey", "correto": false},
        {"opcao": "Callie Torres", "correto": false},
        {"opcao": "Meredith Grey", "correto": false},
        {"opcao": "Izzie Stevens", "correto": true},
      ]
    },
    {
      "pergunta": "Qual personagem largou a medicina para cuidar de sua família?",
      "respostas": [
        {"opcao": "Alex Karev", "correto": true},
        {"opcao": "Jackson Avery", "correto": false},
        {"opcao": "Derek Shepherd", "correto": false},
        {"opcao": "Arizona Robbins", "correto": false}
      ]
    },
    {
      "pergunta": "Quem doou parte do fígado para o pai?",
      "respostas": [
        {"opcao": "Cristina Yang", "correto": false},
        {"opcao": "Meredith Grey", "correto": true},
        {"opcao": "George O'Malley", "correto": false},
        {"opcao": "Jackson Avery", "correto": false}
      ]
    }
  ];


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

        // Finaliza o jogo imediatamente após erro
        setTimeout(() => {
          finalizarJogo();
        }, 1000);

        return; // Não segue para próxima pergunta
      }

      // Desabilita os botões após clique
      botoes.forEach((b) => b.disabled = true);

      // Avança para próxima pergunta após 1 segundo (se acertou)
      setTimeout(() => {
        indiceAtual++;
        if (indiceAtual < perguntas.length) {
          carregarPergunta();
        } else {
          finalizarJogo();
        }
      }, 1000);
    };

    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Finaliza o jogo
function finalizarJogo() {
    if (acertos === perguntas.length) {
      textoFinal.innerHTML = `🎉 <span class="mensagem-final animada">Parabéns! Você acertou ${acertos}/${perguntas.length} perguntas do Quiz!</span>`;
      soltarConfetes();
    } else {
      textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
    }
  
    conteudo.style.display = "none";
    conteudoFinal.style.display = "flex";

    function soltarConfetes() {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 }
        });
      }
      
  }

// PARTE 6: Inicia o jogo
carregarPergunta();

// PARTE 7: Reinicia o jogo
function reiniciarJogo() {
  indiceAtual = 0;
  acertos = 0;
  conteudoFinal.style.display = "none";
  conteudo.style.display = "block";
  carregarPergunta();
}

