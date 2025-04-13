
document.getElementById('change-text-btn').addEventListener('click', () => {
    document.getElementById('dynamic-text').textContent = 'The text has been changed!';
  });
  
  
  document.getElementById('add-element-btn').addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new dynamically added element.';
    document.getElementById('new-element-container').appendChild(newElement);
  });