let guestList = ["Rabia","chandni","fatimah","ayesha"];

let dontCome = guestList[0];

console.log(dontCome, "nhi aa skti");

guestList.splice(0, 1, "Pariza");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));

