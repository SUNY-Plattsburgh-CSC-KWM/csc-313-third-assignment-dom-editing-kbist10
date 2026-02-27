const WorkItem = class {
  #task;
  #dueDate;
  #priority;
  #isComplete;

  constructor(task, dueDate, priority) {
    this.#task = task;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#isComplete = false;
  }

  getTask() {
    return this.#task;
  }

  getDueDate() {
    return this.#dueDate;
  }

  getPriority() {
    return this.#priority;
  }

  getIsComplete() {
    return this.#isComplete;
  }

  setComplete(value) {
    this.#isComplete = value;
  }
};

let workItems = [];

function redraw() {
  const tasksDiv = document.getElementById("tasks");

  // Empty the div
  while (tasksDiv.firstChild) {
    tasksDiv.removeChild(tasksDiv.firstChild);
  }

  // Add all items back as paragraphs
  for (let i = 0; i < workItems.length; i++) {
    const item = workItems[i];

    const p = document.createElement("p");
    p.textContent =
      `${i}: ${item.getTask()} | Due: ${item.getDueDate()} | Priority: ${item.getPriority()}`;

    if (item.getIsComplete()) {
      p.style.color = "green";
    } else {
      p.style.color = "red";
    }

    tasksDiv.appendChild(p);
  }
}

function addItem() {
  const task = prompt("Enter the task description:");
  if (task === null || task.trim() === "") return;

  const dueDate = prompt("Enter the due date (example: 2026-03-10):");
  if (dueDate === null || dueDate.trim() === "") return;

  const priority = prompt("Enter priority (example: Low / Medium / High):");
  if (priority === null || priority.trim() === "") return;

  const newItem = new WorkItem(task.trim(), dueDate.trim(), priority.trim());
  workItems.push(newItem);

  redraw();
}

function completeItem() {
  if (workItems.length === 0) {
    alert("No items to complete yet.");
    return;
  }

  const numStr = prompt(`Enter the task number to mark done (0 to ${workItems.length - 1}):`);
  if (numStr === null) return;

  const index = parseInt(numStr, 10);

  if (Number.isNaN(index) || index < 0 || index >= workItems.length) {
    alert("Invalid task number.");
    return;
  }

  workItems[index].setComplete(true);
  redraw();
}

// optional: draw once at start (shows nothing, but sets up)
redraw();