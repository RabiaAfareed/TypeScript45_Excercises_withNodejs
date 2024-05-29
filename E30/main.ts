//creating a array
let userNames = ["Rabia","Admin","pariza","shahzain","sonay"];

//using for each loop on array
userNames.forEach(oneUser=>{
    if(oneUser==="Admin"){
        console.log(`Hello${oneUser},"would you like to see a status report?`);
    }else {
        console.log(`Hello ${oneUser},"Thank you for logging in again.`)
    }
})