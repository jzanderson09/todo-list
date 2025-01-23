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
    console.table(todoList);
    return todoList;
}

function createTask(title, description, dueDate, priority, notes) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes
    };
}

function createProject(projectName, projectTasks) {
    const project = createTodoList(projectName);

    return {
        ...project,
        tasks: projectTasks,
    };
}

// Only run at initial render (initial todo list):
function generateTodoList() {
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

    return todoList;
}

export function generateListDisplay() {
    const todoListDiv = document.createElement('div');
    const taskDivBoiler = document.createElement('div');
    const taskTitleBoiler = document.createElement('h3');
    const taskDescriptionBoiler = document.createElement('p');
    const taskDateBoiler = document.createElement('p');
    const taskPriorityBoiler = document.createElement('p');
    const taskNotesBoiler = document.createElement('p');

    todoListDiv.className = 'todo-list';
    taskDivBoiler.className = 'task';
    taskTitleBoiler.className = 'title';
    taskDescriptionBoiler.className = 'description';
    taskDateBoiler.className = 'due-date';
    taskPriorityBoiler.className = 'priority';
    taskNotesBoiler.className = 'notes';

    const myTodoList = generateTodoList();
    const myTasks = myTodoList.getTasks();

    //for each back-end task, append the front-end data:
    myTasks.forEach(task => {
        let taskDiv = taskDivBoiler.cloneNode();
        taskDiv.id = myTasks.indexOf(task);

        let title = taskTitleBoiler.cloneNode();
        let description = taskDescriptionBoiler.cloneNode();
        let dueDate = taskDateBoiler.cloneNode();
        let priority = taskPriorityBoiler.cloneNode();
        let notes = taskNotesBoiler.cloneNode();

        title.textContent = `Title: ${task.title}`;
        description.textContent = `Description: ${task.description}`;
        dueDate.textContent = `Due By: ${task.dueDate}`;
        priority.textContent = `Priority Level: ${task.priority}`;
        notes.textContent = `Notes: ${task.notes}`;

        taskDiv.append(title, description, dueDate, priority, notes);
        taskDiv.addEventListener('click', event => toggleTask(event.currentTarget));
        todoListDiv.append(taskDiv);
    });
    return todoListDiv;
}

function toggleTask(clickedTask) {
    clickedTask.className === 'task completed' ? clickedTask.className = 'task' : clickedTask.className = 'task completed';
}