const tabuleiro = document.getElementById("xadrez");

for (let linha = 0; linha < 8; linha++) {
    for (let coluna = 0; coluna < 8; coluna++) {
        const casa = document.createElement("div");
        casa.classList.add("casa");

        // Alterna as cores automaticamente
        if ((linha + coluna) % 2 === 0) {
            casa.classList.add("clara");
        } else {
            casa.classList.add("escura");
        }

        // Guarda a coordenada do quadrado para você usar no movimento depois
        casa.dataset.linha = linha;
        casa.dataset.coluna = coluna;

        // Exemplo de evento de clique no quadrado
        casa.addEventListener("click", () => {
            console.log(`Clicou na linha ${linha}, coluna ${coluna}`);
        });

        tabuleiro.appendChild(casa);
    }
}