const people = [
  {
    name: 'Chris Josh',
    titre: 'It is a long established fact that a reader will be distracted by the',
    phot: './images/j1.jpg',
    desciption: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from BC',
  },
  {
    name: 'Anna Becker',
    titre: 'It is a long established fact that a reader will be distracted by the',
    phot: './images/j3.jpeg',
    desciption: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from BC',
  },
  {
    name: 'Charlie Toth',
    titre: 'It is a long established fact that a reader will be distracted by the',
    phot: './images/j2.png',
    desciption: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from BC',
  },
  {
    name: 'Hardy Mark',
    titre: 'It is a long established fact that a reader will be distracted by the',
    phot: './images/j4.jpeg',
    desciption: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical BC',
  },
  {
    name: 'Josh Mayer',
    titre: 'It is a long established fact that a reader will be distracted by the',
    phot: './images/j5.jpeg',
    desciption: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical BC',
  },
  {
    name: 'Andrew Matthiew',
    titre: 'It is a long established fact that a reader will be distracted by the',
    phot: './images/j6.jpg',
    desciption: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical BC',
  },
];
const menu = document.querySelector('#sandwich');
const crossElement = document.querySelector('#close');
const jury = document.querySelector('.jury');
const juryElements = () => {
  let ch = '';
  // eslint-disable-next-line semi-spacing
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < people.length; i++) {
    if ((i % 2) === 0) {
      ch += `
    <div class="row justify-content-center">
        <div class="col-md-4 col-sm-12 mt-5 me-md-3 me-sm-0">
            <div class="row row-cols-md-2 pe-0 grid-2">
                <div class="col p-0 ps-3 pt-2">
                    <img class="d-block photo-j" src="${people[i].phot}" alt="image_jury-1">
                </div>
                <div class="col">
                    <h4 class="text-black-c">${people[i].name}</h4>
                    <p class="text-small pt-2 pe-1">
                        <small class="text-orange-c d-block fst-italic">
                        ${people[i].titre}
                        </small>
                        <span class="small-bar bg-grey-c d-block mt-1 mb-1"></span>
                        <small class="text-black-c d-block">
                        ${people[i].desciption}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    `;
    } else {
      ch += `
        <div class="col-md-4 col-sm-12 mt-5 me-md-3 me-sm-0">
            <div class="row row-cols-md-2 pe-0 grid-2">
                <div class="col p-0 ps-3 pt-2">
                    <img class="d-block photo-j" src="${people[i].phot}" alt="image_jury-1">
                </div>
                <div class="col">
                    <h4 class="text-black-c">${people[i].name}</h4>
                    <p class="text-small pt-2 pe-1">
                        <small class="text-orange-c d-block fst-italic">
                        ${people[i].titre}
                        </small>
                        <span class="small-bar bg-grey-c d-block mt-1 mb-1"></span>
                        <small class="text-black-c d-block">
                        ${people[i].desciption}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>`;
    }
  }
  return ch;
};
const addJury = () => {
  const chaine = juryElements();
  if (jury) {
    jury.innerHTML = chaine;
  }
};
const displayMenu = () => {
  menu.addEventListener('click', () => {
    document.querySelector('.fenetre').classList.remove('invisible');
  });
};
const hideMenu = () => {
  crossElement.addEventListener('click', () => {
    document.querySelector('.fenetre').classList.add('invisible');
  });
};

const scrollOver = () => {
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 640 && window.pageYOffset > 5) {
      document.querySelector('header').classList.add('sticky-top');
    }
    if (window.innerWidth > 640 && window.pageYOffset === 0) {
      document.querySelector('header').classList.remove('sticky-top');
    }
  });
};
addJury();
displayMenu();
hideMenu();
scrollOver();