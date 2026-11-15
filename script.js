
// Academic Planner

let tasks = [];

let addButton = document.getElementById("addButton");
let taskInput = document.getElementById("taskInput");
let taskDate = document.getElementById("taskDate");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

function updateTaskCount() {

    let pending = tasks.filter(function(task) {
        return !task.completed;
    }).length;

    taskCount.textContent = "Pending tasks: " + pending;
}


function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let item = document.createElement("li");

        if (task.completed) {
            item.classList.add("completed");
        }

        let taskName = document.createElement("span");
        taskName.textContent = task.name;

        let deadline = document.createElement("p");

        deadline.textContent = task.date
            ? "Deadline: " + task.date
            : "No deadline set";

        let completeButton = document.createElement("button");

        completeButton.textContent = task.completed
            ? "Undo"
            : "Complete";

        completeButton.addEventListener("click", function() {

            tasks[index].completed = !tasks[index].completed;

            displayTasks();
        });

        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {

            tasks.splice(index, 1);

            displayTasks();
        });

        item.appendChild(taskName);
        item.appendChild(deadline);
        item.appendChild(completeButton);
        item.appendChild(deleteButton);

        taskList.appendChild(item);

    });

    updateTaskCount();
}


if (addButton) {

    addButton.addEventListener("click", function() {

        let name = taskInput.value.trim();

        if (name === "") {

            alert("Please enter a task.");

            return;
        }

        tasks.push({
            name: name,
            date: taskDate.value,
            completed: false
        });

        taskInput.value = "";
        taskDate.value = "";

        displayTasks();

    });

    displayTasks();
}


// Contact Form Validation

let contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();

        let email = document.getElementById("email").value.trim();

        let phone = document.getElementById("phone").value.trim();

        let message = document.getElementById("message").value.trim();

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let phonePattern = /^[0-9]+$/;

        if (!name || !email || !phone || !message) {

            alert("Please complete every field.");

        }
        else if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

        }
        else if (!phonePattern.test(phone)) {

            alert("Phone number must contain digits only.");

        }
        else {

            document.getElementById("formMessage").textContent =
                "Thank you! Your form has been validated.";

            contactForm.reset();

        }

    });

}