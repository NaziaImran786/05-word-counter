#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let question = await inquirer.prompt(
    {
       name: "ans",
       type: "input",
       message: chalk.redBright.bold("Please enter your english paragraph!")

    }  
)

let words = (question.ans).trim().split(" ")
console.log(chalk.yellowBright.bold(`We have ${words.length} word in this sentance.`));

let char_count = words.join("")
console.log(chalk.greenBright.bold(`we have ${char_count.length} character in this sentance.`));



