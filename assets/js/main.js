/* Scheda corsi random */
let corsi = "";
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

                corsi = data.corsi;


                for (let i = 0; i < 3; i++) {
                  let indice = Math.floor(Math.random() * corsi.length);
                  array.push(corsi[indice]);
                  corsi.splice(indice, 1);
                }

                corsi = array;
                creaListaRandom(corsi);
            })

                
          });
    
function creaListaRandom(corsi) {

    if (corsi.length == 0) {
        
        $("#lista_random").append('<div class="vuoto">Nessun corso trovato</div>');

        return false;
    }

    for (let i = 0; i < corsi.length; i++) {
        let corso = '<div class="anteprima_corso" onclick="infoCorso(' + i + ')">' +
                        '<img id="img_corso' + i + '" class="img_corso" src="' + corsi[i].immagine + '"alt="Immagine corso">' +
                        '<div class="info_corso">' +
                            '<h2 class="titolo_corso">' + corsi[i].titolo + '</h2>' +
                            '<p>' + corsi[i].obiettivi + '</p>' +
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
        
        $("#lista_random").append(corso);
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

