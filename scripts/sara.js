function Sara(){
	NodeList.prototype.search = Array.prototype.indexOf;
	this.nodeLists = {
		menu : document.querySelectorAll('#omnibar, button[data-role]'),
		page : null,
		bookmarks : null
	};
	this.nodeListSelected = 'menu';
	this.elementFocus = 0;
	playUtil('bienvenu');
	this.bookmark = new Bookmarks();
};


Sara.prototype.focus = function(el) {
	el.focus();
	this.elementFocus = this.nodeLists[this.nodeListSelected].search(el);
};


Sara.prototype.focusOnOmnibar = function() {
	this.focus(document.getElementById('omnibar'));
	this.nodeListSelected = 'menu';
};


Sara.prototype.loadPage = function() {
		var command = document.getElementById('omnibar').value;

		console.log("load :" + command);
		if(command.search("http") == -1)
			command = "http://" + command;
		console.log("load :" + command);
		document.getElementById('omnibar').value = command;

		window.urlDeLaMort = command;

		document.getElementById('restructured-website').innerHTML = '<iframe id="real-website" src="" frameborder="0" nwUserAgent></iframe>';
		document.getElementById('real-website').onload = function(e)
			{	
				html = document.getElementById('real-website').contentDocument;
				document.getElementById('restructured-website').innerHTML = html.body.innerHTML;
				sara.nodeListSelected = 'page';
				sara.nodeLists.page = document.getElementById('restructured-website').querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,input,button,img,table,label,textarea');
			}


		document.getElementById('real-website').src = command;
};

Sara.prototype.nextElement = function() {
	var index = this.elementFocus == this.nodeLists[this.nodeListSelected].length - 1 ? 0 : ++this.elementFocus;
	var el = this.nodeLists[this.nodeListSelected].item(index);
	this.focus(el);
	console.log('next element');
	this.readElement(el);
};

Sara.prototype.previousElement = function() {
	var index = this.elementFocus == 0 ? this.nodeLists[this.nodeListSelected].length - 1 : --this.elementFocus;
	var el = this.nodeLists[this.nodeListSelected].item(index);
	this.focus(el);
	this.readElement(el);
};

Sara.prototype.readElement = function(el) {
	if (this.nodeListSelected == 'menu')
	{
		var menuItem = {
			button_prev:'precedent',
			omnibar:'barre_recherche',
			button_submit:'rechercher',
			button_next:'suivant',
			button_close:'fermer',
			button_zoomIn:'zoom',
			button_zoomOut:'dezoom',
			button_color:'apparence',
			button_speechRecognition:'commande_vocale',
			button_volume:'volume',
			button_choixVoix:'choix_voix',
			button_homer:'voix',
			button_julie:'voix',
			button_murphy:'voix',
		};

		var util = el.nodeName.toLowerCase() == 'button' ? menuItem['button_' + el.dataset.role] : menuItem.omnibar;
		
	}
	else
	{
		var htmlItem = {
			h1:'titre1',
			h2:'titre2',
			h3:'titre3',
			h4:'titre4',
			h5:'titre5',
			h6:'titre6',
			p:'paragraphe',
			a:'lien',
			select:'liste_choix',
			option:'choix',
			input:'champs',
			form:'formulaire',
			button:'bouton',
			img:'image',
			table:'tableau',
			label:'libelle',
			textarea:'zone_saisie',
			video:'video'
		};

		var util = htmlItem[el.nodeName.toLowerCase()];
	}

	playUtil(util, function(){
		if (el.textContent != "" )
		{
			read(el.textContent);
		};
	});
};

Sara.prototype.changeNodeList = function() {
	if (arguments.length == 1)
	{
		this.nodeListSelected = this.arguments[0];
	}
	else
	{
		if (this.nodeListSelected == 'menu')
		{
			this.nodeListSelected = 'page';
		}
		else
		{
			this.nodeListSelected = 'menu';
		}
	}
};

Sara.prototype.browserNextPage = function() {
	history.go(+1);
};

Sara.prototype.browserPreviousPage = function() {
	history.go(-1);
};

Sara.prototype.search = function() {
	
	if (parseInt(navigator.appVersion)<4) return;
	var strFound;
	strFound=self.find(str);
	if (!strFound) {
		strFound=self.find(str,0,1);
		while (self.find(str,0,1)) continue;
	}
	
};
