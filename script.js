const THEME_ELEMENT_ID = 'black';
const PROFILE_IMAGE_ID = 'profile-img';
const THEME_KEY = 'tema';
const PHOTO_KEY = 'foto';
document.addEventListener('DOMContentLoaded', function () {
  // função para obter o tema do localStorage com fallback para 'light'
  function getTema() {
    return localStorage.getItem(THEME_KEY) || 'light';
  }

  // função para obter a foto do localStorage com fallback para './assets/avatar.png'
  function getPhoto() {
    return localStorage.getItem(PHOTO_KEY) || './assets/avatar.png';
  }

  // função para aplicar o Tema e Foto contidas no localStorage
  function aplicarTemaEImage() {
    const tema = getTema();
    const foto = getPhoto();
    const themeElement = document.getElementById(THEME_ELEMENT_ID);
    const profileImage = document.getElementById(PROFILE_IMAGE_ID);
    console.log(profileImage);

    themeElement.classList.add(tema);
    profileImage.setAttribute('src', foto);
  }
  // Aplicar o tema imediatamente após a página ser carregada
  aplicarTemaEImage();
  
  // função para alterar entre temas e fotos
  function trocarTema() {
    const themeElement = document.getElementById(THEME_ELEMENT_ID);
    const tema = getTema() === 'light' ? 'black' : 'light';
    const foto =
      tema === 'light' ? './assets/avatar-light.png' : './assets/avatar.png';

    themeElement.classList.remove('light', 'black');
    themeElement.classList.add(tema);

    localStorage.setItem(THEME_KEY, tema);
    localStorage.setItem(PHOTO_KEY, foto);

    const profileImage = document.getElementById(PROFILE_IMAGE_ID);
    profileImage.setAttribute('src', foto);
  }
  // Associar a função aplicarTemaEImagem ao evento 'DOMContentLoaded'
  document.addEventListener('DOMContentLoaded', aplicarTemaEImage);

  // Associar a função trocarTema ao botão ou evento desejado
  const toggleMode = document.getElementById('switch');
  toggleMode.addEventListener('click', trocarTema);
});
