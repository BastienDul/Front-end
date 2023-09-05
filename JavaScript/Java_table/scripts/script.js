console.log("Script présent");

// boucle pour faire le calcul !
for (let i = 1; i <= 10 ; i++) {
    console.log("table crée")
    let uneTable = document.createElement("div");
    uneTable.setAttribute("id", "table" + i);
    document.body.appendChild(uneTable);
    let maDiv = document.querySelector("div#table"+i);
    for (let i2 = 1; i2 <= 10; i2++) {
        console.log("Ligne crée");
        let uneMultiplication = document.createElement("p");
        maDiv.appendChild(uneMultiplication);
        let resultat = i*i2;
        uneMultiplication.innerText = i + " x " + i2 + " = " + resultat;
        console.log(resultat);
        


        
        
    }
}