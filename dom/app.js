const CLASS_DELETE_ICON = "fa-solid fa-trash-can";
const DELETEBTN_CLASS = "deleteBtn";
const todoList = document.querySelector(".todo__list");
const addBtn = document.querySelector(".addBtn");
const LIST_CLASS = "todo__list__item";
let todos = [];

const handleDelBtnClick = (e) => {
  const target = e.target;
  const btn = target.parentElement;
  const li = btn.parentElement;
  todoList.removeChild(li);
};

const paintValue = (obj) => {
  const fakeDocument = document.createDocumentFragment();
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const i = document.createElement("i");
  li.classList.add(LIST_CLASS);
  li.classList.add(obj.id);
  span.innerText = `${obj.text}`;
  delBtn.classList.add(DELETEBTN_CLASS);
  i.className = `${CLASS_DELETE_ICON}`;
  delBtn.appendChild(i);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.addEventListener("click", handleDelBtnClick);
  fakeDocument.appendChild(li);
  todoList.append(fakeDocument);
};

const handleAddBtnClick = (e) => {
  if (e.keyCode === 13 || e.type === "click") {
    const input = document.querySelector("#todo__input");
    if (input.value === "" || input.value === " ") {
      return;
    }
    const text = input.value;
    const todoObj = {
      text,
      id: todos.length + 1,
    };
    todos.push(todoObj);
    paintValue(todoObj);
    input.value = "";
  }
};

function init() {
  addBtn.addEventListener("click", handleAddBtnClick);
  document.addEventListener("keydown", handleAddBtnClick);
}

init();
