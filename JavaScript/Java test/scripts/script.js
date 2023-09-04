console.log("Script chargé !")
let monAge = 0;

function construireNomComplet(nom, prenom){
    let nomComplet = nom + " " + prenom;
    return nomComplet;
}

let inputNom = "Duliege"
let inputPrenom = "Bastien"
let nomCompletConstruit = construireNomComplet(inputNom, inputPrenom);


let boutonElt =document.getElementById("mon_bouton");

console.log(boutonElt);

boutonElt.innerText = "Je suis un bouton";