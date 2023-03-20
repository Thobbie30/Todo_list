// Get the todo list items from localStorage
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Render the todo list items on the page
function renderTodoList() {
  const todoListElement = document.getElementById('todo-list');
  todoListElement.innerHTML = '';

  // Reverse the todo list so that the most recently added item is first
  const reversedList = todoList.slice().reverse();

  for (let i = 0; i < reversedList.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = reversedList[i];
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTodoListItem(i);
    });
    listItem.appendChild(deleteButton);
    todoListElement.appendChild(listItem);
  }
}

// Add a new item to the todo list
function addTodoListItem() {
  const newItemInput = document.getElementById('new-item-input');
  const newItemText = newItemInput.value.trim();
  if (newItemText === '') {
    return;
  }
  todoList.push(newItemText);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodoList();
  newItemInput.value = '';
}

// Delete an item from the todo list
function deleteTodoListItem(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodoList();
}

// Add an event listener to the add button to add a new item when it's clicked
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addTodoListItem);

// Render the initial todo list on page load
renderTodoList();