const parole = [
"salame", 
"catamarano",
"bamba",
"poltiglia",
"bicicletta",
"cappuccino",
"gelato",
"pizza",
"pasta",
"caffè", 
"tiramisù", 
"panettone",
"focaccia",
"spaghetti",
"formaggio",
"lasagna",
"risotto",
"gnocchi",
"espresso",
"prosciutto", 
"mozzarella", 
"limoncello",
"cannoli",
"biscotti",
"ciabatta",
"pesto",
"tortellini",
"cappelletti",
"amaretto",
"grappa", 
"panna", 
"cioccolato",
"vino",
"tramezzino",
"bruschetta",
"minestrone",
"polenta",
"tartufo",
"frittata",
"cacciatorini", 
"focaccine", 
"ciambella",
"crostata",
"cavatelli",
"tagliatelle",
"orecchiette",
"crespelle",
"cassata",
"gelatina",
"biscotto", 
"cannelloni", 
"cappelletti",
"cavallucci",
"ciambellone",
"cioccolatino",
"cornetto",
"croissant",
"fagiolini",
"frittelle",
"gorgonzola", 
"grissini", 
"lasagnette",
"linguine",
"mascarpone",
"merendina",
"muffin",
"nocciola",
"panettino",
"parmigiano",
"pasticcini", 
"pizzette", 
"polpettone",
"ravioli",
"ricciarelli",
"salsiccia",
"sbrisolona",
"scamorza",
"scrocchiarelle",
"semifreddo",
"sformato", 
"sorbetto", 
"stracciatella",
"strudel",
"tiramisu",
"tortelloni",
"tortine",
"trancio",
"trentino",
"trippa",
"tubetti", 
"tuffo", 
"tuttologo",
 "ubriaco",
 "uovo",
 "valdostano",
 "vaporiera",
 "vermicelli",
 "vitello"];

let letteraA = document.getElementById("a");
let letteraB = document.getElementById("b");
let letteraC = document.getElementById("c");
let letteraD = document.getElementById("d");
let letteraE = document.getElementById("e");
let letteraF = document.getElementById("f");
let letteraG = document.getElementById("g");
let letteraH = document.getElementById("h");
let letteraI = document.getElementById("i");
let letteraJ = document.getElementById("j");
let letteraK = document.getElementById("k");
let letteraL = document.getElementById("l");
let letteraM = document.getElementById("m");
let letteraN = document.getElementById("n");
let letteraO = document.getElementById("o");
let letteraP = document.getElementById("p");
let letteraQ = document.getElementById("q");
let letteraR = document.getElementById("r");
let letteraS = document.getElementById("s");
let letteraT = document.getElementById("t");
let letteraU = document.getElementById("u");
let letteraV = document.getElementById("v");
let letteraW = document.getElementById("w");
let letteraX = document.getElementById("x");
let letteraY = document.getElementById("y");
let letteraZ = document.getElementById("z");
const parolaContainer = document.getElementById("parolaUser");
const parolaFalso = document.getElementById("falso");
const cancella = document.getElementById("cancella");
const invia = document.getElementById("invia");
const parolaDaIndovinare = document.getElementById("parolaDaIndovinare");
const vite = document.getElementById("vite");
const reload = document.getElementById("reload");
let immagine = document.getElementById("img");
const tastieraContainer = document.getElementById("tastieraac");

vite.textContent = 6;
let punteggio = 0;
let array = [];
let arrayp = [];

function getParola() {
  let numero = Math.floor(Math.random() * parole.length);
  parolaDaIndovinare.textContent = parole[numero];
  parolaDaIndovinare.textContent.split("").forEach((lettera) => {
    const paragrafoContainer = document.createElement("p");
    paragrafoContainer.textContent = "_";
    paragrafoContainer.classList.add("mb-[-1vw]")
    parolaContainer.appendChild(paragrafoContainer);
  });
}

function gestisciClick(lettera) {
  lettera.addEventListener("click", function () {
    const letteraCliccata = lettera.textContent.toLowerCase();
    const parolaSegreta = parolaDaIndovinare.textContent;
    const lettereParola = parolaSegreta.split("");
    
console.log(lettereParola);
    if (array.includes(letteraCliccata)){
    console.log('hey');
    } else if (lettereParola.includes(letteraCliccata)) {
      lettereParola.forEach((letteraParola, index) => {
        if (letteraParola === letteraCliccata) {
          parolaContainer.children[index].textContent = letteraCliccata;
          
          array.push(letteraCliccata);
          console.log(array);
          if (confrontoArray(lettereParola, array)) {
            console.log('ciaoo');
            immagine.src = "assets/vittoria.png";
            tastieraContainer.classList.add("opacity-0");
            setTimeout(() => {
              location.reload();
            }, 6000);
          }
        }
      });
      lettera.classList.add("rilievo3");
    } else if (arrayp.includes(letteraCliccata)) {
          console.log('lettera già cliccata')
    }
    
      else {
      arrayp.push(letteraCliccata);
      lettera.classList.add("rilievo4");
      punteggio++;
      let risultato = 6 - punteggio;
      vite.textContent = risultato;
      console.log(risultato);
      if (risultato == 0) {
        parolaContainer.classList.remove("flex");
        parolaContainer.classList.add("hidden");
        parolaFalso.classList.remove("hidden");
        parolaFalso.classList.add("flex");

        immagine.src = "assets/errore6.png";
        tastieraContainer.classList.add("opacity-0");
        setTimeout(() => {
          immagine.src = "assets/perso.png";
        }, 500);
        setTimeout(() => {
          location.reload();
        }, 6000);


      } else if (risultato == 1) {
        vite.style.color = "rgb(220, 79, 82)";
        immagine.src = "assets/errore5.png";
      } else if (risultato == 2) {
        immagine.src = "assets/errore4.png";
      } else if (risultato == 3) {
        immagine.src = "assets/errore3.png";
      } else if (risultato == 4) {
        immagine.src = "assets/errore2.png";
      } else if (risultato == 5) {
        immagine.src = "assets/errore1.png";
      }
    }
  });
}

reload.addEventListener("click", function () {
  location.reload();
});

function confrontoArray(array1, array2) {
  const arrayOrdinato1 = array1.slice().sort();
  const arrayOrdinato2 = array2.slice().sort();

  if (arrayOrdinato1.length == arrayOrdinato2.length) {
    return true;
  }
}

gestisciClick(letteraA);
gestisciClick(letteraB);
gestisciClick(letteraC);
gestisciClick(letteraD);
gestisciClick(letteraE);
gestisciClick(letteraF);
gestisciClick(letteraG);
gestisciClick(letteraH);
gestisciClick(letteraI);
gestisciClick(letteraJ);
gestisciClick(letteraK);
gestisciClick(letteraL);
gestisciClick(letteraM);
gestisciClick(letteraN);
gestisciClick(letteraO);
gestisciClick(letteraP);
gestisciClick(letteraQ);
gestisciClick(letteraR);
gestisciClick(letteraS);
gestisciClick(letteraT);
gestisciClick(letteraU);
gestisciClick(letteraV);
gestisciClick(letteraW);
gestisciClick(letteraX);
gestisciClick(letteraY);
gestisciClick(letteraZ);
getParola();
