window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------

  const navMain = document.querySelector('.header__nav');
  const navToggle = document.querySelector('.header__nav-toggle');
  const body = document.querySelector('.page__body');
  const form = document.querySelector('.reservation__form');
  const navList = document.querySelector('.header__nav-list');

  navMain.classList.remove('header__nav_nojs');

  const closeMenu = () => {
    navMain.classList.remove('header__nav_closed');
    navMain.classList.add('header__nav_opened');
    body.classList.add('scroll-lock');
  };

  const onListClick = (evt) => {
    if (evt.target.nodeName === 'A') {
      closeMenu();
    }
  };

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('header__nav_closed')) {
      closeMenu();
      navList.addEventListener('click', onListClick);
    } else {
      navMain.classList.add('header__nav_closed');
      navMain.classList.remove('header__nav_opened');
      body.classList.remove('scroll-lock');
    }
  });

  form.addEventListener('submit', () => {
    const inputName = document.getElementById('name');
    const inputTel = document.getElementById('tel');
    const inputEmail = document.getElementById('email');
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('tel', inputTel.value);
    localStorage.setItem('email', inputEmail.value);
  });

  window.ymaps.ready(() => {
    const myMap = new window.ymaps.Map(
        'map',
        {
          // Координаты центра карты.
          center: [59.938635, 30.323118],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 16,
        },
        {
          searchControlProvider: 'yandex#search',
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = window.ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new window.ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка',
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/svg/map-marker.svg',
          // Размеры метки.
          iconImageSize: [18, 22],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
          iconContentLayout: MyIconContentLayout,
        }
      );

    myMap.geoObjects.add(myPlacemark);
  });
});
// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
