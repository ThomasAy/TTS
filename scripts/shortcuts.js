Mousetrap.bind(['ctrl+enter'], function(e) {
	sara.focusOnOmnibar();
    return playUtil('barre_recherche');
});

Mousetrap.bind(['ctrl+j', 'command+j'], function(e) {
    return nextVoice();
});

Mousetrap.bind(['ctrl+shift+d', 'command+shift+d'], function(e) {
    var b = new Bookmarks();
		b.openFav();
});
Mousetrap.bind(['tab'], function(e) {
	if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    sara.nextElement();
});

Mousetrap.bind(['shift+tab'], function(e) {
	if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
    sara.previousElement();
});


Mousetrap.bind(['command+shift', 'ctrl+shift'], function(e) {
    sara.changeNodeList()
});