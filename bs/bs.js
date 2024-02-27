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
  todolist.sort();
}

function saveTasks() {
  todolist.sort();
  fs.writeFileSync('todolist.json', JSON.stringify(todolist));
}

function getTasks() {
  rl.question('Enter a task or type "done" to finish adding tasks: ', (input) => {
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
  if (i !== null && i >= 0 && i <= todolist.length) {
    todolist.splice(i, 0, task);
  } else {
    todolist.push(task);
  }

  console.log(`Task "${task}" added successfully.`);
  getTasks();
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return -1;  
}

function searchTask() {
  rl.question('Enter the task description to search: ', (taskDescription) => {
    todolist.sort();
    const index = binarySearch(todolist, taskDescription);
    if (index !== -1) {
      console.log(`Task "${taskDescription}" found at index ${index + 1}.`);
    } else {
      console.log(`Task "${taskDescription}" not found.`);
    }
    executeAction();
  });
} 

function displayTasks() {
  rl.question('Do you want to search for a task? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      searchTask();
    } else {
      console.log("To do list -");
      todolist.forEach((task, index) => {
        console.log(`${index + 1} - ${task}`);
      });
      executeAction();
    }
  });
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
    todolist[i] = newTask;
    console.log(`Task at index ${i + 1} updated to "${newTask}"`);
    saveTasks();
    executeAction();
  } catch (error) {
    console.log(error.message);
    executeAction();
  }
}

function executeAction() {
  rl.question('Enter action (display/delete/deleteAll/update/add/search/done): ', (action) => {
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
      case 'search':
        searchTask();
        break;
      case 'done':
        console.log('Exiting...');
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
