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
    document.getElementById("barril").classList.add("coletado"); // Oculta o item na tela após ser pego
}

function pegarArmadura() {// Função para pegar a armadura na fase 2
    if (!temItem("armadura")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "Armadura",
            "numero": "2",
            "cor": "red"
        });
        console.log("Armadura adicionada ao inventário!");
    }
    atualizarInventario(); // Atualiza o inventário na tela
    document.getElementById("armadura").classList.add("coletado"); // Oculta o item na tela após ser pego
}

function pegarBanner() {// Função para pegar o banner na fase 2
    if (!temItem("baner")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "baner",
            "numero": "3",
            "cor": "white"
        });
        console.log("Banner adicionado ao inventário!");
    }
    atualizarInventario(); // Atualiza o inventário na tela
    document.getElementById("baner").classList.add("coletado"); // Oculta o item na tela após ser pego
}

function pegarCaixa(){
    if (!temItem("caixa")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "Caixa",
            "numero": "4",
            "cor": "green"
        });
        console.log("Caixa adicionada ao inventário!");
    }
    atualizarInventario(); // Atualiza o inventário na tela
    document.getElementById("caixa").classList.add("coletado"); // Oculta o item na tela após ser pego
}

function pegarObjetoEstranho(){
    if (!temItem("objetoEstranho")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "objetoEstranho",
            "numero": "3",
            "cor": "yellow"
        });
        console.log("Objeto Estranho adicionado ao inventário!");
    }
    atualizarInventario(); // Atualiza o inventário na tela
    document.getElementById("objetoEstranho").classList.add("coletado"); // Oculta o item na tela após ser pego
}

function pegarSaco(){
    if (!temItem("saco")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "Saco",
            "numero": "5",
            "cor": "purple"
        });
        console.log("Saco adicionado ao inventário!");
    }
    atualizarInventario(); // Atualiza o inventário na tela
    document.getElementById("saco").classList.add("coletado"); // Oculta o item na tela após ser pego
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