/*LOOPS
*1. Explain while, for, and for-in loops
*While loops perform a function and unknown number of times until a particular condition is met. 
*/
console.log("LOOPS:")
while (i<=3){ //the condition is true until i is greater/equal to 3
i++;
console.log("This is !LIT!");
}
//for loops allow you to loop through a block of code a number of times. 

var i;
for (i = 0; i < 4; i++) {
  console.log(i);
}

/*2. Be able to loop any number of times, 
*forward counting up to some limit, backward counting down to 0
*/
var i;
for (i = 4; i >0; i--) {
  console.log(i);
}

/*3. Loop over an Array, forwards and backwards.
We loop over an array with a for loop and use different conditions to do so.
*/
//FORWARDS LOOPING
var arr = [1, 2, 3]
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//BACKWARDS LOOPING
var arr = [1, 2, 3];
for(var i =  arr.length-1 ; i >= 0; i--) {
    console.log(arr[i]);
}

//4. Loop over an Object
// We use for in loops to loop over objects
let myHouse = {
  color: 'white',
  bedrooms: '5',
  baths: '4.5',
  pool: 'A wish!'
};

for (let key in myHouse) {
  console.log(`${key} is ${myHouse[key]}`);
}