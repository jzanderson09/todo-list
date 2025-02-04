function generateCompleted() {
    const completedDiv = document.createElement('div');
    const completedHeader = document.createElement('h3');
    completedDiv.classList.add('completed', 'display-div');
    completedHeader.classList.add('div-header');
    completedHeader.textContent = 'Completed:';
    completedDiv.appendChild(completedHeader);
    return completedDiv;
}

export default generateCompleted;