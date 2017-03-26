  var navMain = document.querySelector(".main-nav");
  var navBurger = document.querySelector(".page-header__burger");
  var navCross = document.querySelector(".page-header__cross");

  navMain.classList.remove("main-nav--nojs");

  navBurger.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navBurger.classList.add("page-header__burger--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });

    navCross.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navBurger.classList.remove("page-header__burger--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });
