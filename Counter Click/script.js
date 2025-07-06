const counterUI = document.getElementById("counterUI");
const plusButton = document.getElementById("plus");
const resetButton = document.getElementById("reset");
const minesButton = document.getElementById("mines");
const darkMode = document.getElementById("mode");
const body = document.body;
let counter = 0;

darkMode.textContent = "DARK MODE";

counterUI.textContent = counter;

function tambah() {
    counter++;
    counterUI.textContent = counter;
}

function kurang() {
    counter--;
    counterUI.textContent = counter;
}

function reset() {
    counter = 0;
    counterUI.textContent = counter;
}

let mode = 0;

function darkModeSelect() {
    mode++;
    body.classList.toggle("dark");

    if (mode % 2 == 0) {
        darkMode.textContent = "DARK MODE";
    } else {
        darkMode.textContent = "LIGHT MODE";
    }
}

plusButton.addEventListener("click", tambah);
resetButton.addEventListener("click", reset);
minesButton.addEventListener("click", kurang);
darkMode.addEventListener("click", darkModeSelect);
