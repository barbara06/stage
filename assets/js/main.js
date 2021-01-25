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
        let alternativa = '<div class="anteprima_corso">' +
                        '<img id="img_corso' + i + '" class="img_corso" src="' + alternative[i].immagine + '"alt="Immagine corso">' +
                        '<div class="info_corso">' +
                            '<h2 class="titolo_corso">' + alternative[i].titolo + '</h2>' +
                            '<p>' + alternative[i].obiettivi + '</p>' +
                        '</div>' +
                            '<ul class="specifiche_corso">' +
                                '<li>' + alternative[i].quota + '</li>' +
                                '<li><i class="fa fa-user" aria-hidden="true"></i> ' + alternative[i].destinatari + '</li>' +
                                '<li><i class="fa fa-line-chart" aria-hidden="true"></i> ' + alternative[i].livello + '</li>';

        if (alternative[i].modalita == "In presenza") {
            alternativa = alternativa + '<li><i class="fa fa-users" aria-hidden="true"></i> ' + alternative[i].modalita + '</li></ul>';
        }
        else {
            alternativa = alternativa + '<li><i class="fa fa-desktop" aria-hidden="true"></i> ' + alternative[i].modalita + '</li></ul>';
        }
        alternativa = alternativa + '</div>';
        
        $("#lista_random").append(alternativa);
    }   
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

