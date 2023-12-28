let jsTransform = document.querySelectorAll(".js__transform");
let jsCircle = document.querySelectorAll(".js__circle");
let jsImage = document.querySelector(".js__image");
let leftClick = document.querySelector(".js__click-left");
let rightClick = document.querySelector(".js__click-right");

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
