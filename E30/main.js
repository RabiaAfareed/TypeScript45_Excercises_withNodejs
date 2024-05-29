//creating a array
var userNames = ["Rabia", "Admin", "pariza", "shahzain", "sonay"];
//using for each loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello".concat(oneUser, ",\"would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",\"Thank you for logging in again."));
    }
});
