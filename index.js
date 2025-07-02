

const addtask = () => {
    const task = document.getElementById('taskinput');
    const taskvalue = task.value.trim();  // 'value' is lowercase

    if (taskvalue !== "") {
        const list = document.getElementById('list');
        const li = document.createElement('li');

        li.innerHTML = `<input type="checkbox"> ${taskvalue} <button onclick="deleteButton(this)">Delete</button>`;
        list.appendChild(li);

        task.value = ""; 
    } else {
        alert("Please enter a task");
    }
};


function deleteButton(btn) {
    const li = btn.parentNode;
    li.parentNode.removeChild(li);
}

function deletecheck(){
    const list = document.getElementById('list');
    const checkbox=document.querySelectorAll('input[type="checkbox"]:checked');

    checkbox.forEach((checkbox)=>{
        const li = checkbox.parentNode;
        li.parentNode.removeChild(li);
    })
   

}
function deleteAll(){
    const list = document.getElementById('list');
    const checkbox=document.querySelectorAll('input[type="checkbox"]');

    checkbox.forEach((checkbox)=>{
        const li = checkbox.parentNode;
        li.parentNode.removeChild(li);
    })
   

}
 const mydate = new Date();
    const dates = mydate.toDateString();
    const date = document.getElementById('date');
    date.innerText = dates;

window.onload = function () {
    const text = "TO-DO-LIST";
    const title = document.getElementById("animated-title");
    let index = 0;

    const typing = () => {
        if (index < text.length) {
            title.innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, 200); // speed of typing (lower = faster)
        }
    };

    typing();
};
 

