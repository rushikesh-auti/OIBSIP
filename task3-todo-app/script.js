let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  if (!title || !desc) {
    alert("Please fill all fields");
    return;
  }

  tasks.push({
    id: Date.now(),
    title,
    desc,
    completed: false
  });

  saveTasks();
  displayTasks();

  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <div class="task-content">
        <span>${task.title}</span>
        <span>${task.desc}</span>
      </div>
      <div>
        <button class="complete-btn" onclick="toggleTask(${task.id})">✔</button>
        <button class="delete-btn" onclick="deleteTask(${task.id})">X</button>
      </div>
    `;

    list.appendChild(div);
  });
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

  saveTasks();
  displayTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  displayTasks();
}

displayTasks();