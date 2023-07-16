// Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable  hoisting.


// SOURCE CODE
{

    console.log(var1)
    console.log(var2)
    console.log(var3)


let var1= "sharma "
var var2= "miku "
const var3= "subha "


console.log(var1)
console.log(var2)
console.log(var3)


}


// if we try to log the value before assign then it throw an error named "ReferenceError: Cannot access 'var1' before initialization"


// but it is fine to console the value after initialization