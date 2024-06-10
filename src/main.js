import "../style.css";

// Define the state of our app
const todos = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Buy bread", completed: false },
  { id: 3, text: "Buy coffee", completed: true },
];
let nextTodoId = 4;
let filter = "all"; // can be 'all', 'active', or 'completed'

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

    // console.log(this) // "this" is the same as "document"

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

      const todoEdit = document.createElement("input");
      todoEdit.classList.add("hidden", "todo-edit");
      todoEdit.value = todo.text;
      todoItem.appendChild(todoEdit)
    }
}


/*

<input
  id="new-todo"
  placeholder="What needs to be done?"
  autofocus
  class="w-full p-4 text-2xl italic outline-none focus:outline-offset-0 focus:outline-rose-700"
/>

*/

const inputNewTodo = document.getElementById("new-todo");
inputNewTodo.addEventListener("keydown", handleAddNewTodo);

function handleAddNewTodo(event) {
  // console.log(this) // "this" is the same as "event.target"

  // console.log(event.key)
  const eventKey = event.key;
  // const eventTarget = event.target;
  const eventTarget = this;
  const todoText = eventTarget.value.trim();

  if (eventKey === "Enter" &&  todoText !== "") {
    // console.log(event.target.value)
    eventTarget.value = "";
    todos.push({
      id: nextTodoId++,
      text: todoText,
      completed: false
    })
    // console.log(todos)
    // nextTodoId++;
    renderTodos();
  }
}

/*

  <nav
    id="todo-nav"
    class="flex items-center justify-center gap-3 py-2 filters"
    role="navigation"
  >
    <a
      href="#/"
      class="p-1 underline underline-offset-4 decoration-rose-800 decoration-2"
      role="button"
      >All</a
    >
    <a
      href="#/active"
      class="p-1"
      role="button"
      >Active</a
    >
    <a
      href="#/completed"
      class="p-1"
      role="button"
      >Completed</a
    >
  </nav>

  */

const navBar = document.getElementById("todo-nav")
navBar.classList.add("p-6", "border-2", "border-red-500")
navBar.addEventListener("click", handleClickOnNavbar)

function handleClickOnNavbar(event) {
console.log(event);
}


document.addEventListener("DOMContentLoaded", renderTodos)