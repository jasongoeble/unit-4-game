$(document).ready(function() {

//initialize gameEnding value to 1, which means the game is not over
//when gameEnding = 2 the game is over because the guess is > goal
//when gameEnding = 3 the game is over because the guess = goal
var gameEnding = 1;

//variables to track wins and losses
var wins=0;
var loss=0;

//display state of wins and losses to the main page
$("#lossCount").html("Losses:   "+loss);
$("#winCount").html("Wins:  "+wins);

//define currentGuess as global variables
//will be used every time a .click event on a crystal occurs
//initializing the global variables as 0
var currentGuess = 0;

//set value for number to be guessed
var goal = 0;

//set value for each of the crystals
var crystal1Value = 0;
console.log("crystal1 value: "+crystal1Value);
var crystal2Value = 0;
console.log("crystal2 value: "+crystal2Value);
var crystal3Value = 0;
console.log("crystal3 value: "+crystal3Value);
var crystal4Value = 0;
console.log("crystal4 value: "+crystal4Value);

//the following are the on click handlers for each crystal
$("#crystal1").click(function()
{
    currentGuess = currentGuess + crystal1Value;
    $("#yourGuess").html(currentGuess);
    gameChecker=isGameOver(currentGuess);

    if (gameChecker === 2)
        {
            loss = loss + 1;
            $("#lossCount").html("Losses:   "+loss);
            alert("You lost!");
            gameEnding = 2;
            gamePlay();
        }
    if (gameChecker === 3)
        {
            wins = wins + 1;
            $("#winCount").html("Wins:  "+wins);
            alert("You have won!");
            gameEnding = 3;
            gamePlay();
        }
    else
    {

    }
})

$("#crystal2").click(function()
{
    currentGuess = currentGuess + crystal2Value;
    $("#yourGuess").html(currentGuess);
    gameChecker=isGameOver(currentGuess);

    if (gameChecker === 2)
        {
            loss = loss + 1;
            $("#lossCount").html("Losses:   "+loss);
            alert("You lost!");
            gameEnding = 2;
            gamePlay();
        }
    if (gameChecker === 3)
        {
            wins = wins + 1;
            $("#winCount").html("Wins:  "+wins);
            alert("You have won!");
            gameEnding = 3;
            gamePlay();
        }
    else
    {

    }
})

$("#crystal3").click(function()
{
    currentGuess = currentGuess + crystal3Value;
    $("#yourGuess").html(currentGuess);
    gameChecker=isGameOver(currentGuess);

    if (gameChecker === 2)
        {
            loss = loss + 1;
            $("#lossCount").html("Losses:   "+loss);
            alert("You lost!");
            gameEnding = 2;
            gamePlay();
        }
    if (gameChecker === 3)
        {
            wins = wins + 1;
            $("#winCount").html("Wins:  "+wins);
            alert("You have won!");
            gameEnding = 3;
            gamePlay();
        }
    else
    {

    }
})

$("#crystal4").click(function()
{
    currentGuess = currentGuess + crystal4Value;
    $("#yourGuess").html(currentGuess);
    gameChecker=isGameOver(currentGuess);

    if (gameChecker === 2)
        {
            loss = loss + 1;
            $("#lossCount").html("Losses:   "+loss);
            alert("You lost!");
            gameEnding = 2;
            gamePlay();
        }
    if (gameChecker === 3)
        {
            wins = wins + 1;
            $("#winCount").html("Wins:  "+wins);
            alert("You have won!");
            gameEnding = 3;
            gamePlay();
        }
    else
    {

    }
})
//here is where the on click handlers end


//randomizer function that returns an integer between the min and max value passed to it
function getRndInteger(min, max) {
    return Math.floor((Math.random() * (max - min) ) + min);
}

function numberToGuess()
{   
    return getRndInteger(19,120);
}

function crystalValue()
{
    return getRndInteger(1,12);
}

function isGameOver(guessingValue)
{
    if (guessingValue < goal)
        {
            return 1;
        }
    if (guessingValue > goal)
        {
            return 2;
        }
    if (guessingValue === goal)
        {
            return 3;
        }
    else
        {}
}

function gamePlay()
{
    //set gameChecker vairable to 0 at the start of every game
    var gameChecker = 0;

    //set value for each of the crystals at the start of every game
    crystal1Value = crystalValue();
    console.log("crystal1 value: "+crystal1Value);
    crystal2Value = crystalValue();
    console.log("crystal2 value: "+crystal2Value);
    crystal3Value = crystalValue();
    console.log("crystal3 value: "+crystal3Value);
    crystal4Value = crystalValue();
    console.log("crystal4 value: "+crystal4Value);
    
    //set the value of the number to be guessed at the start of every game
    goal = numberToGuess();
    
    //default the currentGuess variable to 0 at the start of every game
    currentGuess=0;
    console.log("currentGuess value: "+currentGuess);
    
    //display the currentGuess value of 0 to the window every time a new game starts
    $("#yourGuess").html(currentGuess);

    //insert the number goal to the page every time a new game starts
    $("#objective").html(goal);

}

//this starts the game upon page load
gamePlay();

});