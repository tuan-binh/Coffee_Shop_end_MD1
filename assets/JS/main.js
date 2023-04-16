// lay nut cart ở navbar
let btnCarts = document.querySelector(".carts");
// console.log(btnCarts);
let modal = document.querySelector(".modal");
let closeX = document.querySelector(".close");
// lay ở modal
let cart = document.querySelector(".cart");

btnCarts.onclick = function () {
  modal.classList.add("open");
};

modal.onclick = function () {
  modal.classList.remove("open");
};
closeX.onclick = function () {
  modal.classList.remove("open");
};

cart.onclick = function (e) {
  e.stopPropagation();
};
