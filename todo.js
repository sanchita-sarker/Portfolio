const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";
  tasks.forEach(task => addTaskToDOM(task.text, task.completed));
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({
      text: li.querySelector("span").textContent,
      completed: li.querySelector("input").checked
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  addTaskToDOM(text);
  taskInput.value = "";
  saveTasks();
}

function addTaskToDOM(text, completed = false) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;
  checkbox.onchange = saveTasks;

  const span = document.createElement("span");
  span.textContent = text;
  if (completed) span.style.textDecoration = "line-through";

  checkbox.onchange = () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    saveTasks();
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
}

window.onload = loadTasks;
