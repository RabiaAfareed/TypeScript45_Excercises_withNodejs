//array of current users
let current_users = ["Rabia","shahzain","Pariza","sonay","Irbaz"]

//array of new users
let New_users = ["ayesha","shahzain","fatima","Ali","pariza"]

//loop through new users to check for users name avability
New_users.forEach(new_one_user => {
    //making a condition for usernames already exist and save in our condition variable
    let our_condition =current_users.some (current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    //print different messages using if else condition
    if (our_condition){
          console.log(`sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This user name ${new_one_user} is available`)
    }
})