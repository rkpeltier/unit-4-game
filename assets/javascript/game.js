$(document).ready(function() {

    //Computer's randomizer
    var computerCheck = Math.floor(Math.random() * 75) +25;
    //Gem number randomizer
    var crystalCheck1 = Math.floor(Math.random() * 15) +1;
    var crystalCheck2 = Math.floor(Math.random() * 15) +1;
    var crystalCheck3 = Math.floor(Math.random() * 15) +1;
    var crystalCheck4 = Math.floor(Math.random() * 15) +1;

    //Win and Lose variables
    var win = 0;
    var lose = 0;
    //Variable to store numbers player adds when they click on some crystals
    var playerCounter = 0;

    //buttons
    $("#blue_gem").on('click', function() {
        playerCounter = playerCounter + crystalCheck1;
        $("#playerScore").text("Your total score is: " + playerCounter);
    });
    $("#green_gem").on('click', function() {
        playerCounter = playerCounter + crystalCheck2;
        $("#playerScore").text("Your total score is: " + playerCounter);
    });
    $("#red_gem").on('click', function() {
        playerCounter = playerCounter + crystalCheck3;
        $("#playerScore").text("Your total score is: " + playerCounter);
    });
    $("#yellow_gem").on('click', function() {
        playerCounter = playerCounter + crystalCheck4;
        $("#playerScore").text("Your total score is: " + playerCounter);
    });

    //It usually doesn't matter how you win or lose, but it does here
    $("#win").text("Win: " + win);
    $("#lose").text("Lose: " + lose);
    
    $("#randomNumber").text(computerCheck);

    function reset() {
        computerCheck = Math.floor(Math.random() * 75) +25;
        crystalCheck1 = Math.floor(Math.random() * 15) +1;
        crystalCheck2 = Math.floor(Math.random() * 15) +1;
        crystalCheck3 = Math.floor(Math.random() * 15) +1;
        crystalCheck4 = Math.floor(Math.random() * 15) +1;
        $("#playerScore").text(playerCounter)
        $("#randomNumber").text(computerCheck)
    }

    //Might have to separate out to different functions and call them under buttons OR
    //make an exception to not do anything if score is 0
    function winOrLose() {
        if (computerCheck == playerCounter) {
            alert("You Win!")
            win++;
            $("#win").text("Win: " + win);
            reset();
        } else {
            alert("Bummer. You lost.")
            lose++;
            $("#lose").text("Lose: " + lose);
            reset();
        }
    }

    winOrLose();




}) 
 