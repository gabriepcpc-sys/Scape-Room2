function entrarTabuleiro(){
    document.getElementById("caixa-de-dialogo-finalruim").style.display = "block";
    setTimeout(function(){
        document.getElementById("areaJogo").style.display = "none";
        document.getElementById("areaJogo2").style.display = "flex";
        document.getElementById("caixa-de-dialogo-finalruim").style.display = "none";
        document.getElementById("fundo-1").style.display="none";
        document.getElementById("fundo-2").style.display="block";
    },10000);
}

function sairMinigame(){
    document.getElementById("areaJogo2").style.display = "none";
    document.getElementById("areaJogo").style.display = "flex";
    document.getElementById("fundo3").style.display = "block";
}

function pegarCoroa(){
    window.location.href = "5Fase.html";
}
const tabuleiro = document.getElementById("xadrez");
//variávei que guardam posição atual do persoagem
let linhaAtual=0;
let colunaAtual=0;
let jogoAtivo = true;

const labirinto = [

    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1, 1]

];

let casas="";

for (let linha = 0; linha < 8; linha++) {
    for (let coluna = 0; coluna < 8; coluna++) {
        let cor =  'escura'
        
        // Alterna as cores automaticamente
        if ((linha + coluna) % 2 === 0) {
            cor = 'clara';
        }  
        //verifica se a casa é uma parede ou um caminho
        let tipo ='caminho';

        if(labirinto[linha][coluna]===1){
            tipo ='parede';
        }
        // Cria o HTML da casa com sua cor, tipo e coordenadas
        let casa = `<div class="casa ${cor} ${tipo}"
                        data-linha="${linha}"
                        data-coluna="${coluna}"> 
                        </div>`
            casas += casa;
        }
    }
    tabuleiro.innerHTML +=casas;
    atualizarGargula();
            

function verificarVitoria(){
    if(linhaAtual === 7 && colunaAtual === 4){
        jogoAtivo = false;
        document.getElementById("mensagemVitoria").style.display = "block";
        document.getElementById("botao").style.display = "block";
    }
}

function atualizarGargula(){

    let casaAnterior = tabuleiro.querySelector(".gargula");//Procura a casa onde o personagem estava anteriormente
//Retira a marcação anterior
    if(casaAnterior){
        casaAnterior.classList.remove("gargula");
    }

    let casaAtual = tabuleiro.querySelector(`.casa[data-linha="${linhaAtual}"][data-coluna="${colunaAtual}"]`)
    if(casaAtual){
        casaAtual.classList.add("gargula");
    }
}

function andarGargula(event){
    //Impede movimentações depois da vitória
    if (!jogoAtivo) {
        return;
    }
    //Guarda a posição atual antes da movimentação
    let novaLinha = linhaAtual;
    let novaColuna = colunaAtual;

    //verifca qual tecla foi pressionada
    switch(event.key){
        case "ArrowUp":
            novaLinha--;
            break;

         case "ArrowDown":
            novaLinha++;
            break;

        case "ArrowLeft":
            novaColuna--;
            break;

        case "ArrowRight":
            novaColuna++;
            break;

        default:
            return;
    }

     // Impede que as setinhas movimentem a página
    event.preventDefault();

    // Verifica se o personagem continua dentro do tabuleiro
    if (novaLinha >= 0 && novaLinha <= 7 && novaColuna >= 0 && novaColuna <= 7) {
        if(labirinto[novaLinha][novaColuna]===1){
            return;
        }
        // Atualiza a posição do personagem
        linhaAtual = novaLinha;
        colunaAtual = novaColuna;

        // Atualiza a posição visual
        atualizarGargula();

        verificarVitoria();


    }
}
  document.addEventListener("keydown", andarGargula);

  function ajustarTela() {

    // Dimensões originais do cenário
    let larguraBase = 1671;
    let alturaBase = 941;

    // Calcula a escala necessária
    let escalaLargura = window.innerWidth / larguraBase;
    let escalaAltura = window.innerHeight / alturaBase;

    // Escolhe a menor escala para o cenário caber na tela
    let escala = Math.min(escalaLargura, escalaAltura);

    // Aplica a escala ao palco
    document.getElementById("todosCenarios").style.transform =
        "scale(" + escala + ")";
}

// Executa a função quando o tamanho da janela mudar
window.onresize = ajustarTela;

// Executa a função inicialmente, quando a página carregar
ajustarTela();