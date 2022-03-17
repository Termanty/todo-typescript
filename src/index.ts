// TODO typescript demo application

type todoType = {
  task: string;
  description: string;
};

type todoListType = todoType[];

const todoList: todoListType = [
  { task: "Clean my room", description: "Put Rumppa-robot to work" },
  { task: "Find Icons", description: "Portfolio needs icons" },
  { task: "Do js assigment", description: "Write todo app" },
];

document.addEventListener("DOMContentLoaded", init);

function init(): void {
  addTodos();
  formFuntion();
}

function addTodos(): void {
  const todosNode = document.querySelector(".todoList")! as HTMLUListElement;
  todosNode.innerHTML = "" as string;
  todoList.forEach((todo: todoType, index: number): void => {
    const el = document.createElement("button") as HTMLButtonElement;
    el.className = "todo";
    todosNode.appendChild(el);
    el.addEventListener("click", clickTodoHandler);
    el.insertAdjacentHTML("beforeend", `<h3>${todo.task}</h3>`);
    el.insertAdjacentHTML("beforeend", `<p>${todo.description}</p>`);
    const removeButton = document.createElement("button") as HTMLButtonElement;
    removeButton.textContent = "x" as string;
    removeButton.addEventListener("click", (): void => removeTodo(index));
    el.appendChild(removeButton);
  });
}

function clickTodoHandler(event: any): void {
  document.querySelector(".todo.active")?.classList.toggle("active");
  event.currentTarget.classList.toggle("active");
  document.querySelector(".todo p.show")?.classList.remove("show");
  document.querySelector(".todo button.show")?.classList.remove("show");
  event.currentTarget.children[1].classList.add("show");
  event.currentTarget.children[2].classList.add("show");
}

function formFuntion(): void {
  const form = document.getElementById("todo-form")! as HTMLFormElement;
  const task = form.elements[0]! as HTMLInputElement;
  const description = form.elements[1]! as HTMLTextAreaElement;

  form.addEventListener("submit", (event): void => {
    event.preventDefault();
    const newTodo: todoType = {
      task: task.value,
      description: description.value,
    };
    if (newTodo.task === "") return;
    todoList.push(newTodo);
    addTodos();
  });
}

function removeTodo(index: number): void {
  todoList.splice(index, 1);
  addTodos();
}
