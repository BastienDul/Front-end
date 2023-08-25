<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Assurez-vous que les noms des champs correspondent aux noms dans le formulaire HTML
        $nom = $_POST["nom"];
        $email = $_POST["email"];
        $commentaire = $_POST["commentaire"];

        $destinataire = "bastien.duliege@orange.fr"; // Remplacez par l'adresse e-mail de destination
        $sujet = "Nouveau formulaire de contact";
        $message = "Nom : $nom\nEmail : $email\nCommentaire : $commentaire";

        // Envoi de l'e-mail
        mail($destinataire, $sujet, $message);
    }
    ?>