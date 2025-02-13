import { generateTodoList, updateTodoList } from './todo';

function generateProjects(todoListObj) {
    //Create project elements in memory:
    const projectsDivContainer = document.createElement('div');
    const projectContainerHeader = document.createElement('h3');
    const projectCollection = document.createElement('div');
    const buttonContainer = document.createElement('div');

    //Set classes to elements:
    projectsDivContainer.classList.add('projects', 'display-div');
    projectContainerHeader.classList.add('div-header');
    projectCollection.classList.add('project-collection');
    buttonContainer.classList.add('button-container');

    projectContainerHeader.textContent = 'Projects:';

    const modal = document.createElement('div');
    const closeModalBtn = document.createElement('button');
    const modalInput = document.createElement('input');
    const submitProjectBtn = document.createElement('button');

    modal.classList.add('modal');
    closeModalBtn.classList.add('close-modal');
    modalInput.classList.add('modal-input');
    submitProjectBtn.classList.add('submit-project');

    closeModalBtn.textContent = 'X';
    modalInput.placeholder = 'New Project';
    modalInput.required = true;
    submitProjectBtn.textContent = 'Submit';

    closeModalBtn.addEventListener('click', () => closeModal());

    submitProjectBtn.addEventListener('click', event => {
        event.preventDefault();
        let userProject = modalInput.value;
        saveProject(userProject, todoListObj);
    });

    modal.append(closeModalBtn, modalInput, submitProjectBtn);

    const todoProject = document.createElement('div');
    const todoProjectName = document.createElement('h4');

    //Set todo as default project on page load:
    todoProject.id = 'todo-project';
    todoProject.addEventListener('load', todoProject.classList.add('selected'));
    
    todoProject.classList.add('project');
    todoProjectName.classList.add('project-name');
    todoProjectName.textContent = todoListObj.todoProjects[0];
    todoProject.appendChild(todoProjectName);

    //Toggles projects clicked and filters tasks dynamically:
    todoProject.addEventListener('click', () => toggleProject(todoProject, todoListObj));

    projectCollection.appendChild(todoProject);

    const addProjectBtn = document.createElement('button');
    addProjectBtn.id = 'add-project';
    addProjectBtn.textContent = 'Add Project';
    addProjectBtn.type = 'button';
    addProjectBtn.addEventListener('click', event => {
        event.preventDefault();
        addProject(modal);
    });

    const container = document.querySelector('.container');
    container.appendChild(modal);

    buttonContainer.appendChild(addProjectBtn);
    projectsDivContainer.append(projectContainerHeader, 
        projectCollection, buttonContainer);
    return projectsDivContainer;
}

//Creates modal overlay for user to enter new project:
function addProject(modalOverlay) {
    modalOverlay.classList.add('visible');
}

//Saves user input and creates new project (if it doesn't exist):
function saveProject(newProject, todoObj) {
    let currentProjects = Array.from(todoObj.todoProjects);
    let projectExists = currentProjects.includes(newProject);

    if (!projectExists && newProject.length) {
        // If project doesn't exist, create a new div and button
        const newProjectDiv = document.createElement('div');
        const newProjectHeader = document.createElement('h4');

        newProjectDiv.classList.add('project');
        newProjectDiv.id = `${newProject}-project`;
        newProjectHeader.classList.add('project-name');

        newProjectHeader.textContent = newProject;
        
        newProjectDiv.addEventListener('click', () => {
            toggleProject(newProjectDiv);
        });
        
        newProjectDiv.appendChild(newProjectHeader);
        
        todoObj.addProject(newProject);
        document.querySelector('.project-collection').appendChild(newProjectDiv);
        updateProjectMenu(newProject);
        closeModal();

    } else if (projectExists) {
        alert('Project already exists!');
    }
    else {
        alert('Project name is required!');
    }
}

function toggleProject(projectToggled, todoList) {
    projectToggled.classList.toggle('selected');
    let filteredtodoProjects = Array.from(document.querySelectorAll('.project.selected'));
    let filteredProjects = [];
    //For each filtred todoProject, extract the text content:
    filteredtodoProjects.forEach(todoProject => {
        filteredProjects.push(todoProject.children[0].textContent);
    });
    //if there's at least 1 selected project:
    if (filteredProjects) {
        let oldTodo = document.querySelector('.todo-list');
        oldTodo.innerHTML = '';
        let filteredTasks = todoList.getTasks().filter(task => filteredProjects.includes(task.project));
        let newTodo = generateTodoList(filteredTasks);
        oldTodo.replaceWith(newTodo);
    }
}

function closeModal() {
    document.querySelector('.modal-input').value = '';
    let closingModal = document.querySelector('.visible');
    closingModal.classList.remove('visible');
}

function updateProjectMenu(projectAdded) {
    const menu = document.querySelector('#project-menu');
    const newProjectOption = document.createElement('option');
    newProjectOption.textContent = projectAdded;
    newProjectOption.value = projectAdded;
    menu.appendChild(newProjectOption);
}

export default generateProjects;