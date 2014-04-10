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
		var command = document.getElementById('omnibar').value;
		console.log('working...');
		document.getElementById('real-website').src = command;
	}
}

function omnibar_focused(e)
{
	this.select();
}


document.getElementById('real-website').onload = function(e)
{	
	html = document.getElementById('real-website').contentDocument;
	document.getElementById('restructured-website').innerHTML = html.body.textContent;
	sara.nodeListSelected = 'page';
	sara.nodeLists.page = document.getElementById('restructured-website').querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,input,button,img,table,label,textarea');
}


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
