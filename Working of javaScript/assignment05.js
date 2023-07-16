// Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.




// SOURCE CODE
{
    // console.log(name)

    let name="sharma"

    console.log(name)    
}


// if we try to log the value before assign then it throw an error named "ReferenceError: Cannot access 'name' before initialization"

// but it is fine to console the value after initialization
