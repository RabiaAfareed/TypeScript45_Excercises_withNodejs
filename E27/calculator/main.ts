#! /usr/bin/env node

import inquirer from "inquirer";

//printing a wellcome message
console.log("\n\twellcome to \`rabiafareed\ - CLI simple calculator\n");

//asking questions from users throgh inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number" ,type: "number", name:"firstNumber"},
    {message: "Enter Second Number" , type:"number",name: "secondNumber"},
    {
        message: "select one operator to perform operations",
type: "list",
    name: "operator",
    choices: ["addition", "subtractions", "multiplication","division"],
    },
]);

//conditional statments if else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "subtractions"){
    console.log(answers.firstNumber - answers.secondNumber);
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber);
}
else if(answers.operator === "division"){
    console.log(answers.firstNumber / answers.secondNumber);
}else{
    console.log("invalid input");
}