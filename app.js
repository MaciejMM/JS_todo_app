// selectors
const todoInput = document.querySelector('.todo-text');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);


// functions

function addTodo(e) {
    e.preventDefault()

    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Mark button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Check Trash button 
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // Append to list 
    todoList.appendChild(todoDiv);
    // Clear input
    todoInput.value ='';
}

function deleteCheck(e){
     const item = e.target;
    //  Delete todo
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener("webkitTransitionEnd",function(e){
            todo.remove()   
        });
    }

    // Check Mark

    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');

    } 
}

function filterTodo(e){
    
}