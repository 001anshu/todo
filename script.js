let todoList=['anshu','anss'];
window.onload=function(){
   const storedList=localStorage.getItem('todoList');
   if(storedList){
      todoList=JSON.parse(localStorage.getItem("todoList"))
      displayItem();
   }
}

function addTodo(){
   
   let inputElement=document.querySelector(".input")
   let todoItem=inputElement.value;
   if(todoItem!=''){

      todoList.push(todoItem);
      inputElement.value='';
      displayItem();
      saveToLocalStorage();
   }
}
function deleteTodo(index){
   todoList.splice(index,1);
   displayItem();
   saveToLocalStorage();
}
function saveToLocalStorage(){
   localStorage.setItem('todoList',JSON.stringify(todoList));
}
function displayItem() {
   let containerElement = document.querySelector('.todo-container');
   let newHtml = '';
   for (let i = 0; i < todoList.length; i++) {
       newHtml += `
       <div class="entry">
           <span>${todoList[i]}</span>
           <button class="button-18 input"  onclick="deleteTodo(${i})">delete</button>
       </div>
       `;
   }
   containerElement.innerHTML = newHtml;
}

