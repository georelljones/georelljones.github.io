/*OPERATORS
They perform actions on data. They take various forms to perform different actions. 
*/

console.log("OPERATORS:");
//1. Assignment Operators
//We use = (equals sign) to assign variables. It is known as the assignment operator
var myAssignmentOperator = "Equals Sign";

// *2. Arithmetic Operators
//Arithmetic Operators (+, -, *, /, and %) perform mathematical functions
//Order of operations applies as in typical mathematical equations
console.log(1+1); //adds two values
console.log(1-1); //subtracts two values
console.log(1*1); //multiplies two values
console.log(1/1); //divides two values
console.log(1%1); //returns the remainder of two values
//1++ adds 1 to the value; ++ can be before or after
//1-- subtracts 1 to the value; 
//using -- or ++ before the value increments the value then passes the result to the condition
//using -- or ++ after the value passes the current value then increments it

// *3. Comparison Operators
// Comparison operators compare two values and return true or false (boolean value)
console.log(1<2);

// *4. Logical Operators
//Logical are conditional operators and tests the truthiness of condtions
//&& is the AND condition, || is the OR condition, 
console.log(1<2 && 2>1);
console.log(1<2 || 2>1);

// *5. Unary Operators (!, typeOf, -)
//the ! is the band operator which returns the boolean reverse of a value
//for example if something is true you add the band operator to make it false
console.log(!(1<2));

//typeof operator returns the data type of as a string
console.log(typeof 7);//returns 'number'

//- is the negation operator
var ur = 100;
console.log(-ur); //returns -100

// *6. Ternary Operators (a ?b:c)
//The ternary operator uses 3 operands and tests a condition and determines which result to return
var gender = 'Male';
//the condition before the ? is the test condition. 
//the result immediately after the ? is the truthy return
//the result after the : is the falsy return
var restroom = (gender === "Male") ? "Mens" : "Ladies";
console.log(restroom); // "Mens"