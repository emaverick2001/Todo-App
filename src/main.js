import "../style.css";

// Array to store our todos
const todos = [
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Buy bread', completed: false },
    { id: 3, text: 'Buy eggs', completed: false }
  ];
  let nextTodoId = 4;
  let filter = 'all'; // can be 'all', 'active', or 'completed'

function renderTodos() {

/*
    <section
    id="todo-list"
    class="flex flex-col w-full text-xl font-normal divide-y"
    >
    <div class="p-4 todo-item">
        <div class="todo-text">Buy milk</div>
        <input class="hidden todo-edit" value="Buy milk" />
    </div>
    <div class="p-4 todo-item">
        <div class="todo-text">Buy bread</div>
        <input class="hidden todo-edit" value="Buy bread" />
    </div>
    </section>
*/

    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""

    for(let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const todoItem = document.createElement("div");
    todoItem.classList.add("p-4", "todo-item");
    todoList.appendChild(todoItem)

    const todoText = document.createElement("div");
    todoText.classList.add("todo-text");
    todoText.innerText = todo.text;
    todoItem.appendChild(todoText)

    }


}

document.addEventListener("DOMContentLoaded", renderTodos);