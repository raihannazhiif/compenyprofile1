const toggleBtn = document.getElementById("toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".menu");

toggleBtn.onclick = function () {
  console.log(dropDownMenu);
  console.log(toggleBtnIcon);
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};