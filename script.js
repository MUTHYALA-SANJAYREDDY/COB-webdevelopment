document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.getElementById("myUL");
    const addButton = document.getElementById("add_button");
    const inputField = document.getElementById("myInput");
    const apiURL = "http://localhost:3000";
    // Function to fetch all tasks
    function fetchTasks() {
        fetch(apiURL+"/api/tasks")
            .then(response => response.json())
            .then(tasks => {
                todoList.innerHTML = "";
                tasks.forEach(task => {
                    createTaskElement(task);
                });
            })
            .catch(error => console.error(error));
    }

    // // Function to create a task element
    // function createTaskElement(task) {
    //     const taskElement = document.createElement("li");
    //     taskElement.textContent = task.title;
    //     console.log(task.completed,"completed");
    //     if (task.completed) {
    //         taskElement.classList.add("checked");
    //     }
    //     taskElement.addEventListener("click", () => toggleTaskStatus(task.id));
        
    //     const editButton = document.createElement("span");
    //     editButton.textContent = "\u270E";
    //     editButton.className = "edit";
    //     editButton.addEventListener("click", () => editTask(task.id, task.title));
        
    //     const deleteButton = document.createElement("span");
    //     deleteButton.textContent = "\u00D7";
    //     deleteButton.className = "close";
    //     deleteButton.addEventListener("click", () => deleteTask(task.id));
        
    //     taskElement.appendChild(editButton);
    //     taskElement.appendChild(deleteButton);
    //     todoList.appendChild(taskElement);
    // }

    // function createTaskElement(task) {
    //     const taskElement = document.createElement("li");
    //     const taskTitle = document.createElement("span");
    //     taskTitle.textContent = task.title;
    //     taskElement.appendChild(taskTitle);
    
    //     const completeButton = document.createElement("button");
    //     completeButton.textContent = "Complete";
    //     completeButton.addEventListener("click", () => toggleTaskStatus(task.id));
    
    //     const editButton = document.createElement("button");
    //     editButton.textContent = "Edit";
    //     editButton.addEventListener("click", () => {
    //         const newTitle = prompt("Edit task:", task.title);
    //         if (newTitle !== null) {
    //             editTask(task.id, newTitle);
    //             taskTitle.textContent = newTitle;
    //         }
    //     });
    
    //     const deleteButton = document.createElement("button");
    //     deleteButton.textContent = "Delete";
    //     deleteButton.addEventListener("click", () => deleteTask(task.id));
    
    //     taskElement.appendChild(completeButton);
    //     taskElement.appendChild(editButton);
    //     taskElement.appendChild(deleteButton);
    
    //     if (task.completed) {
    //         taskElement.classList.add("checked");
    //     }
    
    //     todoList.appendChild(taskElement);
    // }

    // function createTaskElement(task) {
    //     const taskElement = document.createElement("li");
    //     const taskTitle = document.createElement("span");
    //     taskTitle.textContent = task.title;
    //     taskTitle.setAttribute("contenteditable", true); // Make the task title editable
    //     taskTitle.addEventListener("blur", () => {
    //         // Update the task title when focus is lost
    //         editTask(task.id, taskTitle.textContent);
    //     });
    
    //     const completeButton = document.createElement("button");
    //     completeButton.textContent = "Complete";
    //     completeButton.addEventListener("click", () => toggleTaskStatus(task.id));
    
    //     const deleteButton = document.createElement("button");
    //     deleteButton.textContent = "Delete";
    //     deleteButton.addEventListener("click", () => deleteTask(task.id));
    
    //     taskElement.appendChild(taskTitle);
    //     taskElement.appendChild(completeButton);
    //     taskElement.appendChild(deleteButton);
    
    //     if (task.completed) {
    //         taskElement.classList.add("checked");
    //     }
    
    //     todoList.appendChild(taskElement);
    // }
    
//     function createTaskElement(task) {
//     const taskElement = document.createElement("li");
//     const taskTitle = document.createElement("span");
//     taskTitle.textContent = task.title;

//     const editInput = document.createElement("input");
//     editInput.type = "text";
//     editInput.value = task.title;
//     editInput.style.display = "none"; // Initially hide the input element

//     const completeButton = document.createElement("button");
//     completeButton.textContent = "Complete";
//     completeButton.addEventListener("click", () => toggleTaskStatus(task.id));

//     const editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.addEventListener("click", () => {
//         taskTitle.style.display = "none"; // Hide the text span
//         editInput.style.display = "inline-block"; // Show the input element
//         editInput.focus(); // Focus on the input field
//     });

//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => deleteTask(task.id));

//     editInput.addEventListener("blur", () => {
//         // Update task title when focus is lost from the input field
//         taskTitle.textContent = editInput.value;
//         editInput.style.display = "none"; // Hide the input element
//         taskTitle.style.display = "inline-block"; // Show the text span
//         editTask(task.id, editInput.value); // Update task on the server
//     });

//     taskElement.appendChild(taskTitle);
//     taskElement.appendChild(editInput);
//     taskElement.appendChild(completeButton);
//     taskElement.appendChild(editButton);
//     taskElement.appendChild(deleteButton);

//     if (task.completed) {
//         taskElement.classList.add("checked");
//     }

//     todoList.appendChild(taskElement);
// }

// function createTaskElement(task) {
//     const taskElement = document.createElement("li");
//     const taskTitle = document.createElement("span");
//     taskTitle.textContent = task.title;

//     const editInput = document.createElement("input");
//     editInput.type = "text";
//     editInput.value = task.title;
//     editInput.style.display = "none"; // Initially hide the input element

