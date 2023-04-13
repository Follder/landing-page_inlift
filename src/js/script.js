/* import { tns } from "./node_modules/tiny-slider/src/tiny-slider";

const slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true
  }); */

  window.addEventListener('DOMContentLoaded', () => {
    // mobile-menu
    const burger = document.querySelector('.burger'),
        mobileMenu = document.querySelector('.nav__list-mobile');

        burger.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            mobileMenu.classList.toggle('nav__list-mobile_active');
        });

    // cards
    function createCard(img, alt, title, descr, parentSelector) {
        const card = document.createElement('div');
        card.classList.add('business__card');
    
        card.innerHTML = `
            <img src=${img} alt=${alt}>
            <h3 class="business__card-title">${title}</h3>
            <div class="business__card-descr">${descr}</div>
        `;

        document.querySelector(parentSelector).append(card);
    }
    createCard('img/whom/01.jpg', 
    'business-01', 
    'Заклади харчування та доставка', 
    'Ресторани, паби, бари, кафе, кальян-бари. Доставка суші та піцци.', 
    '.business__cards');
    createCard('img/whom/02.jpg', 
    'beauty salon', 
    'Beauty сфера', 
    'Салони краси, SPA, студії манікюру та візажу, барбер шопи, студії масажу, макіяж на дому.', 
    '.business__cards');
    createCard('img/whom/08.jpg', 
    'medicine', 
    'Медицина', 
    'Аптеки, медичні центри, стоматології, лабораторії.', 
    '.business__cards');
    createCard('img/whom/07.jpg', 
    'goods', 
    'Товари', 
    'Магазини, салони, торгові центри, інтернет магазини, дитячі, зоотовари.', 
    '.business__cards');
    createCard('img/whom/03.jpg', 
    'services', 
    'Послуги', 
    'Клінінгові компанії, хімчистки, виклик майстра на дім, ательє, доставка води, візові центри, турагенства.', 
    '.business__cards');
    createCard('img/whom/04.jpg', 
    'fun', 
    'Розваги', 
    'Кінотеатри, розважальні центри, дитячі кімнати, дитячі садочки, квест-кімнати.', 
    '.business__cards');
    createCard('img/whom/05.jpg', 
    'education', 
    'Курси', 
    'Курси іноземних мов, ІТ школи, автошколи.', 
    '.business__cards');
    createCard('img/whom/06.jpg', 
    'gym', 
    'Спорт', 
    'Спортивні клуби, бойові мистецтва, спортивні секції, танцювальні гуртки, командні ігри.', 
    '.business__cards');
  });