$(document).ready(function()    {

    var desiredNumber= Math.floor(Math.random() * 101 + 19)

    $('#matchingNumber').text(desiredNumber);

    var wins = 0;
    var losses = 0;
    var totalValue = 0;

    $("#amountOfWins").text(wins);
    $("#amountOfLosses").text(losses);
    
    var redCrystalValue= Math.floor(Math.random() * 11+ 1)
    var blueCrystalValue= Math.floor(Math.random() * 11+ 1)
    var yellowCrystalValue= Math.floor(Math.random() * 11+ 1)
    var greenCrystalValue= Math.floor(Math.random() * 11+ 1)

    function reset()    {
        desiredNumber = Math.floor(Math.random() * 101 + 19)
        console.log(desiredNumber)
        $("#matchingNumber").text(desiredNumber);
    var redCrystalValue= Math.floor(Math.random() * 11+ 1);
    var blueCrystalValue= Math.floor(Math.random() * 11+ 1);
    var yellowCrystalValue= Math.floor(Math.random() * 11+ 1);
    var greenCrystalValue= Math.floor(Math.random() * 11+ 1);
    
    totalValue = 0;
    $("#resultTotal").text(totalValue);
}

    function win()  {
    alert ("You have matched our number!");
        wins++;
        $("#amountOfWins").text(wins);
        reset();
    }
    function lose() {
    alert ("hmm. Better luck next time.");
        losses++;
        $("#amountOfLosses").text(losses);
        reset()
    }

    $("#red-crystal").on("click", function()  {
    totalValue = totalValue + redCrystalValue;
        console.log("New totalValue" + totalValue);
     $("#resultTotal").text(totalValue);
    
     if (totalValue == desiredNumber)   {
        win();
    }
     else if (totalValue > desiredNumber)   {
        lose();
    }
    })

    $("#blue-crystal").on("click", function()  {
    totalValue = totalValue + blueCrystalValue;
        console.log("New totalValue" + totalValue);
    $("#resultTotal").text(totalValue);
        
    if (totalValue == desiredNumber)   {
        win();
    }
    else if (totalValue > desiredNumber)   {
        lose();
    }
    })

    $("#yellow-crystal").on("click", function()  {
    totalValue = totalValue + yellowCrystalValue;
        console.log("New totalValue" + totalValue);
    $("#resultTotal").text(totalValue);
    
    if (totalValue == desiredNumber)   {
        win();
    }
    else if (totalValue > desiredNumber)   {
        lose();
    }
    })

    $("#green-crystal").on("click", function()  {
    totalValue = totalValue + greenCrystalValue;
        console.log("New totalValue" + totalValue);
     $("#resultTotal").text(totalValue);
    
    if (totalValue == desiredNumber)   {
        win();
    }
    else if (totalValue > desiredNumber)   {
        lose();
    }
    });

});