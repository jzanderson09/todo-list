function createTodoList(name) {
    const tasks = [];

    return {
        name,
        tasks,
        addTask(newTask) {
            tasks.push(newTask);  
        },
        getTasks() {
            return tasks;
        }
    };
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

function generateTodoList() {
    const myTodoList = createTodoList('default');

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

    [firstTask, secondTask, thirdTask].forEach(currentTask => myTodoList.addTask(currentTask));

    return myTodoList;
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
    taskDateBoiler.className = 'date';
    taskPriorityBoiler.className = 'priority';
    taskNotesBoiler.className = 'notes';

    const myList = generateTodoList();
    const myTasks = myList.getTasks();
    myTasks.forEach(task => {
        let taskDiv = taskDivBoiler.cloneNode();
        let title = taskTitleBoiler.cloneNode();
        let description = taskDescriptionBoiler.cloneNode();
        let dueDate = taskDateBoiler.cloneNode();
        let priority = taskPriorityBoiler.cloneNode();
        let notes = taskNotesBoiler.cloneNode();
        
        title.textContent = task.title;
        description.textContent = task.description;
        dueDate.textContent = task.dueDate;
        priority.textContent = task.priority;
        notes.textContent = task.notes;

        taskDiv.append(title, description, dueDate, priority, notes);
        todoListDiv.append(taskDiv);
    });
    return todoListDiv;
}