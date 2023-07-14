// Retrieve task form and task list
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask(event) {
  event.preventDefault();
  
  // Retrieve task input value
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    // Create new task item
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;
    
    // Create task buttons
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.addEventListener('click', completeTask);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTask);
    
    // Append buttons to task item
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    
    // Append task item to task list
    taskList.appendChild(taskItem);
    
    // Clear task input
    taskInput.value = '';
  }
}

// Function to mark a task as completed
function completeTask() {
  this.parentNode.classList.toggle('completed');
}

// Function to delete a task
function deleteTask() {
  this.parentNode.remove();
}

// Event listener for adding a new task
taskForm.addEventListener('submit', addTask);
