const toDoList = [];

renderList();

document.querySelector('.js-add-to-do')
.addEventListener('click', () => {
addToList();
});

function addToList() {
    const inputActivity = document.querySelector(".js-input-activity");
    const inputDate = document.querySelector(".js-input-date");

    const perActivity = {
        inputActivityValue: inputActivity.value,
        inputDateValue: inputDate.value
    };

    toDoList.push(perActivity);
    renderList();

    inputActivity.value = '';
    inputDate.value = '';
}

function renderList() {
    let toDoHTML = '';
    toDoList.forEach((item,index) => {
        toDoHTML += `
        <div> ${item.inputActivityValue} </div>
        <div> ${item.inputDateValue} </div>
        <button class="js-delete-todo-button">Delete</button>
        </div>
        `;
    });
   
    document.querySelector(".js-to-do").innerHTML = toDoHTML;

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        toDoList.splice(index, 1);
        renderList();
      });
    });
}


