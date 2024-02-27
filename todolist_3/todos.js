const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todolist = [];

if (fs.existsSync('todolist.json')) {
  const data = fs.readFileSync('todolist.json');
  todolist = JSON.parse(data);
}

function saveTasks() {
  fs.writeFileSync('todolist.json', JSON.stringify(todolist));
}

function getTasks() {
  rl.question('Enter a task or type "done" to finish add tasks: ', (input) => {
    switch (input.toLowerCase()) {
      case 'done':
        saveTasks();
        console.log('Tasks entered:', todolist);
        executeAction();
        break;
      default:
        addTask(input);
        break;
    }
  });
}

function addTask(task, i = null) {
  const currentDate = new Date();
  const dateTime = currentDate.toLocaleString();
  const taskWithDateTime = { task, dateTime };

  if (i !== null && i >= 0 && i <= todolist.length) {
    todolist.splice(i, 0, taskWithDateTime);
  } else {
    todolist.push(taskWithDateTime);
  }

  console.log(`Task "${task}" added successfully.`);
  getTasks();
}

function displayTasks() {
  console.log("To do list -");
  for (let i = 0; i < todolist.length; i++) {
    const { task, dateTime } = todolist[i];
    console.log(`${i + 1} - ${task} (Added: ${dateTime})`);
  }
  executeAction();
}

function deleteTask(i) {
  try {
    if (i < 0 || i >= todolist.length) {
      throw new Error("Invalid index");
    }
    const deletedTask = todolist.splice(i, 1);
    console.log("Task deleted successfully:", deletedTask);
    saveTasks();
    executeAction();
  } catch (error) {
    console.log(error.message);
    executeAction();
  }
}

function deleteAllTasks() {
  todolist = [];
  saveTasks();
  console.log("All tasks deleted.");
  executeAction();
}

function updateTask(i, newTask) {
  try {
    if (i < 0 || i >= todolist.length) {
      throw new Error("Invalid index");
    }
    todolist[i].task = newTask;
    console.log(`Task at index ${i + 1} updated to "${newTask}"`);
    saveTasks();
    executeAction();
  } catch (error) {
    console.log(error.message);
    executeAction();
  }
}

function executeAction() {
  rl.question('Enter action (display/delete/deleteAll/update/add/done): ', (action) => {
    switch (action.toLowerCase()) {
      case 'display':
        displayTasks();
        break;
      case 'delete':
        rl.question('Enter the index of the task to delete: ', (i) => {
          deleteTask(parseInt(i) - 1);
        });
        break;
      case 'deleteall':
        deleteAllTasks();
        break;
      case 'update':
        rl.question('Enter the index of the task to update: ', (i) => {
          rl.question('Enter the new task: ', (newTask) => {
            updateTask(parseInt(i) - 1, newTask);
          });
        });
        break;
      case 'add':
        rl.question('Enter the task to add: ', (task) => {
          rl.question('Enter the index to add the task (leave blank to add at the end): ', (i) => {
            addTask(task, parseInt(i) - 1);
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
