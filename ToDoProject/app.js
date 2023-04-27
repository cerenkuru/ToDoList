// Tüm Elementleri Seçme

/*const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();
function eventListeners() { // Tüm EventListenerlar
    form.addEventListener("submit", addTodo);



}
function addTodo(e){
    const newTodo = todoInput.value.trim();
    addTodoToUI(newTodo);

    console.log(newTodo);


    e.preventDefault();
}
function addTodoToUI(newTodo){ // List itemı olarak UIya ekleyecek
    // <li class="list-group-item d-flex justify-content-between">
    //                         Todo 1
    //                         <a href = "#" class ="delete-item">
    //                             <i class = "fa fa-remove"></i>
    //                         </a>

    //                     </li>
    // List Item oluşturma
    const listItem = document.createElement("li");
    // link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between";

    // Text note
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // todo liste list itemı ekleme

    todoList.appendChild(listItem);
    todoInput.value = "";

    console.log(listItem);

} */

// //

// let value;

// const todoList = document.querySelector(".list-group");
// value = todoList;
// const todo = document.querySelector(".list-group-item:nth-child(2)")
// const cardrow = document.querySelector(".card.row");

// value = todoList;
// value = todo;
// value = cardrow;


// // child nodes

// value = todoList.childNodes;
// value = todoList.childNodes[0];

// // Children - Element

// value = todoList.children;
// value = todoList.children[1].textContent="Değişti.";


// value = cardrow;
// value = cardrow.children;
// value = cardrow.children[2].children[1].textContent = "burası da değişti";

// value = todoList;
// value = todoList.children[0];
// value = todoList.firstElementChild;
// value = todoList.childElementCount;


// value = cardrow;
// value = cardrow.parentElement.parentElement;

// // Element kardeşleri

// value = todo;
// value = todo.previousElementSibling;
// value = todo.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling;
// value = todo.nextElementSibling.nextElementSibling.nextElementSibling;
// value = todo.previousElementSibling.previousElementSibling;


// value = todo;

// Yeni Element  Oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>


// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com.tr";
// newLink.target = "_blank";

// // Text Content


// // cardbody.textContent = "sdfsdfsdf"; tehlike
// newLink.textContent = "Farklı sayfaya git.";


// // Text Node Elementin sonuna eklerken kullan

// const text = document.createTextNode("nbr");
// cardbody.appendChild(text);
// console.log(cardbody);

// newLink.appendChild(document.createTextNode("Farklı sayfaya git."));
// cardbody.appendChild(newLink);

// console.log(newLink);

// Dinamik Eventleri silme

// const todoList = document.querySelector("ul.list-group");
// const todos  = document.querySelectorAll("li.list-group-item");
// Remove Metodu

// todos[0].remove();

// Remove child

// todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todos[3]);



// console.log(todos);
// console.log(todoList);


// Elementleri değiştirme
// <h5 class="card-title" id = "tasks-title">Todolar</h5>

// const cardbody = document.querySelectorAll(".card-body")[1];
// const newElement = document.createElement("h3");
// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent = "Yeni Todolar";

// // Eski element

// const oldElement = document.querySelector("#tasks-title");

// cardbody.replaceChild(newElement,oldElement);
// console.log(newElement);


// 

const todoInput = document.getElementById("todo");
let element;

element = todoInput;
element= todoInput.classList;

// todoInput.className = "form-control newClass";
// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");



element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder", "nbr");
element = todoInput;
todoInput.setAttribute("title", "Input");
todoInput.removeAttribute("name");

element = todoInput.hasAttribute("required");
element = todoInput.hasAttribute("name");

console.log(element);
