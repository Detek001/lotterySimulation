
function getNumbers() {

    //load Data from Localstorage 
    var keyOne = localStorage.getItem("numbers");
    var keyTwo = localStorage.getItem("superNum");

    //create random Numbers 
    var randomNumbers = generateNums(50,6);
    var randomSuperNumber = generateSNum();

    //Counter, that will count the amount of equal numbers 
    var counter = 0;

    //Container that will help to transform the characters of the numbers in an Array
    var containerstr = "";
    var container = [];

    //for-loop to get the elements in an Array and remove the commas 
    for (let i = 0; i<keyOne.length;i++){
        if (keyOne[i] == ","){
            container.push(containerstr);
            containerstr="";
        } else {
            containerstr += keyOne[i];                
            }
        }

    //This is necessary to put the last Item in the container
    container.push(containerstr);

    //Put the randomNumbers in the HTML-DOC
    for (let i= 0; i < randomNumbers.length;i++) {
        document.getElementsByClassName("winNums")[i].innerHTML = randomNumbers[i];
        document.getElementsByClassName("winNums")[i].style.color = "black";  // make the Nums black, after they get green in the previous game.
    }
    //Put the randomSuperNumber in the HTML-DOC
    document.getElementById("sNum").innerHTML = randomSuperNumber; 
    document.getElementById("sNum").style.color = "black";   // make the Num black, after it gets green in the previous game.

    
    //Checks the amount of equal numbers
    for (let i= 0; i<container.length; i++) {
        for (let j = 0; j<randomNumbers.length;j++){
            if(container[i] == randomNumbers[j]) {
                counter += 1;
                document.getElementsByClassName("winNums")[j].style.color = "green";
                
                if (keyTwo == randomSuperNumber) {
                    document.getElementById("sNum").style.color= "green";
                }
            } 
        }        
    }

    console.log("Zahlen: " + keyOne);
    console.log("Superzahl: " + keyTwo);
    console.log("Counter: " + counter);
    return {randomSuperNumber, counter,keyTwo};
}

function generateNums (nRange, amountRandom ) {
    const rangeArray = [];
    var helperArray = [];

    //This creates an array, that is needed to take randomNumbers
    for(let i = 1; i <nRange;i++){
        rangeArray.push(i);
    }
    //This takes random numbers from the filled array in the previous loop
    for (let i=0; i<amountRandom; i++) {
        var randomItem = rangeArray[Math.floor(Math.random()*rangeArray.length)];
        var position = rangeArray.indexOf(randomItem);
        rangeArray.splice(position,1);
        helperArray.push(randomItem);
    
    //This sorts the array
    helperArray = helperArray.sort(function(a,b) {
        return a-b; 
        });
    }
    return helperArray;
}

function generateSNum () {
    var sNumberArray = [];

    //This creates an array, that is needed to take a superRandomNumber
    for(let i =0; i<10;i++) {
        sNumberArray.push(i);
    }
    //This takes the superRandomNumber from the filled array in the previous loop
    var sNumber = sNumberArray[Math.floor(Math.random()*sNumberArray.length)];

    return sNumber;
}

function calculateWin() {
    let data = getNumbers();
    let counter = data.counter;
    let sNum = data.keyTwo;
    let sz = data.randomSuperNumber;

    if (counter == 6 && sz == sNum) {
        document.getElementById("winSum").innerHTML = "10.000.000,00 €";
    } else if (counter == 6 && sz != sNum ) {
        document.getElementById("winSum").innerHTML = "1.300.000,00 €";
    } else if (counter == 5  && sz == sNum) {
        document.getElementById("winSum").innerHTML = "15.600,00 €";
    } else if (counter == 5 && sz != sNum) {
        document.getElementById("winSum").innerHTML = "6.000,00 €";
    } else if (counter == 4  && sz == sNum) {
        document.getElementById("winSum").innerHTML = "162,50 €";
    } else if (counter == 4 && sz != sNum) {
        document.getElementById("winSum").innerHTML = "56,50 €";
    } else if (counter == 3  && sz == sNum) {
        document.getElementById("winSum").innerHTML = "16,50 €";
    } else if (counter == 3 && sz != sNum) {
        document.getElementById("winSum").innerHTML = "12,00 €";
    } else if (counter == 2  && sz == sNum) {
        document.getElementById("winSum").innerHTML = "6,00 €";
    } else {
        document.getElementById("winSum").innerHTML = "0,00 €";
    }
}

//This function is called, when the player want have new numbers
function newNums() {
        localStorage.clear;
        window.location.assign("main.html");  //It takes the player to the main.html Doc
}

