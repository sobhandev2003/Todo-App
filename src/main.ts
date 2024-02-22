import './style.css'
interface Todo {
  readonly id: string,
  tittle: string,
  isCompleted: boolean
}

const todoContener = document.querySelector(".todo-contener")
const todoFrom = document.getElementById("todo-form") as HTMLFormElement;
const todoTittleInput = document.getElementsByName("tittle")[0] as HTMLInputElement;
let todos: Todo[] = [];
todoFrom.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    id: String((Math.random() * 1000)),
    tittle: todoTittleInput.value,
    isCompleted: false
  }
  todos.push(todo);
  todoTittleInput.value = "";
  renderTodoContener(todos)
}
const deleteTodo = (id: string) => {
  todos = todos.filter(todo => todo.id !== id);
  renderTodoContener(todos);

}



const generetTodoDiv = (todo: Todo) => {
  const newtodoDiv = document.createElement("div");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.checked = todo.isCompleted;
  checkBox.onchange = () => {
    // console.log(checkBox.checked);

    todo.isCompleted = checkBox.checked;
    todoTittaleParagraph.className = todo.isCompleted ? "completed" : "tittle"
  }

  const todoTittaleParagraph = document.createElement("p");
  todoTittaleParagraph.className = todo.isCompleted ? "completed" : "tittle"
  todoTittaleParagraph.innerText = todo.tittle;


  const deletBtn = document.createElement("button");
  deletBtn.className = "delete-btn";
  deletBtn.innerText = "X"
  deletBtn.onclick = () => {
    deleteTodo(todo.id);
  }


  newtodoDiv.appendChild(checkBox);
  newtodoDiv.appendChild(todoTittaleParagraph);
  newtodoDiv.appendChild(deletBtn)
  todoContener?.appendChild(newtodoDiv)
}


const renderTodoContener = (todos: Todo[]) => {
  if (todoContener) {
    todoContener.innerHTML = ""
  }

  let i = 0;
  for (const todo of todos) {
    generetTodoDiv(todo);
  }
}


