function avancar() {
    // Lógica para avançar para a próxima tela da fase 1
    document.getElementById("FundoFase1").src = "../imagens/Fundo2Fase1.png";
    // Exibe o botão "retroceder" quando avançar
    document.getElementById("voltar").style.display = "inline-block";
}
function voltar() {
    // Lógica para voltar para a tela anterior da fase 1
    document.getElementById("FundoFase1").src = "../imagens/Fundo1Fase1.png";
    // Oculta o botão "retroceder" novamente
    document.getElementById("voltar").style.display = "none";
}