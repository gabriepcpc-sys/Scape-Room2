function avancar() {
    // Lógica para avançar para a próxima tela da fase 1
    document.getElementById("Fase1Fundo1").style.display = "none";
        document.getElementById("Fase1Fundo2").style.display = "block";

    // Exibe o botão "retroceder" quando avançar
    document.getElementById("voltar").style.display = "inline-block";
}
function voltar() {
    // Lógica para voltar para a tela anterior da fase 1
    document.getElementById("Fase1Fundo2").style.display = "none";
        document.getElementById("Fase1Fundo1").style.display = "block";

    // Oculta o botão "retroceder" novamente
    document.getElementById("voltar").style.display = "none";
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
 





















var inventario = []; // Array para armazenar os itens do inventário

function atualizarInventario() {
    
    var lista = document.getElementById("listaInventario");// Procura a lista no HTML pelo seu id
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

function pegarChave() {// Função para pegar a chave na fase 1
    if (!temItem("Chave")) {
        inventario.push({
            "nome": "Chave",
            "imagem": "../imagens/objeto-fase1.png"
        });
             console.log("Chave adicionada ao inventário!");
             adicionarHistorico("Você encontrou uma chave escondida!")
    }
    let chave = document.getElementById('ChaveFase1');
    chave.remove(); // Remove a chave após pegá-la
    atualizarInventario(); // Atualiza o inventário na tela
 }

 function pegarPá() {// Função para pegar a pá na fase 1
    if (!temItem("Pá")) {
        inventario.push({
            "nome": "Pá",
            "imagem": "../imagens/Oobjeto2-fase1.png"
        });
        console.log("Pá adicionada ao inventário!");
    }
    var pá = document.getElementById('PaFase1');
    pá.remove(); // Remove a pá após pegá-la
    atualizarInventario(); // Atualiza o inventário na tela
}
function apagarFogo(){
    if (!temItem("Pá")) {
       adicionarHistorico("Você tentou apagar o fogo, mas precisa encontrar uma pá primeiro!");
       console.log("Você não tem a pá para apagar o fogo!");
       return;
    }
    document.getElementById('FundoFase1').src="../imagens/fundo1fase1-FOGOAPAGADO.png"; // Altera a imagem de fundo para a versão com o fogo apagado
    var fogo = document.getElementById('FogoEsquerda');
    fogo.remove(); // Remove o fogo após apagá-lo
    var chaveEscondida = document.getElementById('ChaveFase1');
    chaveEscondida.style.display = "block"; // Exibe a chave após apagar o fogo
    adicionarHistorico("Você apagou o fogo!");
    atualizarInventario(); // Atualiza o inventário na tela
}

function mostrarMensagem() {

    let mensagem = document.getElementById("mensagemPorta");
    let texto = "Acho que essa porta precisa de uma chave...";

    // Mostra a mensagem
    mensagem.textContent = texto;
    mensagem.style.display = "block";

    adicionarHistorico(texto);//Regista no diário de bordo
    // Esconde depois de 5 segundos
    setTimeout(function() {
        mensagem.style.display = "none";
    }, 5000);
}

function abrirPorta(){
    if (!temItem("Chave")) {
        mostrarMensagem();
        return;
    }
    // Se tiver a chave, vai para a próxima fase
     window.location.href = "2Fase.html";
}