const todoInputEl = document.getElementById("todo_input");
const todoForm = document.getElementById("todo_form");
const todoListEl = document.getElementById("todo_list");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(event)
  const text = todoInputEl.value;

  const el = document.createElement("li");
  el.textContent = text;
  todoListEl.appendChild(el);

  const button = document.createElement("button")
  button.textContent = '✕'
  el.appendChild(button)

  todoInputEl.value = ''

  // el.addEventListener('click', () => {
  //   onLiClick(el)
  // })
})


todoListEl.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const li = event.target
    if (li.dataset.status) {
      li.dataset.status = ''
    } else {
      li.dataset.status = 'done'
    }
  } else if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.remove()
  }
})

// function onLiClick (li) {
//   console.log(li.textContent)
// }

// const lis = todoListEl.querySelectorAll('li')

// for (let li of lis) {
//   li.addEventListener('click', () => {
//     onLiClick(li)
//   })
// }


