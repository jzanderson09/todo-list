// function createProject(projectName, projectTasks) {
//     const project = createTodoList(projectName);

//     return {
//         ...project,
//         tasks: projectTasks,
//     };
// }

function generateProjects() {
    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects', 'display-div');
    const projectHeader = document.createElement('h3');
    projectHeader.classList.add('div-header');
    projectHeader.textContent = 'Projects:';
    projectsDiv.appendChild(projectHeader);
    return projectsDiv;
}

export default generateProjects;