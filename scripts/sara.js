function Sara(){};

Sara.prototype.focusOnOmnibar = function() {
	console.log(document.activeElement);
	document.getElementById('omnibar').focus();
	console.log(document.activeElement);
    return false;
};

Sara.prototype.focusOnNextElement = function() {
	console.log(document.activeElement);
	document.activeElement.nextSibling.focus();
	console.log(document.activeElement);
    return false;
};

Sara.prototype.focusOnPreviousElement = function() {
	console.log(document.activeElement);
	document.activeElement.previousSibling.focus();
	console.log(document.activeElement);
    return false;
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
