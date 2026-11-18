const tabuleiro = document.getElementById("xadrez");
//variávei que guardam posição atual do persoagem
let linhaAtual=0;
let colunaAtual=0;

for (let linha = 0; linha < 8; linha++) {
    for (let coluna = 0; coluna < 8; coluna++) {
        let cor =  'escura'
        
        // Alterna as cores automaticamente
        if ((linha + coluna) % 2 === 0) {
            cor = 'clara';
        }  
        let casa = `<div class="casa ${cor}" data-linha="${linha}" data-coluna="${coluna}"> </div>`//Cria o HTML da casa e guarda coordenadas e cores
        tabuleiro.innerHTML +=casa;
    }
}
atualizarGargula();

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
    if (
        novaLinha >= 0 && novaLinha <= 7 &&
        novaColuna >= 0 && novaColuna <= 7
    ) {

        // Atualiza a posição do personagem
        linhaAtual = novaLinha;
        colunaAtual = novaColuna;

        // Atualiza a posição visual
        atualizarGargula();

    }
}
  document.addEventListener("keydown", andarGargula);
