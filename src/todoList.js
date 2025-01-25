// function createProject(projectName, projectTasks) {
//     const project = createTodoList(projectName);

//     return {
//         ...project,
//         tasks: projectTasks,
//     };
// }

function createTask(title, description, dueDate, priority, notes) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes
    };
}

function createTodoList(name) {
    let tasks = [];
    const todoList = {
        name,
        tasks,
        addTask(newTask) {
            tasks.push(newTask);  
        },
        getTasks() {
            return tasks;
        }
    };
    return todoList;
}

// Initial dummy todo list:
function initialTodoList() {
    const todoList = createTodoList('default');

    const firstTask = createTask('Clean the House', 
        'Clean the kitchen, bathrooms and garage', 
        '01/08/2025', 
        2, 
        'Make sure to use pledge and Mr. Clean!'
    );

    const secondTask = createTask('Buy Groceries',
        'Buy fruits, veggies and grains',
        '01/10/2025',
        3,
        'Check ad for Safeway deals!'
    );

    const thirdTask = createTask('Practice Coding',
        'Focus on HTML/CSS/JS and Python',
        '01/04/2025',
        1,
        'Use The Odin Project & and A.I. when stuck!'
    );

    [firstTask, secondTask, thirdTask].forEach(currentTask => todoList.addTask(currentTask));
    console.table(todoList);
    return todoList;
}

function generateCompleted() {
    const completedDiv = document.createElement('div');
    const completedHeader = document.createElement('h3');
    completedDiv.classList.add('completed', 'display-div');
    completedHeader.classList.add('div-header');
    completedHeader.textContent = 'Completed:';
    completedDiv.appendChild(completedHeader);
    return completedDiv;
}

//Generate todoListDiv, projectsDiv, completedDiv, formDiv:
export function generateDisplay() {
    const todo = generateTodoList(initialTodoList().getTasks());
    const projects = generateProjects();
    const completed = generateCompleted();
    const form = generateForm();

    return [form, todo, projects, completed];
}

function generateForm() {
    const formDiv = document.createElement('div');
    const formHeader = document.createElement('h3');
    const formData = document.createElement('form');

    formDiv.classList.add('form', 'display-div');
    formHeader.classList.add('div-header');
    formData.classList.add('form-data');

    formHeader.textContent = 'Form:';

    const formTitle = document.createElement('input');
    formTitle.setAttribute('type', 'text');
    formTitle.setAttribute('name', 'title');
    formTitle.setAttribute('placeholder', 'Title');
    formTitle.required = true;

    const formDescription = document.createElement('input');
    formDescription.setAttribute('type', 'text');
    formDescription.setAttribute('name', 'description');
    formDescription.setAttribute('placeholder', 'Description');
    formDescription.required = true;

    const formDueDate = document.createElement('input');
    formDueDate.setAttribute('type', 'text');
    formDueDate.setAttribute('name', 'due-date');
    formDueDate.setAttribute('placeholder', 'Due Date');
    formDueDate.required = true;

    const formPriority = document.createElement('input');
    formPriority.setAttribute('type', 'text');
    formPriority.setAttribute('name', 'priority');
    formPriority.setAttribute('placeholder', 'Priority');
    formPriority.required = true;

    const formNotes = document.createElement('input');
    formNotes.setAttribute('type', 'text');
    formNotes.setAttribute('name', 'notes');
    formNotes.setAttribute('placeholder', 'Notes');
    formNotes.required = true;

    const addTask = document.createElement('button');
    addTask.textContent = 'Add Task';
    addTask.classList.add('add-task');

    formData.append(formTitle, formDescription, formDueDate, formPriority, formNotes, addTask);
    formDiv.append(formHeader, formData);
    return formDiv;
}

function generateProjects() {
    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects', 'display-div');
    const projectHeader = document.createElement('h3');
    projectHeader.classList.add('div-header');
    projectHeader.textContent = 'Projects:';
    projectsDiv.appendChild(projectHeader);
    return projectsDiv;
}

function generateTodoList(tasksArr) {
    const todoHeader = document.createElement('h3');
    const todoListDiv = document.createElement('div');
    const taskDivBoiler = document.createElement('div');
    const taskTitleBoiler = document.createElement('h3');
    const taskDescriptionBoiler = document.createElement('p');
    const taskDateBoiler = document.createElement('p');
    const taskPriorityBoiler = document.createElement('p');
    const taskNotesBoiler = document.createElement('p');

    todoHeader.classList.add('div-header');
    todoListDiv.classList.add('todo-list', 'display-div');
    taskDivBoiler.classList.add('task');
    taskTitleBoiler.classList.add('title');
    taskDescriptionBoiler.classList.add('description');
    taskDateBoiler.classList.add('due-date');
    taskPriorityBoiler.classList.add('priority');
    taskNotesBoiler.classList.add('notes');

    todoHeader.textContent = 'Todo List:';
    todoListDiv.appendChild(todoHeader);

    //for each back-end task, append the front-end data:
    tasksArr.forEach(task => {
        let taskDiv = taskDivBoiler.cloneNode();
        taskDiv.id = tasksArr.indexOf(task);

        let title = taskTitleBoiler.cloneNode();
        let description = taskDescriptionBoiler.cloneNode();
        let dueDate = taskDateBoiler.cloneNode();
        let priority = taskPriorityBoiler.cloneNode();
        let notes = taskNotesBoiler.cloneNode();

        title.textContent = `Title: ${task.title}`;
        description.textContent = `Description: ${task.description}`;
        dueDate.textContent = `Due Date: ${task.dueDate}`;
        priority.textContent = `Priority Level: ${task.priority}`;
        notes.textContent = `Notes: ${task.notes}`;

        taskDiv.append(title, description, dueDate, priority, notes);
        taskDiv.addEventListener('click', event => toggleTask(event.currentTarget));
        todoListDiv.appendChild(taskDiv);
    });
    return todoListDiv;
}

function toggleTask(clickedTask) {
    clickedTask.classList.contains('done') ? clickedTask.classList.remove('done') : clickedTask.classList.add('done');
}