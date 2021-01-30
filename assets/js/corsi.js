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

                let parametri = parametriRicerca();
                parametri=parametri["ricerca"];
                corsi = data.corsi;
                
                if (typeof parametri != 'undefined' && parametri != '') {
                    corsi = filtroRicerca(corsi, parametri);
                }

                creaListaCorsi(corsi);
            });
        }
    )

function creaListaCorsi(corsi) {

    if (corsi.length == 0) {
        
        $("#lista_corsi").append('<div class="vuoto"><i class="fa fa-frown-o fa-5x" aria-hidden="true"></i><p>Ooops! Nessun corso trovato!</p></div>');

        return false;
    }

    for (let i = 0; i < corsi.length; i++) {
        let corso = '<div class="anteprima_corso" onclick="infoCorso(' + i + ')">' +
                        '<img id="img_corso' + i + '" class="img_corso" src="' + corsi[i].immagine + '"alt="Immagine corso">' +
                        '<div class="contenuti_corso">' +
                            '<h2 id="titolo_corso' + i + '" class="titolo_corso">' + corsi[i].titolo + '</h2>' +
                            '<p id="obiettivi_corso' + i + '" class="obiettivi_corso">' + corsi[i].obiettivi + '</p>' +
                        '</div>' +
                        '<ul class="specifiche_corso">' +
                            '<li>' + corsi[i].quota + '</li>' +
                            '<li><i class="fa fa-user" aria-hidden="true"></i> ' + corsi[i].destinatari + '</li>' +
                            '<li><i class="fa fa-line-chart" aria-hidden="true"></i> ' + corsi[i].livello + '</li>';

        if (corsi[i].modalita == "In presenza") {
            corso = corso + '<li><i class="fa fa-users" aria-hidden="true"></i> ' + corsi[i].modalita + '</li></ul>';
        }
        else {
            corso = corso + '<li><i class="fa fa-desktop" aria-hidden="true"></i> ' + corsi[i].modalita + '</li></ul>';
        }
        corso = corso + '</div>';
        
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

function parametriRicerca() {
    let vars = [], hash;
            let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            /*console.log(hashes);
            console.log(document.getElementById("ricerca_corsi").value);  nel caso di una single page application */
            for(let i = 0; i < hashes.length; i++)
            {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
}

function filtroRicerca(lista, filtro) {
    let array = [];

    for (let i = 0; i < lista.length; i++) {
        
        if (lista[i].tag.toLowerCase().includes(filtro.toLowerCase())) {
            array.push(lista[i]);

        }      
    }

    return array;
}