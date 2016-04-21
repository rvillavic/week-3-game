<!DOCTYPE html>
<!-- JSExFiles.html -->
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>JavaScript Example: Separating HTML, CSS and JavaScript</title>
  
 <!-- <script src="../JScriptFiles/JSExFiles.js"></script> -->
</head>
<body>
<!-- This is where the code will go that we created. -->
<div id="game">
    <h1>The Psychic Game</h1>
    <p>Guess what letter I'm thinking of:</p>
</div>

<!-- <p>Guess what letter I'm thinking of:</p> -->

<script>
//initializing variables
var wins=0;
var losses=0;
var guessesLeft=9;
var text = "";
//var userGuess;

//Computer chooses the letter ONLY lower case
var possible = "abcdefghijklmnopqrstuvwxyz";

text = text + possible.charAt(Math.floor(Math.random() * possible.length));
//document.write("<h1>"+text+"</h1>");    //for testing purposes 


	document.onkeyup = function(event)

	{
    	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        //document.write("<h1>"+text+"</h1>");    //for testing purposes 
    	//document.write(userGuess); 		//for testing purposes
    	//document.write("<h1>"+text+"</h1>");

    	if (userGuess==text)
    	{
    		wins+=1;
            text = possible.charAt(Math.floor(Math.random() * possible.length));
    		if (guessesLeft > 0)

    		{
    			guessesLeft -=1;
    		}
    		else
    		{
    			guessesLeft = 9;
    			//text = possible.charAt(Math.floor(Math.random() * possible.length));
    		}
    	} else 
    	{
      		losses+=1;
            text = possible.charAt(Math.floor(Math.random() * possible.length));
      		if (guessesLeft > 0)
      		{
    			guessesLeft -=1;
    		}
    	}
		var html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of:" +
        "<p>wins: " + 
        wins + 
        "</p>" +
        "<p>losses: " + 
        losses + 
        "</p>"+
		"<p>guesses left: " + 
        guessesLeft + 
        "</p>"+
		//"<p>TEXT: " + //for testing computer guess
        //text + 
        //"</p>"+
		"<p>You Pressed: " + 
        userGuess + 
        "</p>";
	
		document.querySelector('#game').innerHTML = html;
	}
</script>
</body>
</html>