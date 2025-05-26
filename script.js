document.querySelectorAll('.nav-trigger').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('data-target');

    // Hide all sections
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));

    // Show target section
    document.getElementById(target).classList.add('active');

    // Collapse navbar (for mobile)
    document.querySelector('.navbar-collapse').classList.remove('show');
  });
});

document.getElementById("colorBtn").addEventListener("click", function () {
  // Generate a random hex color
  document.body.style.transition = "background-color 0.5s";
  document.body.style.backgroundColor = "#f0f0f0"; // Reset to default color
  setTimeout(() => {
    document.body.style.backgroundColor = "#f0f0f0"; // Reset to default color
  }, 500);  
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.className = "btn btn-danger btn-sm";
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});

// Smooth scroll to section on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  });
});
