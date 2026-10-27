// 1. Selecionamos todos os livros e botões
const books = document.querySelectorAll('.book');
const checkBtn = document.getElementById('check-btn');
const message = document.getElementById('message');

// 2. Definimos qual é a ordem certa para resolver o puzzle
// Exemplo: Vermelho, Amarelo, Verde, Azul e Roxo.
const correctOrder = ['red', 'yellow', 'green', 'blue', 'purple'];

// Variável para guardar temporariamente o livro que o jogador está segurando
let draggedBook = null;

// 3. Adicionamos os "Ouvintes de Eventos" (Listeners) do Arrastar e Soltar
books.forEach(book => {
    book.addEventListener('dragstart', handleDragStart);
    book.addEventListener('dragover', handleDragOver);
    book.addEventListener('dragenter', handleDragEnter);
    book.addEventListener('dragleave', handleDragLeave);
    book.addEventListener('drop', handleDrop);
    book.addEventListener('dragend', handleDragEnd);
});

// Quando começa a arrastar
function handleDragStart(e) {
    draggedBook = this; // O "this" é o livro que você clicou
    setTimeout(() => this.style.opacity = '0.4', 0); // Fica meio transparente
}

// Necessário para permitir soltar o objeto
function handleDragOver(e) {
    e.preventDefault(); 
}

// Quando o item arrastado entra em cima de outro livro
function handleDragEnter(e) {
    e.preventDefault();
    if (this !== draggedBook) {
        this.classList.add('drag-over'); // Dá o efeito de brilho e crescimento no CSS
    }
}

// Quando o item arrastado sai de cima de outro livro
function handleDragLeave(e) {
    this.classList.remove('drag-over'); // Remove o brilho
}

// QUANDO O JOGADOR SOLTA O LIVRO
function handleDrop(e) {
    e.stopPropagation();
    
    // Se ele soltou em cima de um livro diferente
    if (draggedBook !== this) {
        // TRUQUE: Como não usamos createElement, apenas trocamos as cores e dados!
        
        // Salva as cores atuais
        let clickedColor = draggedBook.dataset.color;
        let targetColor = this.dataset.color;
        
        // Troca as classes do CSS (isso muda a aparência visual no jogo)
        draggedBook.classList.remove(clickedColor);
        draggedBook.classList.add(targetColor);
        
        this.classList.remove(targetColor);
        this.classList.add(clickedColor);
        
        // Troca os atributos (isso muda a lógica para podermos verificar quem está onde)
        draggedBook.dataset.color = targetColor;
        this.dataset.color = clickedColor;
    }
    
    this.classList.remove('drag-over');
}

// Quando a ação de arrastar termina
function handleDragEnd(e) {
    this.style.opacity = '1'; // Volta ao normal
    books.forEach(book => book.classList.remove('drag-over')); // Limpa os efeitos
}

// 4. VERIFICADOR DO PUZZLE
checkBtn.addEventListener('click', () => {
    // Pega a lista atualizada de todos os livros na tela
    const currentBooks = document.querySelectorAll('.book');
    let isCorrect = true;
    
    // Verifica se a cor de cada livro bate com a nossa array 'correctOrder'
    currentBooks.forEach((book, index) => {
        if (book.dataset.color !== correctOrder[index]) {
            isCorrect = false; // Se um estiver errado, tudo está errado
        }
    });
    
    // Resposta final
    if (isCorrect) {
        message.textContent = "Click... A estante se moveu! Passagem liberada!";
        message.style.color = "#2ecc71"; // Verde sucesso
    } else {
        message.textContent = "Nada aconteceu... A ordem parece errada.";
        message.style.color = "#e74c3c"; // Vermelho erro
    }
});

// (Opcional) Função para embaralhar os livros quando o jogador abre o jogo
function shufflePuzzle() {
    const colors = ['blue', 'purple', 'red', 'yellow', 'green'];
    
    books.forEach((book, index) => {
        let oldColor = book.dataset.color;
        book.classList.remove(oldColor);
        book.classList.add(colors[index]);
        book.dataset.color = colors[index];
    });
}

// Chama a função de embaralhar no início
shufflePuzzle();