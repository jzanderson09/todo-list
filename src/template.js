import './template.css';
import { generateListDisplay } from './todoList';

const container = document.querySelector('.container');
container.append(generateListDisplay());