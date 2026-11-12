function avancarBom(){
    document.getElementById("fase3portas").style.display = "none";
    document.getElementById("finalbom").style.display = "block";
}
function voltarBom(){
    document.getElementById("fase3portas").style.display = "block";
    document.getElementById("finalbom").style.display = "none";
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
            gargula.style.pointerEvents = 'auto';
        },10000)
    },10000);

}