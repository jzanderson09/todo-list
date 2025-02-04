import './template.css';
import { generateDisplay } from './todoList';

const container = document.querySelector('.container');
const displayDivs = generateDisplay();
displayDivs.forEach(displayDiv => container.appendChild(displayDiv));