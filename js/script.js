var open = document.querySelector(".btn-hotel");
var popup = document.querySelector(".modal-hotel");

var arrivalJS = popup.querySelector("[name=arrival]");
var exitJS = popup.querySelector("[name=exit]");

var storage = localStorage.getItem("arrivalJS");

open.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-hotel-show");

  if (storage) {
    arrivalJS.value = storage;
    exitJS.focus();
  } else {
  arrivalJS.focus();
}
});

popup.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!arrivalJS.value || !exitJS.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("arrivalJS", arrivalJS.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-hotel-show")) {
      popup.classList.remove("modal-hotel-show");
      popup.classList.remove("modal-error");
    }
  }
});
