function generateForm() {
    const formDiv = document.createElement('div');
    const formHeader = document.createElement('h3');
    const formData = document.createElement('form');
    
    formDiv.classList.add('form', 'display-div');
    formHeader.classList.add('div-header');
    formData.classList.add('form-data');
    formHeader.textContent = 'Form:';
    
    const formTitle = document.createElement('input');
    formTitle.classList.add('form-input');
    formTitle.name = 'title';
    formTitle.placeholder = 'Title';
    formTitle.required = true;
    formTitle.type = 'text';

    const formDescription = document.createElement('input');
    formDescription.classList.add('form-input');
    formDescription.name = 'description';
    formDescription.placeholder = 'Description';
    formDescription.required = true;
    formDescription.type = 'text';

    const formDueDate = document.createElement('input');
    formDueDate.classList.add('form-input');
    formDueDate.addEventListener('DOMContentLoaded', roundMinutes(formDueDate));
    formDueDate.name = 'due-date';
    formDueDate.required = true;
    formDueDate.type = 'datetime-local';
    
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority';
    
    const formPriorityLevel = document.createElement('input');
    formPriorityLevel.id = 'priority-level';
    formPriorityLevel.min = 1;
    formPriorityLevel.max = 5;
    formPriorityLevel.name = 'priority';
    formPriorityLevel.required = true;
    formPriorityLevel.type = 'range';
    formPriorityLevel.value = 5;

    const priorityValue = document.createElement('span');
    priorityValue.id = 'priority-value';
    priorityValue.textContent = 5;

    formPriorityLevel.addEventListener('input', function() {
        priorityValue.textContent = this.value;
        updateSliderColor(this.value);
    });

    const formNotes = document.createElement('input');
    formNotes.classList.add('form-input');
    formNotes.name = 'notes';
    formNotes.placeholder = 'Notes';
    formNotes.required = true;
    formNotes.type = 'text';

    const addTask = document.createElement('button');
    addTask.classList.add('add-task-btn');
    addTask.textContent = 'Add Task';

    formData.append(formTitle, formDescription, formDueDate, 
    priorityLabel, formPriorityLevel, priorityValue, formNotes, addTask);
    formDiv.append(formHeader, formData);
    return formDiv;
}

function roundMinutes(formInput) {
    const now = new Date();
    let currentMinutes = Math.round(now.getMinutes() / 15) * 15;
    now.setMinutes(currentMinutes);
    now.setSeconds(0);
    now.setMilliseconds(0);
    formInput.value = new Date(now - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);;
}

function updateSliderColor(sliderValue) {
    let color;
    switch (sliderValue) {
        case '1':
            color = 'red'; 
            break;
        case '2':
            color = 'orange'; 
            break;
        case '3':
            color = 'yellow';
            break;
        case '4':
            color = '#9acd32';
            break;
        case '5':
            color = 'green'; 
            break;
    }

    const prioritySlider = document.getElementById('priority-level');
    console.log(prioritySlider);

    prioritySlider.style.setProperty("--track-color", color);
    prioritySlider.style.background = color;
}

export default generateForm;