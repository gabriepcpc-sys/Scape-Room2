function iniciarVideo() {

    let video = document.getElementById("videoMenu");

    if (video.paused) {

        video.play().catch(function(erro) {
            console.log("Não foi possível iniciar o vídeo:", erro);
        });

    }

}