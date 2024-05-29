// creating a guest list array
var guestList = ["Rabia", "chandni", "fatima", "ayesha"];
//making variable for those guest who cant come
var dontCome = guestList[0];
//print the name of guest who cant come
console.log(dontCome, "nhi aa skti hain");
//add or remove guest from guest list array
guestList.splice(0, 1, "pariza");
//message print for bigger table
console.log("Good news we have found a bigger table for a dinner");
//adding a new value at starting index of array
guestList.unshift("shahzain");
//adding a new value ending index of array
guestList.push("sonay");
//get a  middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "irbaz");
//print message of updTED LIST
console.log("updated list of our guest");
//SENDING A INVITATION MESSAGE TO OUR GUEST ONE BY ONE WITH THEIR NAMES
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me?")); });
