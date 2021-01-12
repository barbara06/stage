/* Scheda corsi */
let corsi = "";
fetch('https://raw.githubusercontent.com/barbara06/stage/main/corsi.json')
    .then(
        function(response) {
            if (response.status !== 200) {
                alert("File non raggiungibile");
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                corsi = data.corsi;
                creaListaCorsi(corsi);
            });
        }
    )

function creaListaCorsi(corsi) {
    for (let i = 0; i < corsi.length; i++) {
        let corso = '<div class="anteprima_corso" onclick="infoCorso(' + i + ')">' +
                        '<img id="img_corso' + i + '" class="img_corso" src="' + corsi[i].immagine + '"alt="Immagine corso">' +
                        '<div class="info_corso">' +
                            '<h2 class="titolo_corso">' + corsi[i].titolo + '</h2>' +
                            '<p>' + corsi[i].obiettivi + '</p></div>' +
                            '<ul class="specifiche_corso">' +
                                '<li>' + corsi[i].quota + '</li>' +
                                '<li><i class="fa fa-user" aria-hidden="true"></i>' + corsi[i].destinatari + '</li>' +
                                '<li><i class="fa fa-line-chart" aria-hidden="true"></i>' + corsi[i].livello + '</li>' +
                                '<li><i class="fa fa-desktop" aria-hidden="true"></i><i class="fa fa-users" aria-hidden="true"></i>' + corsi[i].modalità + '</li></ul></div>';
        
        $("#lista_corsi").append(corso);
    }   
}

function infoCorso(id) {
    $("#corso_titolo").text(corsi[id].titolo);
    $("#corso_livello").text(corsi[id].livello);
    $("#corso_obiettivi").text(corsi[id].obiettivi);
    $("#corso_durata").text(corsi[id].durata);
    $("#corso_inizio").text(corsi[id].inizio);
    $("#corso_modalità").text(corsi[id].modalità);
    $("#corso_calendario").text(corsi[id].calendario);
    $("#corso_destinatari").text(corsi[id].destinatari); 
    $("#corso_programma").html(corsi[id].programma);
    $("#corso_docenti").text(corsi[id].docenti);
    $("#corso_attestato").text(corsi[id].attestato);
    $("#corso_quota").text(corsi[id].quota);
    $("#info_corso").show();
}


function nascondiInfoCorso() {
    $("#info_corso").hide();

}