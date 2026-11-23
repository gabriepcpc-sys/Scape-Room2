function decidirFinal(){
    let tempoExcedido = sessionStorage.getItem("tempoExcedido");
    console.log("Tempo excedido:", tempoExcedido);

    if(tempoExcedido==="true"){
        avancarRuim();
    }
    else if(tempoExcedido==="false"){
        avancarBom();
    }
}

function adicionarHistorico(texto){
    let lista = document.getElementById("listaHistorico");

    lista.innerHTML += `<li>
    <p>${texto}</p>
    </li>`
}

function alternarHistorico(){
    let painel = document.getElementById("diarioDeBordo");
    let seta = document.getElementById("setaHistorico");
    let aberto = painel.classList.toggle("aberto");//Adiciona ou remove a classe aberto
    if(aberto){
        seta.textContent = "↓";
        
    }
    else{
        seta.textContent = "↑";
       
    }
}


let inventario = []; // Array para armazenar os itens do inventário

function atualizarInventario() {
    
    let lista = document.getElementById("listaInventario");// Procura a lista no HTML pelo seu id
    lista.innerHTML = "";// Limpa a lista visual antes de preenchê-la novamente
    for (var i = 0; i < inventario.length; i++) {// Percorre todas as posições do vetor
        var item = inventario[i]; // Pega o item atual do inventário
        var imagem = item.imagem; // Pega a imagem do item atual
        var nome = item.nome; // Pega o nome do item atual
        lista.innerHTML += `<li>
                     <img src="${imagem}"  
                        style='width: 50px; height: 50px; 
                        margin-right: 10px;'>
                    </li>`; // Adiciona cada item do inventário à lista do HTML com imagem e nome
        //
    }
}

function temItem(nome) {
    
    return inventario.some(function(item) {
        return item.nome === nome;
    });
    
}

function pegarPena(){
    if (!temItem("pena")) { // Verifica se o item já está no inventário
        inventario.push({
            "nome": "pena",
            "imagem": "../imagens/pena-fase5.png"
        });
        console.log("Pena adicionado ao inventário!");
    }
    let pena = document.getElementById('pena');
    pena.remove();
    atualizarInventario();
}

//====FINAL SECRETO====//

function videoSecreto(){
    document.getElementById("botaoHistorico").style.display = "none";
    document.getElementById("diarioDeBordo").classList.remove("aberto");
    let video = document.getElementById("video-finalsecreto");
    video.style.display = "block";
    video.play();

}


function finalSecreto(){
    if (!temItem("pena")) {
        return;
    }
    adicionarHistorico("Você iniciou o final secreto!");
    document.getElementById("fase3portas").style.display = "none";
    document.getElementById("inventario").style.display = "none";    
    videoSecreto();
}






//====FINAL BOM====//
function avancarBom(){
    document.getElementById("fase3portas").style.display = "none";
    document.getElementById("finalbom").style.display = "block";
}
function voltarBom(){
    document.getElementById("fase3portas").style.display = "block";
    document.getElementById("finalbom").style.display = "none";
}

function avancarParte2(){
    document.getElementById("fundo1").style.display = "none";
    document.getElementById("fundo2").style.display = "block";
}

function avancarParte3(){
    document.getElementById("fundo2").style.display = "none";
    document.getElementById("fundo3").style.display = "block";
}

function videoBom(){
    document.getElementById("inventario").style.display ="none";
    document.getElementById("botaoHistorico").style.display = "none";
    document.getElementById("diarioDeBordo").classList.remove("aberto");
    let video = document.getElementById("video-finalbom");
    video.style.display = "block";
    video.play();

}

function abrirBau(){
    document.getElementById("baufechado").style.display = "none";
    document.getElementById("bauaberto").style.display = "block";
    document.getElementById("pena").style.display = "block";
}



