function portaMasmorra() {
    document.getElementById("masmoraDIV").style.display = "block";
    document.getElementById("fundo1").style.display = "none";
}

function voltarDaMasmorra() {
    document.getElementById("masmoraDIV").style.display = "none";
    document.getElementById("minigame").style.display="none";
    document.getElementById("fundo1").style.display = "block";
}

function entrarMinigame(){
    document.getElementById("masmoraDIV").style.display = "none";
    document.getElementById("minigame").style.display="block";
    iniciarJogo();
}

function adicionarHistorico(texto){
    let lista = document.getElementById("listaHistorico");

    lista.innerHTML += `<li>
    <p>${texto}</p>
    </li>`
}

function alternarHistorico(){
    let painel = document.getElementById("diarioDeBordo");
    let seta = document.getElementById("setaHistorico");
    let aberto = painel.classList.toggle("aberto");//Adiciona ou remove a classe aberto
    if(aberto){
        seta.textContent = "↓";
        painel.style.display = "block";
    }
    else{
        seta.textContent = "↑";
        painel.style.display = "none";
    }
}
 

const MemoriaItens = [
    "💀",
    "💀",
    "⚔️",
    "⚔️",
    "🗝️",
    "🗝️",
    "🌑",
    "🌑",
    "🔥",
    "🔥",
    "🕯️",
    "🕯️",
    "⚜️",
    "⚜️",
    "📜",
    "📜",
    "🛡️",
    "🛡️",
];

let cartas = [];
let cartasviradas = [];
let jogoAtivo = true;
let travaPainel = false;



const elementosCartas = document.querySelectorAll(".carta");

function EmbaralharCartas(vet) {
    for (let i = vet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vet[i], vet[j]] = [vet[j], vet[i]];
    }
    return vet;
}

function iniciarJogo() {
    
    cartas = [...MemoriaItens];//Copia os itens do array MemoriaItens para o array cartas
    cartas = EmbaralharCartas(cartas);
    cartasviradas = [];//Limpa o array de cartas viradas
    jogoAtivo = true;
    travaPainel = false;
    desenharCartas();//Distribui os ícones pelas divs do HTML
}

function desenharCartas() {
    for(let i = 0; i<elementosCartas.length; i++){
        let cartaHTML = elementosCartas[i];//Pega a div da carta
        let conteudo = cartaHTML.querySelector(".conteudoCarta");//Procura o span da div da carta
        conteudo.textContent = cartas[i];//Atribui o ícone à div da carta
        cartaHTML.dataset.valor = cartas[i];//Guarda o valor da carta para comparar depois
        cartaHTML.classList.remove("virada","encontrada");//Remove a classe virada da carta
        cartaHTML.onclick = function(){
            virarCarta(cartaHTML);//Chama a função virarCarta passando a div da carta
        }
    }

}

function virarCarta(elemento) {
    //Impedir que o jogador clique em mais de duas cartas ao mesmo tempo
    if(!jogoAtivo || travaPainel || elemento.classList.contains("virada") || elemento.classList.contains("encontrada")){
        return;
    }

    elemento.classList.add("virada");//Adiciona a classe virada à carta
    cartasviradas.push(elemento);//Adiciona a carta virada ao array de cartas viradas
    if(cartasviradas.length === 2){//Se o jogador virou duas cartas
        travaPainel=true
        let primeiraCarta = cartasviradas[0];//Pega a primeira carta virada
        let segundaCarta = cartasviradas[1];//Pega a segunda carta virada

        if(primeiraCarta.dataset.valor === segundaCarta.dataset.valor){//Se as cartas forem iguais
            travaPainel = false;
            primeiraCarta.classList.add("encontrada");//Adiciona a classe encontrada à primeira carta
            segundaCarta.classList.add("encontrada");//Adiciona a classe encontrada à segunda carta

            cartasviradas = [];//Limpa o array de cartas viradas

            let encontradas = document.querySelectorAll("#cartas .carta.encontrada");//Pega todas as cartas encontradas

            if(encontradas.length === elementosCartas.length){//Se todas as cartas foram encontradas
                jogoAtivo = false;
                document.getElementById("mensagemMemoria").style.display="block";
                
            }

        }
        else{//Se as cartas forem diferentes
            travaPainel = true;
            setTimeout(function(){
                primeiraCarta.classList.remove("virada");
                segundaCarta.classList.remove("virada");
                
                cartasviradas = [];
                travaPainel = false;
            }, 800);
        }
    }
}

