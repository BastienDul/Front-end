console.log("script chargé");

// Création du conteneur main
let main = document.createElement("main");
document.body.appendChild(main);


// Création du conteneur section qui contiendra la table avec les lettres de l'alphabet
let sectionAlphabet = document.createElement("section");
sectionAlphabet.id = "alphabet";
main.appendChild(sectionAlphabet);

// Creation de la table contenant les buttons
let uneTable = document.createElement("table");
uneTable.id="tableau";
sectionAlphabet.appendChild(uneTable);

// Creation du tableau contenant les lettres de l'alphabet.
let lettre = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// Création du mot mystère
const MOTMYSTERE = ["jacuzzi"];
let lettresMotMystere = MOTMYSTERE[0].split("");
console.log(lettresMotMystere);

// Création de la boucle afin de stocker les lettre de l'alphabet dans des buttons
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

// Creation du conteneur section qui contiendra le boutton pour le décompte d'erreurs.
let sectionButton = document.createElement("section");
sectionButton.id = "button_essais";
main.appendChild(sectionButton);


// Création du bouton qui contiendra le decompte des erreurs
let buttonCompteur = document.createElement("bouton");
buttonCompteur.id = "button_compteur";
sectionButton.appendChild(buttonCompteur);
buttonCompteur.innerText = "A vous de jouer !";

// Ecouter les clicks de l'utilisateur afin creer un messages personnaliser a chaque erreur de celui ci !
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


// Creation du conteneur pour acceuillir les element span dedans
let sectionSpan = document.createElement("section");
sectionSpan.id = "span_lettre";
main.appendChild(sectionSpan);


// Création des spans pour entrer les lettre choisis pas l'utilisateur 
for (let i2 = 0; i2 < lettresMotMystere.length ; i2++) {

    console.log("span chargé");

    
    let span = document.createElement("span");
    span.className = "span_reception" + i2;

    sectionSpan.appendChild(span);
    span.textContent= "-" + " ";

}



