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

function filterElement() {
  const filterItem = document.querySelector(".items");
  const filterCard = document.querySelectorAll(".card");
  
  window.onload = () => {
    filterItem.onclick = (selectedItem) => {
      if (selectedItem.target.classList.contains("item")) {
        filterItem.querySelector(".active").classList.remove("active");
        selectedItem.target.classList.add("active");
        let filterName = selectedItem.target.getAttribute("data-name");
        filterCard.forEach((card) => {
          let filterCard = card.getAttribute("data-name");
          if (filterCard == filterName || filterName == "todos") {
            card.classList.add("show");
          } else {
            card.classList.add("hide");
            card.classList.remove("show");
          }
        });
      }
    };
  };  
}

filterElement()

function initTop() {
  const btnTopo = document.querySelector("#back-to-top");
  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

initTop()

function menuHamburgue() {
  const menuHamburgue = document.querySelector('.ph-list')
  const ul = document.querySelector('.menu ul')
  
  function ativarMenu() {
    ul.classList.toggle('ativo')
    
    if(ul.classList.contains('ativo')) {
      menuHamburgue.classList.remove('ph-list')
      menuHamburgue.classList.add('ph-x')
    } else {
      menuHamburgue.classList.remove('ph-x')
      menuHamburgue.classList.add('ph-list')
    }
  }
  
  menuHamburgue.addEventListener('click', ativarMenu)
}

menuHamburgue()