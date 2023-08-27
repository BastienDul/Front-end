<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body> 
    <?php 
        $retour = mail('bastienduliege@outlook.fr', 'Envoi depuis la page Contact', $_POST['nom'], $_POST['message'], 'From: bastien.duliege@orange.fr' . "\r\n" . 'Reply-to: ' . $_POST['email']);
        if($retour)
            echo '<p>Votre message a bien été envoyé.</p>';

    ?>
</body>
</html>