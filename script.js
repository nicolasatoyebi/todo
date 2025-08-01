// In-memory array to store tasks
let tasks = [];

// DOM elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Utility to generate a unique ID
function generateId() {
	return Date.now().toString();
}

// Add a new task
function addTask(text) {
	if (!text.trim()) return; // ignore empty entries
	const task = {
		id: generateId(),
		text: text.trim(),
		completed: false,
	};
	tasks.push(task);
	taskInput.value = ""; // clear the input
	renderTasks();
}

// Create the DOM elements for one task
function createTaskElement(task) {
	const li = document.createElement("li");
	li.dataset.id = task.id;

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.checked = task.completed;
	checkbox.addEventListener("change", () => {
		task.completed = checkbox.checked;
		renderTasks();
	});

	const span = document.createElement("span");
	span.textContent = task.text;
	if (task.completed) {
		span.style.textDecoration = "line-through";
		span.style.opacity = "0.6";
	}

	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
	deleteBtn.addEventListener("click", () => {
		tasks = tasks.filter((t) => t.id !== task.id);
		renderTasks();
	});

	li.append(checkbox, span, deleteBtn);
	return li;
}

// Render all tasks to the page
function renderTasks() {
	taskList.innerHTML = ""; // clear existing list
	tasks.forEach((task) => {
		const taskEl = createTaskElement(task);
		taskList.appendChild(taskEl);
	});
}

// Event listener for adding a task
addButton.addEventListener("click", () => {
	// TODO: call addTask()
});

// TODO: function addTask(text) {}

// TODO: function renderTasks() {}

// TODO: function createTaskElement(task) {}
