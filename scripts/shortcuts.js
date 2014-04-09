Mousetrap.bind(['command+shift', 'ctrl+shift', 'enter'], function(e) {
    document.getElementById('omnibar').focus();
    return playUtil('barre_recherche');
});

Mousetrap.bind(['ctrl+j', 'command+j'], function(e) {
    return nextVoice();
});