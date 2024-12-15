class Todo {
  constructor() {
      this.todos = [];
  }

  add(todo) {
      this.todos.push(todo);
      this.render();
  }

  remove(indexOfTodo) {
      this.todos.splice(indexOfTodo, 1);
      this.render();
  }

  update(index, updatedTodo) {
      this.todos[index] = updatedTodo;
      this.render();
  }

  getAll() {
      return this.todos;
  }

  get(indexOfTodo) {
      return this.todos[indexOfTodo];
  }

  clear() {
      this.todos = [];
      this.render();
  }

  render() {
      const todoList = document.getElementById('todoList');
      todoList.innerHTML = '';
      
      this.todos.forEach((todo, index) => {
          const li = document.createElement('li');
          
          const todoText = document.createElement('span');
          todoText.textContent = todo;
          
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.className = 'delete';
          deleteButton.onclick = () => this.remove(index);
          
          li.appendChild(todoText);
          li.appendChild(deleteButton);
          todoList.appendChild(li);
      });
  }
}

// Create a global todo instance
const todoList = new Todo();

// Function to add a new todo
function addTodo() {
  const todoInput = document.getElementById('todoInput');
  const todoText = todoInput.value.trim();
  
  if (todoText) {
      todoList.add(todoText);
      todoInput.value = ''; // Clear input
  }
}

// Function to clear all todos
function clearAllTodos() {
  todoList.clear();
}

// Allow adding todo with Enter key
document.getElementById('todoInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      addTodo();
  }
});