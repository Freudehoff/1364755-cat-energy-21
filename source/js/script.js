  var navMain = document.querySelector('.page-header__main-navigation');
  var navToggle = document.querySelector('.page-header__main-navigation-toggle');

  navMain.classList.remove('page-header__main-navigation--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('page-header__main-navigation--closed')) {
      navMain.classList.remove('page-header__main-navigation--closed');
      navMain.classList.add('page-header__main-navigation--opened');
    } else {
      navMain.classList.add('page-header__main-navigation--closed');
      navMain.classList.remove('page-header__main-navigation--opened');
    }
  });
