/* Scheda docenti */
let elenco = "";
fetch('https://raw.githubusercontent.com/barbara06/stage/main/docenti.json?token=AQACHKU54V2ZA67MCED3BAK77MOGG')
    .then(
        function(response) {
            if (response.status !== 200) {
                alert("File non raggiungibile");
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                elenco = data.film;
                creaLista(elenco);
            });
        }
    )

function mostraNome(id) {
    $("#img_docente" + id).hide();
    $("#nome_docente" + id).show();
}

function nascondiNome(id) {
    $("#nome_docente" + id).hide();
    $("#img_docente" + id).show();
}

function curriculumDocente(id) {
    $("#curriculum_docente").show();
}


function nascondiCurriculumDocente() {
    $("#curriculum_docente").hide();

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