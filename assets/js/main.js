/* Scheda docenti */
let docenti = "";
fetch('https://raw.githubusercontent.com/barbara06/stage/main/docenti.json')
    .then(
        function(response) {
            if (response.status !== 200) {
                alert("File non raggiungibile");
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                docenti = data.docenti;
                creaListaDocenti(docenti);
            });
        }
    )

function creaListaDocenti(docenti) {
    for (let i = 0; i < docenti.length; i++) {
        let docente = '<div class="profilo_docente" onmouseover="mostraNome(' + i + ')" onmouseout="nascondiNome(' + i + ')" onclick="curriculumDocente(' + i + ')">' +
        '<img id="img_docente' + i + '" class="img_docente" src="' + docenti[i].foto + '"alt="Foto docente">' +
        '<p id="nome_docente' + i + '" class="nome_docente">' + docenti[i].nome + '</p></div>'; 
        
        $("#lista_docenti").append(docente);
    }



    
}

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