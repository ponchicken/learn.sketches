const todoInputEl = document.getElementById("todo_input");
const todoForm = document.getElementById("todo_form");
const todoListEl = document.getElementById("todo_list");
const reverseButton = document.getElementById("reverse_button");

let todos = ["помыть посуду", "полить цветок", "покормить кота"];

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

  el.appendChild(button);

  const button2 = document.createElement("button"); //??? right choice ???
  button2.textContent = "̸";

  el.appendChild(button2);
}

function displayTodos() {
  todoListEl.innerHTML = "";
  for (let todo of todos) {
    createLi(todo);
  }
}

displayTodos();

todoListEl.addEventListener("click", deleteToDoListEl);

function deleteToDoListEl(e) {
  if (e.target.tagName === "BUTTON") {
    const newW = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i] !== e.target.previousSibling.textContent) {
        newW.push(todos[i]);
      }
    }
    todos = newW;

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

button2.addEventListener("click", editToDoListEl); //??? right choice ???

function editToDoListEl(q) {
  if (q.target.tagName === "BUTTON" && q.target.textContent === "̸") {
    console.log("hey");

    // prompt("Edit your to do list point: ", answer);
  }

  displayTodos();
}
