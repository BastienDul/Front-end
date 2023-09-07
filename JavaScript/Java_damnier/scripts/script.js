// On créé un élément principal qui contiendra la table
const divContainer = document.createElement("div");
// On créé un élément table
const tableElt = document.createElement("table");
// On boucle 8 fois (nombre de lignes à injecter)
for (let row = 1; row <= 8; row++) {
    // On créé un élément ligne(table row)
    const oneRow = document.createElement("tr");
    // On boucle 8 fois (nombre de lignes à injecter)
    for (let cell = 1; cell <= 8; cell++) {
        // On créé un élément cellule(table cell)
        const oneCell = document.createElement("td");
        // Si la cellule doit être en noir
        if ((row % 2 == 1 && cell % 2 == 0) || (row % 2 == 0 && cell % 2 == 1)) {
            oneCell.classList.add("fond-noir");
        }
        // On ajoute un enfant "td" à l'élément "tr"
        oneRow.append(oneCell);
    }
    // On ajoute un enfant "tr" à l'élément "table"
    tableElt.append(oneRow);
}

tableElt.addEventListener("click", function(eventDetail){
    console.log(eventDetail);
    let elementClick = eventDetail.target;

    elementClick.classList.toggle("fond-noir");

})



// On ajoute un enfant "table" à l'élément principal
divContainer.append(tableElt);
// On injecte d'un coup l'élément principal et dans le même temps tous ses enfants
document.body.appendChild(divContainer);





