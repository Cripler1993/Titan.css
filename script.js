let jsTransform = document.querySelectorAll(".js__transform");
let jsCircle = document.querySelectorAll(".js__circle");
let jsImage = document.querySelector(".js__image");
let leftRow = document.querySelector(".row__left");

let leftClick = document.querySelector(".js__click-left");
let rightClick = document.querySelector(".js__click-right");
let closeBtn = document.querySelector(".js__close-img");

let burgerOpen = document.querySelector(".burger");
let burgerClose = document.querySelector(".burger__close");
let burger = document.querySelector(".burger__menu");
let navigation = document.querySelector(".header__menu-right");

let index = 0;
let imgs = [
  "./img/adaptive/Rectangle28.png",
  "./img/adaptive/Rectangle29.png",
  "./img/adaptive/Rectangle30.png",
];

rightClick.addEventListener("click", function () {
  jsClear();
  pointClear();
  if (index < 2) {
    index++;
  } else {
    index = 0;
  }
  jsTransform[index].classList.add("border");
  jsCircle[index].classList.add("gallery__circle");
  jsImage.src = imgs[index];
  leftRow.classList.add("active");
});

leftClick.addEventListener("click", function () {
  jsClear();
  pointClear();
  if (index > 0) {
    index--;
  } else {
    index = 2;
  }
  jsTransform[index].classList.add("border");
  jsCircle[index].classList.add("gallery__circle");
  jsImage.src = imgs[index];
  leftRow.classList.add("active");
});

function jsClear() {
  jsTransform.forEach(function (elem) {
    elem.classList.remove("border");
  });
}

function pointClear() {
  jsCircle.forEach(function (elem) {
    elem.classList.remove("gallery__circle");
  });
}

closeBtn.addEventListener("click", function () {
  leftRow.classList.remove("active");
});

burgerOpen.addEventListener("click", function () {
  burger.classList.add("active");
  navigation.classList.add("active");
});

burgerClose.addEventListener("click", function () {
  burger.classList.remove("active");
  navigation.classList.remove("active");
});
