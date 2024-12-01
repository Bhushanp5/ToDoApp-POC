// Enhanced addTask function
function addTask() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if (task) {
      const list = document.getElementById('todoList');
      const listItem = document.createElement('li');
      listItem.textContent = task;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => list.removeChild(listItem);
  
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
      input.value = '';
    }
  }
  