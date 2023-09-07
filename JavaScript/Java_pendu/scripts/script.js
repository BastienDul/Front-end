console.log("script chargé");
// Creation de la table contenant les buttons
let sectionAlphabet = document.getElementById("alphabet");
let uneTable = document.createElement("table");
uneTable.id="tableau"
sectionAlphabet.appendChild(uneTable);

// Creation du tableau contenant les lettres de l'alphabet.

let lettre = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const MOTMYSTERE = ["jacuzzi"];
let lettresMotMystere = MOTMYSTERE[0].split("");
console.log(lettresMotMystere);
for (let i = 0 ; i <= 25; i++) {

    console.log("for chargée")

    //  Création des boutons
     
    let buttonDansTable = document.createElement("button");
    buttonDansTable.className = "button_" + i;
    uneTable.appendChild(buttonDansTable);

    // Injecter les lettres dans les buttons
    buttonDansTable.textContent=lettre[i];
}


// Création du compteur pour la défaite
let compteur = 0;

let sectionButton = document.getElementById("button_essais");
let buttonCompteur = document.createElement("bouton");
buttonCompteur.id = "button_compteur";
sectionButton.appendChild(buttonCompteur);
buttonCompteur.innerText = "A vous de jouer !";


buttonCompteur.addEventListener("click",function () {
    compteur++;


switch (compteur) {
    case 1:
        buttonCompteur.innerText = "7 essais restants";
        buttonCompteur.style.backgroundColor = "red";
        break;
    case 2:
        buttonCompteur.innerText = "6 essais restants";
        break;
    case 3:
        buttonCompteur.innerText = "5 essais restants";
        break;
    case 4:
        buttonCompteur.innerText = "4 essais restants";
        break;
    case 5:
        buttonCompteur.innerText = "3 essais restants";
        break;
    case 6:
        buttonCompteur.innerText = "2 essais restants";
        break;
    case 7:
        buttonCompteur.innerText = "1 essais restants";
        break;
    case 8:
        buttonCompteur.innerText = "Perdu !";
        break;
}
})

// Création des spans pour entre les lettre choisis pas l'utilisateur 
for (let i2 = 0; i2 < lettresMotMystere.length ; i2++) {

    console.log("span chargé");


    let span = document.createElement("span");
    span.className = "span_reception" + i2;
    let sectionSpan = document.getElementById("span_lettre");
    sectionSpan.appendChild(span);
    span.textContent= "-" + " ";

}



