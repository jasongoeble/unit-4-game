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

//initialize gameEnding value to 1, which means the game is not over
//when gameEnding = 2 the game is over because the guess is > goal
//when gameEnding = 3 the game is over because the guess = goal
var gameEnding = 1;

//variables to track wins and losses
var wins;
var loss;

//define currentGuess and addGuess as global variables
//will be used every time a .click event on a crystal occurs
//initializing the global variables as 0
var currentGuess = 0;

function isGameOver()
{
    if (currentGuess < goal)
        {
            return 1;
        }
    else if (currentGuess > goal)
        {
            return 2;
        }
    else if (currentGuess == goal)
        {
            return 3;
        }
    else
        {}
}

do 
{

    //set value for number to be guessed
    var goal = numberToGuess();

    //set value for each of the crystals
    var crystal1Value = crystalValue();
    var crystal2Value = crystalValue();
    var crystal3Value = crystalValue();
    var crystal4Value = crystalValue();

    //insert the number goal to the page
    $("#objective").html(goal);

    $("#crystal1").click(function()
    {
        currentGuess = currentGuess + crystal1Value;
        $("#yourGuess").html(currentGuess);
        isGameOver();
        if (isGameOver == 2)
            {
                loss = loss + 1;
                $("#lossCount").html(loss);
                gameEnding = 2;
            }
        else if (isGameOver == 3)
            {
                win = win + 1;
                $("#winCount").html(win);
                gameEnding = 3;
            }
        else
        {

        }
    })

    $("#crystal2").click(function()
    {
        currentGuess = currentGuess + crystal2Value;
        $("#yourGuess").html(currentGuess);
    })

    $("#crystal3").click(function()
    {
        currentGuess = currentGuess + crystal3Value;
        $("#yourGuess").html(currentGuess);
    })

    $("#crystal4").click(function()
    {
        currentGuess = currentGuess + crystal4Value;
        $("#yourGuess").html(currentGuess);
    })

} while (gameEnding = 1);

//i'd like to reset the game play once the game is over, and i feel like this is the logic that would do it
//but it isn't linked into the do while loop above...so i'm not sure if resetting the gameEnding value here 
//will have the desired effect of restarting the game
if (gameEnding == 2)
{
    alert("You have lost.");
    gameEnding = 1;
}

else if (gameEnding == 3)
{
    alert("You have won!");
    gameEnding = 1;
}

else{}


//--------------------------------------------------------
//pseudo code for game design

//on page load and document.ready = true :
 
//do {
    //restart function 
    //{
        //load number to be guessed
            //run randomn integer and push value to div for display
        //load number assignments to all 4 crystals
        //set current guess to 0 
    //}

    //listen for .click events for crystal images
        //on .click event
            //add crystal value to current guess
            //evaluate logic: 
                //if current guess < to be guessed
                    //if true 
                        //continue to listen for .click even
                    //if else current guess > to be guessed
                        //game is over
                        //add 1 to loss record
                        //alert user they have lost
                        //play game = 2
                            //upon alert close
                            //call restart function - play game = 1
                    //if else current guess = to be guessed
                        //game is over
                        //add 1 to win record
                        //alert user they have won
                        //play game = 2
                            //upon alert close
                            //call restart function - play game = 2
//} while (play game = 1)
