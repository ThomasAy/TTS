Mousetrap.bind(['ctrl+enter'], function(e) {
	sara.focusOnOmnibar();
    return playUtil('barre_recherche');
});

Mousetrap.bind(['ctrl+j', 'command+j'], function(e) {
    return nextVoice();
});

Mousetrap.bind(['tab'], function(e) {
    sara.nextElement();
});

Mousetrap.bind(['shift+tab'], function(e) {
    sara.previousElement();
});


Mousetrap.bind(['command+shift', 'ctrl+shift'], function(e) {
    sara.changeNodeList()
});