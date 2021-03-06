var express = require("express");
var app = express();
var SERVER_ADDRESS = 'localhost';
var SERVER_PORT = 8080;


var server;

var startup = function() {				
	server = app.listen(SERVER_PORT, SERVER_ADDRESS, function() {
		console.log("Server running at http://%s:%s", SERVER_ADDRESS, SERVER_PORT)
	});
}

// Use express to serve index.htm and survey.htm

/* TODO localhost:8080/getQuestions
 * GET request
 * Read a json file containing survey questions and 
 * return them to the client. Send appropriate error
 * messages if/when things don't work as expected.
 */

/* TODO localhost:8080/commitSurvey
 * POST request
 * Retrieve survey data from the client and store it
 * somehow for future use. Send appropriate error
 * messages if/when things don't work as expected.
 */ 

 // And whatever others you need to present data from surveys.htm

startup();
