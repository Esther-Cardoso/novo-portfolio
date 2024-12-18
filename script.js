const projects = [
  {
    title: 'Movies db',
    description:
      'Esse é um projeto de filmes, utilizei a api do The Movie Database, e é possivel favoritar os filmes.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    link: 'https://moviesdb-react2024.netlify.app/',
    image: 'img/movies-db.png',
  },
  {
    title: 'Biscoito da sorte',
    description:
      'Esse é um projeto de um biscoito da sorte, ao clicar no botão você recebe uma notícia.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    link: 'https://biscoitodasorte-react.netlify.app/',
    image: 'img/biscoito-da-sorte.png',
  },
  {
    title: 'Bikcraft',
    description:
      'Esse é um projeto de um site de uma empresa fictícia de bicicletas elétricas. Contém múltiplas páginas.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://esther-cardoso.github.io/bikcraft/',
    image: 'img/./bikcraft.jpg',
  },
  {
    title: 'Dev Finaces',
    description:
      'Aplicação onde é possível cadastrar e excluir transações e ver o saldo de entrada e saída.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://esther-cardoso.github.io/dev.finances/',
    image: 'img/devfinance.jpg',
  },
  {
    title: 'Player de Música',
    description:
      'Esse é um projeto de um player de músicas. Escute as melhores do rock n roll.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://6595c927fe4734053b1d0462--peppy-brioche-3fada4.netlify.app/',
    image: 'img/player-de-musica.jpeg',
  },
  {
    title: 'Video slider',
    description:
      'Essa é uma página de um slide de videos, sobre coleções de diversos filmes.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://esther-cardoso.github.io/background-video-slider/',
    image: 'img/video-slider.png',
  },
  {
    title: 'Quiz',
    description:
      'Essa é uma página de um quiz, com perguntas feitas sobre animais, divirta-se respondendo.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://esther-cardoso.github.io/quiz-javascript/',
    image: 'img/quiz.jpeg',
  },
  {
    title: 'Copa do Mundo 2022',
    description:
      'Essa é uma página de calendário, onde é possível ter informações sobre as datas e horas dos jogos.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://esther-cardoso.github.io/nlw-copa-do-mundo-2022/',
    image: 'img/./copa-do-mundo-2022.jpg',
  },
  {
    title: 'Landing page serie',
    description:
      'Esse é um projeto de uma página de séries, onde é possível navegar pelas temporadas.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://esther-cardoso.github.io/Series/',
    image: 'img/series.jpg',
  },
  {
    title: 'Landing page vendas',
    description:
      'Página de vendas, aqui aprendi a fazer glass effect, animação e está totalmente responsivo.',
    technologies: ['HTML', 'CSS'],
    link: 'https://esther-cardoso.github.io/Interface/',
    image: 'img/interface.jpg',
  },
  {
    title: 'Social Section',
    description:
      'Esse é um desafio do site front end mentor, aqui eu aprendi bastante sobre css grid.',
    technologies: ['HTML', 'CSS'],
    link: 'https://esther-cardoso.github.io/Social-Section/',
    image: 'img/social.jpg',
  },
  {
    title: 'Formulário',
    description:
      "Formulário sobre a série grey's anatomy. Aqui coloquei em prática tudo o que eu sei sobre formulários.",
    technologies: ['HTML', 'CSS'],
    link: 'https://esther-cardoso.github.io/Formulario-GreysAnatomy/',
    image: 'img/formulario.jpg',
  },
  {
    title: 'Calculadora IMC',
    description:
      'Esse é um projeto de uma calculadora imc, para saber se você está com o seu peso ideal.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://esther-cardoso.github.io/Calculadora-IMC/',
    image: 'img/calculadora-imc.jpg',
  },
  {
    title: 'Revelador do futuro',
    description:
      'Esse é um projeto feito na maratona explorer da rocketseat, faça uma pergunta!',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://esther-cardoso.github.io/maratona-explorer/',
    image: 'img/futuro.jpg',
  },
  {
    title: 'Linktree',
    description:
      'Página para colocar todos os links de redes sociais. Com animação no fundo.',
    technologies: ['HTML', 'CSS'],
    link: 'https://esther-cardoso.github.io/social_links/',
    image: 'img/linktree.jpeg',
  },
  {
    title: 'LeScone',
    description:
      'Esse é um projeto fictício de uma cafeteria, contém cárdapio, formulário e outros.',
    technologies: ['HTML', 'Sass'],
    link: 'https://esther-cardoso.github.io/LeScone-sass/',
    image: 'img/lescone.jpeg',
  },
];

function adicionarProjetos() {
  const gallery = document.querySelector('.gallery');

  projects.forEach((project) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-name', project.technologies.join('').toLowerCase());

    card.innerHTML = `
      <div class="imgBx">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="content">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p class="tec">Tecnologias: ${project.technologies.join(', ')}</p>
        <a href="${project.link}" target="_blank">Ver Site ➜</a>
      </div>
    `;

    gallery.appendChild(card);
  });
}
adicionarProjetos();

function mudarTema() {
  const icon = document.querySelector('.theme i');

  if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark-theme');
    icon.classList.remove('ph-moon');
    icon.classList.add('ph-sun');
  }

  function mudarIcon() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
      icon.classList.remove('ph-moon');
      icon.classList.add('ph-sun');

      localStorage.setItem('tema', 'dark');
    } else {
      icon.classList.remove('ph-sun');
      icon.classList.add('ph-moon');

      localStorage.setItem('tema', 'light');
    }
  }

  icon.addEventListener('click', mudarIcon);
}
mudarTema();

function filterElement() {
  const filterItem = document.querySelector('.items');
  const filterCard = document.querySelectorAll('.card');

  window.onload = () => {
    filterItem.onclick = (selectedItem) => {
      if (selectedItem.target.classList.contains('item')) {
        filterItem.querySelector('.active').classList.remove('active');
        selectedItem.target.classList.add('active');
        let filterName = selectedItem.target.getAttribute('data-name');
        filterCard.forEach((card) => {
          let filterCard = card.getAttribute('data-name');
          if (filterCard == filterName || filterName == 'todos') {
            card.classList.add('show');
          } else {
            card.classList.add('hide');
            card.classList.remove('show');
          }
        });
      }
    };
  };
}
filterElement();

function initTop() {
  const btnTopo = document.querySelector('#back-to-top');
  btnTopo.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
initTop();

function menuHamburgue() {
  const menuHamburgue = document.querySelector('.ph-list');
  const ul = document.querySelector('.menu ul');

  function ativarMenu() {
    ul.classList.toggle('ativo');

    if (ul.classList.contains('ativo')) {
      menuHamburgue.classList.remove('ph-list');
      menuHamburgue.classList.add('ph-x');
    } else {
      menuHamburgue.classList.remove('ph-x');
      menuHamburgue.classList.add('ph-list');
    }
  }

  menuHamburgue.addEventListener('click', ativarMenu);
}
menuHamburgue();
