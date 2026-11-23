sessionStorage.removeItem("tempoExcedido");
function avancar() {
    // Lógica para avançar para a segunda tela da fase 2
    document.getElementById("Fase2Fundo1").style.display = "none";
        document.getElementById("Fase2Fundo2").style.display = "block";
}

function avancar2() {
    // Lógica para avançar para a terceira tela da fase 2
    document.getElementById("Fase2Fundo1").style.display = "none";
    document.getElementById("Fase2Fundo3").style.display = "block";
}

function voltar() {
    // Lógica para voltar para a primeira tela da fase 2
    document.getElementById("mensagemPorta").style.display = "none";
    document.getElementById("Fase2Fundo2").style.display = "none";
    document.getElementById("Fase2Fundo3").style.display = "none";
    document.getElementById("pessimo").style.display = "none";
    document.getElementById("Fase2Fundo1").style.display = "block";
}

function reiniciar(){

    document.getElementById("Fase2Fundo1").style.display = "block";
    document.getElementById("temporizador").style.display = "block";

    let lista = document.getElementById("listaHistorico");
    lista.innerHTML = "";
    lista.style.display = "flex";

    let invent = document.getElementById("listaInventario");
    invent.innerHTML = "";// Limpa o inventário anterior
    inventario = [];// Limpa também o vetor do inventário
    
    document.getElementById("diarioDeBordo").classList.remove("aberto"); 

    document.getElementById("barril").classList.remove("coletado");
    document.getElementById("barril").style.pointerEvents ="auto";

    document.getElementById("armadura").classList.remove("coletado");
    document.getElementById("armadura").style.pointerEvents ="auto";

    document.getElementById("caixa").classList.remove("coletado");
    document.getElementById("caixa").style.pointerEvents ="auto";

    document.getElementById("baner").classList.remove("coletado");
    document.getElementById("baner").style.pointerEvents ="auto";

    document.getElementById("objetoEstranho").classList.remove("coletado");
    document.getElementById("objetoEstranho").style.pointerEvents ="auto";

    document.getElementById("saco").classList.remove("coletado");
    document.getElementById("saco").style.pointerEvents ="auto";

    document.getElementById("Tabua").classList.remove("coletado");
    document.getElementById("Tabua").style.pointerEvents ="auto";
    
    document.getElementById("botaoHistorico").style.display = "flex";
    document.getElementById("inventario").style.display = "block";
    
    document.getElementById("botao").style.display = "none";
    document.getElementById("cavaleiro").style.display = "none";
    iniciarTemporizador();
    atualizarTemporizador();
}
let tempo;
let intervalo;
let jogoAtivo=true;
let inicioFase3;

function iniciarTemporizador(){
    tempo = 1;
    inicioFase3 = Date.now();
    atualizarTemporizador();

    intervalo = setInterval(function(){
        tempo--;
        atualizarTemporizador();
        if(tempo<=0){
            clearInterval(intervalo);// Para o temporizador quando o tempo chega a zero
            document.getElementById("Fase2Fundo1").style.display = "none";
            document.getElementById("Fase2Fundo2").style.display = "none";
            document.getElementById("Fase2Fundo3").style.display = "none";
            document.getElementById("inventario").style.display = "none";
            document.getElementById("botaoHistorico").style.display = "none";
            document.getElementById("diarioDeBordo").classList.remove("aberto");
            document.getElementById("temporizador").style.display = "none"; 


            document.getElementById("cavaleiro").style.display = "block"; // Exibe a tela de fim de jogo
            document.getElementById("botao").style.display = "block";
        }

     }, 1000);
    }
    iniciarTemporizador(); // Inicia o temporizador ao carregar a página

    function atualizarTemporizador(){
        let minutos = Math.floor(tempo / 60);
        let segundos = tempo % 60;
        document.getElementById("temporizador").textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    }

    function verificarTempoFase3() {
    let tempoDecorrido = Date.now() - inicioFase3;// Calcula quanto tempo passou desde o início da fase
    let limiteTempo = 90 * 1000;// Limite de tempo: 1 minuto e 30 segundos
    // Retorna true ou false dependendo do tempo
    return tempoDecorrido > limiteTempo;
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
 
var inventario = []; // Array para armazenar os itens do inventário

function atualizarInventario() {
    
    var lista = document.getElementById("listaInventario");// Procura a lista no HTML pelo seu id
    lista.innerHTML = "";// Limpa a lista visual antes de preenchê-la novamente
    for (var i = 0; i < inventario.length; i++) {// Percorre todas as posições do vetor
        var item = inventario[i]; // Pega o item atual do inventário
        var numero = item.numero; // Pega o número do item atual
        var cor = item.cor; // Pega o nome do item atual
        lista.innerHTML += `<li>
                     <span style="
                        color: ${cor};
                        font-size: 30px;
                        font-weight: bold;">
                        ${numero}
                     </span>
                    </li>`; // Adiciona cada item do inventário à lista do HTML com imagem e nome

    }
}

function temItem(nome) {

    return inventario.some(function(item) {
        return item.nome === nome;
    });

}

function pegarBarril() {// Função para pegar a armadura na fase 2
    if (!temItem("barril")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "barril",
            "numero": "1",
            "cor": "blue"
        });
        console.log("Barril adicionado ao inventário!");
    }
    // armadura.remove();
    atualizarInventario(); // Atualiza o inventário na tela
    adicionarHistorico("Você encontrou o número do barril!");
    document.getElementById("barril").classList.add("coletado"); // Oculta o item na tela após ser pego
    document.getElementById("barril").style.pointerEvents = "none";
}

