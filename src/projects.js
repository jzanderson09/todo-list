import { generateTodoList } from './todo';

function generateProjects(todoListObj) {

    //Create project elements in memory:
    const projectsContainer = document.createElement('div');
    const projectContainerHeader = document.createElement('h3');
    const todoProject = document.createElement('div');
    const todoProjectName = document.createElement('h4');

    //Set todo as default project on page load:
    todoProject.id = 'todo-project';
    todoProject.addEventListener('load', todoProject.classList.add('selected'));
    
    //Set classes to elements:
    projectsContainer.classList.add('projects', 'display-div');
    projectContainerHeader.classList.add('div-header');
    todoProject.classList.add('project');
    todoProjectName.classList.add('project-name');
    
    //Set text content & append to project div:
    projectContainerHeader.textContent = 'Projects:';
    todoProjectName.textContent = todoListObj.todoProject;
    todoProject.appendChild(todoProjectName);

    //Toggles projects clicked and filters tasks dynamically:
    todoProject.addEventListener('click', () => {
        todoProject.classList.toggle('selected');
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
            let filteredTasks = todoListObj.getTasks().filter(task => filteredProjects.includes(task.project));
            let newTodo = generateTodoList(filteredTasks);
            oldTodo.replaceWith(newTodo);
        }
    });

    const addProjectBtn = document.createElement('button');
    addProjectBtn.id = 'add-project';
    addProjectBtn.textContent = 'Add Project';

    projectsContainer.append(projectContainerHeader, todoProject, addProjectBtn);
    return projectsContainer;
}

export default generateProjects;