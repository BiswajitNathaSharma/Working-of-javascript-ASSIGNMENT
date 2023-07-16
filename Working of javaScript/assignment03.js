// Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to  demonstrate variable hoisting. 


// SOURCE CODE
function sum(number1, number2){
    console.log(sum)
    var sum = number1+ number2;
    return sum
}
console.log(sum(5,4))

// console of the function returns undefined

// console of out side the function prints 9