const head = document.getElementById("heading");
console.log(head);
const paragraph = document.getElementById("paragraph");

const highlightButton = document.querySelector("#highlight");
const toggleClass = document.querySelector("#toggle-class-button");
const addItem = document.querySelector("#add-list-item");
const removeItem = document.querySelector("#remove-list-item");
const doSomething = document.querySelector("#doSomething");

console.log(addItem);

const lists = document.querySelector("#lists");

highlightButton.addEventListener("click", () => {
  head.classList.add("highlighted");
  paragraph.classList.add("highlighted");
});

toggleClass.addEventListener("click", () => {
  head.classList.remove("highlighted");
  paragraph.classList.remove("highlighted");
});

addItem.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = `Item ${lists.childElementCount + 1}`;
  item.classList.add("list-item");
  lists.appendChild(item);
});

removeItem.addEventListener("click", () => {
  const item = lists.lastChild;
  if (item) item.remove();
});

doSomething.addEventListener("click", () => {
  const listItems = document.querySelectorAll(".list-item");

  for (let i = 0; i < listItems.length; i++) {
    let item = listItems[i];
    item.style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
  }
});
