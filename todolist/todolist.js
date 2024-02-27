let todolist = [];

//add tasks
function addTask(task){
    todolist.push(task);
}

addTask("go to work");
addTask("have breakfast");
addTask("bath");


// display all tasks
function displayTasks(){
    console.log("To do list -");
    for(let i=0; i < todolist.length; i++){
        const task = todolist[i];
        console.log(`${i + 1} - ${task}`);
    }
}

displayTasks();


console.log(" ");

// delete one task
function deleteTask(i){
    try {
        if(i < 0 || i >= todolist.length){
            throw new Error("Invalid index");
        }
        const deletedTask = todolist.splice(i, 1);
        console.log("Task deleted successfully:", deletedTask);
    } catch (error) {
        console.log(error.message);
    }
}

deleteTask(5);

console.log(" ");


//delete all tasks
function deleteAll(){
    todolist = [];
    console.log("All tasks are deleted successfully");
}

// deleteAll();


//update a task
function updateTask(i, newTask) {
    try {
        if (i < 0 || i >= todolist.length) {
            throw new Error("Invalid index");
        }
        todolist[i] = newTask;
        console.log("Task updated:", i+1,"-",newTask);
    } catch (error) {
        console.log(error.message);
    }
}

updateTask(0,"go to bed");
console.log(" ");


displayTasks();

