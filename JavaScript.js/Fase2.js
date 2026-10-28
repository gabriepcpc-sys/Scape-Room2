function avancar() {
    // Lógica para avançar para a próxima tela da fase 1
    document.getElementById("Fase2Fundo1").style.display = "none";
        document.getElementById("Fase2Fundo2").style.display = "block";

    // Exibe o botão "retroceder" quando avançar
    document.getElementById("voltar").style.display = "inline-block";
}

function voltar() {
    // Lógica para voltar para a tela anterior da fase 1
    document.getElementById("Fase2Fundo2").style.display = "none";
        document.getElementById("Fase2Fundo1").style.display = "block";

    // Oculta o botão "retroceder" novamente
    document.getElementById("voltar").style.display = "none";
}