var url = require('url');

function History(){

};

History.prototype.addPage = function() {
	// Récupère l'ancien historique

	var h = new Object();
	if(localStorage.getItem("history") != null)
	{
		h = JSON.parse(localStorage.getItem("history"));
	}

	console.log(h);

	var parser = url.parse(document.getElementById('omnibar').value);

	if( h[parser.hostname] == undefined)
	{
		h[parser.hostname] = new Object();
	}
	h[parser.hostname][parser.href] = new Date();

	window.test = h;
	console.log(h);

	console.log(JSON.stringify(h));
    localStorage.setItem("history", JSON.stringify(h));
	
};


History.prototype.getObject = function() {
    var value = localStorage.getItem("history");
    return value && JSON.parse(value);
}