function interagirGargula(){
    document.getElementById("caixa-de-dialogo").style.display = "block";
    let fala1 = document.getElementById("frase1");
    let fala2 = document.getElementById("frase2");
    
    fala1.style.display = "block";
    document.getElementById("seta").style.display = "none";
    let gargula = document.getElementById("gato");
    gargula.style.pointerEvents = 'none';

    setTimeout(function(){
        fala1.style.display = "none";
        fala2.style.display = "block";
        setTimeout(function(){
            fala2.style.display = "none";
            document.getElementById("seta").style.display = "block";
            document.getElementById("caixa-de-dialogo").style.display = "none";

            inventario.push({
                "nome":"Galao",
                "imagem":"../imagens/galao-fase5.png"
            });
            console.log("Galão adicionado ao inventário! ")
            adicionarHistorico("Você recebeu um galão de gasolina!");
            atualizarInventario();

        },10000)
    },10000);

}

function interagirGargula2(){
    document.getElementById("caixa-de-dialogo2").style.display = "block";
    let fala3 = document.getElementById("frase3");
    let fala4 = document.getElementById("frase4");
    let fala5 = document.getElementById("frase5");
    
    fala3.style.display = "block";
    let gargula = document.getElementById("gato2");
    gargula.style.pointerEvents = 'none';
    document.getElementById("portao").style.pointerEvents = "none";

    setTimeout(function(){
        fala3.style.display = "none";
        fala4.style.display = "block";
        setTimeout(function(){
            fala4.style.display = "none";
            fala5.style.display = "block";
            setTimeout(function(){
                fala5.style.display = "none";
                document.getElementById("seta").style.display = "block";
                document.getElementById("caixa-de-dialogo2").style.display = "none";
                document.getElementById("portao").style.pointerEvents = "auto";
                
                inventario.push({
                "nome":"Tocha",
                "imagem":"../imagens/tocha-fase5.png"
            });
            console.log("Tocha adicionado ao inventário! ")
            adicionarHistorico("Você recebeu uma tocha!");
            atualizarInventario();
            },10000);
        },10000);
    },10000);
}

//====FINAL RUIM====//

function avancarRuim(){
    document.getElementById("fase3portas").style.display = "none";
    document.getElementById("finalruim").style.display = "block";
}

function pegarElmo(){
    document.getElementById("elmo").style.display = "none";
    document.getElementById("fundo1-finalruim").style.display = "none";

    document.getElementById("fundo2-finalruim").style.display = "block";
    document.getElementById("caixa-de-dialogo-finalruim").style.display = "block";
    document.getElementById("frase1-finalruim").style.display = "block";
    setTimeout(function(){
        document.getElementById("frase1-finalruim").style.display = "none";
        document.getElementById("caixa-de-dialogo-finalruim").style.display = "none";

        document.getElementById("fundo2-finalruim").style.display = "none";
        document.getElementById("fundo3-finalruim").style.display = "block";

        document.getElementById("caixa-de-dialogo-finalruim2").style.display = "block";
        document.getElementById("frase2-finalruim").style.display = "block";
        setTimeout(function(){
            document.getElementById("frase2-finalruim").style.display = "none";
            document.getElementById("frase3-finalruim").style.display = "block";
            setTimeout(function(){
                document.getElementById("frase3-finalruim").style.display = "none";
                document.getElementById("fundo3-finalruim").style.display = "none";
                document.getElementById("caixa-de-dialogo-finalruim2").style.display = "none";
                
                document.getElementById("fundo4-finalruim").style.display = "block";
        },10000);
            
                
            },10000)
    },10000)
}

function mostrarBotaoMenu(){

    document.getElementById("botaoMenu").style.display = "block";
}
function voltarMenu(){

    window.location.href = "../index.html";

}



function ajustarTela() {

    // Dimensões originais do cenário
    let larguraBase = 1671;
    let alturaBase = 941;

    // Calcula a escala necessária
    let escalaLargura = window.innerWidth / larguraBase;
    let escalaAltura = window.innerHeight / alturaBase;

    // Escolhe a menor escala para o cenário caber na tela
    let escala = Math.min(escalaLargura, escalaAltura);

    // Aplica a escala ao palco
    document.getElementById("todosCenarios").style.transform =
        "scale(" + escala + ")";
}

// Executa a função quando o tamanho da janela mudar
window.onresize = ajustarTela;

// Executa a função inicialmente, quando a página carregar
ajustarTela();
