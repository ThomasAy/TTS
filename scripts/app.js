var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)
var win = gui.Window.get();


//
// Listeners
//
function close(e){
	win.close();
}

function omnibar_submit(e)
{
	if(e.keyCode == 13)
	{
		e.preventDefault();
		sara.loadPage();
	}
}


function omnibar_focused(e)
{
	this.select();
}

document.getElementById("restructured-website").onclick = function (e) {

	
  	e = e ||  window.event;
  	var element = e.target || e.srcElement;
  	document.getElementById('omnibar').value = element.href;

	sara.loadPage();  
	return false; // prevent default action and stop event propagation
};



//
// Events on button
//
document.querySelector("button[data-role=close]").addEventListener("click", close, false);
document.getElementById('omnibar').addEventListener('keypress', omnibar_submit, false);
document.querySelector("button[data-role=speechRecognition]").addEventListener("click", function(e){ e.preventDefault(); recognition.start(); }, false);
document.getElementById('omnibar').addEventListener('focus', omnibar_focused, false);
// document.getElementById('submit-url').addEventListener('click', function(e){
// 		e.preventDefault();
// 		console.log('working...');

// 		var text = document.getElementById('text').value;
// 		text = text.replace(/ /g, '+');
// 		var voice = "Helene";
// 		toto = new Audio();
// 		toto.src = "http://voxygen.fr/sites/all/modules/voxygen_voices/assets/proxy/index.php?method=redirect&text="+ text +"&voice="+ voice +"&ts="+new Date().getTime();
// 		console.log(toto.src);
// 		toto.play();
// }, false);

var OS_ANDROID = true;

commander.test('search *toto et *tata');
commander.test('aller (a) :toto en passant par :tata');
