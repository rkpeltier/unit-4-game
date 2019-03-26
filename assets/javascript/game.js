$(document).ready(function() {

    //Computer's randomizer
    var computerCheck = Math.floor(Math.random() * 75 + 25);

    //Gem number randomizer
    var crystalCheck1 = Math.floor(Math.random() * 15 + 1);
    var crystalCheck2 = Math.floor(Math.random() * 15 + 1);
    var crystalCheck3 = Math.floor(Math.random() * 15 + 1);
    var crystalCheck4 = Math.floor(Math.random() * 15 + 1);

    //Win and Lose variables
    var win = 0;
    var lose = 0;
    //Variable to store numbers player adds when they click on some crystals
    var playerCounter = 0;

    //buttons
    $("#blue_gem").on('click', function() {
        playerCounter = playerCounter + crystalCheck1;
        winLose();
        $("#playerScore").text("Your total score is: " + playerCounter);
    });
    $("#green_gem").on('click', function() {
        playerCounter = playerCounter + crystalCheck2;
        winLose();
        $("#playerScore").text("Your total score is: " + playerCounter);
    });
    $("#red_gem").on('click', function() {
        playerCounter = playerCounter + crystalCheck3;
        winLose();
        $("#playerScore").text("Your total score is: " + playerCounter);
    });
    $("#yellow_gem").on('click', function() {
        playerCounter = playerCounter + crystalCheck4;
        winLose();
        $("#playerScore").text("Your total score is: " + playerCounter);
    });

    //Win/Lose text and display
    $("#win").text("Win: " + win);
    $("#lose").text("Lose: " + lose);
    
    $("#randomNumber").text(computerCheck);

    function reset() {
        computerCheck = Math.floor(Math.random() * 75) +25;
        crystalCheck1 = Math.floor(Math.random() * 15) +1;
        crystalCheck2 = Math.floor(Math.random() * 15) +1;
        crystalCheck3 = Math.floor(Math.random() * 15) +1;
        crystalCheck4 = Math.floor(Math.random() * 15) +1;
        playerCounter = 0;
        $("#randomNumber").text(computerCheck);
    }

    //Win and Lose function
    function winLose() {
        if (computerCheck == playerCounter) {
            alert("You Win!")
            win++;
            $("#win").text("Win: " + win);
            reset();
        } else if (computerCheck < playerCounter) {
            alert("Bummer. You lost.")
            lose++;
            $("#lose").text("Lose: " + lose);
            reset();
        }
    }


}) 
 