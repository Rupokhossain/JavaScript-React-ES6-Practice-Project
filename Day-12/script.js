// select element
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const taskCount = document.getElementById("task-count");
const clearAll = document.getElementById("clear-all");

// 1.loaclStorage a data load kora
let todos = JSON.parse(localStorage.getItem("myTodos")) || [];

// 2. ul render function
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    if (todo.completed) li.classList.add("completed");

    li.innerHTML = `
            <span>${todo.text}</span>
            <div class="btn-group">
                <button class="check-btn" onclick="toggleComplete(${index})">✓</button>
                <button class="delete-btn" onclick="deleteTask(${index})">✕</button>
            </div>
        `;
        todoList.appendChild(li);
  });

  // status update
  const activeTasks = todos.filter(t => !t.completed).length;
  taskCount.innerText = `${activeTasks} tasks left`;

  // save to loacl storage
  localStorage.setItem("myTodos", JSON.stringify(todos));
}

// 3. new task add
function addTask() {
  const text = todoInput.value.trim();
  if(text === '') return;

  const newTodo = {
    text: text,
    completed: false
  };

  todos.push(newTodo)
  todoInput.value = "";
  renderTodos();
}

// 4. task delete
window.deleteTask = function (index) {
  todos.splice(index, 1);
  renderTodos();
}

// 5. completed mark
window.toggleComplete = function(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

// 6. all clean
clearAll.addEventListener("click", () => {
  if(confirm("Are you sure you want to clear all tasks?")) {
    todos = [];
    renderTodos();
  }
});

addBtn.addEventListener("click", addTask);

renderTodos();