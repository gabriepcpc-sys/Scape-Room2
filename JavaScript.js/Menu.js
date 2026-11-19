function iniciarVideo() {

    let video = document.getElementById("videoMenu");

    video.play().catch(function(erro) {
        console.log("Não foi possível iniciar o vídeo:", erro);
    });

}