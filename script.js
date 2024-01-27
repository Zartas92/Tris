let riga1 = [];
let riga2 = [];
let riga3 = [];

let test = "";

let isVictoryAchieved = false

function checkWinner(htmlElement) {
  let id = htmlElement.id;

  switch (id) {
    case "1":
      riga1[0] = test;
      break;
    case "2":
      riga1[1] = test;
      break;
    case "3":
      riga1[2] = test;
      break;
    case "4":
      riga2[0] = test;
      break;
    case "5":
      riga2[1] = test;
      break;
    case "6":
      riga3[1] = test;
      break;
    case "7":
      riga3[0] = test;
      break;
    case "8":
      riga3[1] = test;
      break;
    case "9":
      riga3[2] = test;
      break;
  }
  let check = (riga1[0] == "X" && riga1[1] == "X" && riga1[2] == "X")
    || (riga2[0] == "X" && riga2[1] == "X" && riga2[2] == "X")
    || (riga3[0] == "X" && riga3[1] == "X" && riga3[2] == "X")
    || (riga1[0] == "X" && riga2[0] == "X" && riga3[0] == "X")
    || (riga1[1] == "X" && riga2[1] == "X" && riga3[1] == "X")
    || (riga1[2] == "X" && riga2[2] == "X" && riga3[2] == "X")
    || (riga1[0] == "X" && riga2[1] == "X" && riga3[2] == "X")
    || (riga1[2] == "X" && riga2[1] == "X" && riga3[0] == "X")

  let check2 = (riga1[0] == "O" && riga1[1] == "O" && riga1[2] == "O")
    || (riga2[0] == "O" && riga2[1] == "O" && riga2[2] == "O")
    || (riga3[0] == "O" && riga3[1] == "O" && riga3[2] == "O")
    || (riga1[0] == "O" && riga2[0] == "O" && riga3[0] == "O")
    || (riga1[1] == "O" && riga2[1] == "O" && riga3[1] == "O")
    || (riga1[2] == "O" && riga2[2] == "O" && riga3[2] == "O")
    || (riga1[0] == "O" && riga2[1] == "O" && riga3[2] == "O")
    || (riga1[2] == "O" && riga2[1] == "O" && riga3[0] == "O")

  if (check) {
    let vittoria = document.getElementById("turnoGiocatore");
    vittoria.innerText = "Giocatore 1 HA VINTO!";
    isVictoryAchieved = true;
    let caselle = document.querySelectorAll(".caselle");

    for (let i = 0; i < caselle.length; i++) {
      caselle[i].classList.remove("hover");
    }
  }

  if (check2) {
    let vittoria = document.getElementById("turnoGiocatore");
    vittoria.innerText = "Giocatore 2 HA VINTO!";
    isVictoryAchieved = true;

    let caselle = document.querySelectorAll(".caselle");
    let i = 0;
    while (i < caselle.length) {

      caselle[i].classList.remove("hover");
      i++;
    }
  }
}


function clickCasella(htmlElement) {
  if (!isVictoryAchieved) {
    if (htmlElement.innerText.length > 0) {
      document.getElementById("alert").style.display = "block"
    } else {
      if (test.length == 0) {
        htmlElement.innerText = 'X';
        test = 'X'
        let cambioTurno = document.getElementById("turnoGiocatore");
        cambioTurno.innerText = "Turno del GIOCATORE 2"
      } else {
        if (test == "X") {
          htmlElement.innerText = "O";
          test = "O";
          let cambioTurno = document.getElementById("turnoGiocatore");
          cambioTurno.innerText = "Turno del GIOCATORE 1"
        } else {
          htmlElement.innerText = "X";
          test = "X";
          let cambioTurno = document.getElementById("turnoGiocatore");
          cambioTurno.innerText = "Turno del GIOCATORE 2"
        }

      }
      htmlElement.classList.remove("hover");
    }
    checkWinner(htmlElement);

  }
}

function eliminaAlert() {
  let alert = document.getElementById("alert");
  alert.style.display = "none";
}

function reset() {
  let caselle = document.querySelectorAll(".caselle");
  caselle.forEach(function (casella) {
    casella.innerText = "";
    casella.classList.add("hover");
  });
  colonna1 = [];
  colonna2 = [];
  colonna3 = [];
  riga1 = [];
  riga2 = [];
  riga3 = [];
  diagonale1 = [];
  diagonale2 = [];

  let resetSottotitolo = document.getElementById("turnoGiocatore");
  resetSottotitolo.innerText = "Turno del GIOCATORE 1"

  isVictoryAchieved = false;

}