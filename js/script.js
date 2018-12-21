var button = document.querySelector(".toggle-modal-button");
var modal = document.querySelector(".search-modal");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.toggle("modal-show");
});          