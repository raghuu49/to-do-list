const addTask = document.getElementById("add");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input");

addTask.addEventListener("click", function() {
    if (inputTask.value === "") {
        alert("Enter a Task!!");
    } else {
        let task = document.createElement("div");
        task.classList.add("task");

        let li = document.createElement("li");
        li.innerText = `${inputTask.value}`;
        task.appendChild(li);

        let checkButton = document.createElement("button");
        checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkButton.classList.add('checkTask');
        task.appendChild(checkButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.classList.add('deleteTask');
        task.appendChild(deleteButton);

        taskContainer.appendChild(task);

        // Clear the input field
        inputTask.value = "";

        // Add event listeners for the new buttons
        checkButton.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        deleteButton.addEventListener("click", function() {
            task.remove();
        });
    }
});
