#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("welcome to code with Quratulain in Number gussing game"));


const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer =await inquirer.prompt([

    {name:"userGuessNumber",
    type: "number",
    message: "please guess a number",
}
]);

if(answer.userGuessNumber === randomNumber){
    console.log("congratulation ! you guess a right number")
}else  {console.log("you gueesed rong number");}


