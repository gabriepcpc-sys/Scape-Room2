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
    document.getElementById("Fase2Fundo2").style.display = "none";
    document.getElementById("Fase2Fundo3").style.display = "none";
    document.getElementById("pessimo").style.display = "none";
    document.getElementById("Fase2Fundo1").style.display = "block";
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
                        alt="${nome}" 
                        style='width: 50px; height: 50px; 
                        margin-right: 10px;'>${nome}
                    </li>`; // Adiciona cada item do inventário à lista do HTML com imagem e nome
        //
    }
}

function temItem(nome) {

    return inventario.some(function(item) {
        return item.nome === nome;
    });

}

function pegarArmadura() {// Função para pegar a armadura na fase 2
    if (!temItem("armadura")) {
        inventario.push({
            "nome": "Armadura",
            "imagem": "../imagens/pistas livros/Armadura.png"
        });
        console.log("Armadura adicionada ao inventário!");
    }
    var armadura = document.getElementById('ArmaduraFase2');
    armadura.remove();
    atualizarInventario(); // Atualiza o inventário na tela
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
            document.getElementById("parabens").style.display = "block";  
            document.getElementById("pessimo").style.display = "none";  
            document.getElementById("botaoTestar").style.display = "none";    
        } else {
           document.getElementById("pessimo").style.display = "block";
           document.getElementById("parabens").style.display = "none";
        }
     }