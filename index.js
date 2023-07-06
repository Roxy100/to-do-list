let inputBox = document.querySelector("#inputBox");
let list = document.querySelector("#list");

let addItem = (inputBox) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${inputBox}<i></i>`;

  listItem.addEventListener("click", function (e) {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function (e) {
    listItem.remove();
  });

  list.appendChild(listItem);
};

inputBox.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addItem(this.value);
    this.value = "";
  }
});
