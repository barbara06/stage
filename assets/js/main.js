/* Scheda corsi random */
let alternative = "";
let array = [];
fetch('https://raw.githubusercontent.com/barbara06/stage/main/corsi.json')
    .then(
        function(response) {
            if (response.status !== 200) {
                alert("File non raggiungibile");
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {

                alternative = data.corsi;


                for (let i = 0; i < 3; i++) {
                  let indice = Math.floor(Math.random() * alternative.length);
                  array.push(alternative[indice]);
                  alternative.splice(indice, 1);
                }

                alternative = array;
                creaListaRandom(alternative);
            })

                
          });
    
function creaListaRandom(alternative) {

    if (alternative.length == 0) {
        
        $("#lista_random").append('<div class="vuoto">Nessun corso trovato</div>');

        return false;
    }

    for (let i = 0; i < alternative.length; i++) {
        let alternativa = '<div class="anteprima_random" onclick="infoRandom(' + i + ')">' +
                            '<img id="img_random' + i + '" class="img_random" src="' + alternative[i].immagine + '"alt="Immagine corso">' +                      
                            '<p>' + alternative[i].titolo + '</p></div>';
                                
        
        $("#lista_random").append(alternativa);
    }   
}

function infoRandom(id) {
    $("#corso_titolo").text(alternative[id].titolo);
    $("#corso_livello").text(alternative[id].livello);
    $("#corso_obiettivi").text(alternative[id].obiettivi);
    $("#corso_durata").text(alternative[id].durata);
    $("#corso_inizio").text(alternative[id].inizio);
    $("#corso_modalità").text(alternative[id].modalità);
    $("#corso_calendario").text(alternative[id].calendario);
    $("#corso_destinatari").text(alternative[id].destinatari); 
    $("#corso_programma").html(alternative[id].programma);
    $("#corso_docenti").text(alternative[id].docenti);
    $("#corso_attestato").text(alternative[id].attestato);
    $("#corso_quota").text(alternative[id].quota);
    $("#info_corso").show();
}


function nascondiInfoRandom() {
    $("#info_corso").hide();
}




/* Scheda contatti */
$("#form_contatti").submit(function(event){
    event.preventDefault();
    alert("Submitted");
  });

  $("#newsletter").submit(function(event){
    event.preventDefault();
    alert("Submitted");
  });

