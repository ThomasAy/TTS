function Sara(){
	NodeList.prototype.search = Array.prototype.indexOf;
	this.nodeLists = {
		menu : document.querySelectorAll('#omnibar, button[data-role]'),
		page : null
	};
	this.nodeListSelected = 'menu';
	this.elementFocus = 0;
};

Sara.prototype.focus = function(el) {
	el.focus();
	this.elementFocus = this.nodeLists[this.nodeListSelected].search(el);
};

Sara.prototype.focusOnOmnibar = function() {
	document.getElementById('omnibar').focus();
};

Sara.prototype.nextElement = function() {
	var index = this.elementFocus == this.nodeLists[this.nodeListSelected].length - 1 ? 0 : ++this.elementFocus;
	console.log(index);
	console.log(this.nodeLists[this.nodeListSelected].item(index).nodeName.toLowerCase());
	console.log(this.nodeLists[this.nodeListSelected].item(index));
	this.focus(this.nodeLists[this.nodeListSelected].item(index));
};

Sara.prototype.previousElement = function() {
	var index = this.elementFocus == 0 ? this.nodeLists[this.nodeListSelected].length - 1 : --this.elementFocus;
	console.log(index);
	console.log(this.nodeLists[this.nodeListSelected].item(index).nodeName.toLowerCase());
	console.log(this.nodeLists[this.nodeListSelected].item(index));
	this.focus(this.nodeLists[this.nodeListSelected].item(index));
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
