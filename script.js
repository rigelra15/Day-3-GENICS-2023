var HeadingElement = document.getElementById("heading");
HeadingElement.textContent = "Hello, DOM!";

var object = {
    name: "John",
    age: 30,
    hobbies: ["reading", "music", "movies"],
    addAge: function() {
        this.age++;
    }
}

object.name = "Jane";

var buttonElement = document.getElementById("changeButton");
buttonElement.addEventListener("click", function() {
    HeadingElement.textContent = "Heading Changed!";
});