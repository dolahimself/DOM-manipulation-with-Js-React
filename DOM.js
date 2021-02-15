// reaching into the DOM


// function to add messages
function addMessages(e) {
      
      const addForm = document.forms['add-msg'];
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
  
  const addForm = document.forms['add-msg'];
  addForm.addEventListener('submit', addMessages());
});
