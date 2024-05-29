var userNames = ["Rabia", "pariza", "Admin", "shahzain", "sonay"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty we need to find some users!");
}
else {
    //using for each loop on array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello".concat(oneUser, ",\"would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ",\"Thank you for logging in again."));
        }
    });
}
