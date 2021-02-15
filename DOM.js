// reaching into the DOM
const list = document.querySelector('#msg-list ul');
const addForm = document.forms['add-msg'];

// function to add messages
function addMessages() {
      this.preventDefault();
  
      // create elements
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const msgName = document.createElement('span');
  
      // add text content
      msgName.textContent = value;
  
      // add classes
      msgName.classList.add('name');
  
      // append to DOM
      li.appendChild(msgName);
      list.appendChild(li);
}

document.addEventListener('DOMContentLoaded', function(){
  list;
  addForm.addEventListener('submit', addMessages);
});
