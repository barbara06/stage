/* Scheda dicono di noi */
let recensioni = "";
fetch('https://raw.githubusercontent.com/barbara06/stage/main/dicono_di_noi.json')
    .then(
        function(response) {
            if (response.status !== 200) {
                alert("File non raggiungibile");
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                recensioni = data.recensioni;
                creaElencoRecensioni(recensioni);
            });
        }
    )

function creaElencoRecensioni(recensioni) {
    for (let i = 0; i < recensioni.length; i++) {
        let recensione = '<div class="recensione' + i + '">' +
                          '<h2 id="nome_recensione' + i + '">' + recensioni[i].nome + '</h2>' +
                          '<p id="info_recensione' + i + '">' + recensioni[i].corso + '" | "' + recensioni[i].data + '</p>' +
                          '<p id="recensione' + i + '">' + recensioni[i].recensione + '</p></div>';

        $("#elenco_recensioni").append(recensione);
    }   
}