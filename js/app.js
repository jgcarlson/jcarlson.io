$(document).foundation();

var typed = new Typed("#hello", {
  strings: ["Hello. ^800 My name is Jonathan."],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 500,
  startDelay: 1000,
  loop: false,
  loopCount: false,
});

$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

fitty('#intro-content');
fitty('.fit');
