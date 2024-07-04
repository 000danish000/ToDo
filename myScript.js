const userInput = document.getElementById('userInput');
const taskList = document.getElementById('task');
const deleteItem = document.querySelectorAll("li i .fa .fa-times")

userInput.addEventListener("keyup", (e)=>{
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        let newListItem = document.createElement("li");
        newListItem.textContent = userInput.value;
        taskList.appendChild(newListItem);
        newListItem.addEventListener("click", () => {
            newListItem.classList.toggle("completed");
          });
        userInput.value='';
    }
})
