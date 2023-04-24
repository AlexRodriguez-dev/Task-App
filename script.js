const inputBox = document.getElementById("input");
const listContainer = document.getElementById("listContainer");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something")
    }

    else{
        let li = document.createElement("li"); // li will create <li>
        li.innerHTML = inputBox.value; // adds value of input inside list element
        listContainer.appendChild(li); //
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value =""
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const storedData = localStorage.getItem("data");
    if (storedData !== null) {
        listContainer.innerHTML = storedData;
    }
}
showTask();