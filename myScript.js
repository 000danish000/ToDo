const userInput = document.getElementById('userInput');
const taskList = document.getElementById('task');
const addTaskBtn = document.querySelector(".addTaskBtn");
const deleteItem = document.querySelectorAll("li i .fa .fa-times");
const errMsg = document.getElementById('msg')


function saveTask() {
    const lsTask = document.querySelectorAll('#task li');
    const data = [];
    lsTask.forEach((ls) => {
        data.push(ls.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(data));

}
const createTask = (taskValue) => {
    let newListItem = document.createElement("li");
    newListItem.innerHTML = `${taskValue}<span class="icon"><i class="fa-regular fa-pen-to-square"></i><i class="fa-solid fa-xmark"></i></span>`;
    taskList.appendChild(newListItem);
    newListItem.addEventListener("click", () => {
        newListItem.classList.toggle("completed");
    });
    userInput.value = '';
    newListItem.querySelector(".fa-xmark").addEventListener("click", () => {
        newListItem.remove();
        saveTask();
    })
    newListItem.querySelector(".fa-pen-to-square").addEventListener("click", () => {
        if (userInput.value == "") {
            userInput.value = newListItem.textContent;
            newListItem.remove();
        } else {
            errMsg.style.display = "block";
            errMsg.innerHTML = "Save the Existing Task First";
            setTimeout(() => {
                errMsg.style.display = "none";
            }, 3000);
        }


    })

}

userInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        createTask(userInput.value);
        saveTask();
    }
})

addTaskBtn.addEventListener("click", () => {
    if (!(userInput.value == "")) {
        createTask(userInput.value);
        saveTask();
    }

})
function getLsData() {
    const lsTaskget = JSON.parse(localStorage.getItem("tasks"));
    lsTaskget.forEach((ls) => {
        createTask(ls);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    getLsData()

});


