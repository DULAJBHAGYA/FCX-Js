const readline = require('readline');
const {
  addTask,
  displayTasks,
  deleteTask,
  deleteAllTasks,
  updateTask,
  todolist
} = require('../todo/todos.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getTasks() {
  rl.question('Enter a task (type "done" to finish): ', (input) => {
    switch (input.toLowerCase()) {
      case 'done':
        console.log('Tasks entered:', todolist);
        executeAction();
        break;
      default:
        addTask(input);
        getTasks();
        break;
    }
  });
}

function executeAction() {
  rl.question('Enter action (display/delete/deleteAll/update/add/done): ', (action) => {
    switch (action.toLowerCase()) {
      case 'display':
        displayTasks();
        executeAction();
        break;
      case 'delete':
        rl.question('Enter the index of the task to delete: ', (i) => {
          deleteTask(parseInt(i) - 1);
          executeAction();
        });
        break;
      case 'deleteall':
        deleteAllTasks();
        executeAction();
        break;
      case 'update':
        rl.question('Enter the index of the task to update: ', (i) => {
          rl.question('Enter the new task: ', (newTask) => {
            updateTask(parseInt(i) - 1, newTask);
            executeAction();
          });
        });
        break;
      case 'add':
        rl.question('Enter the task to add: ', (task) => {
          rl.question('Enter the index to add the task (leave blank to add at the end): ', (i) => {
            addTask(task, parseInt(i) - 1);
            executeAction();
          });
        });
        break;
      case 'done':
        console.log('Exiting ツ');
        rl.close();
        break;
      default:
        console.log('Invalid action.');
        executeAction();
        break;
    }
  });
}

getTasks(); 
