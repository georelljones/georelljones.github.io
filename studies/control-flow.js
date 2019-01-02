/*CONTROL FLOW
*We use control flow to make decisions in code. This is our method of asking true or false. 
*By answering these conditions we can determine which code to process in what order. 
*These are conditional statements or if statements. We also use switch statements to do the same. 
*/

//1. IF
// You use if as a method of beginning your conditional statement. It has a test condition,
// followed by the body or action to be taken if the condition is true. 
if (1<2){
    console.log("I'm getting the hang of this coding thing!");
}

//2. ELSE-IF
// We use else if to give an alternative body/action if the first condition is not true
else if (2>1){ //executes is the first condition is false
    console.log("At least I know basic math!");
}
//3. ELSE
// Else is the default statement when both conditions are not met. 
else {
    console.log("To hell with it, I'm going back to Pre-K!");
}


/*4. SWITCH
*Switch statements are very similar to if statements but can provide a more efficient code writeup
*and less text. 
*After the input expression is evaluated the case that is true is executed. 
*Othwerwise, the default case is ran. Each case is stopped by a break statement.
*/
var sleep = '2';

switch (sleep) {
    case '2':
        console.log("The Walking Dead!")
        break;
    case '3':
        console.log("I can keep going!") 
          break;
    case '4':
        console.log("I can run a marathon!")
          break;
    case '5':
        console.log("Mood = Conquer The World!")
          break;
}

