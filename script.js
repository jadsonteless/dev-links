const black = document.querySelector('.black')
const img = document.querySelector('#profile img');

document.addEventListener('DOMContentLoaded', function () {
  const tema = localStorage.getItem('tema')
  black.classList.add(tema)
  console.log(img)
})

function toggleMode() {
  
  if(black.classList.value == 'light') {
    black.classList.remove('light')
    black.classList.add('black')
    localStorage.setItem('tema', 'black')
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute(
      'alt',
      'foto de jadson sorrindo, usando roupa social com fundo preto',
    );
  } else {
    black.classList.remove('black')
    black.classList.add('light')
    localStorage.setItem('tema', 'light')
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute(
      'alt',
      'foto de jadson sorrindo, usando óculos escuros, com o fundo branco',
    );
  }
  console.log(black.classList.value)
}
