﻿/*! xd-starter-kit 2015-03-06 */ ! function (a) {
  function b() {
    a(document).foundation({
      equalizer: {
        equalize_on_stack: !1
      }
    })
  }

  function c() {
    var b = window.location.pathname.toLowerCase();
    a(".top-bar a").each(function () {
      var c = a(this),
          d = c.attr("href").toLowerCase();
      d == b && c.closest("li").addClass("active")
    })
  }

  function d() {
    var b = a(".carousel").not(e);
    b.slick({
      adaptiveHeight: !0,
      arrows: !0,
      autoplay: !0,
      autoplaySpeed: 5e3,
      dots: !0,
      fade: !0
    }), b.find(".slide.hide").removeClass("hide")
  }
  var e = '[data-start="manual"]';
  a(function () {
    b(), d(), c()
  })
}(window.jQuery);