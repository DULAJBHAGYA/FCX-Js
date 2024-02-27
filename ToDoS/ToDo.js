const readline = require('readline');

let todolist = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addTask(task, i = null) {
  if (i !== null && i >= 0 && i <= todolist.length) {
    todolist.splice(i, 0, task);
  } else {
    todolist.push(task);
  }
  console.log(`Task "${task}" added successfully.`);
}

function displayTasks() {
  console.log("To do list -");
  for (let i = 0; i < todolist.length; i++) {
    const task = todolist[i];
    console.log(`${i + 1} - ${task}`);
  }
}

function deleteTask(i) {
  try {
    if (i < 0 || i >= todolist.length) {
      throw new Error("Invalid index");
    }
    const deletedTask = todolist.splice(i, 1);
    console.log("Task deleted successfully:", deletedTask);
  } catch (error) {
    console.log(error.message);
  }
}

function deleteAllTasks() {
  todolist = [];
  console.log("All tasks deleted.");
}

function updateTask(i, newTask) {
  try {
    if (i < 0 || i >= todolist.length) {
      throw new Error("Invalid index");
    }
    todolist[i] = newTask;
    console.log(`Task at index ${i + 1} updated to "${newTask}"`);
  } catch (error) {
    console.log(error.message);
  }
}

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

module.exports = {
  addTask,
  displayTasks,
  deleteTask,
  deleteAllTasks,
  updateTask,
  getTasks,
  todolist
};
