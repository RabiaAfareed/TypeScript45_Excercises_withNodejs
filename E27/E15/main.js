var guestList = ["Rabia", "chandni", "fatimah", "ayesha"];
var dontCome = guestList[0];
console.log(dontCome, "nhi aa skti");
guestList.splice(0, 1, "Pariza");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
