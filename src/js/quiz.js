const perguntas = [
  "Qual é o seu principal objetivo ao adquirir um carro?",
  "Que tipo de carro mais combina com você? (Ex: SUV, esportivo, compacto...)",
  "Com que frequência você utiliza o carro durante a semana?",
  "Você prefere um carro com visual mais esportivo ou mais discreto?",
  "Quão importante é a velocidade e desempenho para você?",
  "Você costuma viajar com frequência de carro?",
  "O conforto interno é uma prioridade na sua escolha?",
  "Você prefere carros com tecnologias avançadas e automação?",
  "Qual é a sua prioridade: economia de combustível ou potência?",
  "Você está buscando um carro mais voltado para a família ou uso individual?"
];

let indiceAtual = 0;
const respostas = [];

const perguntaEl = document.getElementById("pergunta");
const respostaInput = document.getElementById("resposta");
const botaoProximo = document.getElementById("proximo");
const mensagemEl = document.getElementById("mensagem");
const containerResultado = document.getElementById("container-resultado");
const listaResultado = document.getElementById("lista-resultado");
const botaoInicio = document.getElementById("inicio-btn");
const containerPerguntas = document.getElementById("container-perguntas");

function mostrarPergunta() {
  perguntaEl.textContent = perguntas[indiceAtual];
  respostaInput.value = "";
  respostaInput.focus();
  mensagemEl.textContent = "";
}

botaoProximo.addEventListener("click", () => {
  const resposta = respostaInput.value.trim();
  if (resposta === "") {
    mensagemEl.textContent = "Por favor, digite uma resposta antes de continuar.";
    return;
  }

  respostas.push({ pergunta: perguntas[indiceAtual], resposta });

  indiceAtual++;

  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    exibirResultado();
  }
});

function exibirResultado() {
  containerPerguntas.classList.add("hidden");
  containerResultado.classList.remove("hidden");
  listaResultado.innerHTML = "";

  respostas.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${index + 1}. ${item.pergunta}</strong><br>Resposta: ${item.resposta}`;
    listaResultado.appendChild(li);
  });
}

botaoInicio.addEventListener("click", () => {
  indiceAtual = 0;
  respostas.length = 0;
  containerResultado.classList.add("hidden");
  containerPerguntas.classList.remove("hidden");
  mostrarPergunta();
});


mostrarPergunta();