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

var inventario = []; // Array para armazenar os itens do inventário

function atualizarInventario() {
    
    var lista = document.getElementById("listaInventario");// Procura a lista no HTML pelo seu id
    lista.innerHTML = "";// Limpa a lista visual antes de preenchê-la novamente
    for (var i = 0; i < inventario.length; i++) {// Percorre todas as posições do vetor
        
        lista.innerHTML += "<li>" + inventario[i] + "</li>"; // Adiciona cada item do inventário à lista do HTML
    }
}

function pegarChave() {// Função para pegar a chave na fase 1
    if (!inventario.includes("Chave")) {
        inventario.push("Chave");
        console.log("Chave adicionada ao inventário!");
    }
    var chave = document.getElementById('ChaveFase1');
    chave.remove(); // Remove a chave após pegá-la
    atualizarInventario(); // Atualiza o inventário na tela
 }

 function pegarPá() {// Função para pegar a pá na fase 1
    if (!inventario.includes("Pá")) {
        inventario.push("Pá");
        console.log("Pá adicionada ao inventário!");
    }
    var pá = document.getElementById('PaFase1');
    pá.remove(); // Remove a pá após pegá-la
    atualizarInventario(); // Atualiza o inventário na tela
}
function apagarFogo(){
    if (!inventario.includes("Pá")) {
       console.log("Você não tem a pá para apagar o fogo!");
       return;
    }
    var fogo = document.getElementById('FogoEsquerda');
    fogo.remove(); // Remove o fogo após apagá-lo
    atualizarInventario(); // Atualiza o inventário na tela
}