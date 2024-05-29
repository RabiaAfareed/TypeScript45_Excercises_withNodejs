var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array of countries and print its original ordrs
var countriesToVisit = ["china", "Denmark", "Brazil", "Argentina"];
console.log("originol order:", countriesToVisit);
//print thr array in albhabetical order with out modifiying the actual array list
console.log("Albhabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//show that the array is still in origional order
console.log("still in origional order:", countriesToVisit);
//print the array in reversed order with out modifying the actual array list
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
//show that the array is still in origional order
console.log("still in origional order:", countriesToVisit);
//we have changed the original array now
console.log("original array Reversed:", countriesToVisit.reverse());
//print the array to show that its back to its original order
console.log("Back to original order:", countriesToVisit.reverse());
//print the array to show that its order has been changed to albhabetical order now
console.log("sorted in Albhabetical order:", countriesToVisit.sort());
//we have changed the original array now in reverse order again
console.log("original array Reversed Again:", countriesToVisit.reverse());
