import './style.css'

interface Todo {
  title: string,
  isCompleted: boolean,
  readonly id: string,
}

const todos: Todo[] = []

const todosContainer = document.querySelector(".todo-container") as HTMLDivElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById('myForm') as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  if (!todoInput.value.trim()) { // Check if the input is empty
    alert("Todo title cannot be empty");
    return;
  }

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 1000),
  }
  todos.push(todo);
  todoInput.value = "";
  renderTodo();
};

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";
  todo.setAttribute("data-id", id);

  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    const index = todos.findIndex(t => t.id === id);
    todos[index].isCompleted = checkBox.checked;
    paragraph.style.textDecoration = checkBox.checked ? "line-through" : "none";
  };

  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = title;
  paragraph.style.textDecoration = checkBox.checked?"line-through":"none";

  const btn: HTMLButtonElement = document.createElement("button")
  btn.innerText = "X";
  btn.className = "deleteBtn";
  btn.onclick = () => {
    const index = todos.findIndex(t => t.id === id);
    todos.splice(index, 1);
    renderTodo();
  };

  todo.append(checkBox, paragraph, btn);
  todosContainer.append(todo);
}

const renderTodo = () => {
  todosContainer.innerHTML = ""; // Clear existing todos
  todos.forEach(item => {
    generateTodoItem(item.title, item.isCompleted, item.id);
  });
}

renderTodo(); // Initial render if there are any pre-existing todos
