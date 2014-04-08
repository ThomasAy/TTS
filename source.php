<?php
    $tab = array(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, "i grec" => 89, 90, 
                "point d'exclamation" => 33, 34, 35, 
                36, 37, 38, 39, 40, 41, 42, 43, 44, "moins" => 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 
                "barre verticale" => 124, "Retour arrière" => 8, "Espace" => 32, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 
                109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, "i grec" => 121, 122);
    $phrases = array('Connard c\'est ici que ca se passe');
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
            $file = "assets/audio/".$voice."/util/" . md5($phrase) . ".mp3";
            if (!file_exists($file)) {
                $url = 'http://voxygen.fr/sites/all/modules/voxygen_voices/assets/proxy/index.php?method=redirect&text='.urlencode($phrase).'&voice='.$voice.'&ts=1393856393019';
                echo $url.'<br>'; 
                $mp3 = file_get_contents($url);
                file_put_contents($file, $mp3);
            }
        }
    }
    
?>