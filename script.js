function toggleMode() {
  const body = document.body;
  body.classList.toggle('light');

  // if(body.classList.contains('light')) {
  //   body.classList.remove('light');
  // } else {
  //   body.classList.add('light');
  // }

  const img = document.querySelector('#profile img');
  if (body.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute(
      'alt',
      'foto de jadson sorrindo, usando óculos escuros, com o fundo branco',
      );
    } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute(
      'alt',
      'foto de jadson sorrindo, usando roupa social com fundo preto',
    );
  }
  // console.log(img.alt)
}
