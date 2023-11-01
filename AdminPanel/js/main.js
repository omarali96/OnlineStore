// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeTab() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("click", activeTab));

// Menu Toggle
const menuToggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
