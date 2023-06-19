// var addButton = document.getElementById("addButton");

const outerHTML = document.getElementById("htmlID");
const changeMode = document.getElementById("changeMode");

changeMode.addEventListener("click", function() {
    if (outerHTML.classList.contains("dark")) {
        outerHTML.classList.remove("dark");
        changeMode.textContent = "LIGHT MODE";
    } else {
        outerHTML.classList.add("dark");
        changeMode.textContent = "DARK MODE";
    }
});

