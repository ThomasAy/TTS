var http = require('http');
var fs  = require('fs');
var exec = require('child_process').exec;
var WaveRecorder = require('wave-recorder');

function Speech(options){
	var baseSpeechFilePath = 'assets/audio/tmp/speech';
	this.wavFilePath = baseSpeechFilePath + '.wav';
	this.flacFilePath = baseSpeechFilePath + '.flac';
	this.result = '';
}


Speech.prototype.start = function() {
	var self = this;
	navigator.webkitGetUserMedia({audio: true}, function(stream) {
		var audio_context = new webkitAudioContext();
	    var input = audio_context.createMediaStreamSource(stream);

	    self.recorder = WaveRecorder(audio_context);
	    input.connect(self.recorder.input);

		var fileStream = fs.createWriteStream(self.wavFilePath);
	  	self.recorder.pipe(fileStream);

	    self.recorder.on('header', function(header){ 
		    fileStream.on('close', function(){
		      var headerStream = fs.createWriteStream(self.wavFilePath, {flags: 'r+', start:0})
		      headerStream.write(header)
		      headerStream.end()
		    })
		});

  	}, function(e) {
      console.log('erreur : ' + e);
    });
    
};

Speech.prototype.stop = function() {
	this.recorder.end();

};

Speech.prototype.recognize = function() {
	var self = this;

	exec('flac -f '+ this.wavFilePath,
	  function (error, stdout, stderr) {
	    if (error !== null) 
	    {
	      console.log('exec error: ' + error);
	    }
	    else
	    {
	    	fs.readFile(self.flacFilePath, function (err, data) {
  			if (err) {
  				console.log('erreur :');
  				console.log(err)
  				return;
  			};
				var options = {
				  hostname: 'www.google.com',
				  path: '/speech-api/v1/recognize?xjerr=1&client=chromium&maxresults=1&lang=fr-FR',
				  method: 'POST',
				  headers: {
				    'Content-type': 'audio/x-flac; rate=16000'
				  }
				};	

				var req = http.request(options, function(res) {
				  if(res.statusCode !== 200) {
				    // return self.emit(
				    //   'error',
				    //   'Non-200 answer from Google Speech API (' + res.statusCode + ')'
				    // );
				  }
				  res.setEncoding('utf8');
				  res.on('data', function (chunk) {
				  	console.log(chunk);
				    // self.apiResult = JSON.parse(chunk);
				  });
				  res.on('end', function() {
				  		// console.log(self);
				      // self.parseResult();
				  });
				});

				  req.on('error', function(e) {
				  	console.log('req error');
				  });

				  req.write(data);
				  req.end();
				  
		    	
				});
		
		}

      
      
    });



};