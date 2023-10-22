const taskInput = document.getElementById('input');
const list = document.getElementById('list');
    
function addNewTask() {
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    list.appendChild(newTask);
    taskInput.value = '';
    };

    function checkTask(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('done');
          }
    };

    document.getElementById('button').addEventListener('click', addNewTask);
    list.addEventListener('click', checkTask);