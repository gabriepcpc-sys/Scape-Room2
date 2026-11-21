let inventario = [];

function atualizarInventario() {
    
    let lista = document.getElementById("listaInventario");// Procura a lista no HTML pelo seu id
    lista.innerHTML = "";// Limpa a lista visual antes de preenchê-la novamente
    for (var i = 0; i < inventario.length; i++) {// Percorre todas as posições do vetor
        var item = inventario[i]; // Pega o item atual do inventário
        var imagem = item.imagem; // Pega a imagem do item atual
        var nome = item.nome; // Pega o nome do item atual
        lista.innerHTML += `<li>
        <img src="${imagem}"  
        style='width: 50px; height: 50px; 
        margin-right: 10px;'>
        </li>`; // Adiciona cada item do inventário à lista do HTML com imagem e nome
        //
    }
}

function temItem(nome) {
    
    return inventario.some(function(item) {
        return item.nome === nome;
    });

}

function pegarEspada(){
    if(!temItem("Espada")){
        inventario.push({
            "nome": "Espada",
            "imagem": "../imagens/espada-fase2.png"
        });
        adicionarHistorico("Você pegou uma espada!");
    }
    let espada = document.getElementById('espada');
    espada.remove();
    atualizarInventario();
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
    }
    else{
        seta.textContent = "↑";
    }
}

document.getElementById("pedestal").style.pointerEvents="none"

function portaMasmorra() {
    adicionarHistorico("Você entrou na masmorra!");
    document.getElementById("masmoraDIV").style.display = "block";
    document.getElementById("fundo1").style.display = "none";
}

function voltarDaMasmorra() {
    adicionarHistorico("Você saiu da masmorra!");
    document.getElementById("mensagemPorta").style.display = "none";
    document.getElementById("mensagemPedestal").style.display = "none";
    document.getElementById("masmoraDIV").style.display = "none";
    document.getElementById("minigame").style.display="none";
    document.getElementById("fundo1").style.display = "block";
}

function entrarMinigame(){
    if (!temItem("Espada")) {
        mostrarMensagem2();
        return;
    }
    adicionarHistorico("Você entrou no minigame!");
    document.getElementById("masmoraDIV").style.display = "none";
    document.getElementById("mensagemPorta").style.display = "none";
    document.getElementById("minigame").style.display="block";
    iniciarJogo();
}
function sairMinigame(){
    adicionarHistorico("Você saiu do minigame!");
    document.getElementById("minigame").style.display="none";
    document.getElementById("masmoraDIV").style.display = "block";
}

function interagirEsqueleto(){
    adicionarHistorico("Você interagiu com o esqueleto!")
    adicionarHistorico("Esqueleto: É bom você se apressar se não quiser ficar igual aquele cara da placa... Ele era bem parecido com você, antes de ficar preso aqui pra sempre...");
    document.getElementById("caixa-de-dialogo").style.display="block";
    document.getElementById("frase1").style.display="block";

    document.getElementById("diarioDeBordo").classList.remove("aberto");
    document.getElementById("botaoHistorico").style.display="none";
    document.getElementById("mensagemPorta").style.display="none";
    document.getElementById("inventario").style.display = "none";
    document.getElementById("esqueleto").style.pointerEvents="none";
    document.getElementById("voltar").style.pointerEvents="none";
    document.getElementById("porta-masmora").style.pointerEvents="none";
    setTimeout(function(){
        document.getElementById("frase1").style.display="none";
        document.getElementById("frase2").style.display="block";
        adicionarHistorico("Esqueleto: A memória dele não era boa, isso o condenou... Mas enfim, coloque alguma arma no fogo do pedestal, só assim poderá escapar...")
        setTimeout(function(){
            document.getElementById("frase2").style.display="none";
            document.getElementById("caixa-de-dialogo").style.display="none";
            document.getElementById("inventario").style.display = "block"; 
            document.getElementById("pedestal").style.pointerEvents="auto";
            document.getElementById("voltar").style.pointerEvents="auto";
            document.getElementById("botaoHistorico").style.display="flex";
            document.getElementById("porta-masmora").style.pointerEvents="auto";

        },10000)
    },10000)
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
    adicionarHistorico("Você iniciou o mingame da Mémoria");
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
                document.getElementById("botao").style.display = "block";
                document.getElementById("pedestal").style.pointerEvents = "none";
                document.getElementById("mensagemMemoria").style.display="block";
                adicionarHistorico("Você encontrou todos os pares do minigame de memória!");
                
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

function mostrarMensagem() {
    
    document.getElementById("mensagemPedestal").style.display = "none";
    let mensagem = document.getElementById("mensagemPorta");
    let texto = "Acho que preciso ajudar esse esqueleto antes...";
    document.getElementById("diarioDeBordo").classList.remove("aberto");
    document.getElementById("botaoHistorico").style.display="none";
    // Mostra a mensagem
    mensagem.textContent = texto;
    mensagem.style.display = "block";

    adicionarHistorico(texto);//Regista no diário de bordo
    // Esconde depois de 5 segundos
    setTimeout(function() {
        mensagem.style.display = "none";
        document.getElementById("botaoHistorico").style.display="flex";
    }, 3000);
}

function mostrarMensagem2(){
    document.getElementById("mensagemPorta").style.display = "none";
    let mensagem = document.getElementById("mensagemPedestal");
    let texto = "É necessário colocar alguma arma primeiro!"
    document.getElementById("diarioDeBordo").classList.remove("aberto");
    document.getElementById("botaoHistorico").style.display="none";

    mensagem.textContent = texto;
    mensagem.style.display = "block";

    adicionarHistorico(texto);//Regista no diário de bordo
    // Esconde depois de 5 segundos
    setTimeout(function() {
        mensagem.style.display = "none";
        document.getElementById("botaoHistorico").style.display="flex";
    }, 3000);
}

function avancarFase3(){
    if(jogoAtivo===true){
        mostrarMensagem();
        return;
    }
    window.location.href = "3Fase.html";
}

// Função para ajustar o jogo ao tamanho da tela
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


