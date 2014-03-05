<script>
    function test(event, textarea) {
        var entier = textarea.value.charCodeAt(textarea.value.length-1);
        player = new Audio("/tts/audio/char/"+entier+'.mp3');
        player.play();
    }
</script>
<form method="GET" action="source.php">
    Texte : <textarea name="words" onkeyup="test(event, this)"></textarea>
</form>
    
