const body = document.body;
const merah = document.getElementById('merah');
const orange = document.getElementById('orange');
const hijau = document.getElementById('hijau');
const biru = document.getElementById('biru');
const resetButton = document.getElementById('reset');

function ubahBackground(warna) {
  if (warna == "red") {
    body.classList.add('red');
    body.classList.remove('orange');
    body.classList.remove('lime');
    body.classList.remove('blue');
  } else if (warna == "orange") {
    body.classList.add('orange');
    body.classList.remove('red');
    body.classList.remove('lime');
    body.classList.remove('blue');
  } else if (warna == 'lime') {
    body.classList.add('lime');
    body.classList.remove('red');
    body.classList.remove('orange');
    body.classList.remove('blue');
  } else if (warna == 'blue') {
    body.classList.add('blue');
    body.classList.remove('red');
    body.classList.remove('orange');
    body.classList.remove('lime');
  }
}

function resetBackground() {
    body.classList.remove('blue');
    body.classList.remove('red');
    body.classList.remove('orange');
    body.classList.remove('lime');
}


merah.addEventListener("click", () => {
  ubahBackground('red');
});
orange.addEventListener("click", () => {
  ubahBackground('orange');
});
hijau.addEventListener("click", () => {
  ubahBackground('lime');
});
biru.addEventListener("click", () => {
  ubahBackground('blue');
});
resetButton.addEventListener("click", resetBackground)