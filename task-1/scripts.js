document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
