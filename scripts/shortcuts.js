Mousetrap.bind(['command+shift', 'ctrl+shift'], function(e) {
    document.getElementById('omnibar').focus();
    return false;
});

Mousetrap.bind(['ctrl+j', 'command+j'], function(e) {
    nextVoice();
});