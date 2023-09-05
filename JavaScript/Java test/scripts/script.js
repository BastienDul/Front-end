console.log("Script chargé !")
let monAge = 0;
let compteur = 0;


function construireNomComplet(nom, prenom){
    let nomComplet = nom + " " + prenom;
    return nomComplet;
}

let inputNom = "Duliege";
let inputPrenom = "Bastien";
let nomCompletConstruit = construireNomComplet(inputNom, inputPrenom);


let boutonElt =document.getElementById("mon_bouton");
console.log(boutonElt);


function comptage(){
    compteur++;
    document.getElementById("mon_bouton").textContent;
}

document.getElementById("mon_bouton").addEventListener("click", comptage);

boutonElt.innerText ="Clique moi !";

// déclaration variable newParagraph et myHeader
let newParagraph = document.createElement("p");
let myHeader = document.getElementById("header");

boutonElt.addEventListener("click", function(){

    // if(compteur == 4){
    //     boutonElt.style.backgroundColor="green";
    // }
    switch (compteur) {
        case 1:
            boutonElt.innerText="Rouge !";
            boutonElt.style.backgroundColor="red";
            newParagraph.innerText = "tu as cliqué 1 fois !";
            header.appendChild(newParagraph);
            break;
        
        case 2 :
            boutonElt.innerText="Vert !";
            boutonElt.style.backgroundColor="green";  
            newParagraph.innerText = "tu as cliqué 2 fois !";
            header.appendChild(newParagraph);          
            break;
        
        case 3 :
            boutonElt.innerText="Jaune !";
            boutonElt.style.backgroundColor="yellow";
            newParagraph.innerText = "tu as cliqué 3 fois !";
            header.appendChild(newParagraph);
            break;

        case 4 :
            boutonElt.innerText="Violet !";
            boutonElt.style.backgroundColor="purple";
            newParagraph.innerText = "tu as cliqué 4 fois !";
            header.appendChild(newParagraph);
            break;
        default:
            boutonElt.innerText = "Envoyez"
            break;
    }
});

