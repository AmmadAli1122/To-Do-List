#! /usr/bin/env node
import inquirer from "inquirer";
let toDos=[];
let condition = true
while(condition){
    let addTask = await inquirer.prompt([{
        name:"task",
        type:"input",
        message:"What Task Do You Want To Add In Your ToDo..?\n"
    },
    {
        name:"addMore",
        type:"confirm",
        message:"Do You Want To Add More Task In Your ToDo..?\n",
        default:"false"
    }
]);
toDos.push(addTask.task);
condition = addTask.addMore
console.log(toDos);
};