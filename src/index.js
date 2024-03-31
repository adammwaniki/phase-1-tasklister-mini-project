//code here
document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newTaskInput = document.getElementById("new-task-description");
    createNewToDo(newTaskInput.value);
    form.reset();
  });
});

function createNewToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  li.textContent = `${todo}  `;
  li.appendChild(btn);
  document.getElementById('tasks').appendChild(li);
}

function handleDelete(e){
  e.target.parentNode.remove();
}
