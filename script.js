const black = document.querySelector('#black');
const img = document.querySelector('#profile img');
// confirm.log(img);
// localStorage.clear()
document.addEventListener('DOMContentLoaded', function () {
  const tema = localStorage.getItem('tema');
  const foto = localStorage.getItem('foto')
  console.log(foto)
  black.classList.add(tema);
  img.setAttribute('src', foto);
});

function toggleMode() {
  trocarTema()
}

function trocarTema() {
  if (black.classList.value == 'light') {
    black.classList.remove('light');
    black.classList.add('black');
    localStorage.setItem('tema', 'black');
    localStorage.setItem('foto', './assets/avatar.png');
    console.log('trocou para black');
    img.setAttribute('src', './assets/avatar.png');
  } else {
    black.classList.remove('black');
    black.classList.add('light');
    localStorage.setItem('tema', 'light');
    localStorage.setItem('foto', './assets/avatar-light.png');
    console.log('trocou para light');
    img.setAttribute('src', './assets/avatar-light.png');
  }
}
