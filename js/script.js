// -------------------------------
// Esercizio Oggetti Studenti
// -------------------------------
//
// 1) Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// 2) Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// 3) Creare un array di oggetti di studenti.
// 4) Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// 5) Dare la possibilità all’utente, attraverso 3 prompt(),
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
//
// -------------------------------
//
// Placing Javascript inside the .ready() function.
//
$(document).ready(function () {
  //
  // -------------------------------
  // Variables
  //
  var studente = {
    name: "Catalin",
    surname: "Zahariea",
    age: 27,
  };

  $("#student-btn").click(function () {
    if ($("#output").html() != "") {
      $("#output").html("");
    } else {
      for (var key in studente) {
        $("#output").append("<li>" + key + ": " + studente[key] + "</li>");
      }
    }
  });
});
