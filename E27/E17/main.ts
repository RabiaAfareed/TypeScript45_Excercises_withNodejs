// creating a guest list array
let guestList = ["Rabia", "chandni","fatima", "ayesha"];

//making variable for those guest who cant come
let dontCome = guestList[0];

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
let middleIndex: number =Math.floor (guestList. length / 2);

//adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "irbaz");

//print message of updTED LIST
console.log("updated list of our guest");

//SENDING A INVITATION MESSAGE TO OUR GUEST ONE BY ONE WITH THEIR NAMES
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me?`));

//inform that only two guests invited to be a dinner
console.log("unfortunately, the dinner table wont arrive on time, so i can only invite two guests to dinner with me");

//using whileloop to remove guests from array untill any two names remain
while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} I cant invite you to dinner`);

}
//sending a invitation to the last two guests on the list
console.log("invitations to the last two guests");

guestList.forEach(Lasttwo => console.log(`luckily ${Lasttwo}, you are still invited to dinner`));
//removing last two guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List" ,guestList);