const userInput = document.getElementById('userInput');
const taskList = document.getElementById('task');
const addTaskBtn = document.querySelector(".addTaskBtn");
const deleteItem = document.querySelectorAll("li i .fa .fa-times")



const createTask = () =>{

    let newListItem = document.createElement("li");
    newListItem.innerHTML = `${userInput.value} <i class="fa fa-times"></i>`;
    taskList.appendChild(newListItem);
    newListItem.addEventListener("click", () => {
        newListItem.classList.toggle("completed");
      });
    
    
    userInput.value='';
    
    newListItem.querySelector("i").addEventListener("click",()=>{
        newListItem.remove();
    })  
    }

userInput.addEventListener("keyup", (e)=>{
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        createTask();

    }
})


addTaskBtn.addEventListener("click",()=>{
    createTask();
})


