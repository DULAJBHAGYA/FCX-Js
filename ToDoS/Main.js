const readline = require('readline');
const {
  getTasks,
  addTask,
  displayTasks,
  deleteTask,
  deleteAllTasks,
  updateTask,
  todolist
} = require('./todolistFunctions');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
        rl.question('Enter a task (type "done" to finish): ', (input) => {
          switch (input.toLowerCase()) {
            case 'done':
              console.log('Tasks entered:', todolist);
              executeAction();
              break;
            default:
              addTask(input);
              executeAction();
              break;
          }
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

executeAction();
