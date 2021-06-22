function divideBy(firstNumber) {
    return function(secondNumber){
        return secondNumber / firstNumber;
    };
}

function addby(firstNumber){
    return function(secondNumber){
        return firstNumber + secondNumber;
    };
}

addBy100 = addby(100);
addBy1000 = addby(1000);
divideBy10 = divideBy(10);
divideBy100 = divideBy(100);

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));