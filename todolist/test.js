const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todolist = [];

function getUserInput() {
  rl.question('Enter something (type "done" to finish): ', (input) => {
    if (input.toLowerCase() === 'done') {
      console.log('You entered:', todolist);
      rl.close();
    } else {
      todolist.push(input);
      getUserInput();
    }
  });
}

getUserInput();

console.log(" ");

function displayTasks() {
  console.log("To do list -");
  for (let i = 0; i < todolist.length; i++) {
    const task = todolist[i];
    console.log(`${i + 1} - ${task}`);
  }
  handleAction();
}

displayTasks();
