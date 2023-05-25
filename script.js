function mudarTema() {
  const icon = document.querySelector('.theme i');

  function mudarIcon() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      icon.classList.remove('ph-moon')
      icon.classList.add('ph-sun')
    } else {
      icon.classList.remove('ph-sun')
      icon.classList.add('ph-moon')
    }
  }

  icon.addEventListener('click', mudarIcon);
}

mudarTema()

