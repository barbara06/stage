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
        let alternativa = '<div class="anteprima_random">' +
                            '<img id="img_random' + i + '" class="img_random" src="' + alternative[i].immagine + '"alt="Immagine corso">' +                      
                            '<p>' + alternative[i].titolo + '</p></div>';
                                
        
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