//     const completeButton = document.createElement("button");
//     completeButton.className = "complete-btn";
//     completeButton.textContent = "Complete";
//     completeButton.addEventListener("click", () => toggleTaskStatus(task.id));

//     const editButton = document.createElement("button");
//     editButton.className = "edit-btn";
//     editButton.textContent = "Edit";
//     editButton.addEventListener("click", () => {
//         taskTitle.style.display = "none"; // Hide the text span
//         editInput.style.display = "inline-block"; // Show the input element
//         editInput.focus(); // Focus on the input field
//         editButton.style.display = "none"; // Hide the "Edit" button
//         saveButton.style.display = "inline-block"; // Show the "Save" button
//     });

//     const saveButton = document.createElement("button");
//     saveButton.className = "save-btn";
//     saveButton.textContent = "Save";
//     saveButton.style.display = "none"; // Initially hide the "Save" button
//     saveButton.addEventListener("click", () => {
//         taskTitle.textContent = editInput.value;
//         editInput.style.display = "none"; // Hide the input element
//         taskTitle.style.display = "inline-block"; // Show the text span
//         editButton.style.display = "inline-block"; // Show the "Edit" button again
//         saveButton.style.display = "none"; // Hide the "Save" button
//         editTask(task.id, editInput.value); // Update task on the server
//     });

//     const deleteButton = document.createElement("i");
//     deleteButton.classList.add("fa","fa-trash-o");
//     // deleteButton.className = "delete-btn";
//     // deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => deleteTask(task.id));

//     taskElement.appendChild(taskTitle);
//     taskElement.appendChild(editInput);
//     taskElement.appendChild(completeButton);
//     taskElement.appendChild(editButton);
//     taskElement.appendChild(saveButton);
//     taskElement.appendChild(deleteButton);

//     if (task.completed) {
//         taskElement.classList.add("checked");
//     }

//     todoList.appendChild(taskElement);
// }

function createTaskElement(task) {
    const taskElement = document.createElement("li");
    const taskTitle = document.createElement("span");
    taskTitle.textContent = task.title;

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = task.title;
    editInput.style.display = "none"; // Initially hide the input element

   
    const completeToggler = document.createElement("button");
    completeToggler.className = "complete-btn actions";
    completeToggler.textContent = task.completed ? "Incomplete" : "Completed";
    // completeToggler.addEventListener("click", () => toggleTaskStatus(task.id));
    completeToggler.addEventListener("click", () => {
        console.log(task.id);
        toggleTaskStatus(task.id);
        completeToggler.textContent = task.completed ? "Incomplete" : "Completed";
    });



    // taskElement.appendChild(taskTitle);

    if (task.completed) {
        taskElement.classList.add("checked");
    }

    const editIcon = document.createElement("i");
    editIcon.className = "fa fa-pencil edit-i actions"; // Font Awesome edit icon
    editIcon.addEventListener("click", () => {
        taskTitle.style.display = "none"; // Hide the text span
        editInput.style.display = "inline-block"; // Show the input element
        editInput.focus(); // Focus on the input field
        editIcon.style.display = "none"; // Hide the edit icon
        saveIcon.style.display = "inline-block"; // Show the save icon
    });

    const saveIcon = document.createElement("i");
    saveIcon.className = "fa fa-floppy-o save-i actions"; // Font Awesome save icon
    saveIcon.style.display = "none"; // Initially hide the save icon
    saveIcon.addEventListener("click", () => {
        taskTitle.textContent = editInput.value;
        editInput.style.display = "none"; // Hide the input element
        taskTitle.style.display = "inline-block"; // Show the text span
        editIcon.style.display = "inline-block"; // Show the edit icon again
        saveIcon.style.display = "none"; // Hide the save icon
        editTask(task.id, editInput.value); // Update task on the server
    });

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash-o delete-i actions"; // Font Awesome delete icon
    deleteIcon.addEventListener("click", () => deleteTask(task.id));

    taskElement.appendChild(taskTitle);
    taskElement.appendChild(editInput);
    // taskElement.appendChild(completeIcon);
    taskElement.appendChild(completeToggler);
    taskElement.appendChild(editIcon);
    taskElement.appendChild(saveIcon);
    taskElement.appendChild(deleteIcon);

    // if (task.completed) {
    //     taskElement.classList.add("checked");
    // }

    todoList.appendChild(taskElement);
}



    // Function to add a new task
    function addTask() {
        const title = inputField.value;
        console.log(title);
        if (title) {
            fetch(apiURL+`/api/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title })
            })
            .then(response => response.json())
            .then(task => {
                createTaskElement(task);
            })
            .catch(error => console.error(error));
        }
        inputField.value = "";
    }

    // Function to edit a task
    function editTask(id, currentTitle) {
        const newTitle = prompt("Edit task:", currentTitle);
        if (newTitle !== null) {
            fetch(apiURL+`/api/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: newTitle })
            })
            .then(() => fetchTasks())
            .catch(error => console.error(error));
        }
    }

    // Function to delete a task
    function deleteTask(id) {
        fetch(apiURL+`/api/tasks/${id}`, {
            method: "DELETE"
        })
        .then(() => fetchTasks())
        .catch(error => console.error(error));
    }

    // Function to toggle task status (mark as checked or unchecked)
    function toggleTaskStatus(id) {
        fetch(apiURL+`/api/tasks/${id}/toggle`, {
            method: "PUT"
        })
        .then(() => fetchTasks())
        .catch(error => console.error(error));
    }

    // Event listener for Add button click
    addButton.addEventListener("click", addTask);

    // Fetch tasks when the page loads
    fetchTasks();
});
