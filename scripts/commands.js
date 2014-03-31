(function(window, document){

	var elements = null;
	var allowSpeechRecognition = true;
	var commandList = [];

	 // The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
	  var optionalParam = /\s*\((.*?)\)\s*/g;
	  var optionalRegex = /(\(\?:[^)]+\))\?/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#]/g;
	  var commandToRegExp = function(command) {
	    command = command.replace(escapeRegExp, '\\$&')
	                  .replace(optionalParam, '(?:$1)?')
	                  .replace(namedParam, function(match, optional) {
	                    return optional ? match : '([^\\s]+)';
	                  })
	                  .replace(splatParam, '(.*?)')
	                  .replace(optionalRegex, '\\s*$1?\\s*');
	    return new RegExp('^' + command + '$', 'i');
	  };

	var commander = {


		new: function(selectors, allowSpeechRecognition){
			window.HTMLCollection.prototype.each = window.NodeList.prototype.each = window.Array.prototype.ForEach;
			elements = document.querySelectorAll(selectors);
			if (allowSpeechRecognition != undefined){ this.allowSpeechRecognition = allowSpeechRecognition; }
		},

		init: function(commands)
		{
			commandList = [];
			this.addCommands(commands);
		},

		add: function(commandText, callback){
			if (typeof callback !== 'function') { return false; }
			var command = commandToRegExp(commandext);
			commandList.push({ command: command, callback:callback});
		},

		addCommands: function(commands)
		{
			for( var command in commands )
			{
				if ( commands.hasOwnProperty(command) ) 
				{
					var callback = commands[command] || window.commands[command];
					this.add(command, callback);
				}
			}
		},

		test: function(commandext){
			var command = commandToRegExp(commandext);
			var text = 'search un super truc et un truc moyen.';
			text.trim();
			console.log(command);
			console.log(command.test(text));
			console.log(command.exec(text));
		}
	}

	window.commander = commander;

})(window, document)