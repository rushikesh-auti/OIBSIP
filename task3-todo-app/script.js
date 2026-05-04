let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  if (!title) {
    alert("Title required");
    return;
  }

  tasks.push({
    id: Date.now(),
    title,
    desc,
    completed: false,
    createdAt: new Date().toLocaleString()
  });

  saveTasks();
  displayTasks();
}

function displayTasks() {
  const pending = document.getElementById("pending");
  const completed = document.getElementById("completed");

  pending.innerHTML = "";
  completed.innerHTML = "";

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <strong>${task.title}</strong><br>
      ${task.desc}<br>
      <small>${task.createdAt}</small><br>
      <button onclick="toggleTask(${task.id})">✔</button>
      <button onclick="deleteTask(${task.id})">X</button>
    `;

    if (task.completed) {
      completed.appendChild(div);
    } else {
      pending.appendChild(div);
    }
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