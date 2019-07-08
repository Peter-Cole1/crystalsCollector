//Concept: 21. A random number will be generated as the goal number. Each crystal will have an hidden rng number assigned to it. Click the crystals to add up to 
//      the exact goal number. If that number is reached, the win value goes up by 1. If they go over, the loss value goes up by 1. 2 seconds after a win/loss,
//      reset the board while maintaining the win/loss values.

//Randomly generate a number as the goal number
    
    //math.floor(math.random()*x) will generate a number. Assign this value to the "goalNumber" div. Display the text with .innerHTML. 
    //Set "mainCounter" to value "0"

//-------------------VARIABLES--------------------------
    var mainCounterDisplay = document.getElementById('mainCounter');
    var goalNumberDisplay = document.getElementById('goalNumber');
    var winDisplay = document.getElementById('wins');
    var lossesDisplay = document.getElementById('losses');
    var goalNumber;
    var counterNumber;
    var wins = 0;
    var losses = 0;

    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;

    startGame();

//------------------------------------------------------

// idt this function does anything atm
function startGame()
{
    goalNumber = Math.floor(Math.random() * 20) + 25;
    counterNumber = 0;
    crystal1 = Math.floor(Math.random() * 9) + 1;
    crystal2 = Math.floor(Math.random() * 9) + 1;
    crystal3 = Math.floor(Math.random() * 9) + 1;
    crystal4 = Math.floor(Math.random() * 9) + 1;

    displayMainCounter();
    displayGoalNumber();
    displayWin();
    displayLosses();
}


console.log(crystal1, crystal2, crystal3, crystal4);
console.log(goalNumber);

function displayMainCounter(){
    mainCounterDisplay.innerHTML = counterNumber;
}

function displayGoalNumber(){
    goalNumberDisplay.innerHTML = goalNumber;
}

function displayWin(){
    winDisplay.innerHTML = wins;
}

function displayLosses(){
    lossesDisplay.innerHTML = losses;
}

//Randomly generate numbers for each of the crystals

    //math.floor(math.random()*x) to generate numbers for each crystal. Possibly set up condition where each crystal has a different number

//User will click on the crystals

    //.onclick funtions for each div containing each crystal. 
    //Perhaps to an on.hover thing to be fancy

//On click, the crystals will add their respective value to the main counter

    //When clicked, trigger function that adds contained value to the "mainCounter" value

function crystalClick(crystal)
{
    counterNumber += crystal;
    displayMainCounter();
    checkIfWin();
    console.log(counterNumber);
}




//If the main counter matches the goal number, the user will win, and the win counter will go up by 1

    //Set condition where if the "mainCounter" = "goalNumber", the "win" value adds 1 
function checkIfWin(){
    console.log("check win:");
    if (counterNumber == goalNumber) {
        wins += 1;
        alert("You won!");
        startGame();
    }

    if (counterNumber > goalNumber) {
        losses += 1;
        alert("You lost idiot");
        startGame();
    }
}
    

//if the main counter hits a number higher than the goal number, the user will lose, and the lose counter will go up by 1

    //Set condition where if the "mainCounter" > "goalNumber", the "loss" value adds 1

//after 2 seconds,
    //The main counter will reset to "0"
    //The goal number will produce a new rng value
    //Each crystal will generate a new rng value

        //Set function to change these values after a delay of 2 seconds using "setInterval", being triggered by the addition to the win/loss values
        