

function createTask(title, description, dueDate, priority, project, notes) {
    return {
        title,
        description,
        dueDate,
        priority,
        project,
        notes
    };
}

export function createTodoList(name) {
    let tasks = [];
    const todoProjects = [];
    const todoList = {
        name,
        tasks,
        todoProjects,
        addTask(newTask) {
            tasks.push(newTask);  
        },
        getTasks() {
            return tasks;
        },
        getProject() {
            return todoProjects;
        },
        addProject(newProject) {
            todoProjects.push(newProject);
            console.table(todoList);
        }
    };
    todoList.addProject(name);
    return todoList;
}

export function updateTodoList() {

}

//creates elements in memory and returns div to render to front-end:
export function generateTodoList(todoListArr) {
 
    //Create boiler elements in memory:
    let todoListDiv = document.createElement('div');
    let todoHeader = document.createElement('h3');
    let taskDivBoiler = document.createElement('div');
    let taskTitleBoiler = document.createElement('h4');
    let taskDescriptionBoiler = document.createElement('p');
    let taskDateBoiler = document.createElement('p');
    let taskPriorityBoiler = document.createElement('p');
    let taskNotesBoiler = document.createElement('p');

    //Add boiler classes:
    todoHeader.classList.add('div-header', 'todo-header');
    todoListDiv.classList.add('todo-list', 'display-div');
    taskDivBoiler.classList.add('task');
    taskTitleBoiler.classList.add('title');
    taskDescriptionBoiler.classList.add('description', 'task-info');
    taskDateBoiler.classList.add('due-date', 'task-info');
    taskPriorityBoiler.classList.add('priority', 'task-info');
    taskNotesBoiler.classList.add('notes', 'task-info');

    //Set header text and append to todo div:
    todoHeader.textContent = 'Tasks:';
    todoListDiv.appendChild(todoHeader);

    //iterate tasks and add to front-end elements:
    todoListArr.forEach(task => {
        let taskDiv = taskDivBoiler.cloneNode();
        taskDiv.id = todoListArr.indexOf(task);

        let title = taskTitleBoiler.cloneNode();
        let description = taskDescriptionBoiler.cloneNode();
        let dueDate = taskDateBoiler.cloneNode();
        let priority = taskPriorityBoiler.cloneNode();
        let notes = taskNotesBoiler.cloneNode();

        title.textContent = `${task.title}`;
        description.textContent = `${task.description}`;
        dueDate.textContent = `Due By:  ${task.dueDate}`;
        priority.textContent = `Priority Level ${task.priority}`;
        notes.textContent = `Notes: ${task.notes}`;

        taskDiv.setAttribute('priority-level', task.priority);
        taskDiv.setAttribute('project', task.project);

        taskDiv.append(title, description, dueDate, priority, notes);
        taskDiv.addEventListener('click', event => toggleTask(event.currentTarget));
        todoListDiv.appendChild(taskDiv);
    });
    console.log(todoListDiv);
    return todoListDiv;
}

// Initial dummy todo list:
export function initialTodoList() {
    const todoList = createTodoList('Todo');

    const firstTask = createTask('Clean the House', 
        'Clean the kitchen, bathrooms and garage', 
        '01/08/2025', 
        2,
        `${todoList.todoProjects[0]}`,
        'Make sure to use pledge and Mr. Clean!'
    );

    const secondTask = createTask('Buy Groceries',
        'Buy fruits, veggies and grains',
        '01/10/2025',
        3,
        `${todoList.todoProjects[0]}`,
        'Check ad for Safeway deals!'
    );

    const thirdTask = createTask('Practice Coding',
        'Focus on HTML/CSS/JS and Python',
        '01/04/2025',
        1,
        `${todoList.todoProjects[0]}`,
        'Use The Odin Project & and A.I. when stuck!'
    );

    [firstTask, secondTask, thirdTask].forEach(currentTask => todoList.addTask(currentTask));
    console.table(todoList);
    return todoList;
}

// Toggles selected tasks and updates Task header:
export function toggleTask(clickedTask) {
    clickedTask.classList.toggle('selected');
    const tasks = Array.from(document.querySelectorAll('.task'));
    const selected = tasks.filter(task => task.classList.contains('selected'));
    let todoHeader = document.querySelector('.todo-header');
    if (selected.length) {
        let tasksSelected = selected.length;
        todoHeader.textContent = `Tasks (${tasksSelected} Selected):`
    }
    else {
        todoHeader.textContent = 'Tasks:';
    }
}