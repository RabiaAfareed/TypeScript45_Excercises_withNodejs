//making a array of countries and print its original ordrs
let countriesToVisit: string[] =["china", "Denmark", "Brazil","Argentina"];
console.log("originol order:", countriesToVisit);

//print thr array in albhabetical order with out modifiying the actual array list
console.log("Albhabetical Order:", [...countriesToVisit].sort());

//show that the array is still in origional order
console.log("still in origional order:",countriesToVisit);

//print the array in reversed order with out modifying the actual array list
console.log("Reverse order:",[...countriesToVisit].reverse());

//show that the array is still in origional order
console.log("still in origional order:",countriesToVisit);

//we have changed the original array now
console.log("original array Reversed:",countriesToVisit.reverse());

//print the array to show that its back to its original order
console.log("Back to original order:", countriesToVisit.reverse());

//print the array to show that its order has been changed to albhabetical order now
console.log("sorted in Albhabetical order:", countriesToVisit.sort());

//we have changed the original array now in reverse order again
console.log("original array Reversed Again:",countriesToVisit.reverse());
