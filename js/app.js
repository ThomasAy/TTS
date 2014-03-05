// var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)

// var win = gui.Window.get();

// document.getElementById('close').addEventListener('click', function(e){
// 	win.close();
// }, false);

// document.getElementById('minimalize').addEventListener('click', function(e){
// 	win.minimize();
// }, false);

document.getElementById('url').addEventListener('keypress', function(e){
	if(e.keyCode == 13){
		e.preventDefault();
		console.log('working...');
		document.getElementById('website').src = document.getElementById('url').value;
	}
}, false);


document.getElementById('submit-url').addEventListener('click', function(e){
		e.preventDefault();
		console.log('working...');

		var text = document.getElementById('text').value;
		text = text.replace(/ /g, '+');
		var voice = "Helene";
		toto = new Audio();
		toto.src = "http://voxygen.fr/sites/all/modules/voxygen_voices/assets/proxy/index.php?method=redirect&text="+ text +"&voice="+ voice +"&ts="+new Date().getTime();
		console.log(toto.src);
		toto.play();
}, false);

soundManager.onready(function() {
    // SM2 is ready to go!


	// soundManager.createSound({
	// 	id: "sound" + new Date().getTime().toString(),
	//     type: "audio/mp3",
	//     url: "http://voxygen.fr/sites/all/modules/voxygen_voices/assets/proxy/index.php?method=redirect&text=Oh+pinaise+!&voice=Papi&ts="+new Date().getTime(),
	//     volume: 100,
	//     autoPlay: true
	// });
    
});