// Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting. 


//SOURCE CODE
console.log(multiplyNumbers(2,4));


const multiplyNumbers = function (number1,number2){
    return number1*number2;
}


//returns " ReferenceError: Cannot access 'multiplyNumbers' before initialization"