function avancar() {
    // Lógica para avançar para a próxima tela da fase 1
    alert("Você avançou para a próxima tela da fase 1!");
    console.log(document.getElementById("FundoFase1") )
    document.getElementById("FundoFase1").src = "../imagens/Fundo2Fase1.png";
}
function voltar() {
    // Lógica para voltar para a tela anterior da fase 1
    alert("Você voltou para a tela anterior da fase 1!");
    document.getElementById("FundoFase1").src = "../imagens/Fundo1Fase1.png";
}