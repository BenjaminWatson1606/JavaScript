function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(countTodos)
        .then(todos => todos.forEach(generateTableRow));
}

function countTodos(todos) {
    const div = document.querySelector('#todosCountDiv');
    div.classList = 'd-block';

    const span = document.querySelector('#todosCountSpan');
    span.innerText = todos.length;

    return todos;
}

function generateTableRow(todo) {
    const todosTable = document.querySelector('#todosTable tbody');
    const row = todosTable.insertRow();

    row.innerHTML = `<tr>
        <td>${todo.id}</td>
        <td>${todo.title}</td>
        <td>${todo.completed ?
            `<span class="text-success">Oui</span>` :
            `<span class="text-danger">Non</span>`
        }</td>
    </tr>`;
}

function addTodo() {
    const todo = {
        title: document.getElementById('todoTitle').value
    };

    const params = {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'Application/json; charset=UTF-8'
        }
    };

    fetch('https://jsonplacehorder.typicode.com/todos', params)
        .then(response => response.json())
        .then(generateTableRow);
}