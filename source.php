<?php
    set_time_limit(0);
    $tab = array(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, "i grec" => 89, 90, 
                "point d'exclamation" => 33, 34, 35, 
                36, "gauche" => 37, "haut" => 38, "droite" => 39, "bas" => 40, 41, 42, 43, 44, "moins" => 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 
                "barre verticale" => 124, "Retour arrière" => 8, "Espace" => 32, 106, 107, 108, 
                109, 110, 'barre oblique' => 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, "i grec" => 121, 122, 'deux points' => 191, 'controle' => 17,
                'shift' => 16, 'majuscule' => 20, 'tab' => 9, 'point' => 190, "entrée" =>13, "point d'exclamation" => 223, "virgule" => 188, "zéro" => 96, "un" => 97,
                "deux" => 98,"trois" => 99, "quatre" => 100, "cinq" => 101,"six" => 102,"sept" => 103,"huit" => 104, "neuf" => 105);
    $phrases = array('Bienvenu sur votre logiciel sarah','Bonjour je suis Homer','Bonjour je suis Julie','Bonjour je suis Murphy',
                    'chargement','choix de la voix','désolé votre adresse n\'est pas reconnue','Liste des favoris','précédent',
                    'suivant','veuillez patienter, recherche en cours','titre de niveau 1','titre de niveau 2','titre de niveau 3',
                    'titre de niveau 4','titre de niveau 5','titre de niveau 6','paragraphe','lien','liste de choix','choix',
                    'champs de saisie','formulaire','bouton','image','tableau','libellé','zone de saisie','vidéo','barre de recherche',
                    'rechercher','fermer le navigateur','a bientot','zoom','dézoom','apparence','commande vocale','volume');
    $voices = array('Homer40min', 'Julie', 'Murphy');
    foreach($voices as $voice) {
        foreach($tab as $key => $i) {
            echo $i.';';
            $file = chr($i);
            echo $file.';';
            if(is_string($key)) {
                $words = urlencode($key);
            }
            else {
                $words = urlencode(chr($i));
            }
            $file = "assets/audio/".$voice."/char/" . $i . ".mp3";
            if (!file_exists($file)) {
                $url = 'http://voxygen.fr/sites/all/modules/voxygen_voices/assets/proxy/index.php?method=redirect&text='.$words.'&voice='.$voice.'&ts=1393856393019';
                echo $url.'<br>'; 
                $mp3 = file_get_contents($url);
                file_put_contents($file, $mp3);
            }
        }
        foreach($phrases as $phrase) {
            $file = "assets/audio/".$voice."/util/" .$phrase . ".mp3";
            if (!file_exists($file)) {
                $url = 'http://voxygen.fr/sites/all/modules/voxygen_voices/assets/proxy/index.php?method=redirect&text='.urlencode($phrase).'&voice='.$voice.'&ts=1393856393019';
                echo $url.'<br>'; 
                $mp3 = file_get_contents($url);
                file_put_contents($file, $mp3);
            }
        }
    }
    
?>