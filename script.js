
// Select HTML Elements

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const emptyMessage = document.getElementById("emptyMessage");


// Add Task Function

function addTask() {

    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create List Item

    const li = document.createElement("li");

    // Create Task Text

    const span = document.createElement("span");

    span.textContent = taskValue;
    span.classList.add("task-text");

    // Create Done Button

    const doneBtn = document.createElement("button");

    doneBtn.textContent = "Done";
    doneBtn.classList.add("done-btn");

    // Done Button Click Event

    doneBtn.addEventListener("click", function() {

        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {

            doneBtn.textContent = "✓ Done";
            doneBtn.classList.add("is-done");

        } else {

            doneBtn.textContent = "Done";
            doneBtn.classList.remove("is-done");

        }

        updateTaskCount();

    });

    // Create Delete Button

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Delete Task

    deleteBtn.addEventListener("click", function() {

        li.remove();
        updateTaskCount();

    });

    // Append Elements

    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Clear Input

    taskInput.value = "";

    updateTaskCount();

}


// Update Counter Function

function updateTaskCount() {

    const allTasks = taskList.querySelectorAll("li");

    const completed = taskList.querySelectorAll("li.completed");

    totalTasks.textContent = "Total Tasks: " + allTasks.length;

    completedTasks.textContent = "Completed: " + completed.length;

    emptyMessage.style.display =
        allTasks.length === 0 ? "block" : "none";

}


// Add Button Event

addTaskBtn.addEventListener("click", addTask);


// Enter Key Event

taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// Initial Update

updateTaskCount();

