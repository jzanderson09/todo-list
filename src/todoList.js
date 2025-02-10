import generateForm from './form.js';
import generateProjects from './projects.js';
import { generateTodoList, initialTodoList } from './todo.js';
import generateCompleted from './completed.js';

const initialTodo = initialTodoList();

//Generate formDiv, todoListDiv, projectsDiv, completedDiv:
export function generateDisplay() {
    const form = generateForm();
    const projects = generateProjects(initialTodo);
    const todo = generateTodoList(initialTodo.getTasks());
    const completed = generateCompleted();

    return [form, projects, todo, completed];
}