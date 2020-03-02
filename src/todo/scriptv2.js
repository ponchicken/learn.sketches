const todoInputEl = document.getElementById("todo_input");
const todoForm = document.getElementById("todo_form");
const todoListEl = document.getElementById("todo_list");
const reverseButton = document.getElementById("reverse_button");

const storageTodos = localStorage.getItem("todos");
let todos = storageTodos
  ? JSON.parse(storageTodos)
  : ["помыть посуду", "полить цветок", "покормить кота"];

todoForm.addEventListener("submit", event => {
  event.preventDefault();
  const text = todoInputEl.value;

  if (text.length > 0 && !todos.includes(text)) {
    todos.push(text);

    todoInputEl.value = "";
  }

  todoInputEl.focus();

  displayTodos();
});

function createLi(text) {
  const el = document.createElement("li");

  el.textContent = text;
  todoListEl.appendChild(el);

  const button = document.createElement("button");
  button.textContent = "✕";
  button.classList.add("todo-delete-button");

  el.appendChild(button);

  const button2 = document.createElement("button");
  button2.textContent = "̸";
  button2.classList.add("todo-edit-button");

  el.appendChild(button2);
}

function displayTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  todoListEl.innerHTML = "";
  for (let todo of todos) {
    createLi(todo);
  }
}

displayTodos();

todoListEl.addEventListener("click", onListClick);

function onListClick(e) {
  if (e.target.classList.contains("todo-delete-button")) {
    const newW = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i] !== e.target.previousSibling.textContent) {
        newW.push(todos[i]);
      }
    }
    todos = newW;

    displayTodos();
  } else if (event.target.classList.contains("todo-edit-button")) {
    let index;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i] === e.target.parentNode.firstChild.textContent) {
        index = i;
      }
    }
    todos[index] = prompt("?", e.target.parentNode.firstChild.textContent);

    displayTodos();
  }
}

reverseButton.addEventListener("click", changeOrder);

function changeOrder() {
  const reversedArray = [];
  for (let i = 0; i < todos.length; i++) {
    reversedArray.push(todos[todos.length - i - 1]);
  }

  todos = reversedArray;
  displayTodos();
}
