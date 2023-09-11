console.log("script chargé");

// Liste de mots mystères prédéfinis
const motsMysteres = ["JACUZZI", "ORDINATEUR", "VOITURE", "TELEPHONE", "MAISON", "PONEY"];

// Sélectionnez un mot mystère aléatoire
const indexAleatoire = Math.floor(Math.random() * motsMysteres.length);
const MOTMYSTERE = motsMysteres[indexAleatoire];
let lettresMotMystere = MOTMYSTERE.split(""); // Convertir en majuscules



// Création du conteneur main
let main = document.createElement("main");
document.body.appendChild(main);

// Création du conteneur section qui contiendra la table avec les lettres de l'alphabet
let sectionAlphabet = document.createElement("section");
sectionAlphabet.id = "alphabet";
main.appendChild(sectionAlphabet);



// Création de la boucle afin de stocker les lettres de l'alphabet dans des boutons
for (let i = 0; i < 26; i++) { // Utiliser un index de 0 à 25 pour les lettres de l'alphabet
    // Création des boutons
    let buttonDansTable = document.createElement("button");
    let lettre = String.fromCharCode(65 + i); // Convertir l'index en lettre majuscule
    buttonDansTable.id = "button_" + lettre;
    sectionAlphabet.appendChild(buttonDansTable);
    // Injecter les lettres dans les boutons
    buttonDansTable.textContent = lettre;
}

// Création du compteur pour la défaite
let compteur = 0;

// Création du conteneur section qui contiendra le bouton pour le décompte d'erreurs.
let sectionButton = document.createElement("section");
main.appendChild(sectionButton);

// Création du conteneur pour accueillir les éléments span dedans
let sectionSpan = document.createElement("section");
sectionSpan.id = "span_lettre";
main.appendChild(sectionSpan);

// Création des spans pour afficher les lettres choisies par l'utilisateur
for (let index = 0; index < lettresMotMystere.length; index++) {
    let span = document.createElement("span");
    span.classList.add("span_reception");
    sectionSpan.appendChild(span);
    span.textContent = "-";
}

// Ajoutez un compteur d'essais restants
let essaisRestants = 8; // Nombre d'essais initiaux
let essaisRestantsText = document.createElement("span");
essaisRestantsText.id = "essais";
essaisRestantsText.textContent = essaisRestants + " essais restants";
sectionButton.appendChild(essaisRestantsText);

// Gestion des clics sur les boutons de l'alphabet
let lesTirets = document.querySelectorAll(".span_reception");

// Fonction pour désactiver tous les boutons de l'alphabet
function desactiverBoutonsAlphabet() {
    document.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
    });
}

// Gestion des clics sur les boutons de l'alphabet
document.querySelectorAll("button").forEach((element) => {
    element.addEventListener("click", (eventDetail) => {
        if (essaisRestants <= 0) return; // Ne faites rien si le jeu est terminé

        eventDetail.target.disabled = true;
        let trouve = false;
        let gagne = true;
        for (let index = 0; index < lettresMotMystere.length; index++) {
            if (eventDetail.target.innerText === lettresMotMystere[index]) {
                trouve = true;
                lesTirets[index].textContent = lettresMotMystere[index];
            }
        }
        if (!trouve) {
            essaisRestants--;
            essaisRestantsText.textContent = essaisRestants + " essais restants";

            if (essaisRestants === 0) {
                essaisRestantsText.textContent = "Perdu !";
                desactiverBoutonsAlphabet(); // Désactiver les boutons en cas de défaite
            }
        } else {
            // Vérifiez la victoire
            lesTirets.forEach(spanTiret => {
                if (spanTiret.innerText === "-") {
                    gagne = false;
                }
            })
            if (gagne === true) {
                sectionAlphabet.style.visibility = "hidden"
                essaisRestantsText.textContent = "Gagné !";
                desactiverBoutonsAlphabet(); // Désactiver les boutons en cas de victoire
            }
        }
    });
});
