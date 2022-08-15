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
    }, 900);

    let height = $(".p-about").offset().top - 80;
    $("html,.p-about").animate(
      {
        scrollTop: height,
      },
      800,
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

  /* --------------------------- SCROLL ACTIVE LINK --------------------------- */
  $(window).scroll(function () {
    let scrollY = $(window).scrollTop();
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
    }
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
