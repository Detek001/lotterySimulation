
var superNum = 0;
var numbers = [];

function appendNumbers(number) {
    // this is for undoing a previous selection
    if (numbers.includes(number)) {
            var position = numbers.indexOf(number);
            numbers.splice(position,1);
            document.getElementsByTagName("TD") [number-1].innerHTML = number;      
    } else {
        if (numbers.length == 6){  //This is to ensure that the player can't select more than 6 numbers
             alert("Sie haben bereits alle Zahlen gewählt");
            return numbers;
        } else {
            numbers.push(number);
            document.getElementsByTagName("TD") [number-1].innerHTML = "X";
            }
            return numbers;
    } 
}

function superNums(operation) {
    if (operation == "+") {  
        if (superNum < 9) {
            superNum += 1;
            document.getElementById('num').innerHTML = superNum;
        } else {
            return superNum;
        }
    } else if (operation == "-") {
        if (superNum > 0) {
            superNum -= 1;
            document.getElementById('num').innerHTML = superNum;
        }
    } else {
        return superNum;
    }
}

function startLottery() {
    if (numbers.length == 6) {
        localStorage.setItem("numbers", numbers);
        localStorage.setItem("superNum", superNum);
        window.location.assign("result.html");
    } else {
        alert("Es fehlen noch "+(6 - numbers.length) + " Zahlen");
    }
}









