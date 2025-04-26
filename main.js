// Referência para o áudio e vinil
const musica = document.getElementById('musica');
const vinil = document.getElementById('vinil');

// Variável para verificar se a música está tocando
let musicaTocando = false;

// Função para controlar a música
vinil.addEventListener('click', () => {
    if (musicaTocando) {
        musica.pause();  // Pausa a música
    } else {
        musica.play();  // Começa a música
    }
    musicaTocando = !musicaTocando;  // Alterna o estado da música
});


// Array com as imagens em formato JPEG
const imagens = [
    'imagens/image1.jpg',
    'imagens/image2.jpg',  
    'imagens/image3.jpg',    
    'imagens/image4.jpg',  
'imagens/image5.jpg', 
'imagens/image6.jpg', 
'imagens/image7.jpg', 
'imagens/image8.jpg',
  'imagens/image9.jpg',  
    'imagens/image10.jpg',  
    'imagens/image11.jpg',  
    'imagens/image12.jpg',
'imagens/image13.jpg', 
  'imagens/image14.jpg', 
  'imagens/image15.jpg', 
  'imagens/image16.jpg',  
  'imagens/image17.jpg', 
'imagens/image18.jpg', 
  'imagens/image19.jpg', 
  'imagens/image20.jpg', 
'imagens/image21.jpg', 
  'imagens/image22.jpg', 
  'imagens/image24.jpg', 
'imagens/image25.jpg', 
  'imagens/image26.jpg', 
  'imagens/image27.jpg', 
  'imagens/image28.jpg',
 'imagens/image29.jpg', 
  'imagens/image30.jpg', 
];

let indiceAtual = 0;  // Índice da imagem principal

// Referências para os elementos HTML
const imagemPrincipal = document.getElementById('imagem-principal');
const setaEsquerda = document.getElementById('seta-esquerda');
const setaDireita = document.getElementById('seta-direita');

// Função para trocar a imagem principal
function trocarImagem() {
    imagemPrincipal.src = imagens[indiceAtual];
    
    imagensPequenas.forEach(img => img.classList.remove('destaque'));
    imagensPequenas[indiceAtual].classList.add('destaque');
}

// Evento de clique para a seta esquerda (imagem anterior)
setaEsquerda.addEventListener('click', () => {
    // Se estiver na primeira imagem, vai para a última
    indiceAtual = (indiceAtual === 0) ? imagens.length - 1 : indiceAtual - 1;
    trocarImagem();  // Atualiza a imagem principal
});

// Evento de clique para a seta direita (imagem seguinte)
setaDireita.addEventListener('click', () => {
    // Se estiver na última imagem, volta para a primeira
    indiceAtual = (indiceAtual === imagens.length - 1) ? 0 : indiceAtual + 1;
    trocarImagem();  // Atualiza a imagem principal
});

// Faz com que clicar em imagem pequena altere a principal
const imagensPequenas = document.querySelectorAll('.imagem-pequena');

imagensPequenas.forEach((img, index) => {
    img.addEventListener('click', () => {
        indiceAtual = index;
        trocarImagem();
    });
});

// Função para mostrar os corações flutuando
function mostrarCorações() {
    // Gerar 10 corações a partir de cada canto
    for (let i = 0; i < 5; i++) {
        criarCoracao(true);  // Corações do canto esquerdo
        criarCoracao(false); // Corações do canto direito
    }
}

function criarCoracao(isLeft) {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");

    // Emoji do coração
    coracao.innerText = "💖";

    // Definir posição inicial (a partir dos dois cantos)
    const x =  Math.random() * window.innerWidth;   // Lado esquerdo ou direito
    const y = window.innerHeight - 100;  // Posição no fundo da tela

    coracao.style.left = `${x}px`;
    coracao.style.top = `${y}px`;

    // Adicionar o coração ao body
    document.body.appendChild(coracao);

    // Definir a direção da animação (diagonal para os lados)
    const direction = isLeft ? "45deg" : "-45deg"; // Lado esquerdo (45 graus) ou lado direito (-45 graus)

    // Iniciar a animação
    coracao.style.animation = `subir 6s ease-out forwards, moverDiagonal 6s ease-out forwards`;

    // Remove o coração após 3 segundos
    setTimeout(() => {
        coracao.remove();
    }, 6000);
}