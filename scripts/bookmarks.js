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
    return JSON.parse(value);
}

Bookmarks.prototype.openFav = function() {
	var el = document.getElementById('bookmark');
	el.style.visibility = 'visible';

	var b = new Bookmarks();
	var obj = b.getObject();

	var bouton = document.createElement("button");
	bouton.setAttribute("id", "closeBouton");

  	bouton.innerHTML = '<img class="icon" src="assets/icon/SVG/x.svg">';
  	el.appendChild(bouton);

  	bouton.onclick = function(){
		var el = document.getElementById('bookmark');
		el.style.visibility = 'hidden';
	};

	var x = document.getElementById("toppings");
	while (x.length > 0)
	{
	  x.remove(x.length-1);
	} 

	for(key in obj){
		var option = document.createElement("option");
		option.text = key;
		option.value = obj[key];
		x.add(option);
	}

	document.getElementById('toppings').ondblclick = function(){
		sara.loadPage(this.options[this.selectedIndex].value);
		var el = document.getElementById('bookmark');
		el.style.visibility = 'hidden';
	};

	sara.nodeLists.bookmarks = document.querySelector('#bookmark option');
	sara.nodeListSelected = 'bookmarks';

};


