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
    $("#blue_gem").click();
    $("#green_gem").click();
    $("#red_gem").click();
    $("#yellow_gem").click();

    //It usually doesn't matter how you win or lose, but it does here
    $("#win").text(win);
    $("#lose").text(lose);

    function reset() {
        computerCheck = Math.floor(Math.random() * 75) +25;
        crystalCheck1 = Math.floor(Math.random() * 15) +1;
        crystalCheck2 = Math.floor(Math.random() * 15) +1;
        crystalCheck3 = Math.floor(Math.random() * 15) +1;
        crystalCheck4 = Math.floor(Math.random() * 15) +1;
        $("#playerScore").text(playerCounter)
        $("#randomNumber").text(computerCheck)
    }

    function win() {
        alert("You Win!")
        win++;
        $("#win").text(win);
        reset();
    }

    function lose() {
        alert("Bummer. You lost.")
        lose++;
        $("#lose").text(lose);
        reset();
    }

    




}) 
 