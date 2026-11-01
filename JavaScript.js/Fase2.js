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