/*FUNCTIONS
*1. The two phases to using functions: 
*First we must declare the function.*/
console.log("FUNCTIONS:")
function myFunction (){ //we use the function keyword and () to hold the parameters; we also use {} for the body
console.log("It's almost over!");
}
/*Next we can execute by calling or invoking the function as follows*/
myFunction();
/*


*2. What’s the difference between a function’s parameters and arguments PASSED to a function?
*The parameters are whats placeholders for the arguments which will be input or submitted outside of the function. 
*The arguments replace the parameters once the function is ran. 
*/
function my2ndFunction(tiredRating){ 
console.log("I'm tired as" + tiredRating + "!");
}
my2ndFunction(' Hell');

//3. What’s the syntax for a NAMED function?
//the syntax is as follows with 
function add(numOne, numTwo){ //add is the name of the function
    return numOne + numTwo;
}

//4. How do we assign a function to a variable?
//You assign a function to a variable as follows:
const sum = add(2,2);//sum now equals the function with 2 and 2 as the arguments
//the return is 4 when you use the variable sum


/*5. Functions can OPTIONALLY take inputs, and OPTIONALLY 
return a single value. 
How do we specify inputs, and how do we specify outputs?
The inputs are passed to the function by calling the function and replacing the parameters
with specific arguments or user selected data for the function to run. You use the name of th function
or the variable name it is assigned to in order to execute the function. The arguments go in paratheses following 
the name.The output is returned using a return statement */ 
function name(arguments){
}

/*6. Scope: Functions can see and modify variables in parent 
or global scopes.  The inverse is NOT true.
Scope defines what variables you have access to. 
There are two kinds of scope – global scope and local scope.
Global scope is if a variable is declared outside all functions or curly braces ({}), 
it is defined in the global scope.*/
const hello = 'Hello People!'
function sayHello () {
  console.log(hello)
}
console.log(hello) //prints 'Hello People!'
sayHello() //prints 'Hello People!'

/*Local Scope Variables are usable only in a specific part of your code are considered to be in a local scope. 
These variables are also called local variables.*/
function sayHello () {
  const hello = 'Hello People!'
  console.log(hello)
}
sayHello() //prints 'Hello People!'
console.log(hello) // Error hello is undefined

/*7. Closures: Functions form closures around the data they house.  
If an object returned from the Function and is held in memory 
somewhere (referenced), that closure stays ALIVE, and data can 
continue to exist in these closures! (See: our meeting-room app 
for an example!)

A closure is an inner function that has access to the outer (enclosing) function’s variables scope. 
The closure has three scope chains: it has access to its own scope (variables defined between its 
curly brackets), it has access to the outer function’s variables, and it has access to the global variables.
The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. 
The inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.
*/

function showName (firstName, lastName) { 
var nameIntro = "My name is ";
    // this inner function has access to the outer function's variables, including the parameter
function makeFullName () {         
return nameIntro + firstName + " " + lastName;     
}

return makeFullName (); 
} 

console.log(showName("Georell", "Jones")); // My name is Georell Jones 