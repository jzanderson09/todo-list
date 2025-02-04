import generateForm from './form.js';
import generateProjects from './projects.js';
import { generateTodoList, initialTodoList } from './todo.js';
import generateCompleted from './completed.js';

//Generate formDiv, todoListDiv, projectsDiv, completedDiv:
export function generateDisplay() {
    const form = generateForm();
    const projects = generateProjects();
    const todo = generateTodoList(initialTodoList().getTasks());
    const completed = generateCompleted();

    return [form, projects, todo, completed];
}