var url = require('url');

function Bookmarks(){

};

Bookmarks.prototype.addPageToBookMark = function() {
	// Récupère l'ancien historique

	var b = new Object();
	if(localStorage.getItem("bookmarks") != null)
	{
		b = JSON.parse(localStorage.getItem("bookmarks"));
	}

	console.log(b);

	var parser = url.parse(document.getElementById('omnibar').value);

	b[parser.hostname] = parser.href;

	window.test = b;
	console.log(b);

	console.log(JSON.stringify(b));
    localStorage.setItem("bookmarks", JSON.stringify(b));
	
};

Bookmarks.prototype.getObject = function() {
    var value = localStorage.getItem("bookmarks");
    return value && JSON.parse(value);
}

Bookmarks.prototype.openFav = function() {
	var el = document.getElementById('bookmark');
	el.style.visibility = 'visible';


};

document.addEventListener('keyup',function() {
    if(event.keyCode == 80);
	{
		var b = new Bookmarks();
		b.openFav();
	}
    
});