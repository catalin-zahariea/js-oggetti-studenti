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
    age: 28,
  };

  var classeStudenti = [
    {
      name: "Catalin",
      surname: "Zahariea",
      age: 28,
    },
    {
      name: "Dario",
      surname: "Oricchio",
      age: 14,
    },
    {
      name: "Carlo",
      surname: "Oricchio",
      age: 11,
    },
    {
      name: "Valentina",
      surname: "De Angelis",
      age: 27,
    },
    {
      name: "Eliza",
      surname: "Sestov",
      age: 52,
    },
    {
      name: "Lana",
      surname: "Zahariea",
      age: 4,
    },
    {
      name: "Tito",
      surname: "Zahariea",
      age: 3,
    },
    {
      name: "Tigro",
      surname: "Zahariea",
      age: 2,
    },
  ];

  $("#student-btn").click(function () {
    if ($("#output1").html() != "") {
      $("#output1").html("");
    } else {
      for (var key in studente) {
        $("#output1").append("<li>" + key + ": " + studente[key] + "</li>");
      }
    }
  });

  $("#class-btn").click(function () {
    if ($("#output2").html() != "") {
      $("#output2").html("");
    } else {
      for (var i = 0; i < classeStudenti.length; i++) {
        console.log(classeStudenti[i]);

        $("#output2").append(
          "<li>" +
            "Nome: " +
            classeStudenti[i]["name"] +
            "<br>" +
            "Cognome: " +
            classeStudenti[i]["surname"] +
            "</li>"
        );
      }
    }
  });
});
