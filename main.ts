#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;

while(condition)
{
    let addTask = await inquirer.prompt(
        [
            {
                name: 'todo',
                type: 'input',
                message:"What do you want to add in your Todo List?"
            },
            {
                name: 'addMore',
                type: 'confirm',
                message: "Do you want to do more?",
                default: "false",
            }
        ]
    );
    
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos)
}
