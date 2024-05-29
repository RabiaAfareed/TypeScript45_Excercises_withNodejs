import inquirer from "inquirer";
import chalk from "chalk";
//initialize user pin code
let myBalance = 5000;
let myPin = 1234;
//print wellcome message
console.log(chalk.blue("\n \twellcome to Rabia fareed - ATM machine\n"));
let pinAnswers = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
]);
if (pinAnswers.pin === myPin) {
    console.log(chalk.green("\npin is correct, login successfully\n"));
    // console.log(`current account balance is ${myBalance}`)
    let operatinAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withdraw Amount", "check Balance"]
        }
    ]);
    if (operatinAns.operation === "withdraw Amount") {
        let WithdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdrawal method",
                choices: ["fast cash", "Enter Amount"]
            }
        ]);
        if (WithdrawAns.withdrawMethod === "fast cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "select Amount:",
                    choices: [1000, 2000, 5000, 10000, 20000, 500000]
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(`${fastcashAns.fastcash} withdraw successfully`);
                console.log(`your remaining balance is: ${myBalance}`);
            }
            if (WithdrawAns.withdrawMethod === "Enter Amount") {
                let amountAns = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "enter the amount to withdraw:"
                    }
                ]);
                if (amountAns.amount > myBalance) {
                    console.log("Insufficient Balance");
                }
                else {
                    myBalance -= amountAns.amount;
                    console.log(`${amountAns.amount} Withdraw succesfully`);
                    console.log(`your remaining Balance is: ${myBalance}`);
                }
            }
        }
        else if (operatinAns.operation === "check Balance") {
            console.log(`your Account Balance is ${myBalance}`);
        }
    }
    else {
        console.log(chalk.red("Pin is Incorrect try Again!"));
    }
}
