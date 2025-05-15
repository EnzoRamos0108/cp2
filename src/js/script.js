let imagens = [
  "./src/assets/imagem1.jpg",
  "./src/assets/imagem2.jpg",
  "./src/assets/imagem3.jpg"
];

const frases = [
  {
    titulo: "Autonomia<br><span>Surpreendente</span>",
    subtitulo: "Vá mais longe com nossas <span>baterias</span> de última geração"
  },
  {
    titulo: "Potência<br><span>Elétrica</span>",
    subtitulo: "O <span>futuro</span> da mobilidade com <span>zero</span> emissões"
  },
  {
    titulo: "Tecnologia<br> <span>Inovadora</span>",
    subtitulo: "Experiência de <span>direção</span> superior com <span>tecnologia</span> de ponta"
  }
]


let i = 0;
let tempo = 5000;

function slideShow() {
  const img = document.getElementById('image');
  const titulo = document.getElementById('titulo');
  const subtitulo = document.getElementById('subtitulo');
  const fraseContainer = document.querySelector('.frase-container');

  // Efeito de esvanecer (fade)
  img.style.opacity = 0;
  fraseContainer.style.opacity = 0;

  setTimeout(() => {
    img.src = imagens[i];
    titulo.innerHTML = frases[i].titulo;
    subtitulo.innerHTML = frases[i].subtitulo;

    img.onload = () => {
      img.style.opacity = 1;
      fraseContainer.style.opacity = 1;
    };

    i++;
    if (i === imagens.length) {
      i = 0;
    }

    setTimeout(slideShow, tempo);
  }, 500);
}

slideShow();
