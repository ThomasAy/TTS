Mousetrap.bind(['ctrl+enter'], function(e) {
	sara.focusOnOmnibar();
    return playUtil('barre_recherche');
});

Mousetrap.bind(['ctrl+j', 'command+j'], function(e) {
    return nextVoice();
});

Mousetrap.bind(['ctrl+shift+d', 'command+shift+d'], function(e) {
	sara.bookmark.openFav();
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


Mousetrap.bind(['command+shift+c', 'ctrl+shift+c'], function(e) {
    sara.changeNodeList()
});

Mousetrap.bind(['command+-', 'ctrl+-'], function(e) {
    zoomOut()
});

Mousetrap.bind(['command++', 'ctrl++', 'command+shift++', 'ctrl+shift++'], function(e) {
    zoomIn()
});

Mousetrap.bind(['ctrl+d', 'command+d'], function(e) {
    sara.bookmark.addPageToBookMark();
});