import "../style.css";

// Define the state of our app
const todos = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Buy bread", completed: true },
  { id: 3, text: "Buy coffee", completed: false },
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

    let filteredTodos = [];
    for(let i = 0; i < todos.length; i++) {
      const todo = todos[i];

      if (filter === "all") {
        filteredTodos.push(todo);
      } else if (filter === "active" && !todo.completed) {
        filteredTodos.push(todo);
      } else if (filter === "completed" && todo.completed) {
        filteredTodos.push(todo);
      }
    }

    for(let i = 0; i < filteredTodos.length; i++) {
      const todo = filteredTodos[i];

      const todoItem = document.createElement("div");
      todoItem.classList.add("p-4", "todo-item");
      todoList.appendChild(todoItem)

      const todoText = document.createElement("div");
      todoText.classList.add("todo-text");
      if (todo.completed) {
        todoText.classList.add("line-through");
      }
      
      todoText.innerText = todo.text;
      todoText.id = `todo-text-${todo.id}`;
      todoItem.appendChild(todoText)

      const todoEdit = document.createElement("input");
      todoEdit.classList.add("hidden", "todo-edit");
      todoEdit.value = todo.text;
      todoItem.appendChild(todoEdit)
    }
}

document.addEventListener("DOMContentLoaded", renderTodos)


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
  // navBar.classList.add("p-6", "border-2", "border-red-500")
  navBar.addEventListener("click", handleClickOnNavbar)

  function handleClickOnNavbar(event) {
    // console.log(event.target.tagName);
    if (event.target.tagName === "A") {
      // console.log(event.target.href)
      const href = event.target.href;
      const action = href.split("/").pop();
      filter = action === "" ? "all" : action
      // console.log(filter)
      renderTodos();
      renderNavbar(href);
    }
  }

  function renderNavbar(href) {
    const elements = navBar.children;
    for(let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.href === href) {
        element.classList.add(
          "underline",
          "underline-offset-4", 
          "decoration-rose-800", 
          "decoration-2"
        )
      } else {
        element.classList.remove(
          "underline",
          "underline-offset-4", 
          "decoration-rose-800", 
          "decoration-2"
        )
      }
    }
  }


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
todoList.classList.add("p-6", "border-2", "border-red-500")
todoList.addEventListener("click", handleClickOnTodoList)

// function handleClickOnTodoList(event) {
//   // console.log(event);
//   let todo = null;