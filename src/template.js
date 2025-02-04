import './template.css';
import { generateDisplay } from './todoList';

const container = document.querySelector('.container');
const displayDivs = generateDisplay();
console.log(displayDivs);
displayDivs.forEach(displayDiv => container.appendChild(displayDiv));