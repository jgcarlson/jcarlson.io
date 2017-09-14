$(document).ready(function() {

});





$(document).foundation();

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

// Vanilla Typing
var sentence = "Hello. My name is Jonathan.";
var element = document.getElementById('hello');
var counter = 0;

function type() {
  element.innerHTML = element.innerHTML + sentence[counter];
  counter++;
  if (counter == sentence.length) {
    clearInterval(interval);
  }
}

var interval = setInterval(type, 100);
