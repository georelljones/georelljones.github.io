/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/
console.log("VARIABLES:")
// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*2. VAR, LET, CONST
*We use the keywords 'var', const and let to declare and assign variables.
*We use camel case to name variables. 
*When using var the variable can be changed. If it's in the function, 
*it's within the function scope and outside of the function it is in the global scope. 
*var - variables are hoisted to the top of the function scope.*/
var myVarVariable = 1;


/*We use 'let' to declare variables in blocked scopes. That refers to variables in 
*if statements, loops and functions. let's are not hoisted to top of the function. 
*/
let myLetVariable2 = 2;

/*We use const to declare and assign variables as constants. 
*These have to be assigned a value at declaration and cannot be re-assigned.
*Constants are also block scope variables. They are scoped in if statements, loops and functions.
*They are also not hoisted to the top of the blocks they are created in. Some formatting standards
*suggest we use all CAPS for constants. 
*/
const myConstVariable3 = 3;


/*3. Hoisting
*Variable Hoisting refers to when a variable is available in the code. 
*Dependent on the type of keyword used, the variable may be available prior to 
*being the declared. 
*/

// Outputs: undefined
console.log(declaredLater);

var declaredLater = "Now it's defined!";

// Outputs: "Now it's defined!"
console.log(declaredLater);