const addToDoButton = document.querySelector('#addTodo');const ToDoContainer = document.querySelector('#toDoContainer');
const inputField = document.querySelector('#inputField')

//Event
addToDoButton.addEventListener('click', funtion(){
    var paragraph =document.createElement(p);
    paragragh.innertext = inputrField.value;
    toDoContainer.appendixChild(paragraph);
    inputField.value = "";})

paragraph.addEventListener('click',funtion(){
    paragraph.style.textDecortaion = "line-through"
})

paragraph.addEventListener('click',funtion(){
    paragraph.style.textDecortaion = "line-through"

})
paragraph.addEventListener('dbl click',funtion(){
    paragraph.style.textDecortaion = "line-through"

})






//Function