// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//Create a factory Function called makeContact(id, nameFirst, nameLast) 
function makeContact(id, nameFirst, nameLast) {
    return {      //returns a contact object
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
}


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        //given length function
        length: function() {
            return contacts.length;
        },
        
        //add contact function
        addContact: function() {
            Array.prototype.push.apply(contacts, Array.prototype.slice.call(arguments));
        },
        
        //find contact function
        //takes a full-name String, like 'Max Gaudin' 
        //returns the contact object if found in the contacts-list, or 
        //undefined if the fullName does not match any contacts in the list.
        findContact: function() {
        for (var i=0; i<contacts.length; i++){
         var fullName = `${contacts[i].nameFirst} ${contacts[i].nameLast}`;
        
            if (fullName.toLowerCase() === arguments[0].toLowerCase()){
                return contacts[i];
             } else {
                 return undefined;
             }
         }
         },
        
        //remove contact function
        //removeContact(contact): takes a contact object to be removed from the contact-list
        removeContact: function() {
         for (var i=0; i<contacts.length; i++){
            if (contacts[i] === arguments[0]){
               contacts.splice(i,1);
            }
          }   
        },
        
//         add a printAllContactNames() Function to your makeContactList() factory, so that the 
//  *         contact-list returned has an all() API. The printAllContactNames() Function should 
//  *         return a String formated with all the full-names of the separated 
//  *         with a line-break, like so:

        printAllContactNames: function() {
       var fullNamesArr = []; //create and array to store string of full names 
        for (var i=0; i < contacts.length; i++){
            //pull the first and last names from contact listby looping through the array
            //push them into an array of full names
            fullNamesArr.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`);
             }
            //join these full names and separate by a new line
            //return the names
       return fullNamesArr.join("\n");
         },
    };
 }
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
