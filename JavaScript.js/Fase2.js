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
    document.getElementById("Fase2Fundo2").style.display = "none";
    document.getElementById("Fase2Fundo1").style.display = "block";
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
document.getElementById("CertaCombinação").style.display = "block";        } else {
           // alert('A ordem dos livros está incorreta. Tente novamente.');
        }
     }

     function testarCombinação1() {
        total = 0;// Variável para contar o número de livros na ordem correta
        for(let i = 0; i < livros.length; i++) {// Itera sobre cada livro na estante
            const livroSelecionado = livros[i];// Seleciona o livro atual
            const corSelecionada = livroSelecionado.getAttribute('data-color');// Obtém a cor do livro atual
            if (corSelecionada === coresCertas[i]) {// Verifica se a cor do livro atual está na posição correta

               total++;// Incrementa o contador se a cor estiver correta
            } 
        }
        if(total === 7) {
            document.getElementById("CertaCombinação").style.display = "block";
            //alert('Parabéns! Você acertou a ordem dos livros!');
        }
     }