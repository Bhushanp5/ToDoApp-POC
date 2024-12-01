// app.js
function addTask() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if (task) {
      const list = document.getElementById('todoList');
      const listItem = document.createElement('li');
      listItem.textContent = task;
      list.appendChild(listItem);
      input.value = '';
    }
  }
  