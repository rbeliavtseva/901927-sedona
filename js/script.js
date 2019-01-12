var button = document.querySelector(".toggle-modal-button");
var modal = document.querySelector(".search-modal");
var form = modal.querySelector("form");
var arrivalDate = form.querySelector("[name=arrival-date]");
var departureDate = form.querySelector("[name=departure-date]");
var adults = form.querySelector("[name=adults]");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
        modal.classList.toggle("modal-show");  
    } else {
        modal.classList.toggle("modal-show");
    }
    modal.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value || adults.value < 1) {
        evt.preventDefault();
        modal.classList.remove("modal-error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
    } 
});