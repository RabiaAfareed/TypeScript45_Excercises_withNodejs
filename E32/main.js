//array of current users
var current_users = ["Rabia", "shahzain", "Pariza", "sonay", "Irbaz"];
//array of new users
var New_users = ["ayesha", "shahzain", "fatima", "Ali", "pariza"];
//loop through new users to check for users name avability
New_users.forEach(function (new_one_user) {
    //making a condition for usernames already exist and save in our condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //print different messages using if else condition
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This user name ".concat(new_one_user, " is available"));
    }
});
