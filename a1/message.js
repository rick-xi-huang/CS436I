let data = '{ "ID1":"My first Message", "ID2": "My second Message", "ID3":"My third Message"}'

let obj = JSON.parse(data);

let showContent = document.getElementById("showContent");
let showAbout = document.getElementById("showAbout");
let content = document.getElementById("content");
let about = document.getElementById("about");
let addButton = document.getElementById("add");
let clearButton = document.getElementById("clear");
let deleteallButton = document.getElementById("deleteall");
let messagefield = document.getElementById("messagefield");
let messageList = document.getElementById("messages");


function removeParent(e) {
    e.target.parentNode.remove();
}

function creatLi(m) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.addEventListener('click', removeParent, false);
    li.appendChild(document.createTextNode(m));
    span.innerHTML = "X";
    li.appendChild(span);
    return li;
}

Object.values(obj).forEach((m) => {
    let li = creatLi(m);
    messageList.appendChild(li);
})

showContent.addEventListener("click", () => {
    content.style.display = "block";
    about.style.display = "none";
})

showAbout.addEventListener("click", () => {
    about.style.display = "block";
    content.style.display = "none";
})

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    let li = creatLi(messagefield.value);
    messageList.appendChild(li);
    messagefield.value = "";
    });
  
clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    messagefield.value = ""});

deleteallButton.addEventListener("click", () => {
    messageList.innerHTML = ""
})

