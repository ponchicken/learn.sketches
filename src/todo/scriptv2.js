const todoInputEl = document.getElementById("todo_input");
const todoForm = document.getElementById("todo_form");
const todoListEl = document.getElementById("todo_list");

let todos = [];

todoForm.addEventListener("submit", event => {
  event.preventDefault();
  const text = todoInputEl.value;

  todos.push(text);

  displayTodos();
});

function createLi(text) {
  if (text != "" && text != todoListEl.lastElementChild) {
    const el = document.createElement("li");

    el.textContent = text;
    todoListEl.appendChild(el);

    const button = document.createElement("button");
    button.textContent = "✕";
    el.appendChild(button);
  }
}

function displayTodos() {
  for (let todo of todos) {
    createLi(todo);
  }
}
