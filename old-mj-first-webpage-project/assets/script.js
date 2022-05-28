// adding country on the list when button is clicked.
function addItem() {
  const value = document.querySelector("[data-item]").value;
  const ul = document.querySelector("[data-list]");
  const li = document.createElement("li");
  li.innerHTML = value;
  ul.appendChild(li);
}
// clearing content of the text box when button is clicked.
function clearField(){
document.querySelector("[data-item]").value="";
}
