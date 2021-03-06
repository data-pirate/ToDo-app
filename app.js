const todos = document.querySelector('.todos');

const addtodo = document.querySelector('.add');

const search = document.querySelector('.search');


// adding a todo to the list
const generateTodo = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
    todos.innerHTML += html;
}


addtodo.addEventListener('submit', (e) => {
    e.preventDefault();

    // preventing extra white spaces
    if (addtodo.add.value.trim().length) {
        generateTodo(addtodo.add.value.trim());
        addtodo.reset();
    }
});

// delete a Todo
todos.addEventListener('click', e => {

    // checking if we have clicked on trash can not anything else
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


// search filter

const filter_search = term => {
    Array.from(todos.children)
        .filter( todo => !todo.textContent.includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(todos.children)
        .filter( todo => todo.textContent.toLowerCase().includes(term.toLowerCase()))
        .forEach(todo => todo.classList.remove('filtered'));
};

// searching a Todo
search.addEventListener('keyup', e => {
    // e.preventDefault();
    const term = search.search.value.trim();
    // console.log(term);
    filter_search(term);

});