function pegarArmadura() {// Função para pegar a armadura na fase 2
    if (!temItem("armadura")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "armadura",
            "numero": "3",
            "cor": "red"
        });
        console.log("Armadura adicionada ao inventário!");
    }
    adicionarHistorico("Você encontrou o número da armadura!");
    atualizarInventario(); // Atualiza o inventário na tela
    document.getElementById("armadura").classList.add("coletado"); // Oculta o item na tela após ser pego
    document.getElementById("armadura").style.pointerEvents = "none";
}

function pegarBanner() {// Função para pegar o banner na fase 2
    if (!temItem("baner")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "baner",
            "numero": "7",
            "cor": "white"
        });
        console.log("Banner adicionado ao inventário!");
    }
    adicionarHistorico("Você encontrou o número do banner!");
    atualizarInventario(); // Atualiza o inventário na tela
    document.getElementById("baner").classList.add("coletado"); // Oculta o item na tela após ser pego
    document.getElementById("baner").style.pointerEvents = "none";
}

function pegarCaixa(){
    if (!temItem("caixa")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "caixa",
            "numero": "2",
            "cor": "green"
        });
        console.log("Caixa adicionada ao inventário!");
    }
    adicionarHistorico("Você encontrou o número da caixa!");
    atualizarInventario(); // Atualiza o inventário na tela
    document.getElementById("caixa").classList.add("coletado"); // Oculta o item na tela após ser pego
    document.getElementById("caixa").style.pointerEvents = "none";
}

function pegarObjetoEstranho(){
    if (!temItem("objetoEstranho")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "objetoEstranho",
            "numero": "5",
            "cor": "yellow"
        });
        console.log("Objeto Estranho adicionado ao inventário!");
    }
    adicionarHistorico("Você encontrou o número do relógio!");
    atualizarInventario(); // Atualiza o inventário na tela
    document.getElementById("objetoEstranho").classList.add("coletado"); // Oculta o item na tela após ser pego
    document.getElementById("objetoEstranho").style.pointerEvents = "none";
}

function pegarSaco(){
    if (!temItem("saco")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "saco",
            "numero": "4",
            "cor": "purple"
        });
        console.log("Saco adicionado ao inventário!");
    }
    adicionarHistorico("Você encontrou o número do saco!");
    atualizarInventario(); // Atualiza o inventário na tela
    document.getElementById("saco").classList.add("coletado"); // Oculta o item na tela após ser pego
    document.getElementById("saco").style.pointerEvents = "none";
}

function pegarTabua(){
    if (!temItem("Tabua")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "Tabua",
            "numero": "6",
            "cor": "black"
            });
        console.log("Tábua adicionada ao inventário!");
    }
    adicionarHistorico("Você encontrou o número da tábua!");
    atualizarInventario(); // Atualiza o inventário na tela
    document.getElementById("Tabua").classList.add("coletado"); // Oculta o item na tela após ser pego
    document.getElementById("Tabua").style.pointerEvents = "none";
}


function mandarParaFrente(element) {
        element.remove(); // Remove o livro selecionado da estante
        let tudo =  document.getElementById('divestante').innerHTML;// Armazena o conteúdo atual da estante
        document.getElementById('divestante').innerHTML = element.outerHTML + tudo; // Adiciona o livro selecionado à frente da estante
}
function testarCombinação() {    
        const coresCertas = ['azul', 'verde', 'vermelho', 'roxo', 'amarelo', 'preto', 'branco'];
        const livros = document.querySelectorAll('.livro');// Seleciona todos os livros na estante
        //validação para ver se a ordem das cores está correta Com for normal   
        total = 0;// Variável para contar o número de livros na ordem correta
        for(let i = 0; i < livros.length; i++) {// Itera sobre cada livro na estante
            const livroSelecionado = livros[i];// Seleciona o livro atual
            const corSelecionada = livroSelecionado.getAttribute('data-color');// Obtém a cor do livro atual
            if (corSelecionada === coresCertas[i]) {// Verifica se a cor do livro atual está na posição correta

               total++;// Incrementa o contador se a cor estiver correta
            } 
        }
        if(total === 7) {
            clearInterval(intervalo); // Para o temporizador quando a combinação está correta
            jogoAtivo=false;
            adicionarHistorico("Parabéns! Você acertou as ordens dos livros!");
            document.getElementById("parabens").style.display = "block";  
            document.getElementById("pessimo").style.display = "none";  
            document.getElementById("botaoTestar").style.display = "none";    
        } else {
           document.getElementById("pessimo").style.display = "block";
           document.getElementById("parabens").style.display = "none";
        }
        let inventario= document.getElementById("inventario");
        inventario.classList.add("posicaoNovaInventario");
     }

function mostrarMensagem() {
    let mensagem = document.getElementById("mensagemPorta");
    let texto = "Acho que preciso achar a ordem correta antes...";

    // Mostra a mensagem
    mensagem.textContent = texto;
    mensagem.style.display = "block";

    adicionarHistorico(texto);//Regista no diário de bordo
    // Esconde depois de 5 segundos
    setTimeout(function() {
        mensagem.style.display = "none";
    }, 5000);
}

function avancarFase4(){
        if(jogoAtivo===true){
        mostrarMensagem();
        return;
    }

    let tempoExcedido = verificarTempoFase3();

    sessionStorage.setItem("tempoExcedido",tempoExcedido);


    window.location.href = "4Fase.html";
}

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