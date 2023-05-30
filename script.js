'use strict';
// selecting the elements

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const nav = document.querySelector('.nav');

const allSection = document.querySelectorAll('.section');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('header');
const sectionOperationTabs = document.querySelectorAll('.operations__tab');
const sectionOperations = document.querySelector('.operations__tab-container');
const sectionOperationContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

// implementation of pagination
// document.querySelectorAll('.nav__link').forEach((el) => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });


const handleHover = function (e) {
  if (!e.target.classList.contains('nav__link')) return;
  const link = e.target;
  const fullNav = e.currentTarget.querySelectorAll('.nav__link');
  const logo = e.currentTarget.querySelector('img');

  fullNav.forEach(el => el.style.opacity = this);
  logo.style.opacity = this;
  link.style.opacity = 1;
};

// navlinks mouseover 
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

sectionOperations.addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.closest('.operations__tab')) {
    const refNo = +e.target.getAttribute('data-tab') || +e.target.textContent;
    console.log(refNo);
    sectionOperationTabs.forEach((tab, i) => {
      tab.classList.remove('operations__tab--active');
      sectionOperationContent[i].classList.remove('operations__content--active');
    });

    sectionOperationContent[refNo - 1].classList.add('operations__content--active');
    e.target.closest('.operations__tab').classList.add('operations__tab--active');
  }
});

//reveling all section
const sectionCallback = function (enteries) {
  const [entry] = enteries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(sectionCallback, { threshold: 0.2 });

allSection.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// sticky navigation
const navHeight = nav.getBoundingClientRect().height;
const headerOption = {
  root: null,
  rootMargin: `-${navHeight}px`,
  threshold: 0,
};
const headerCallback = (enteries) => {
  const [entry] = enteries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  }
  else nav.classList.remove('sticky');
};

const observer = new IntersectionObserver(headerCallback, headerOption);
observer.observe(header);

// lazy loading images
const allImages = document.querySelectorAll('.features__img');

// lazy loading images
const allImages = document.querySelectorAll('img[data-src]');
const lazyImg = function (enteries) {
  const [entry] = enteries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(lazyImg, { threshold: 0, rootMargin: '-200px' });
allImages.forEach(img => imageObserver.observe(img));

// const initialCord = section1.getBoundingClientRect();
// console.log(initialCord);
// window.addEventListener('scroll', function (e) {
//   if (window.scrollY > initialCord.top)
//     nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
//   // real implementation
// });

// const obsWork = function (enteries, observer) {
//   enteries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
//   root: null,
//   threshold: [0],
// };

// const observer = new IntersectionObserver(obsWork, obsOptions);
// observer.observe(header);

// btnScrollTo.addEventListener('click', function (e) {
//   const s1Cords = section1.getBoundingClientRect();
//   console.log(s1Cords);
//   console.log(e.target.getBoundingClientRect());
//   console.log(window.pageXOffset, window.pageYOffset);

//   // real implementation
//   // window.scrollTo(
//   //   s1Cords.left + window.pageXOffset,
//   //   s1Cords.top + window.pageYOffset
//   // );

//   window.scrollTo({
//     left: s1Cords.left + window.pageXOffset,
//     top: s1Cords.top + window.pageYOffset,
//     behavior: 'smooth',
//   });

//   // --------->OR<-----------
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// implimentation of pagination


// Lecture
///////////////////////////////////////////
///////////////////////////////////////////

// 1) selecting the elements
// const allSecton = document.querySelectorAll('.section');
// const allButtons = document.getElementsByTagName('button');
// const allBtn = document.getElementsByClassName('btn');
// const header = document.querySelector('header');

// console.log(document.documentElement);
// console.log(allSecton);
// console.log(allButtons);
// console.log(allBtn);

// 2) creating and deleting elements


// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'we use cookie for better functionality <button class="btn btn-close-cookie"> got it!</button>';

// header.prepend(message);
// header.append(message);
// header.before(message);
// header.after(message)
// header.prepend(message.cloneNode(true));

// 3) deleting the elements
// document.querySelector('.btn-close-cookie').addEventListener('click', function () {
//   message.remove();
// });


// styles 
// we can set new css property to our page and we can also get the css property of the element
// message.style.backgroundColor = '#37383d';
// message.style.width = '103.7%';

// console.log(getComputedStyle(message).color);
// document.documentElement.style.setProperty('--color-primary', 'orangered');
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);


// const heading = document.querySelector('h1');
// const alertForH1 = function (e) {
//   heading.removeEventListener('mouseover', alertForH1);
//   alert('this is an alert from the javascript file');
// };
// heading.addEventListener('mouseover', alertForH1);

// const random = (min, max) => Math.floor(Math.random() * max) - min;

// const generateColor = function (e) {
//   return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;

// };

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = generateColor();
//   console.log('link', e.currentTarget);

// stopping event propogation
// e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = generateColor();
//   console.log('container', e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = generateColor();
//   console.log('nav', e.currentTarget);
//   e.stopPropagation();
// }, true)

// const h1 = document.querySelector('h1');
// console.log(h1.childNodes);
// console.log(h1.firstElementChild);
// console.log(h1.firstChild);
