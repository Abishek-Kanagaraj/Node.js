const readline = require('node:readline')
// const inquirer = require('inquirer');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("What's your name?",name=>{
    console.log(`Hi ${name}`);
    rl.close();
});

// const questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?",
//   },
// ];
// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers.name}!`);
// });