const headerForm = document.querySelector(".header-form");
const headerFormInput = document.querySelector(".header-form__input");

headerFormInput.addEventListener("focus", function () {
  headerForm.classList.add("header-form--active");
});

headerFormInput.addEventListener("blur", function () {
  headerForm.classList.remove("header-form--active");
});
