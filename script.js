

const black = document.querySelector('.black')
document.addEventListener('DOMContentLoaded', function () {
  let tema = localStorage.getItem('tema')
  black.classList.add(tema)
});
function toggleMode() {
  console.log(black.classList.value)
  
  if(black.classList.value == 'light') {
    black.classList.remove('light')
    black.classList.add('black')
    localStorage.setItem('tema', 'black')
  } else {
    black.classList.remove('black')
    black.classList.add('light')
    localStorage.setItem('tema', 'light')
  }
  
  console.log(black.classList.value)
  // const body = document.body;
  // // body.classList.toggle('light');

  // if(body.classList.contains('light')) {
  //   body.classList.remove('light');
  // } else {
  //   localStorage.setItem('theme', 'light');
  //   const cor2 = localStorage.getItem('theme')
  //   console.log(typeof cor2)
  //   body.classList.add(cor2);
  //   console.log(body.classList)
  // }

  // if(body.classList.contains('light')) {
  //   body.classList.remove('light');
  // } else {
  //   body.classList.add('light');
  // }

  // localStorage.clear();
  // const img = document.querySelector('#profile img');
  // if (body.classList.contains('light')) {
  //   img.setAttribute('src', './assets/avatar-light.png');
  //   img.setAttribute(
  //     'alt',
  //     'foto de jadson sorrindo, usando óculos escuros, com o fundo branco',
  //   );
  // } else {
  //   img.setAttribute('src', './assets/avatar.png');
  //   img.setAttribute(
  //     'alt',
  //     'foto de jadson sorrindo, usando roupa social com fundo preto',
  //   );
  // }
  // console.log(img.alt)
}
