// Selectăm elementele necesare
const form = document.getElementById('todo-form');
const taskInput = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');

// Funcție pentru adăugarea unei sarcini
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Verificăm dacă input-ul este gol
    if (taskInput.value.trim() === '') {
        return; // Nu adăugăm sarcini goale
    }

    // Creăm un nou element li pentru sarcină
    const newTask = document.createElement('li');

    // Creăm o casetă de selectare (checkbox) pentru a bifa sarcina
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox-completed');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskText.classList.add('completed'); // Aplica linia doar pe text
        } else {
            taskText.classList.remove('completed');
        }
    });

    // Creăm un element de text pentru sarcină
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    // Adăugăm un buton de ștergere
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Șterge';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(newTask);
    });

    // Adăugăm textul, caseta de bifare și butonul de ștergere în elementul li
    newTask.appendChild(taskText);
    newTask.appendChild(checkbox);
    newTask.appendChild(deleteButton);

    // Adăugăm elementul li în listă
    todoList.appendChild(newTask);

    // Resetăm inputul
    taskInput.value = '';
});
