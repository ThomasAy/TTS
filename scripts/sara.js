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
};


Sara.prototype.focus = function(el) {
	el.focus();
	this.elementFocus = this.nodeLists[this.nodeListSelected].search(el);
};


Sara.prototype.focusOnOmnibar = function() {
	this.focus(document.getElementById('omnibar'));
};


Sara.prototype.loadPage = function(url) {
	document.getElementById('real-website').src = url;
};

Sara.prototype.nextElement = function() {
	var index = this.elementFocus == this.nodeLists[this.nodeListSelected].length - 1 ? 0 : ++this.elementFocus;
	var el = this.nodeLists[this.nodeListSelected].item(index);
	this.focus(el);
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
