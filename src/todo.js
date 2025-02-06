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

export function generateTodoList(tasksArr) {
    const todoHeader = document.createElement('h3');
    const todoListDiv = document.createElement('div');
    const taskDivBoiler = document.createElement('div');
    const taskTitleBoiler = document.createElement('h4');
    const taskDescriptionBoiler = document.createElement('p');
    const taskDateBoiler = document.createElement('p');
    const taskPriorityBoiler = document.createElement('p');
    const taskNotesBoiler = document.createElement('p');

    todoHeader.classList.add('div-header');
    todoListDiv.classList.add('todo-list', 'display-div');
    taskDivBoiler.classList.add('task');
    taskTitleBoiler.classList.add('title');
    taskDescriptionBoiler.classList.add('description', 'task-info');
    taskDateBoiler.classList.add('due-date', 'task-info');
    taskPriorityBoiler.classList.add('priority', 'task-info');
    taskNotesBoiler.classList.add('notes', 'task-info');

    todoHeader.textContent = 'Tasks:';
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

        title.textContent = `${task.title}`;
        description.textContent = `${task.description}`;
        dueDate.textContent = `Due By:  ${task.dueDate}`;
        priority.textContent = `Priority Level ${task.priority}`;
        notes.textContent = `Notes: ${task.notes}`;

        taskDiv.setAttribute('priority-level', task.priority);

        taskDiv.append(title, description, dueDate, priority, notes);
        taskDiv.addEventListener('click', event => toggleTask(event.currentTarget));
        todoListDiv.appendChild(taskDiv);
    });
    return todoListDiv;
}

// Initial dummy todo list:
export function initialTodoList() {
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

function toggleTask(clickedTask) {
    clickedTask.classList.toggle('done');
}