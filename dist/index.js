"use strict";
const todoList = [
    { task: "Clean my room", description: "Put Rumppa-robot to work" },
    { task: "Find Icons", description: "Portfolio needs icons" },
    { task: "Do js assigment", description: "Write todo app" },
];
document.addEventListener("DOMContentLoaded", init);
function init() {
    addTodos();
    formFuntion();
}
function addTodos() {
    const todosNode = document.querySelector(".todoList");
    todosNode.innerHTML = "";
    todoList.forEach((todo, index) => {
        const el = document.createElement("button");
        el.className = "todo";
        todosNode.appendChild(el);
        el.addEventListener("click", clickTodoHandler);
        el.insertAdjacentHTML("beforeend", `<h3>${todo.task}</h3>`);
        el.insertAdjacentHTML("beforeend", `<p>${todo.description}</p>`);
        const removeButton = document.createElement("button");
        removeButton.textContent = "x";
        removeButton.addEventListener("click", () => removeTodo(index));
        el.appendChild(removeButton);
    });
}
function clickTodoHandler(event) {
    var _a, _b, _c;
    (_a = document.querySelector(".todo.active")) === null || _a === void 0 ? void 0 : _a.classList.toggle("active");
    event.currentTarget.classList.toggle("active");
    (_b = document.querySelector(".todo p.show")) === null || _b === void 0 ? void 0 : _b.classList.remove("show");
    (_c = document.querySelector(".todo button.show")) === null || _c === void 0 ? void 0 : _c.classList.remove("show");
    event.currentTarget.children[1].classList.add("show");
    event.currentTarget.children[2].classList.add("show");
}
function formFuntion() {
    const form = document.getElementById("todo-form");
    const task = form.elements[0];
    const description = form.elements[1];
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const newTodo = {
            task: task.value,
            description: description.value,
        };
        if (newTodo.task === "")
            return;
        todoList.push(newTodo);
        addTodos();
    });
}
function removeTodo(index) {
    todoList.splice(index, 1);
    addTodos();
}
