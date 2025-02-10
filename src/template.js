import './template.css';
import { generateDisplay } from './todoList';

const container = document.querySelector('.container');

//Generates each div component and attaches to the dom for display:
const displayDivs = generateDisplay();
displayDivs.forEach(displayDiv => container.appendChild(displayDiv));