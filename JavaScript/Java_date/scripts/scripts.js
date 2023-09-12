// recuperer les donées du formulaire
const formulaire = document.getElementById("monFormulaire");

console.log(formulaire);

// recuperer les champs de texte
let joursInput = document.getElementById("jours");
let moisInput = document.getElementById("mois");
let anneeInput = document.getElementById("annee");

// recuperer l'info du bouton
formulaire.addEventListener('submit', function(e){
    e.preventDefault();


    // Valider le champs jours
    let jours = joursInput.value;
    if (jours.length !==2 || isNaN(jours) || parseInt(jours) < 1 || parseInt(jours) > 31){
        alert("Le champs 'jours' doit contenir un nombre valide entre 1 et 31.");
        return;
    }

    // Valider le champs mois
    let mois = moisInput.value;
    if (mois.length !==2 || isNaN(mois) || parseInt(mois) < 1 || parseInt(mois) > 12){
        alert("Le champs 'mois' doit contenir un nombre valide entre 1 et 12.");
        return;
    }

    // Valider les années
    let annee = anneeInput.value;
    if (annee.length !==4 || isNaN(annee)){
        alert("Le champs 'année' doit contenir un nombres valide à 4 chiffres et être supérieur a 2023.");
        return;

    }

    // obtenir la date de naissance
    let dateNaissance = new Date(`${annee}-${mois}-${jours}`);
    const dateAujourdhui = new Date();

    // Vérifier si la date de naissance est déjà passée cette année
    if (dateNaissance < dateAujourdhui) {
        dateNaissance.setFullYear(dateAujourdhui.getFullYear() + 1);
    }

    //calculer prochaine anniversaire
    let prochainAnniversaire = new Date(dateAujourdhui.getFullYear(), dateNaissance.getMonth(), dateNaissance.getDate());

    if (prochainAnniversaire < dateAujourdhui) {
        prochainAnniversaire.setFullYear(prochainAnniversaire.getFullYear() + 1 );
    }

    // calculer le nombre de jours restant jusqu'au prochaine anniversaire

    let differenceEnMillisecondes = prochainAnniversaire - dateAujourdhui;
    let differenceEnJours = Math.floor(differenceEnMillisecondes /1000 / 60 /60 /24);
    console.log(differenceEnJours);

    // afficher le resultats
    alert("Il vous reste " + differenceEnJours + " jour avant voter prochaine anniversaire.")

    // Réinitialiser les champs de texte.
    joursInput.value = '';
    moisInput.value = '';
    anneeInput.value = '';

});