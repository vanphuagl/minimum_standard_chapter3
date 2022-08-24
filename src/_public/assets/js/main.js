/* eslint-disable quotes */
/* eslint-disable indent */
/*eslint linebreak-style: ["error", "windows"]*/

$(document).ready(function () {
  /* ------------------------------- MENU MOBILE ------------------------------ */
  $(".c-header__icon").click(function () {
    this.classList.toggle("active");
    $("body").toggleClass("overflow-hidden");
    $(".c-header__menu").toggleClass("is-activemenu");
  });

  $(".c-header__nav a").on("click", function () {
    $(".c-header__icon").removeClass("active");
    $("body").removeClass("overflow-hidden");
    $(".c-header__menu").removeClass("is-activemenu");
  });

  $(".c-header__btn").on("click", function () {
    $(".c-header__icon").removeClass("active");
    $("body").removeClass("overflow-hidden");
    $(".c-header__menu").removeClass("is-activemenu");
  });

  /* ---------------------------------- HERO ---------------------------------- */
  $(".p-hero__slide").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    focusOnSelect: false,
    Swipe: false,
    draggable: false,
    pauseOnHover: false,
  });

  //CLICK SCROLL DOWN
  $(".p-hero__scroll").click(function () {
    $(".l-main").addClass("scroll");
    setTimeout(function () {
      $(".l-main").addClass("scroll--hide");
    }, 600);
    setTimeout(function () {
      $(".l-main").removeClass("scroll scroll--hide");
    }, 800);

    let height = $(".p-about").offset().top - 80;
    $("html,.p-about").animate(
      {
        scrollTop: height,
      },
      300,
      "swing"
    );
  });

  /* ---------------------------------- WORKS --------------------------------- */
  // click photo
  $(".p-photo__item").click(function () {
    let imgUrl = $(this).find("img").attr("src");
    $(".p-photo__modalimg").attr("src", function () {
      return imgUrl;
    });

    $(".p-photo__modal").fadeIn(500);
    $("body").addClass("overflow-hidden");
  });

  // close
  $("#modalClose,.p-photo__modalclose").click(function () {
    $(".p-photo__modal").fadeOut(500);
    $("body").removeClass("overflow-hidden");
  });

  /* --------------------------------- RECRUIT -------------------------------- */
  $(".p-recruit__link").click(function () {
    $(".p-recruit__link,.p-recruit__panel").removeClass("is-active");
    $(this).addClass("is-active");
    let tabId = $(this).attr("data-id");
    $("#" + tabId).addClass("is-active");
  });

  /* --------------------------------- COMPANY -------------------------------- */
  // click
  $(".p-interview__item").on("click", function () {
    let messageId = $(this).attr("id");
    $(".c-message").attr("data-id", function () {
      if ($(this).attr("data-id") == messageId) {
        $(this).fadeIn(500);
      }
    });
    $("body").addClass("overflow-hidden");
  });

  //close
  $(".c-btn__modalclose,.c-message__close").click(function () {
    $(".c-message").fadeOut(500);
    $("body").removeClass("overflow-hidden");
  });

  let KEYCODE_ESC = 27;
  $(document).keyup(function (e) {
    if ($("body").hasClass("overflow-hidden")) {
      if (e.keyCode == KEYCODE_ESC) {
        $(".c-message").fadeOut(500);
        $("body").removeClass("overflow-hidden");
      }
    }
  });

  // /* --------------------------- SCROLL ACTIVE LINK --------------------------- */
  $(window).scroll(function () {
    let scrollY = $(window).scrollTop();
    // console.log('scrollY', scrollY);
    let arr = [];
    $(".c-section").each(function () {
      arr.push($(this).attr("id"));
    });

    for (let i = 0; i < arr.length; i++) {
      let sectionTop = $("#" + arr[i]).offset().top;
      let sectionHeight = $("#" + arr[i]).innerHeight() + sectionTop;

      if (sectionTop - 81 < scrollY && scrollY < sectionHeight) {
        $(".c-header__link a").attr("href", function () {
          if ($(this).attr("href") == "#" + arr[i]) {
            $(this).addClass("is-active");
          } else {
            $(this).removeClass("is-active");
          }
        });
      }

      if (scrollY == 0) {
        $(".c-header__link a").removeClass("is-active");
      }
    }
  });

  /* --------------------------- ACTICE LINK MOBILE --------------------------- */
  $('a[href^="#"]').click(function () {
    let speed = 200;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let x = window.matchMedia("(max-width: 767px)");
    let position = 0;

    // if media query matches
    if (x.matches) {
      position = target.offset().top - 66;
    } else {
      position = target.offset().top - 79;
    }

    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  /* ------------------------------ SCROLL TO TOP ----------------------------- */
  // show
  $(window).scroll(function () {
    let scrollY = $(window).scrollTop();
    if (scrollY >= 560) {
      $(".c-backtop").addClass("active");
    } else {
      $(".c-backtop").removeClass("active");
    }
  });

  // click
  $(".c-backtop").click(function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
