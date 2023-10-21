const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const tasksList = document.querySelector("#tasks");

todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(todoInput.value === ""){
        alert("please enter a task");
        return;
    }
    const task = document.createElement("li");
    task.innerText = todoInput.value;
    tasksList.appendChild(task);
    todoInput.value ="";
});