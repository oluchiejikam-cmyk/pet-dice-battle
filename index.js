
function rollGame() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1")
        .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

    document.querySelector(".img2")
        .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Cat Wins the Round! 🐱 ";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").textContent = "Dog Wins the Round! 🐶";
    }
    else {
        document.querySelector("h1").textContent = "It’s a Tie! 🐾";
    }
}

document.getElementById("rollBtn")
    .addEventListener("click", rollGame);