import './index.css';

class Todo {
    constructor(taskList) {
        this.taskList = taskList;
        this.renderTasks = this.renderTasks.bind(this);
    }

    //Renders tasks individually and appends to the task div:
    renderTasks() {
        let tasksDiv = document.querySelector('.tasks');
        this.taskList.forEach(task => {
            let renderedTask = task.renderTask();
            tasksDiv.appendChild(renderedTask);
        });
    }
}

class Task {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.taskDivBoiler = document.createElement('div');
        this.titleBoiler = document.createElement('h1');
        this.descriptionBoiler = document.createElement('p');
        this.dueDateBoiler = document.createElement('p');
        this.priorityLevelBoiler = document.createElement('p');
        this.notesBoiler = document.createElement('p');
        this.taskDivBoiler.className = 'task';
        this.titleBoiler.className = 'task-header';
        this.descriptionBoiler.className = 'task-description';
        this.dueDateBoiler.className = 'task-due-date';
        this.priorityLevelBoiler.className = 'task-priority-level';
        this.notesBoiler.className = 'task-notes';
        this.renderTask = this.renderTask.bind(this);
    }

    //Returns DIV with DOM representation of Task object:
    renderTask() {
        let currentDiv = this.taskDivBoiler.cloneNode();
        let currentTitle = this.titleBoiler.cloneNode();
        let currentDescription = this.descriptionBoiler.cloneNode();
        let currentDueDate = this.dueDateBoiler.cloneNode();
        let currentNotes = this.notesBoiler.cloneNode();
        let currentPriorityLevel = this.priorityLevelBoiler.cloneNode();
        currentTitle.textContent = `Task:  ${this.title}`;
        currentDescription.textContent = `Description:  ${this.description}`;
        currentDueDate.textContent = `Due By:  ${this.dueDate}`;
        currentPriorityLevel.textContent = `Priority Level:  ${this.priority}`;
        currentNotes.textContent = `Notes:  ${this.notes}`;
        currentDiv.append(currentTitle, currentDescription, currentDueDate,
        currentPriorityLevel, currentNotes);
        return currentDiv;
    }
}

let starterTask = new Task('Code!', 'Practice coding in HTML/CSS/JS.', 
    '01/01/2025', 5, 'Additional notes go here!');
let myTodoList = new Todo([starterTask]);
console.table(myTodoList);
myTodoList.renderTasks();
